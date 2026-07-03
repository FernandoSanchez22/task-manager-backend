const userService = require("../services/userService");

const register = async (req, res) => {
    try {
        const user = await userService.register(req.body);

        res.status(201).json(user);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

const login = async (req, res) => {
    try {

        const result = await userService.login(
            req.body.email,
            req.body.password
        );

        res.status(200).json(result);

    } catch (error) {

        res.status(400).json({
            message: error.message
        });

    }
};
const verify=async(req,res)=>{

    try{

        await userService.verify(

            req.params.token

        );

        res.json({

            message:"Cuenta verificada"

        });

    }catch(error){

        res.status(400).json({

            message:error.message

        });

    }

};

module.exports = {
    register,
    login,
    verify

};