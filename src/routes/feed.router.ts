import { Router } from 'express'
import { listFeedController } from '../api/feed.api'

const feedRouter = Router()

feedRouter.get('/', listFeedController)

export default feedRouter
