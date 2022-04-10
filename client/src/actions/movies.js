import { FETCH_ALL, GET_SINGLE, CREATE, DELETE_SINGLE, UPDATE } from '../constants/actionTypes';
//WE HAVE CREATED CONTANTS IN A DIFFERENT FILE TO REPLACE THE STRING ACTION TYPES
import * as api from '../api';

//action creators

export const getMovies = () => async (dispatch) => {
    try {
        const { data } = await api.fetchMovies();
       
        dispatch({ type: FETCH_ALL, payload: data });
      //  console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}

export const getSingleMovie = (id) =>async(dispatch)=> {
    try {
        const { data } = await api.getSingle(id);
        dispatch({ type: GET_SINGLE, payload: data });
        
    } catch (error) {
        console.log(error.message);
    }
}

export const createMovie = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteMovie = (id) => async (dispatch) => {
    try {
       const {data}= await api.deleteSingle(id);
        dispatch({ type: DELETE_SINGLE, payload: data });
        
    } catch (error) {
        console.log(error.message);
    }
}

export const updateMovie = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: UPDATE, payload: data });

    } catch (error) {
        console.log(error.message);
    }
}
