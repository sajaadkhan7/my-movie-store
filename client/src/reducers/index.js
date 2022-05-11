import { combineReducers } from "redux";

import movies from './movies';
import Tmdb_store from "./Tmdb_store";
import LoadingState from "./LoadingState";


export default combineReducers({
   movies, 
   Tmdb_store,
   LoadingState,
   });