import express from "express"
import dotenv from "dotenv"
import { registerRoutes } from "./routes"
const app = express()

dotenv.config()
registerRoutes(app)

app.listen(process.env.SERVER_PORT, () => {
  console.log(`server started at http://localhost:${process.env.SERVER_PORT}`)
})
