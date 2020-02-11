import { Router } from 'express'
import { loginController, signupController } from '../api/user.api'

const userRouter = Router()

userRouter.post('/login', loginController)
userRouter.post('/signup', signupController)

export default userRouter
