import express from 'express'
// Import CRUD functions from UserController
import {
    saveUser,
    getUserById,
    getAllUsers,
    updateUser,
    deleteUser
} from '../controllers/UserController.js'

const router = express.Router()

// Router to create user data
router.post('/users', saveUser)
// Router to get selected user by ID
router.get('/users/:id', getUserById)
// Router to get all users
router.get('/users', getAllUsers)
// Router to update selected user's data (use method patch)
router.patch('/users/:id', updateUser)
// Router to delete user by ID
router.delete('/users/:id', deleteUser)

export default router