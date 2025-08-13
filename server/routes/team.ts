import express from 'express'
// import cookieParser from 'cookie-parser'
const router = express.Router();
import  jwt  from 'jsonwebtoken';
import dotenv from 'dotenv'
import Team from '../models/Team.js'


router.post('/' , async (req , res) => {
    const {teamname , captain , members} = req.body;

    const newTeam = new Team({teamname , captain , members})
    await newTeam.save();

    return res.json({success : 200 , message : "New Team Created Successfully"})

})

export default router;