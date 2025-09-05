"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// import express from 'express'
// const router = express.Router();
const UserSchema = new mongoose_1.default.Schema({
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
const user = mongoose_1.default.model('User', UserSchema);
exports.default = user;
