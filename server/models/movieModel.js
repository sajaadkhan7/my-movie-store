import mongoose from "mongoose";




const movieSchema = mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    original_language:{
        type:String,
        required:true,
        minlength:2
    },
    poster_path:{
        type: String,
        required: true
    },
    release_date:{
        type:Date,
        required:true
    },
    title: {
        type: String,
        required: true,
        minlength:2
    },
    vote_average: {
        type: Number,
        required: false,
        min: 0,
        max:10
    },
    likes: {
        type: Number,
        required:false
    },
    fav: {
        type: Boolean,
        required:false
    }
});

//create mongoose model from schema
const Movies = mongoose.model('movies', movieSchema);
export default Movies;

