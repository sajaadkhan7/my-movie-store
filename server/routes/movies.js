import express from "express";
import { getMovies,createMovie,getSingleMovie,deleteMovie,updateMovie} from '../controllers/moviesController.js';
const router = express.Router();

router.get('/', getMovies);
router.post('/', createMovie);
router.get('/:id', getSingleMovie);
router.delete('/:id', deleteMovie);
router.patch('/:id', updateMovie);

export default router;