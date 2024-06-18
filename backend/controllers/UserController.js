import User from '../models/UserModel.js'

// Function to find users based on ID
// If error, show error message
export const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}