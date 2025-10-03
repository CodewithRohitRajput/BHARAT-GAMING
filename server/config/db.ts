// const mongoose = require('mongoose')
// const dotenv = require('dotenv')
import dotenv from 'dotenv'

import mongoose from "mongoose";

dotenv.config();

const connectDB = async () =>{
    try {
        const mongoURI = process.env.MONGODB_URI;
        
        if (!mongoURI) {
            throw new Error('MONGODB_URI is not defined in environment variables');
        }

        await mongoose.connect(mongoURI);
        console.log('MongoDB Connected successfully');
        
    } catch (error) {
        console.error("Failed to connect with MongoDB:", error);
        process.exit(1);
    }
}

// module.exports = connectDB;
export default connectDB;
