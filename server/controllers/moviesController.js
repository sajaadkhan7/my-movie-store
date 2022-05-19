import mongoose from "mongoose";
import Movies from '../models/movieModel.js';

export const getMovies = async(req, res) => {
    try {
        const movies = await Movies.find();
        console.log(movies);

        res.status(200).json(movies);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createMovie =async (req, res) => {
    const movie = req.body;
    
    const postNewMovie = new Movies(movie);

    try {
        await postNewMovie.save();
        res.status(201).json(postNewMovie);
    } catch (error) {
        res.status(409).json({ message: error.message });
        
    }
}

export const getSingleMovie = async (req, res) => {
    try {
        const { id: _id } = req.params;
   
        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post  with that id');

        
        const single = await Movies.findById(_id).exec();
        res.status(200).json(single);
    } catch (error) {
        res.status(404).json({ message: error.message });
        
    }
}

export const deleteMovie = async (req, res) => {
    try {
        const { id: _id } = req.params;
        const idEx = await Movies.findOne({ _id });
        if (idEx)
        {
         await Movies.findByIdAndDelete(_id);
         res.status(200).json('Successfully deleted');   
        }
        else {
           throw 'Item doesn\'t exists';
        };       
       
    } catch (error) {
        res.status(404).json(error);
    }
}


export const updateMovie = async (req, res) => {
   

        const { id: _id } = req.params;
    const post = req.body;
    const movie = await Movies.find({ id: _id });
        if (!mongoose.Types.ObjectId.isValid(movie[0]._id)) return res.status(404).send('No post  with that id');
        const updatedMovie = await Movies.findByIdAndUpdate(movie[0]._id, post, { new: true });
        res.json(updatedMovie);
   
}
