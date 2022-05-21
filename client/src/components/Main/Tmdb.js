import { useEffect, useState } from 'react';  

// import styles
import styles from '../../styles/Home.module.css';

//import  component from react bootstrap
import { Button } from 'react-bootstrap';

//import icons from react icons dependency
import { FaThumbsUp } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';

// import redux functionalities
import { useDispatch, useSelector } from 'react-redux';

//import redux actions for loadind state
import { done, notdone } from '../../actions/movies';

//import react loading component from react loading dependency
import ReactLoading from 'react-loading';

//import axios to fetch data from an api endpoint
import axios from 'axios';

import {updateMovie} from '../../actions/movies.js';
import { Ellipsis } from 'react-bootstrap/esm/PageItem';


const Tmdb = (props) => {
    const storeMovies = useSelector(state => state.movies);
   
    const dispatch = useDispatch();
    // accessing loading state from global store
    const LoadingState = useSelector(stat => stat.LoadingState);   
    // functional level state storage
    const [moviess, setmoviess] = useState();

    //use effect to do things after render . it is also known for side effects
    // run fetchTmdb function after first render.
    useEffect(() => {
        fetchTmdb();
    }, [storeMovies]);    

    //fetching movie data from The Movie Database api using an async function and then updating the state.
    const fetchTmdb = async () => { 
        dispatch(notdone());    //dispatching an action
        const data = await fetch(`https://api.themoviedb.org/3/${props.category}/${props.keywordQ}?api_key=c1ec99bca4a799530c16fb945021413e&language=en-US&page=1`);
        const movies= await data.json();  
        setmoviess(movies.results);  //storing api responded data to functional level state
        dispatch(done());  //dispatching an action
    };
    
    // handling add to favourite button.. it will store all data specific to the current movie under the click.
    // and then will make a axios post request add that movie in favourites. which is managed on mongoDB.
    const addToFav = (event, movie) => {
        var upd2;
          // server url to send post request to.
          let url = 'https://movi-store.herokuapp.com/movies';
          // storing current movie in a variable.
          let moviTemp = {
              id: movie.id,
              original_language: movie.original_language,
              poster_path: movie.poster_path,
              release_date: movie.release_date,
              title: movie.title,
              vote_average: movie.vote_average,
              likes: 1,
              fav:true
        };
        
        storeMovies.map(ele => {
            upd2 = false;
            if (ele.id !== movie.id) {
                upd2 = true; 
            }
        });
        if (upd2 === false) {
            console.log('already there');
        } else {
                // making axios post request.
                axios.post(url, moviTemp); 
        }
    };
    const Like = (e, mov) => {
        console.log("at current "+mov.id);
        
        const update = (mov) => {
            const moviTemp = {
                id: mov.id,
                original_language: mov.original_language,
                poster_path: mov.poster_path,
                release_date: mov.release_date,
                title: mov.title,
                vote_average: mov.vote_average,
                likes:ele.likes+1,
                fav:true
            };
            dispatch(updateMovie(mov.id, moviTemp));
        }

        const ele = storeMovies.find((e, i) => {
            if (e.id == mov.id) {
                return mov.id;
            } 
        });
        if (ele !== undefined) {
          
            update(ele);

            
        }
        else {
            console.log(ele);
            addToFav(e, mov);
        }
    };

    // function to print likes if the movie is stored in the mongodb with likes added to the dataset
    const printLikes = (movie) => {
      
        // console.log(movie.id);
        let liked = storeMovies.find((ele) => {
            if (ele.id === movie.id) {
               
                return ele;
           } 
        });
      
        if (liked !== undefined) {
            return liked.likes;
        }
        else {
            return "0";
        }
    };
    
    return (
        <>
            {
            //  if loeadingState variable is true then render movies otherwise show loading animation. 
                LoadingState ? <div className={`${styles.scr} d-flex flex-row flex-nowrap overflow-auto`} >
                {   
                    //conditional rendering using && operator 
                    // will only render of moviess has some data in it..
                        moviess && moviess.map(((movie, index) => {
                            
                            if (movie.release_date) { var dateV = new Date(movie.release_date); }
                            else { var dateV = new Date(movie.first_air_date); }
                            if (index < 21) {
                                return (
                                    <div className={`${styles.card} m-2`} key={index} style={{ position: "relative" }}>
                                       
                                        <div style={{ position: 'relative' }}>
                                            {/* as movie poster has just the relative path so we need to append the follwing url with it. */}
                                            <a href={`/movies/tmdb/${movie.id}`}>
                                                <img src={'https://image.tmdb.org/t/p/original' + movie.poster_path} alt="Avatar" style={{ width: "100%" }}>
                                                </img>
                                            </a>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', position: 'absolute', bottom: '0px', color: 'white', left: '0px', width: "100%", backgroundColor: 'rgba(0,0,0,0.8)' }}>
                                                <Button onClick={(e)=>{Like(e,movie)}} variant='hidden' size='lg' style={{ color: 'white' }}>
                                                    <FaThumbsUp />
                                                    <i style={{ paddingLeft: '0.2rem', fontSize: '0.8rem' }}> {printLikes(movie)} </i>
                                                </Button>
                                                <Button onClick={(e)=>{addToFav(e,movie)}} variant='hidden' size='lg' style={{ color: 'white' }}>
                                                    <MdFavorite />
                                                </Button>
                                            </div>
                                        </div>
                                        <div className={styles.container} style={{ position: "relative" }}>
                                            <div className={styles.mName_rating}>
                                                {/* Rating stars */}
                                                <h4 className='text-truncate ' style={{ fontSize: "1rem", paddingTop: '0.5rem' }} >{movie.title}</h4>
                                                <h4>
                                                    {
                                                        [...Array(Math.round(movie.vote_average / 2))].map((ele, i) => (
                                                            <b key={i} style={{ fontSize: "1rem", color: "#FDCC0D" }}>&#9733;</b>
                                                        ))
                                                    }
                                                    {
                                                        [...Array(5 - Math.round(movie.vote_average / 2))].map((ele, i) => (
                                                            <b key={i} style={{ fontSize: "1rem" }}>&#9734;</b>
                                                        ))
                                                    }
                                                </h4>
                                            </div>
                                            <p style={{ fontSize: '0.7rem' }}>Release Date: {dateV.getDate() +"-"+ dateV.getMonth() +"-"+ dateV.getFullYear()}</p>
                                            <p style={{ fontSize: '0.7rem' }} >Language:<b> {movie.original_language}</b></p>
                                        </div>
                                    </div>
                                )
                            }
                        }))
                    }
                </div>
                    :                        
            <div className="container d-flex justify-content-center" >
                <ReactLoading  type='bars' color='black' height={200} width={200} />
            </div> 
                // above code will only render if loadingState variable is false.    
            }
        </>      
    )
};
export default Tmdb;