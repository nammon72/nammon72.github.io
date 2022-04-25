import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'

dotenv.config()

const app = express()

// middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded())

// Database
const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    autoIndex: false
}, (err) => {
    if (err) throw err;
    console.log('Mongodb connection.')
})

// Routes
app.get('/', (req, res) => {
    res.json({msg: 'Hello nammon72'})
})

// Start server Listening
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Express is listening on port ${port}`)
})