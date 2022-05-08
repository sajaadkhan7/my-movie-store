
import { useEffect } from 'react';
//import {useDispatch, useSelector } from "react-redux";
//import { tmdbStore } from '../../actions/movies';
import { useParams } from "react-router-dom";
import { useState } from 'react';
//import * as ReactBS from 'react-bootstrap';
import styles from '../../styles/Home.module.css';



const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState();
    const [videoDetails, setVideosUrl] = useState();
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
        const data = await fetch(`https://api.themoviedb.org/3/movie/${detailId}/videos?api_key=c1ec99bca4a799530c16fb945021413e&language=en-US&page=1`);
        const moviesV = await data.json();
        
        setVideosUrl(moviesV.results);
        console.log(videoDetails);
        
        const data2 = await fetch(`https://api.themoviedb.org/3/movie/${detailId}?api_key=c1ec99bca4a799530c16fb945021413e&language=en-US&page=1`);
        const moviesD = await data2.json();
        
        setMovieDetails(moviesD);
        console.log(movieDetails);


       

        
        
    };
    function toHoursAndMinutes(totalMinutes) {
        const minutes = totalMinutes % 60;
        const hours = Math.floor(totalMinutes / 60);
      
        return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
      }
      
      function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
      }


    return (
        <>
            {movieDetails &&
            
            
        <div className={`${styles.movieD} container-fluid d-flex text-white`} style={{backgroundImage: `url('https://image.tmdb.org/t/p/original${movieDetails.poster_path}')`}}>
                    <div className={`${styles.flexItem} d-flex justify-content-center `}><img src={'https://image.tmdb.org/t/p/original' + movieDetails.poster_path}></img></div>
                    <div className={`${styles.flexItem}`}>
                        <h2>{movieDetails.title} ({movieDetails.release_date})</h2>
                        <h5>{movieDetails.tagline }</h5>
                        <h5>Genre: {movieDetails.genres.map(item => item.name + " ")} </h5>
                        
                        <h6>User Rating : &nbsp; 
                                                    {
                                                        [...Array(Math.round(movieDetails.vote_average/2))].map((ele, i) => (
                                                            <b key={i} style={{ fontSize: "1rem", color: "#FDCC0D" }}>&#9733;</b>
                                                        ))
                                                    }
                                                    {
                                                        [...Array(5 - Math.round(movieDetails.vote_average/2))].map((ele, i) => (
                                                            <b key={i} style={{ fontSize: "1rem" }}>&#9734;</b>
                                                        ))
                                                    }
                        </h6>
                        <div><a href={`https://youtu.be/${videoDetails[0].key}`}>Play Trailer</a></div>
                        <br/><br/>
                        <h4>Movie Overview: </h4>
                        <h5>{movieDetails.overview}</h5>
                        <br />
                        <br />
                        <div className='d-flex justify-content-between p-5'>
                            <div>
                                <h4>Duration</h4>
                                <h5>{toHoursAndMinutes(movieDetails.runtime) }</h5>
                            </div>
                            <div><h4>Language</h4>
                                <h5>{movieDetails.spoken_languages[0].name }</h5>
                            </div>
                            <div><h4>Release Status</h4>
                                <h5>{ movieDetails.status}</h5>
                            </div>

                        
                            
                        </div>
                    </div>
            </div>
        }
        </>
    )
}

export default MovieDetails;
