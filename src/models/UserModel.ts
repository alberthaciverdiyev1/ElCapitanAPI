
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
    fin: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
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
    deletedAt: {
        type: Date,
        required: false,
        default: null,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('User', userSchema);
