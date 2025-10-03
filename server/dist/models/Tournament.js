import mongoose from "mongoose";
const TournamentSchema = new mongoose.Schema({
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
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Team'
        }],
    roomId: { type: String || null },
    roomPass: { type: String || null },
    createdAt: Date,
});
const Tournament = mongoose.model('Tournament', TournamentSchema);
export default Tournament;
