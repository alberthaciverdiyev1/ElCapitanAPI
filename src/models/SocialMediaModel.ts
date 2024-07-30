import mongoose from "mongoose";

const SocialMediaSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    socialMediaId: {
        type: String,
        required: true,
    },
    socialMediaLink: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: null,
        required: false,
    },
    deletedAt: {
        type: Date,
        required: false,
        default: null,
    },
});

export default mongoose.model("SocialMedia", SocialMediaSchema);
