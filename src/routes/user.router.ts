import { Router } from 'express'
import {
  loginController,
  signupController,
  subscriptionController
} from '../api/user.api'

const userRouter = Router()

userRouter.post('/login', loginController)
userRouter.post('/signup', signupController)

userRouter.post('/subscribe', subscriptionController)

export default userRouter
