import mongoose from 'mongoose'

// Criterias that every users have: name, email & gender
// All are required and cannot be empty
const User = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    }
})

export default mongoose.model('Users', User)