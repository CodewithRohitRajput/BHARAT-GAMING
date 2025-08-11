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

dotenv.config();

const app = express()

const port = 5000;

app.use(express.json());
app.use(cookieParser())
app.use(cors({
        origin : 'http://localhost:3000',
        credentials : true
}));

 ConnectDB();

 app.use('/login' , login )
 app.use('/signup' , signup )
 app.use('/Tournament' , Tournament)
 app.use('/role' , Role)

app.listen(port , ()=>{
        console.log(`Server is running on port ${port}`);
})

