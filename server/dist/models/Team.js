"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TeamSchema = new mongoose_1.default.Schema({
    teamname: String,
    captain: String, // Game ID (BGMI username)
    members: [String], // Game IDs
    captainUserId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User'
    },
    tournament: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Tournament'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const Team = mongoose_1.default.model('Team', TeamSchema);
exports.default = Team;
