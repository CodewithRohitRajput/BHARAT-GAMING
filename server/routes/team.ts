import express from 'express'
// import cookieParser from 'cookie-parser'
const router = express.Router();
import  jwt  from 'jsonwebtoken';
import dotenv from 'dotenv'
import Team from '../models/Team.js'
import Tournament from '../models/Tournament.js';



router.post('/:tournamentId' , async (req , res) => {
    const{tournamentId} = req.params;
    const {teamname , captain , members} = req.body;

    const tournament = await Tournament.findById(tournamentId)

    if(!tournament) return res.status(404).json({message : 
        "Tournament not found"
    })

    const newTeam = new Team({teamname , captain , members , tournament : tournamentId})
    await newTeam.save();


    tournament.registeredTeams.push(newTeam._id);
    await tournament.save();

    return res.json({success : 200 , message : "New Team Created Successfully"})

})


router.get('/:tournamentId/AllTeams' , async (req,res)=>{
    const {tournamentId} = req.params;

    const tournament = await Tournament.findById(tournamentId).populate('registeredTeams');

    const TeamsDetails = tournament?.registeredTeams;

    return res.status(200).json({TeamsDetails});

})

export default router;