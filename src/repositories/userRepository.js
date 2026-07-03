const User = require("../models/User");

const createUser = async (userData) => {
    return await User.create(userData);
};

const findByEmail = async (email) => {
    return await User.findOne({ email });
};

const findByVerificationToken=(token)=>
User.findOne({

    verificationToken:token

});
module.exports = {
    createUser,
    findByEmail,
    findByVerificationToken
};