const express = require('express')
const route = express.Router()
const bcrypt = require('bcrypt')
const User = require("../models/user")
// update user
route.put('/:id', async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSaltSync(10)
                req.body.password = await bcrypt.hash(req.body.password, salt)
            } catch (error) {
                res.status(500).json(error)
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.body.userId, {
                $set: req.body
            })
            res.status(200).json("update success user account")
        } catch (error) {
            res.status(500).json(error)
        }
    }
    else {
        res.status(403).json("You don't have permission update this account")
    }
})
//delete
route.delete('/:id', async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            const user = await User.findByIdAndDelete(req.body.userId)
            res.status(200).json("delete success user account")
        } catch (error) {
            res.status(500).json(error)
        }
    }
    else {
        res.status(403).json("You don't have permission")
    }
})

//get user
route.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        // const {password, updatedAt, ...other} = user._doc
        const { password, updatedAt, ...other } = user.toJSON()
        res.status(200).json(other)
    } catch (error) {
        res.status(403).json(error)
    }
})

// follow a user
route.put('/:id/follow', async (req, res) => {
    if (req.body.userId === req.params.id) {
        res.status(304).json("You can't follow yourself")
    }
    else {
        try {
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId } })
                await currentUser.updateOne({ $push: { followings: req.params.id } })
                res.status(200).json("Follow user success")
            }
            else {
                res.status(304).json("You already follow this user")
            }
        } catch (error) {
            res.status(304).json(error)
        }
    }
})

// unfollow
route.put('/:id/unfollow', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const currentUser = await User.findById(req.body.userId)
        if (user.followers.includes(req.body.userId)) {
            await user.updateOne({ $pull: { followers: req.body.userId } })
            await currentUser.updateOne({ $pull: { followings: req.params.id } })
            res.status(200).json("Unfollow user success")
        }
        else {
            res.status(304).json("You don't follow this user")
        }
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = route