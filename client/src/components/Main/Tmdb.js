
import { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css';


const Tmdb = (props) => {
    const [moviess, setmoviess] = useState();
    useEffect(() => {
        fetchTmdb();
    }, []);    
//fetching movie data from The Movie Database api using an async function and then updating the state.
    const fetchTmdb = async () => { 
        const data = await fetch(`https://api.themoviedb.org/3/${props.category}/${props.keywordQ}?api_key=c1ec99bca4a799530c16fb945021413e&language=en-US&page=1`);
        const movies= await data.json();
        setmoviess(movies.results);
    };
    return (
        <>
             <div className={`${styles.scr} d-flex flex-row flex-nowrap overflow-auto`} >
                    {
                        moviess && moviess.map(((movie, index) => {
                            if (index < 21) {
                                return (
                                    <div className={`${styles.card} m-2`} key={index} style={{ position: "relative" }}>
                                        
                                        {/* <a href={`movies/${movie._id}`}> */}
                                        <a href='#'>
                                          {/* as movie poster has just the relative path so we need to append the follwing url with it. */}
                                            <img src={'https://image.tmdb.org/t/p/original'+movie.poster_path} alt="Avatar" style={{ width: "100%" }}></img>
                                           </a>
                                        <div className={styles.container} style={{ position: "relative" }}>
                                            <div className={styles.mName_rating}>
                                                {/* Rating stars */}
                                                <h4 className='text-truncate ' >{movie.title}</h4><h4>
                                                    {
                                                        [...Array(Math.round(movie.vote_average/2))].map((ele, i) => (
                                                            <b key={i} style={{ fontSize: "1em", color: "#FDCC0D" }}>&#9733;</b>
                                                        ))
                                                    }
                                                    {
                                                        [...Array(5 - Math.round(movie.vote_average/2))].map((ele, i) => (
                                                            <b key={i} style={{ fontSize: "1em" }}>&#9734;</b>
                                                        ))
                                                    }
                                                </h4>
                                            </div>
                                            <p>Release Date: {movie.release_date}</p>
                                            <p>Language:<b> {movie.original_language}</b></p>
                                        </div>
                                    </div>
                                )
                            }
                }))
            }
            </div>                
        </>      
    )
};

export default Tmdb;