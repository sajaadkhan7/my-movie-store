import mongoose from "mongoose";


const actorSchema = new mongoose.Schema({
    actor_name:{
        type:String,
        required:false
        
    },
    age:{
        type:Number,
        required:false,
        min:5
    },
    status:{
        type:String,
        required:false
    }
});

const movieSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    director:{
        type:String,
        required:true,
        minlength:3
    },
    actor:actorSchema, //adding sub schema
    rating:{
        type:Number,
        required:false,
        'default':0,
        min:0,
        max:5
    },
    release_Date:{
        type:String,
        required:true
    }
});

//create mongoose model from schema
const Movies = mongoose.model('movies', movieSchema);
export default Movies;

