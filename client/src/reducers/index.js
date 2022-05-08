import { combineReducers } from "redux";

import movies from './movies';
import Tmdb_store from "./Tmdb_store";


export default combineReducers({
   movies, 
   Tmdb_store
   });