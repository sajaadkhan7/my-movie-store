import { combineReducers } from "redux";
import movies from './movies';
import Tmdb_store from "./Tmdb_store";
import LoadingState from "./LoadingState";


//exporting and combining reducers (used when we have more than one reducer in an app.)
export default combineReducers({
   movies, 
   Tmdb_store,
   LoadingState,
});
   
