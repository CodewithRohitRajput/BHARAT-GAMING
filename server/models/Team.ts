import mongoose, { Mongoose } from "mongoose"

const TeamSchema = new mongoose.Schema({
    // id : String,
    teamname : String,
    captain : Number,
    members : [Number],
    // game : String,
    createdAt : Date

})

const Team = mongoose.model('Team' , TeamSchema);
export default Team;