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
    const {email , password} = req.body;
    const isUser = await User.findOne({email})
    if(!isUser) return res.json({success : 400 , message : "Email not found"})

    const chkPass = await bcrypt.compare(password , isUser.password )

    if(!chkPass) return res.json({success : 400 , message : "Incorrect Password"})

    const token = jwt.sign({id : isUser._id , email : isUser.email , role : isUser.role} , SECRET)

    res.cookie('token' , token , {
        httpOnly : true,
        sameSite : 'lax',
        secure : false,
        path : '/',
        maxAge : 3600000
    })
    // res.cookie('role' , isUser.role , {
    //     httpOnly : false,
    //     sameSite : 'lax',
    //     secure : false,
    //     path : '/',
    //     maxAge : 3600000
    // })

    return res.json({message : "User LoggedIn" , token});
    
    
})

export default router;