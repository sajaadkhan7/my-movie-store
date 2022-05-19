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

export const tmdbStore = (category, keywordQ) => async (dispatch) => {
    try {
        const data = await fetch(`https://api.themoviedb.org/3/${category}/${keywordQ}?api_key=c1ec99bca4a799530c16fb945021413e&language=en-US&page=1`);
        const movies = await data.json();
        //console.log(movies.results);
        dispatch({ type: 'TMDB_STORE', payload: movies.results });
    }
    catch (error) {
        console.log(error.message);
    }
};
export const done = () => {
    return {
      type: "DONE",
    };
  };

  export const notdone = () => {
    return {
      type: "NOT_DONE",
    };
};
export const Liked = () => {
    return {
        type:"LIKED",
    };
};

// export const getTmdb = (q) => async (dispatch) => {
//     try {
//         const movieData = await api.tmdbFetch(q);
//         //console.log(movieData.data);
//         dispatch({ type: 'TMDB', payload: movieData.data });
//     } catch (error) {
//         console.log(error.message);
//     }
// }