import mongoose from "mongoose";

const systemUserScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        lowercase: true
    },
    surname: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        lowercase: true
    },
    phone: {
        type: Number,
        required: true,
        trim: true,
        lowercase: true,
    },
    role: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    isActive: {
        type: Boolean,
        default: false,
        required: false,
    },
    isBlocked: {
        type: Boolean,
        default: false,
        required: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    updatedAt: {
        type: Date,
        default: null,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    deletedAt: {
        type: Date,
        required: false,
        default: null,
    },
})

export default mongoose.model("SystemUser", systemUserScheme);