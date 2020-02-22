import * as express from 'express'
import userRouter from './user.router'
import feedRouter from './feed.router'

export const registerRoutes = (app: express.Application) => {
  app.use('/user', userRouter)
  app.use('/feed', feedRouter)
}
