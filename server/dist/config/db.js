"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const mongoose = require('mongoose')
// const dotenv = require('dotenv')
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const connectDB = async () => {
    mongoose_1.default.connect(process.env.MONGODB_URI)
        .then(() => {
        console.log('MongoDB Connected');
    })
        .catch(() => {
        console.log("Failed to connect with MongoDB");
    });
};
// module.exports = connectDB;
exports.default = connectDB;
