import * as express from 'express'
import userRouter from './user.router'

export const registerRoutes = (app: express.Application) => {
  app.use('/user', userRouter)
}
