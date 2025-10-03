import mongoose from "mongoose";
// import express from 'express'
// const router = express.Router();
const UserSchema = new mongoose.Schema({
    // id : String,
    username: String,
    email: String,
    password: {
        type: String, required: true
    },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    createdAt: Date,
    updatedAt: Date,
});
const user = mongoose.model('User', UserSchema);
export default user;
