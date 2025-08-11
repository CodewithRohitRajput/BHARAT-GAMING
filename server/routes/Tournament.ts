import express from 'express'
import User from '../models/User.js'
import Tournament from '../models/Tournament.js';
import dotenv from 'dotenv'
const router = express.Router();

dotenv.config();

const SECRET = process.env.SECRET;

if(!SECRET){
    throw new Error ('Secret is not setup in the env variable')
}


router.post('/create' , async (req , res) =>{
    const {tournamentname , game , description , startDate , endDate , startTime , registrationDeadline , maxTeams , rules , prize , status} = req.body;

    const newTournament =  new Tournament({tournamentname , game , description , startDate , endDate , startTime , registrationDeadline , maxTeams , rules , prize , status})

    await newTournament.save();

    return res.json({success: 200 , message : "Tournament Created Successfully"})

})

router.get('/get' , async (req,res)=>{
    const allTournaments = await Tournament.find();
    return res.json({success : 200 , allTournaments});
})


router.get('/get/:id' , async (req,res)=>{
    const {id} = req.params;
    const allTournaments = await Tournament.findById(id);
    return res.json({success : 200 , allTournaments});
})


 export default router;

