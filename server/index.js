const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")//Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
const helmet = require("helmet")    // secure Express App
const morgan = require("morgan")    // HTTP request logger middleware for node.js
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
dotenv.config()

mongoose.connect(process.env.MONGO_URL, () => {
    console.log("Connect to MongooseDB success")
});

app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use('/api/user', userRoute)
app.use('/api/auth', authRoute)
app.listen(8800, () => {
    console.log("Backend server is running")
})