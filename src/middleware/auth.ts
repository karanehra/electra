import { Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

export const authenticateRequest = (req: Request, res: Response, next: any) => {
  const token = req.headers.authorization
  if (!token) {
    res.status(401).send({ message: 'Token missing' })
    return
  }
  try {
    verify(token, process.env.JWT_SECRET)
  } catch {
    res.status(401).send({ message: 'Invalid token' })
  }
  next()
}
