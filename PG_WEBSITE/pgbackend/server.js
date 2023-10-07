import http from "http"
import dotenv from "dotenv"
dotenv.config({ path: "./config.env" })
import createApp from "./index.js"


const DBstring = process.env.MONGODATABASE
const server = http.createServer(await createApp(DBstring))
const PORT = process.env.PORT
const HOSTNAME = process.env.HOSTNAME

server.listen(PORT, HOSTNAME, (err) => {
    console.log("Starting the server ....")
    if (err) {
        server.close(() => {
            console.log("Server Closed Successfully")
        })
    }
    else {
        console.log("Server Started...")
    }
})