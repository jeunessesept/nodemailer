import express from "express";
import dotenv from "dotenv";
import sendMail from "./controllers/sendmail.mjs";

dotenv.config()


const server = express()
const port = process.env.PORT
server.use(express.json())


server.post('/test', sendMail)




server.listen(port, () => {
    console.log(`you're connected to port ${port} `)
})