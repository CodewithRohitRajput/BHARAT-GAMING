import express from 'express'
import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
const router = express.Router();

dotenv.config();

const SECRET = process.env.SECRET;

if(!SECRET){
    throw new Error ('Secret is not setup in the env variable')
}

router.post('/' , async (req , res)=>{
    try {
        const {email , password} = req.body;
        
        console.log('Login attempt:', { email });

        // Validate required fields
        if (!email || !password) {
            return res.status(400).json({success : false , message : "Email and password are required"});
        }

        const isUser = await User.findOne({email})
        if(!isUser) return res.status(400).json({success : false , message : "Email not found"})

        const chkPass = await bcrypt.compare(password , isUser.password )

        if(!chkPass) return res.status(400).json({success : false , message : "Incorrect Password"})

        const token = jwt.sign({id : isUser._id , email : isUser.email , role : isUser.role} , SECRET)

        res.cookie('token' , token , {
            httpOnly : true,
            sameSite : 'lax',
            secure : false,
            path : '/',
            maxAge : 3600000
        })

        console.log('User logged in successfully:', isUser.email);
        return res.json({success : true, message : "User LoggedIn" , token});
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({success : false , message : "Internal server error"});
    }
})

export default router;