// const express = require('express');
// const ConnectDB = require('./config/db')
// const cors = require('cors');
// const dotenv = require('dotenv')

import express from 'express'
import ConnectDB from './config/db.js'
import cors from 'cors'
import dotenv from 'dotenv'
import login from './routes/login.js'
import signup from './routes/signup.js'
import Tournament from './routes/Tournament.js'
import cookieParser from 'cookie-parser'
import Role from './routes/role.js'
import razorpay from './routes/razorpay.js'
import team from './routes/team.js'
import profile from './routes/profile.js'

dotenv.config();

const app = express()

const port = 5000;

app.use(express.json());
app.use(cookieParser())
app.use(cors({
        origin : [
            'http://localhost:3000',
            'https://bharat-gaming.vercel.app',
            'https://your-production-domain.com'
        ],
        credentials : true,
        methods : ['GET' , 'POST' , 'PUT' , 'DELETE'],
        allowedHeaders : ['Content-Type' , 'Authorization']
}));

 ConnectDB();

 app.use('/login' , login )
 app.use('/signup' , signup )
 app.use('/Tournament' , Tournament)
 app.use('/role' , Role)
 app.use('/payment' , razorpay)
 app.use('/team' , team)
 app.use('/Userprofile', profile);

// Add error handling for routes
app.use('*', (req, res) => {
    console.log(`404 - Route not found: ${req.method} ${req.originalUrl}`);
    res.status(404).json({ 
        error: 'Route not found',
        method: req.method,
        url: req.originalUrl 
    });
});

app.listen(port , ()=>{
        console.log(`Server is running on port ${port}`);
})

