import User from '../models/user'
import { Request, Response } from 'express'
import { hashPassword } from '../util/crypto'
import { sign } from 'jsonwebtoken'

/**
 * Handles user auth and JWT issuing
 */
export const loginController = async (req: Request, res: Response) => {
  if (!req.body) {
    res.status(400).json({ message: 'Payload validation error' })
    return
  }

  const { username = '', password } = req.body

  const user = await User.findOne({ username }).lean()
  if (!user) {
    res.status(404).json({ message: 'User Not Found' })
    return
  }

  if (user.password === hashPassword(password)) {
    delete user.password
    const token = sign(
      { userID: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '2h', algorithm: 'HS512' }
    )
    res.status(200).json({ data: { ...user, token } })
    return
  }

  res.status(401).json({ message: 'Invalid Credentials' })
}

/**
 * Handles deduping and signup
 */
export const signupController = async (req: Request, res: Response) => {
  if (!req.body) {
    console.log(req.body)
    res.status(400).json({ message: 'Payload validation error' })
    return
  }
  const { firstName, lastName, username = '', password } = req.body

  const previousUser = await User.findOne({ username })
  if (previousUser) {
    res.status(400).send({ message: 'Username exists' })
    return
  }

  const hash = hashPassword(password)
  try {
    const data = await User.create({
      firstName,
      lastName,
      username,
      password: hash
    })
    res.status(201).json({ data })
  } catch {
    res.status(500).json({ message: 'An error occured' })
  }
}
