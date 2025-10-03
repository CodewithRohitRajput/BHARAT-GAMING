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
    try {
        const {username , email , password , role , createdAt , updatedAt} = req.body;

        console.log('Signup attempt:', { username, email, role });

        // Validate required fields
        if (!username || !email || !password) {
            return res.status(400).json({success : false , message : "Username, email, and password are required"});
        }

        const alreadyUser = await User.findOne({email})
        if(alreadyUser) return res.status(400).json({success : false , message : "User Already Exists"});

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

        console.log('User registered successfully:', newUser.email);
        return res.json({success : true , message : "User Registered Successfully" , token});
    } catch (error) {
        console.error('Signup error:', error);
        return res.status(500).json({success : false , message : "Internal server error"});
    }


})

export default router;