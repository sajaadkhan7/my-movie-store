
import { useEffect } from 'react';
//import {useDispatch, useSelector } from "react-redux";
//import { tmdbStore } from '../../actions/movies';
import { useParams } from "react-router-dom";
import { useState } from 'react';
//import * as ReactBS from 'react-bootstrap';
import styles from '../../styles/Home.module.css';



const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState();
    //get the current id of the element
    const { detailId } = useParams(); 
    
    // const movies = useSelector(state => state.Tmdb_store);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(tmdbStore("movie", "popular"));
    // },[]);

    useEffect(() => {
        fetchTmdb();   
        
    },[]);

    
    // const singleEle = movies.filter(item=>item.id==detailId);
    // console.log(singleEle);  
    // https://api.themoviedb.org/3/movie/639933/videos?api_key=c1ec99bca4a799530c16fb945021413e&language=en-US
    const fetchTmdb = async () => { 
        // const data = await fetch(`https://api.themoviedb.org/3/movie/${detailId}/videos?api_key=c1ec99bca4a799530c16fb945021413e&language=en-US&page=1`);
        // const moviesV = await data.json();
        
        // setVideosUrl(movieDetails);
        
        const data2 = await fetch(`https://api.themoviedb.org/3/movie/${detailId}?api_key=c1ec99bca4a799530c16fb945021413e&language=en-US&page=1`);
        const moviesD = await data2.json();
        
        setMovieDetails(moviesD);
       
        
        
    };


    return (
        <>
            {movieDetails &&
            
            
        <div className={`${styles.movieD} container-fluid d-flex`} style={{backgroundImage: `url('https://image.tmdb.org/t/p/original${movieDetails.poster_path}')`}}>
                    <div className={`${styles.flexItem}  `}><img src={'https://image.tmdb.org/t/p/original' + movieDetails.poster_path}></img></div>
                    <div className={`${styles.flexItem}`}>
                        <h2>{ movieDetails.title}</h2>

                    </div>
            </div>
        }
        </>
    )
}

export default MovieDetails;
