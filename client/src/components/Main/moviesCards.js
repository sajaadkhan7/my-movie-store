//import styles from css file  and avatar image 
import styles from '../../styles/Home.module.css';
import avatarImg from '../../images/img_avatar.png';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
//importing user defined component..
import Tmdb from './Tmdb';

//import  component from react bootstrap
import { Button } from 'react-bootstrap';

//import icons from react icons dependency
import { FaThumbsUp } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';

const MoviesCategory = () => {
  const movies = useSelector(state => state.movies);
  const [filteredData, setMovie] = useState();
  //storing global data in local state using useeffect which will re render every time movies variable get updated.
  useEffect(() => {
      setMovie(movies);
  }, [movies]);

  return (
    <div className='container-fluid'>
       <h2 className="container mt-3"> Favourites </h2>
 <div className={`${styles.scr} d-flex flex-row flex-nowrap overflow-auto`} >
              {
                //   conditional rendering
                  filteredData && filteredData.map(((movie, index) => {
                    const dateV = new Date(movie.release_date);
                        if (index < 50) {
                            return (
                                <div className={`${styles.card} m-2`} key={index} style={{ position: "relative" }}>
                                    <div style={{ position: 'relative' }}>
                                    <a href={`/movies/tmdb/${movie.id}`}>
                                        <img src={'https://image.tmdb.org/t/p/original' + movie.poster_path} alt="Avatar" style={{ width: "100%" }}></img>
                                    </a>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', position: 'absolute', bottom: '0px', color: 'white', left: '0px', width: "100%", backgroundColor: 'rgba(0,0,0,0.8)' }}>
                                                <Button  variant='hidden' size='lg' style={{ color: 'white' }}>
                                                    <FaThumbsUp />
                                                    <i style={{ paddingLeft: '0.2rem', fontSize: '0.8rem' }}> {movie.likes} </i>
                                                </Button>
                                                {/* <Button onClick={(e)=>{addToFav(e,movie)}} variant='hidden' size='lg' style={{ color: 'white' }}>
                                                    <MdFavorite />
                                                </Button> */}
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