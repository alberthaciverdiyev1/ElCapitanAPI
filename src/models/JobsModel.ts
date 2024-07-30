import mongoose from "mongoose";
const jobSchema = new mongoose.Schema({
    jobName: {
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
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: null
    },
    deletedAt: {
        type: Date,
        default: null
    }
});

module.exports = mongoose.model('Job', jobSchema);