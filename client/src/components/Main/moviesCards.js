
import styles from '../../styles/Home.module.css';
import avatarImg from '../../images/img_avatar.png';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Tmdb from './Tmdb';



const MoviesCategory = () => {
  const movies = useSelector(state => state.movies);
  const [filteredData, setMovie] = useState();
  //const [searchTerm, setsearchTerm] = useState("");
  
  useEffect(() => {
      setMovie(movies);
  }, [movies]);

  return (
    <div className='container'>
       <h2 className="container mt-3"> Favourites </h2>
 <div className={`${styles.scr} d-flex flex-row flex-nowrap overflow-auto`} >
                {
                    filteredData && filteredData.map(((movie, index) => {
                        if (index < 15) {
                            return (
                        
                    
                                <div className={`${styles.card} m-2`} key={index} style={{ position: "relative" }}>
                                    {/* <div className={styles.editDelete}>
                                        <button className="btn btn-secondary" type="button">Edit</button>
                                        <button className="btn btn-danger" type="button">delete</button>
                                    </div> */}
                                    <a href={`movies/${movie._id}`}>
                                        <img src={avatarImg} alt="Avatar" style={{ width: "100%" }}></img>
                                    </a>
                                    <div className={styles.container} style={{ position: "relative" }}>
                                        <div className={styles.mName_rating}>
                                            {/* Rating stars */}
                                            <h4 className='text-truncate '>{movie.name}</h4><h4>
                                                {
                                                    [...Array(movie.rating)].map((ele, i) => (
                                                        <b key={i} style={{ fontSize: "1em", color: "#FDCC0D" }}>&#9733;</b>
                                                    ))
                                                }
                                                {
                                                    [...Array(5 - movie.rating)].map((ele, i) => (
                                                        <b key={i} style={{ fontSize: "1em" }}>&#9734;</b>
                                                    ))
                                                }
                                            </h4>
                                        </div>
                                        <p>Director : {movie.director}</p>
                                        <p>Release Date: {movie.release_Date}</p>
                                    </div>
                                </div>
                            )
                        }
            }))
        }
          </div>
          




            <div className='container mt-3 d-flex flex-row-reverse'>
                <a href='/list' className='btn btn-dark' variant="dark">Show More..</a>    
            </div>

        </div>
    );
};
export { MoviesCategory };

const MoviesCards = () => {
 
    return (
        <>
      
                    
             <h2 className="container mt-3"> Featured Movies </h2>
            <Tmdb keywordQ="upcoming" category="movie"/>
             <h2 className="container mt-3"> Latest Movies </h2>
            <Tmdb keywordQ="now_playing" category="movie" />
            <MoviesCategory />
           
        
          
        </>  
    );
}

export default MoviesCards;