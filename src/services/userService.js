
const sendVerificationEmail=require("../utils/email");
const jwt = require("../utils/jwt");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const userRepository = require("../repositories/userRepository");

const register = async (data) => {

    const existing = await userRepository.findByEmail(data.email);

    if (existing) {
        throw new Error("El email ya existe");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const verificationToken = crypto.randomBytes(32).toString("hex");

    const user = await userRepository.createUser({
        nombre: data.nombre,
        email: data.email,
        password: hashedPassword,
        verified: false,
        verificationToken
    })
    await sendVerificationEmail(

    user.email,

    user.verificationToken

);

    return {
        id: user._id,
        nombre: user.nombre,
        email: user.email,
        verified: user.verified
    };
};

const login = async (email, password) => {

    const user = await userRepository.findByEmail(email);

    if (!user) {
        throw new Error("Usuario no encontrado");
    }

    const ok = await bcrypt.compare(password, user.password);

    if (!ok) {
        throw new Error("Contraseña incorrecta");
    }

    // 
    //if (!user.verified) {
    //    throw new Error("Debe verificar el correo antes de iniciar sesión");
    //}

    const token = jwt(user._id);

    return {
        token,
        user: {
            id: user._id,
            nombre: user.nombre,
            email: user.email,
            verified: user.verified
        }
    };
};

const verify=async(token)=>{

    const user=await userRepository.findByVerificationToken(token);

    if(!user){

        throw new Error("Token inválido");

    }

    user.verified=true;

    user.verificationToken=null;

    await user.save();

};

module.exports = {
    register,
    login,
    verify
};