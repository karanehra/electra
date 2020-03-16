import { Router } from 'express'
import { testController } from '../api/test.api'

const testRouter = Router()

testRouter.get('/', testController)

export default testRouter
