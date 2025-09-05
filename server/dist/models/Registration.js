"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const RegistrationSchema = new mongoose_1.default.Schema({
    tournamentId: {
        type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Tournament'
    },
    teamId: {
        type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Team'
    },
    registeredAt: Date,
    status: { type: String, enum: ['upcoming', 'ongoing', 'completed'] },
    createdAt: Date
});
const Registration = mongoose_1.default.model('Registration', RegistrationSchema);
exports.default = Registration;
