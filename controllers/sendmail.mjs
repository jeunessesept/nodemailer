
import dotenv from "dotenv"
import transporter from "../config/nodemailertransport.mjs"
const transport = transporter
dotenv.config()

const sendMail = (req, res) => {
    const { to, subject, text } = req.body
    const mailOptions = {
        from: process.env.MAIL_USERNAME,
        to: to,
        subject: subject,
        text: text
    };
    transport.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log("Error " + err);
            return res.send(err)
        } else {
            console.log("Email sent successfully");
            return res.send("ok")
        }
    });
}

export default sendMail;