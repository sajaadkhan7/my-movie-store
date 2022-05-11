
import { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css';
import { Button } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
//import { tmdbStore } from '../../actions/movies';
import { done, notdone } from '../../actions/movies';
import ReactLoading from 'react-loading';
const Tmdb = (props) => {
    const dispatch = useDispatch();
    const LoadingState = useSelector(stat => stat.LoadingState);
   
   // const abc = useSelector(state => state.Tmdb_store);
    const [moviess, setmoviess] = useState();
    useEffect(() => {
        fetchTmdb();
        // dispatch(tmdbStore(props.category,props.keywordQ));
        
    }, []);    
//fetching movie data from The Movie Database api using an async function and then updating the state.
    const fetchTmdb = async () => { 
        dispatch(notdone());
        const data = await fetch(`https://api.themoviedb.org/3/${props.category}/${props.keywordQ}?api_key=c1ec99bca4a799530c16fb945021413e&language=en-US&page=1`);
        const movies= await data.json();
        setmoviess(movies.results);
        dispatch(done());
      
    };
    // const fetchTvShows = async () => {
    //     const tv = await fetch('https://api.themoviedb.org/3/search/tv?api_key=c1ec99bca4a799530c16fb945021413e&language=en-US&page=1&query=popular&include_adult=false'); 
    //     const tvshowsJson = await tv.json();
    //     setmoviess(tvshowsJson.results);
    // };

    return (
        <>
            {
                LoadingState ? <div className={`${styles.scr} d-flex flex-row flex-nowrap overflow-auto`} >
                    {
                        moviess && moviess.map(((movie, index) => {
                            if (index < 21) {
                                return (
                                    <div className={`${styles.card} m-2`} key={index} style={{ position: "relative" }}>
                                        {/* <a href={`movies/${movie._id}`}> */}
                                        <div style={{ position: 'relative' }}>
                                            {/* as movie poster has just the relative path so we need to append the follwing url with it. */}
                                            {/* <a href={`https://api.themoviedb.org/3/movie/${movie.id}?api_key=c1ec99bca4a799530c16fb945021413e&language=en-US&page=1`}> */}
                                            <a href={`/movies/tmdb/${movie.id}`}>
                                                <img src={'https://image.tmdb.org/t/p/original' + movie.poster_path} alt="Avatar" style={{ width: "100%" }}>
                                                </img>
                                            </a>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', position: 'absolute', bottom: '0px', color: 'white', left: '0px', width: "100%", backgroundColor: 'rgba(0,0,0,0.8)' }}>
                                                <Button variant='hidden' size='lg' style={{ color: 'white' }}>
                                                    <FaThumbsUp />
                                                    <i style={{ paddingLeft: '0.2rem', fontSize: '0.8rem' }}> 2k </i>
                                                </Button>
                                                <Button variant='hidden' size='lg' style={{ color: 'white' }}>
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
                    
            }
        </>      
    )
};

export default Tmdb;