import mongoose from "mongoose";

const keywordSchema = new mongoose.Schema({
    keyword: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    deletedAt: {
        type: Date,
        required: false,
        default: null
    }
})

export default mongoose.model("Keyword", keywordSchema);