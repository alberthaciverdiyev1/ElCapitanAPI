import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    category : {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    parentId :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: false
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
})

export default mongoose.model("Category", categorySchema);