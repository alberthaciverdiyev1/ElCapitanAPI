import mongoose from "mongoose";
const attachmentSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true
    },
    contentType: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})