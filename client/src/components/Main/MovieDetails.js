//importing hooks ..
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useState } from 'react';
//importing styles from css file 
import styles from '../../styles/Home.module.css';
// importing icons from react icons
import { BsPlayCircle } from 'react-icons/bs';
import { FaThumbsUp } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';
//importing button from react-bootstrap
import { Button } from 'react-bootstrap';


const MovieDetails = () => {
    // state variables for moviedeatals and video related data
    const [movieDetails, setMovieDetails] = useState();
    const [videoDetails, setVideosUrl] = useState();
    const [similar, setSimilar] = useState();
    //get the current id of the element
    const { detailId } = useParams(); 
    // use effect to run fetchTmtb function after first render.
    useEffect(() => {
        fetchTmdb();     
    },[]);

    const fetchTmdb = async () => { 
        //api fetching for movie,video and similar movies and storing in local state variable

        const data = await fetch(`https://api.themoviedb.org/3/movie/${detailId}/videos?api_key=c1ec99bca4a799530c16fb945021413e&language=en-US&page=1`);
        const moviesV = await data.json();
        setVideosUrl(moviesV.results);
        console.log(videoDetails);
        
        const data2 = await fetch(`https://api.themoviedb.org/3/movie/${detailId}?api_key=c1ec99bca4a799530c16fb945021413e&language=en-US&page=1`);
        const moviesD = await data2.json();
        setMovieDetails(moviesD);
        console.log(movieDetails);

        const data3 = await fetch(`https://api.themoviedb.org/3/movie/${detailId}/similar?api_key=c1ec99bca4a799530c16fb945021413e&language=en-US&page=1`);
        const moviesS = await data3.json();
        setSimilar(moviesS.results);        
    };

    // function to convert minutes to hours and minutes returned by api response
    function toHoursAndMinutes(totalMinutes) {
        const minutes = totalMinutes % 60;
        const hours = Math.floor(totalMinutes / 60);
      
        return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
      }
      // if single digit pad it with '0' example: 2:4 am  to 02:04 am
      function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
      }


    return (
        <>
            {/* conditional render */}
            { movieDetails &&
                <div className={`${styles.movieD} container-fluid d-md-flex text-white`} style={{backgroundImage: `url('https://image.tmdb.org/t/p/original${movieDetails.poster_path}')`}}>
                    <div className={`${styles.flexItem} d-flex justify-content-center  `}>
                        <img src={'https://image.tmdb.org/t/p/original' + movieDetails.poster_path}></img>
                    </div>
                    <div className={`${styles.flexItem}`}>
                        <h2>{movieDetails.title} ({movieDetails.release_date})</h2>
                        <h5>{movieDetails.tagline }</h5>
                        <h5>Genre: {movieDetails.genres.map(item => item.name + " ")} </h5>
                        <h6>User Rating : &nbsp; 
                       {/* converting vote average from api response to 5 star rating  */}
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
                        {/* // youtube link to play trailer.. */}
                        <div>
                            <a className='text-decoration-none' href={`https://youtu.be/${videoDetails[0].key}`} target="_blank">
                                <b className='h1'><BsPlayCircle /></b>
                                <i className='h4'> Play Trailer</i>
                            </a>
                        </div>
                        <br/><br/>
                        <h4>Movie Overview: </h4>
                        <h5>{movieDetails.overview}</h5>
                        <br />
                        <br />
                        <div className='d-flex justify-content-between p-3' >
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
            
            <h2 className="container mt-3"> Similar Movies </h2>
            <div className={`${styles.scr} d-flex flex-row flex-nowrap overflow-auto`} >
                    {
                        similar && similar.map(((movie, index) => {
                            if (index < 21) {
                                return (
                                    <div className={`${styles.card} m-2`} key={index} style={{ position: "relative" }}>
                                        {/* <a href={`movies/${movie._id}`}> */}
                                        <div style={{position:'relative'}}>
                                          {/* as movie poster has just the relative path so we need to append the follwing url with it. */}
                                            {/* <a href={`https://api.themoviedb.org/3/movie/${movie.id}?api_key=c1ec99bca4a799530c16fb945021413e&language=en-US&page=1`}> */}
                                            <a href={`/movies/tmdb/${movie.id}`}>
                                            <img src={'https://image.tmdb.org/t/p/original' + movie.poster_path} alt="Avatar" style={{ width: "100%" }}>  
                                            </img>
                                            </a>
                                            <div style={{ display:'flex',justifyContent:'space-between',position: 'absolute', bottom: '0px', color: 'white', left: '0px', width: "100%", backgroundColor: 'rgba(0,0,0,0.8)' }}>
                                                <Button   variant='hidden' size='lg' style={{color:'white' }}>
                                                    <FaThumbsUp />
                                                    <i style={{ paddingLeft:'0.2rem', fontSize:'0.8rem' }}> 2k </i>
                                                </Button>
                                                <Button   variant='hidden' size='lg' style={{color:'white' }}>
                                                    <MdFavorite />
                                                </Button>
                                            </div>
                                           </div>
                                        <div className={styles.container} style={{ position: "relative"}}>
                                            <div className={styles.mName_rating}>
                                                {/* Rating stars */}
                                                <h4 className='text-truncate ' style={{fontSize:"1rem", paddingTop:'0.5rem'}} >{movie.title}</h4>
                                                <h4>
                                                    {
                                                        [...Array(Math.round(movie.vote_average/2))].map((ele, i) => (
                                                            <b key={i} style={{ fontSize: "1rem", color: "#FDCC0D" }}>&#9733;</b>
                                                        ))
                                                    }
                                                    {
                                                        [...Array(5 - Math.round(movie.vote_average/2))].map((ele, i) => (
                                                            <b key={i} style={{ fontSize: "1rem" }}>&#9734;</b>
                                                        ))
                                                    }
                                                </h4>
                                            </div>
                                            <p style={{fontSize:'0.7rem'}}>Release Date: {movie.release_date}</p>
                                            <p style={{fontSize:'0.7rem'}} >Language:<b> {movie.original_language}</b></p>
                                        </div>
                                    </div>
                                )
                            }
                }))
            }
            </div>                
        </>
    )
}

export default MovieDetails;
