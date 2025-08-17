import mongoose, { Mongoose } from "mongoose"

const TeamSchema = new mongoose.Schema({
    teamname: String,
    captain: String, // Game ID (BGMI username)
    members: [String], // Game IDs
    captainUserId: { // Real user account ID who registered the team
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    tournament: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tournament'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Team = mongoose.model('Team', TeamSchema);
export default Team;