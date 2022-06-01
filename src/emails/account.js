const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "ymankivska@griddynamics.com",
        subject: "Thank you for joining!",
        text: `Hello ${name}! Let me know how are you.`
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "ymankivska@griddynamics.com",
        subject: "Do not go",
        text: `Please ${name}! Do not go!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail 
}