import express from 'express'
import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { NONAME } from 'dns'

const router = express.Router();
dotenv.config();
const SECRET = process.env.SECRET;

if(!SECRET){
    throw new Error("Secret is not setup in the env variable")
}

router.post('/' , async (req  , res)=>{

    const {username , email , password , role , createdAt , updatedAt} = req.body;

    const alreadyUser = await User.findOne({email})
    if(alreadyUser) return res.json({status : 400 , message : "User Already Exists"});

    const hashPass = await bcrypt.hash(password ,10);

    const newUser = new User({username , email , password : hashPass , role});

    await newUser.save();

    const token = jwt.sign({id : newUser._id , email : newUser.email , role : newUser.role} , SECRET)

    // for pro sameSite : 'none' and secure : true

    
    res.cookie('token' , token , {
        httpOnly : true,
        sameSite : 'lax',
        path : '/',
        maxAge : 3600000,
        secure : false
    })
    // res.cookie('role' , newUser.role , {
    //     httpOnly : false,
    //     sameSite : 'lax',
    //     path : '/',
    //     maxAge : 3600000,
    //     secure : false
    // })

    return res.json({status : 200 , message : "User Registered Successfully" , token});


})

export default router;