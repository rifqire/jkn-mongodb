import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
// Import user route
import UserRoute from './routes/UserRoute.js'

const app = express()
mongoose.connect('mongodb://localhost:27017/jkn_db',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Database connected'))

app.use(cors())
app.use(express.json())
// Gunakan user route
app.use(UserRoute)

app.listen(5000, () => console.log('Server is running...'))