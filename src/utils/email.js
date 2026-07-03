const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({

    service: "gmail",

    auth:{

        user:process.env.EMAIL_USER,

        pass:process.env.EMAIL_PASS

    }

});

const sendVerificationEmail=async(email,token)=>{

    const url=`http://localhost:3000/api/users/verify/${token}`;

    await transporter.sendMail({

        from:process.env.EMAIL_USER,

        to:email,

        subject:"Verificar cuenta",

        html:`
            <h2>Bienvenido</h2>

            <p>Hace click para verificar tu cuenta</p>

            <a href="${url}">${url}</a>
        `

    });

};

module.exports=sendVerificationEmail;