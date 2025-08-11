import mongoose, { mongo } from 'mongoose'

const RegistrationSchema = new mongoose.Schema({
    tournamentId : {
        type : mongoose.Schema.Types.ObjectId , ref : 'Tournament'
    },

    teamId : {
        type : mongoose.Schema.Types.ObjectId , ref : 'Team'
    }
,

    registeredAt : Date,

    status : {type : String , enum : ['upcoming' , 'ongoing' , 'completed']},
    createdAt : Date
    

})

const Registration = mongoose.model('Registration' , RegistrationSchema);

export default Registration;