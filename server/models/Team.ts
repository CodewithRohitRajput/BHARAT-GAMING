import mongoose, { Mongoose } from "mongoose"

const TeamSchema = new mongoose.Schema({
    // id : String,
    teamname : String,
    captain : Number,
    members : [Number],
    tournament : 
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Tournament'
        }
    ,
    // game : String,
    createdAt : Date

})

const Team = mongoose.model('Team' , TeamSchema);
export default Team;