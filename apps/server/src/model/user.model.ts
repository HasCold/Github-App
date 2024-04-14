import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    name: {type: String, default: ""},
    profileUrl: {type: String, required: true},
    avatarUrl: {type: String},
    likedProfiles: {type: [String], default: []},
    likedBy: [
        {
            username: {type: String, required: true},
            avatarUrl: {type: String},
            likedDate: {type: new Date, default: Date.now}
        }
    ]
}, {
    timestamps: true,
    strict: true,
    validateBeforeSave: true
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
