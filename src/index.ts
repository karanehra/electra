import express from 'express'
import dotenv from 'dotenv'
import { registerRoutes } from './routes'
import connectToDB from './config/mongo'
import * as bodyParser from 'body-parser'
const app = express()

app.use(bodyParser.json())
dotenv.config()
registerRoutes(app)
connectToDB()

app.listen(process.env.SERVER_PORT, () => {
  console.log(`server started at http://localhost:${process.env.SERVER_PORT}`)
})
