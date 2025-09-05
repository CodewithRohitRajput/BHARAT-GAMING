"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const Team_js_1 = __importDefault(require("../models/Team.js"));
const Tournament_js_1 = __importDefault(require("../models/Tournament.js"));
dotenv_1.default.config();
// Team registration with user tracking
router.post('/:tournamentId', async (req, res) => {
    try {
        const SECRET = process.env.SECRET;
        const { tournamentId } = req.params;
        const { teamname, captain, members, paymentId, orderId } = req.body;
        // Get user from token
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "Please login to register" });
        }
        const decoded = jsonwebtoken_1.default.verify(token, SECRET);
        const userId = decoded.id;
        const tournament = await Tournament_js_1.default.findById(tournamentId);
        if (!tournament) {
            return res.status(404).json({ message: "Tournament not found" });
        }
        // Check if user already registered
        const existingTeam = await Team_js_1.default.findOne({
            tournament: tournamentId,
            captainUserId: userId
        });
        if (existingTeam) {
            return res.status(400).json({
                message: "You already have a team registered in this tournament"
            });
        }
        // Create team with user tracking
        const newTeam = new Team_js_1.default({
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
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
// Get all teams
router.get('/:tournamentId/AllTeams', async (req, res) => {
    const { tournamentId } = req.params;
    const tournament = await Tournament_js_1.default.findById(tournamentId).populate('registeredTeams');
    const TeamsDetails = tournament?.registeredTeams;
    return res.status(200).json({ TeamsDetails });
});
// Check registration status
router.get('/:tournamentId/registration-status', async (req, res) => {
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
        const decoded = jsonwebtoken_1.default.verify(token, SECRET);
        const userId = decoded.id;
        // Check if user is registered
        const userTeam = await Team_js_1.default.findOne({
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
});
exports.default = router;
