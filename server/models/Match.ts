import mongoose from "mongoose";

const MatchSchema = new mongoose.Schema({

tournamentId : {
    type : mongoose.Schema.Types.ObjectId , ref : 'Tournament'
},

roomId : String,
roomPassword : String,
scheduledTime : Date,
participants : {
    type : [String]
},
winner : {
    type : String,
    required : false
},
status : {
    type : String  , enum : ['scheduled' , 'in-progress' , 'completed'] , default : 'scheduled'
}


})