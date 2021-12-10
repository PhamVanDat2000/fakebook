const mongoose = require("mongoose")
const postSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            require: true,
        },
        desc: {
            type: String,
            max: 1000
        },
        likes: {
            type: Array,
            default: []
        },
        img: {
            type: String,
        },
    },
    { timestamps: true }
)
module.exports = mongoose.model("Post", postSchema)