var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
const router = express.Router();
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Team from '../models/Team.js';
import Tournament from '../models/Tournament.js';
dotenv.config();
// Team registration with user tracking
router.post('/:tournamentId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const SECRET = process.env.SECRET;
        const { tournamentId } = req.params;
        const { teamname, captain, members, paymentId, orderId } = req.body;
        // Get user from token
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "Please login to register" });
        }
        const decoded = jwt.verify(token, SECRET);
        const userId = decoded.id;
        const tournament = yield Tournament.findById(tournamentId);
        if (!tournament) {
            return res.status(404).json({ message: "Tournament not found" });
        }
        // Check if user already registered
        const existingTeam = yield Team.findOne({
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
        yield newTeam.save();
        tournament.registeredTeams.push(newTeam._id);
        yield tournament.save();
        return res.json({
            success: 200,
            message: "Team registered successfully! You'll receive room details when available.",
            team: {
                teamname: newTeam.teamname,
                captain: newTeam.captain,
                members: newTeam.members
            }
        });
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
}));
// Get all teams
router.get('/:tournamentId/AllTeams', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tournamentId } = req.params;
    const tournament = yield Tournament.findById(tournamentId).populate('registeredTeams');
    const TeamsDetails = tournament === null || tournament === void 0 ? void 0 : tournament.registeredTeams;
    return res.status(200).json({ TeamsDetails });
}));
// Check registration status
router.get('/:tournamentId/registration-status', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const SECRET = process.env.SECRET;
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
        const decoded = jwt.verify(token, SECRET);
        const userId = decoded.id;
        // Check if user is registered
        const userTeam = yield Team.findOne({
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
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
}));
export default router;
