const express = require("express")
const route = express.Router()
const User = require("../models/user")
const bcrypt = require('bcrypt')
route.post('/register', async (req, res) => {
	try {
		const duplicateUser = await User.findOne({ email: req.body.email })
		if (duplicateUser) {
			console.log("account already exist")
			res.status(404).json("Account already exist")
		}
		else {
			const salt = await bcrypt.genSaltSync(10)
			const hashPassword = await bcrypt.hash(req.body.password, salt)
			const newUser = await new User({
				username: req.body.username,
				email: req.body.email,
				password: hashPassword
			})
			const user = await newUser.save()
			res.status(200).json(user)
		}
	} catch (error) {
		console.log(error)
	}
})

route.post('/login', async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email })
		if (!user) {
			return res.status(404).json("Not found")
		}
		const validPassword = await bcrypt.compare(req.body.password, user.password)
		if (!validPassword) {
			return res.status(400).json("Wrong Passwod or Username")
		}
		res.status(200).json(user)
	} catch (error) {
		console.log('login error', error)
	}
})

module.exports = route
