"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TournamentSchema = new mongoose_1.default.Schema({
    tournamentname: String,
    game: String,
    description: String,
    startDate: Date,
    endDate: Date,
    startTime: String,
    registrationDeadline: Date,
    maxTeams: Number,
    rules: String,
    prize: String,
    status: {
        type: String, enum: [
            'upcoming', 'ongoing', 'completed'
        ], default: 'upcoming'
    },
    registeredTeams: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'Team'
        }],
    roomId: { type: String || null },
    roomPass: { type: String || null },
    createdAt: Date,
});
const Tournament = mongoose_1.default.model('Tournament', TournamentSchema);
exports.default = Tournament;
