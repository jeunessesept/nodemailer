import express from "express"
import dotenv from "dotenv"
import sendMail from "./controllers/sendmail.mjs"
import fileUpload from "express-fileupload"
import { cloudinaryConfig } from "./config/cloudinaryConfig.mjs"




dotenv.config()
cloudinaryConfig()

const server = express()
server.use(express.json())
server.use(
    fileUpload({
      useTempFiles: true,
      limits: { fileSize: 50 * 2024 * 1024 },
    })
  );


server.post('/send-email', sendMail)



const port = process.env.PORT
server.listen(port, () => {
    console.log(`you're connected to port ${port} `)
})