var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// const mongoose = require('mongoose')
// const dotenv = require('dotenv')
import dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config();
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
        console.log('MongoDB Connected');
    })
        .catch(() => {
        console.log("Failed to connect with MongoDB");
    });
});
// module.exports = connectDB;
export default connectDB;
