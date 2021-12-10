const express = require("express")
const route = express.Router()
const User = require("../models/user")
const bcrypt = require('bcrypt')
route.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSaltSync(10)
        const hashPassword = await bcrypt.hash(req.body.password, salt)
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPassword
        })
        const user = await newUser.save()
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }
})

route.post('/login', async(req, res)=>{
    try {
        const user = await User.findOne({email:req.body.email})
        !user && res.status(404).json("Not found")

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json("Wrong Passwod or Usernam")
        res.status(200).json(user)
        } catch (error) {
       console.log(error) 
    }
})
 


module.exports = route
