const nodemailer = require ('nodemailer');

//Dotenv
require('dotenv').config()

const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth:{
        api_key: process.env.api_key,
        domain: process.env.domain,
    }
};

const transporter = nodemailer.createTransport (mailGun(auth));

const sendMail = (name, email, comment, callback ) =>{
const mailOptions = {
      name,  
      from: email,
      to: 'tchalla575@gmail.com',
      comment
};

transporter.sendMail(mailOptions, function(err,data){
    if (err) {
        callback(err,null);
    }else{
        callback(null,data);
    }
});
}

sendMail ('', '', '', function(err,data){

});

//Exporting the function
module.exports=sendMail;