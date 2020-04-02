import express from 'express'
import dotenv from 'dotenv'
import { registerRoutes } from './routes'
import connectToDB from './config/mongo'
import * as bodyParser from 'body-parser'
import CacheHandler from './cache/'
const app = express()

app.use(bodyParser.json())
dotenv.config()
registerRoutes(app)
connectToDB()
try {
  CacheHandler.initialize()
  console.log('Initialize success')
} catch (e) {
  console.log(e)
  process.exit(1)
}

app.listen(process.env.SERVER_PORT, () => {
  console.log(`server started at http://localhost:${process.env.SERVER_PORT}`)
})
