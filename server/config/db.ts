// const mongoose = require('mongoose')
// const dotenv = require('dotenv')
import dotenv from 'dotenv'

import mongoose from "mongoose";

dotenv.config();

const connectDB = async () =>{

    mongoose.connect(process.env.MONGODB_URI  as string)
    .then(()=>{
        console.log('MongoDB Connected');
    })
    .catch(()=> {
        console.log("Failed to connect with MongoDB")
    })
}

// module.exports = connectDB;
export default connectDB;
