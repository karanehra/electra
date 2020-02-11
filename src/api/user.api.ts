import User from '../models/user'
import { Request, Response } from 'express'

/**
 * Handles user auth and JWT issuing
 */
export const loginController = async (req: Request, res: Response) => {
  const { username, password } = req.body

  let user = await User.findOne({ username })

  if (!user) {
    res.status(404).send({ message: 'User Not Found' })
  }

  //change this
  if (user.password === password) {
    delete user.password
    res.status(200).send({ data: user })
    return
  }

  res.status(401).send({ message: 'Invalid Credentials' })
}

/**
 * Handles deduping and signup
 */
export const signupController = async (req: Request, res: Response) => {
  const { firstName, lastName, username, password } = req.body
  const hash = password
  try {
    let data = await User.create({ firstName, lastName, username, password })
    res.status(201).send({ data })
  } catch {
    res.status(500).send({ message: 'An error occured' })
  }
}
