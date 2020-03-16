import { Request, Response } from 'express'
import Article from '../models/article'
/**
 * Handles user auth and JWT issuing
 */
export const testController = async (req: Request, res: Response) => {
  const data = await Article.find()
  data.forEach(datum => {
    console.log(datum.title)
  })
  res.sendStatus(200)
}
