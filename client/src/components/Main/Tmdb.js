
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


const Tmdb = (props) => {
    const dispatch = useDispatch();
    // accessing loading state from global store
    const LoadingState = useSelector(stat => stat.LoadingState);   
    // functional level state storage
    const [moviess, setmoviess] = useState();

    //use effect to do things after render . it is also known for side effects
    // run fetchTmdb function after first render.
    useEffect(() => {
        fetchTmdb();
    }, []);    

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
            likes: 12,
            fav:true
        };
        // making axios post request.
        axios.post(url, moviTemp);  
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
                                                <Button variant='hidden' size='lg' style={{ color: 'white' }}>
                                                    <FaThumbsUp />
                                                    <i style={{ paddingLeft: '0.2rem', fontSize: '0.8rem' }}> 2k </i>
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
                                            <p style={{ fontSize: '0.7rem' }}>Release Date: {movie.release_date}</p>
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