import express from 'express'
import User from '../models/User.js'
import Tournament from '../models/Tournament.js';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken'

const router = express.Router();

dotenv.config();

const SECRET = process.env.SECRET;

if(!SECRET){
    throw new Error ('Secret is not setup in the env variable')
}


router.post('/create' , async (req , res) =>{
    const {tournamentname , game , description , startDate , endDate , startTime , registrationDeadline , maxTeams , rules , prize , status , roomId , roomPass} = req.body;

    const newTournament =  new Tournament({tournamentname , game , description , startDate , endDate , startTime , registrationDeadline , maxTeams , rules , prize , status , roomId , roomPass})

    await newTournament.save();

    return res.json({success: 200 , message : "Tournament Created Successfully"})

})

// edit

router.put('/:id/edit' , async(req , res)=>{
        const {id} = req.params;

         const {tournamentname , game , description , startDate , endDate , startTime , registrationDeadline , maxTeams , rules , prize , status , roomId , roomPass} = req.body;


        const EditedTournament  = await Tournament.findByIdAndUpdate(id , {tournamentname , game , description , startDate , endDate , startTime , registrationDeadline , maxTeams , rules , prize , status , roomId , roomPass} , {new : true} )

        return res.status(200).json({message : 'Tournamnet Edited Succesfully'})
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


    router.get('/isAdmin' , async(req,res)=>{
        const token : any = req.cookies.token;
        if(!token) return res.json({
            adminUser : false,
            message : 'No authentication token'
        })
        const decoded : any = jwt.verify(token , SECRET)
        const userId : string = decoded.id;

        const isAdmin = await User.findOne({_id : userId , role : 'admin'})
        if(!isAdmin) return res.json({
            adminUser : false
        })
        else{
            return res.json({
                adminUser : true
            })
        }

    })

 export default router;

