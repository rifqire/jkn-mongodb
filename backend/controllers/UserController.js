import User from '../models/UserModel.js'

// Function to save data
// Create new user instance from model and use request body to send data to db
// If successful, show status 201 (created)
// If error, show error 400 (user's fault)
export const saveUser = async (req, res) => {
    const user = new User(req.body)
    try {
        const savedUser = await user.save()
        res.status(201).json(savedUser)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

// Function to find all users
// If error, show error 500 message (internal server error)
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// Function to find selected user based on ID
// If error, show error 404 message (not found)
export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

// Function to update user data
// If successful, show status 200 (ok)
// If error, show error 400 (user's fault)
export const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.updateOne(
            {_id: req.params.id},
            {$set: req.body}
        )
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

// Function to delete user
// If successful, show status 200 (ok)
// If error, show error 400 (user's fault)
export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.deleteOne(
            {_id: req.params.id}
        )
        res.status(200).json(deletedUser)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}