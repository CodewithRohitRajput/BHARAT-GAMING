import express from 'express'
import User from '../models/User.js'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

const router = express.Router()
dotenv.config()

const SECRET = process.env.SECRET
if(!SECRET){
    throw new Error("no secret")
}

router.get('/', async (req, res) => {
    const token = req.cookies.token
      if(!token){
        return res.status(401).json({message : "NO token"})
    }
    const decoded = jwt.verify(token, SECRET) as {id : string}
//   console.log("Decoed " , decoded)
    const userId = decoded.id 
    const Profile = await User.findById(userId)
    res.json({ token : !!token,  Profile})
})

export default router