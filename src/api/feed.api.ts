import { Request, Response } from 'express'
import Feed from '../models/feed'

/**
 * Lists all feeds in collection
 */
export const listFeedController = async (req: Request, res: Response) => {
  const data = await Feed.find({})
    .limit(10)
    .lean()
  res.status(200).send({ data })
}
