import axios from 'axios';
const url = 'http://localhost:5000/movies';

export const fetchMovies = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const getSingle = (id) => axios.get(`${url}/${id}`);
export const deleteSingle = (id) => axios.delete(`${url}/${id}`);
export const updatePost = (id, updateData) => axios.patch(`${url}/${id}`,updateData);