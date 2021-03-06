import { FETCH_ALL, GET_SINGLE, CREATE, DELETE_SINGLE, UPDATE } from '../constants/actionTypes';
//WE HAVE CREATED CONTANTS IN A DIFFERENT FILE TO REPLACE THE STRING ACTION TYPES

//reducer for movies storage
export default (movies = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...movies, action.payload];
        case GET_SINGLE:
            return [movies];
        case DELETE_SINGLE:
            return [movies];
        
        case UPDATE:
            return movies.map((movie) => movie._id === action.payload._id ? action.payload : movie);
        default:
            return movies;
    }
}
