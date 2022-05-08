import styles from '../../styles/Home.module.css';
// import avatarImg from '../../images/img_avatar.png';
//import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';
import * as RB from 'react-bootstrap';

import Tmdb from './Tmdb';

const MoviesCards2 = () => {
   // const movies = useSelector(state => state.movies);

    // use state variable to filter data according to the search term
    const [filteredData, setMovie] = useState("");
    //const [searchTerm, setsearchTerm] = useState("");
    const [searchTerm2, setsearchTerm2] = useState("");

    

    // useEffect(() => {
    //     setMovie(movies);
    // }, [movies, searchTerm]);
    
    
// https://api.themoviedb.org/3/search/movie?api_key=c1ec99bca4a799530c16fb945021413e&language=en-US&query=lucy&page=1&include_adult=false
   
// handling the search button using handle submit function
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setMovie(filteredData && filteredData.filter(function (el)
    //     {         
    //         return el.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //         el.director.toLowerCase().includes(searchTerm.toLowerCase())
    //     }
    //      ));  
    // }

    const handleSubmit2 = (e) => {
        e.preventDefault();
        fetchData();
    }
    const fetchData = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=c1ec99bca4a799530c16fb945021413e&language=en-US&query=${searchTerm2}&page=1&include_adult=false`);
        const movies= await data.json();
        setMovie(movies.results);
    }
    const Search = () => {
        return (
            <>
            <h2 className="container mt-3"> Search Results </h2>
            <div className={`${styles.scr} d-flex flex-row flex-nowrap overflow-auto`} >
                {
                   
                    filteredData && filteredData.map(((movie, index) => {
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
    
    return (
        <>
            
              {/* <RB.Form  onSubmit={handleSubmit}>
                <RB.Form.Group className="mb-3 w-50 m-auto d-flex" controlId="formbasicsearch">
                    <RB.Form.Control className="me-2 form-control-lg " type="text"
                        placeholder="Search for Movie..."
                        value={searchTerm}
                        onChange={(e)=>setsearchTerm(e.target.value)}                   
                    />
                     <RB.FormControl  className="btn btn-success w-25" type="submit" value="Search"></RB.FormControl>
                </RB.Form.Group> 
            </RB.Form> */}
              <RB.Form  onSubmit={handleSubmit2}>
                <RB.Form.Group className="mb-3 w-50 m-auto d-flex" controlId="formbasicsearch">
                    <RB.Form.Control className="me-2 form-control-lg " type="text"
                        placeholder="Search for Movie..."
                        value={searchTerm2}
                        onChange={(e)=>setsearchTerm2(e.target.value)}                   
                    />
                     <RB.FormControl  className="btn btn-success w-25" type="submit" value="Search"></RB.FormControl>
                </RB.Form.Group> 
            </RB.Form>
              {/* only show search component if the search field is not empty. */}
            {
                searchTerm2 && <Search />
            }
            <h2 className="container mt-3"> Upcoming Movies </h2>
            <Tmdb keywordQ="upcoming" category="movie"/>
            <h2 className="container mt-3"> Popular Movies </h2>
            <Tmdb keywordQ="popular" category="movie" />
            
    </>
    )
};

export default MoviesCards2;