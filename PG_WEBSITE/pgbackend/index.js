import express from "express"
import cors from "cors"
import { connectToDB } from "./db/connection.js"
import { newsRouter } from "./routes/news.routes.js"
import { userRouter } from "./routes/user.routes.js"
import cookieParser from "cookie-parser"

async function createApp(DBstring) {
    try {
        console.log("creating the app")
        const app = express()
        await connectToDB(DBstring)
        const corsOptions = {
            origin: process.env.CORS,
            credentials: true
        }

        app.use(cors(corsOptions))
        app.use(cookieParser())
        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))
        app.use("/api/news", newsRouter)
        app.use("/api/user", userRouter)
        return app
    }
    catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

const app = express()

app.get("/", (req, res) => {
    return res.send("hello")
})

export default createApp