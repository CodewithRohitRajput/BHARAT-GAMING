"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MatchSchema = new mongoose_1.default.Schema({
    tournamentId: {
        type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Tournament'
    },
    roomId: String,
    roomPassword: String,
    scheduledTime: Date,
    participants: {
        type: [String]
    },
    winner: {
        type: String,
        required: false
    },
    status: {
        type: String, enum: ['scheduled', 'in-progress', 'completed'], default: 'scheduled'
    }
});
