import express from 'express'
// import cookieParser from 'cookie-parser'
const router = express.Router();
import  jwt  from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config();
const SECRET = process.env.SECRET;

if(!SECRET) throw new Error("env not setup")
router.get('/' , async (req , res)=>{
    const token = req.cookies.token;
    if(!token ) return res.json({success : 400});
    const decoded = jwt.verify(token , SECRET);

    // const role = req.cookies.role || null;
    return res.json({role : (decoded as any).role || null});
})


export default router;