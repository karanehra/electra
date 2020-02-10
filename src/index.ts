import express from "express"
import dotenv from "dotenv"
import { registerRoutes } from "./routes"
import connectToDB from "./config/mongo"
const app = express()

dotenv.config()
registerRoutes(app)
connectToDB()

app.listen(process.env.SERVER_PORT, () => {
  console.log(`server started at http://localhost:${process.env.SERVER_PORT}`)
})
