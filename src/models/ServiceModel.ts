import mongoose from "mongoose";

const serviceScheme = new mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    description: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    maxPrice: {
        type: Number,
        required: true,
        min: 0
    },
    minPrice: {
        type: Number,
        required: true,
        min: 0
    },
    locationLatitude: {
        type: Number,
        required: false,
        min: -90,
        max: 90,
    },
    locationLongitude: {
        type: Number,
        required: false,
        min: -180,
        max: 180,
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
    status: {
        type: String,
        required: true
    }
})

export default mongoose.model('Service', serviceScheme);