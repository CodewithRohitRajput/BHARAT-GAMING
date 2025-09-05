import express from 'express'
import mongoose from 'mongoose'
const router = express.Router();
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import Team from '../models/Team.js'
import Tournament from '../models/Tournament.js';

dotenv.config();

// Team registration with user tracking
router.post('/:tournamentId', async (req, res) => {
    try {
        const SECRET: any = process.env.SECRET;
        const { tournamentId } = req.params;
        const { teamname, captain, members, paymentId, orderId } = req.body;

        // Get user from token
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "Please login to register" });
        }

        const decoded: any = jwt.verify(token, SECRET);
        const userId: string = decoded.id;

        const tournament = await Tournament.findById(tournamentId);
        if (!tournament) {
            return res.status(404).json({ message: "Tournament not found" });
        }

        // Check if user already registered
        const existingTeam = await Team.findOne({
            tournament: tournamentId,
            captainUserId: userId
        });

        if (existingTeam) {
            return res.status(400).json({
                message: "You already have a team registered in this tournament"
            });
        }

        // Create team with user tracking
        const newTeam = new Team({
            teamname,
            captain,
            members,
            tournament: tournamentId,
            captainUserId: userId,
              paymentId: paymentId, // Store payment reference
            orderId: orderId // Added this field to track who registered
        });

        await newTeam.save();
        tournament.registeredTeams.push(newTeam._id);
        await tournament.save();

        return res.json({
            success: 200,
            message: "Team registered successfully! You'll receive room details when available.",
            team: {
                teamname: newTeam.teamname,
                captain: newTeam.captain,
                members: newTeam.members
            }
        });

    } catch (error : any) {
        return res.status(500).json({ error: error.message });
    }
});

// Get all teams
router.get('/:tournamentId/AllTeams', async (req, res) => {
    const { tournamentId } = req.params;
    const tournament = await Tournament.findById(tournamentId).populate('registeredTeams');
    const TeamsDetails = tournament?.registeredTeams;
    return res.status(200).json({ TeamsDetails });
});

// Check registration status
router.get('/:tournamentId/registration-status', async (req, res) => {
    try {
        const SECRET: any = process.env.SECRET;
        const { tournamentId } = req.params;

        // Get user from token
        const token = req.cookies.token;
        if (!token) {
            return res.json({
                isLoggedIn: false,
                isRegistered: false,
                userTeam: null
            });
        }

        const decoded: any = jwt.verify(token, SECRET);
        const userId: string = decoded.id;

        // Check if user is registered
        const userTeam = await Team.findOne({
            tournament: tournamentId,
            captainUserId: userId
        });

        return res.json({
            isLoggedIn: true,
            isRegistered: !!userTeam,
            userTeam: userTeam ? {
                teamname: userTeam.teamname,
                captain: userTeam.captain,
                members: userTeam.members
            } : null
        });

    } catch (error : any) {
        return res.status(500).json({ error: error.message });
    }
});

export default router;