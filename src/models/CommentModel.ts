import mongoose from "mongoose";
const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
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
    },
    updatedAt: {
        type: Date,
        required: false,
        default: null
    },
    deletedAt: {
        type: Date,
        required: false,
        default: null
    }
});
export default mongoose.model("Comment", commentSchema);
