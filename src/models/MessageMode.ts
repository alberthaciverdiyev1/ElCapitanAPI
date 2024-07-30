import mongoose from "mongoose";
const messageSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
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
export default mongoose.model("Message", messageSchema);
