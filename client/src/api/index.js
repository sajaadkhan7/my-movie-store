import axios from 'axios';
const url = 'https://movi-store.herokuapp.com/movies';
//  const url2 = 'https://api.themoviedb.org/3/movie/';
//  const url2End='?api_key=c1ec99bca4a799530c16fb945021413e&language=en-US&page=1';
export const fetchMovies = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const getSingle = (id) => axios.get(`${url}/${id}`);
export const deleteSingle = (id) => axios.delete(`${url}/${id}`);
export const updatePost = (id, updateData) => axios.patch(`${url}/${id}`, updateData);

//export const tmdbFetch = (q) => axios.get(`${url2}${q}${url2End}`);
