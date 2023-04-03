import dotenv from "dotenv"
import transporter from "../config/nodemailertransport.mjs"
import { v2 as cloudinary } from "cloudinary"

const transport = transporter
dotenv.config()

const sendMail = async (req, res) => {
    const { to, subject, text } = req.body
    const file = await req.files.image
    try {
        const image = await cloudinary.uploader.upload(file.tempFilePath)
        const mailOptions = {
            from: process.env.MAIL_USERNAME,
            to: to,
            subject: subject,
            text: text,  //plain text body
            html: `<h2> ${text} </h2> <img src="${image.secure_url}" alt="user image">`, // html body
        };
        transport.sendMail(mailOptions, (err, data) => {
            if (err) {
                console.log("Error " + err);
                return res.send(err)
            } else {
                console.log("Email sent successfully");
                return res.send("Email sent successfully")
            }
        });
    } catch (error) {
        console.error(error)
    }
}

export default sendMail;