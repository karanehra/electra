import { Request, Response } from 'express'
import Article from '../models/article'
/**
 * Handles user auth and JWT issuing
 */
export const testController = async (req: Request, res: Response) => {
  const data = await Article.find()
  let valid: number = 0
  let invalid: number = 0
  const dataObj: any = {}
  data.forEach(({ created, createdAt }) => {
    const key = new Date(
      parseInt(created || createdAt, 10)
    ).toLocaleDateString()
    created ? valid++ : invalid++
    if (!!created || !!createdAt) {
      if (dataObj[key]) {
        dataObj[key]++
      } else {
        dataObj[key] = 1
      }
    }
  })
  console.log(valid, invalid, dataObj)
  res.sendStatus(200)
}
