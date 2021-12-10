const express = require("express")
const route = express.Router()
const Post = require('../models/post')
const User = require('../models/user')
// create post
route.post('/create', async (req, res) => {
    const newPost = await new Post(req.body)
    try {
        const savePost = await newPost.save()
        res.status(200).json(savePost)
    } catch (error) {
        res.status(500).json(error)
    }
})
// update post
route.put('/:id/modify', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (req.body.userId === post.userId) {
            await post.updateOne({ $set: req.body })
            res.status(200).json("Update post success")
        }
        else {
            res.status(304).json("You don't have permission")
        }
    } catch (error) {
        res.status(500).json(error)
    }

})

// delete post
route.delete('/:id/delete', async (req, res) => {
    try {
        if (req.body.userId === post.userId) {
            const post = await Post.findByIdAndDelete(req.params.id)
            res.status(200).json("Update post success")
        }
        else {
            res.status(304).json("You don't have permission")
        }
    } catch (error) {
        res.status(500).json(error)
    }

})

// get post
route.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
})

// get timeline posts
route.get("/timeline/all", async (req, res) => {
    try {
        const currentUser = await User.findById(req.body.userId)
        const userPosts = await Post.find({ userId: currentUser.id })
        const friendsPosts = await Promise.all(
            currentUser.followings.map((friendId) => {
                return Post.find({ userId: friendId })
            })
        )
        const allPost = userPosts.concat(...friendsPosts)
        res.status(200).json(userPosts.concat(...friendsPosts))
    } catch (error) {
        res.status(500).json(error)
    }
})

// like and dislike
route.put("/:id/like", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } })
            res.status(200).json("Like success")
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } })
            res.status(200).json("Unlike success")
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = route