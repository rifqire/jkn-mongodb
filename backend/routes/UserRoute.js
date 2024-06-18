import express from 'express'
// Import function getUsers from UserController
import { getUsers } from '../controllers/UserController.js'

const router = express.Router()

router.get('/users', getUsers)

export default router