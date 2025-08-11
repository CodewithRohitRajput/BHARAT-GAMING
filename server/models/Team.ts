import mongoose, { Mongoose } from "mongoose"

const TeamSchema = new mongoose.Schema({
    // id : String,
    teamname : String,
    caption : String,
    members : {
        type : mongoose.Schema.Types.ObjectId , ref : 'User'
    },
    game : String,
    createdAt : Date

})

const Team = mongoose.model('Team' , TeamSchema);
export default Team;