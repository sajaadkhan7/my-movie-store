import styles from '../../styles/Home.module.css';
import avatarImg from '../../images/img_avatar.png';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import * as RB from 'react-bootstrap';


const MoviesCards2 = () => {
    const movies = useSelector(state => state.movies);
    const [filteredData, setMovie] = useState();
    const [searchTerm, setsearchTerm] = useState("");
    
    useEffect(() => {
        setMovie(movies);
    },[movies,searchTerm]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setMovie(filteredData && filteredData.filter(function (el)
        {
          
            return el.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            el.director.toLowerCase().includes(searchTerm)
        }
        ));
       
    }
    
  
   
    return (
        <>
              <RB.Form  onSubmit={handleSubmit}>
                <RB.Form.Group className="mb-3 w-75 m-auto" controlId="formbasicsearch">
                    <RB.Form.Control className="form-control-lg " type="text"
                        placeholder="Search for Movie..."
                        value={searchTerm}
                        onChange={(e)=>setsearchTerm(e.target.value)}                   
                    />
                     <RB.FormControl  className="btn btn-success" type="submit"></RB.FormControl>
                </RB.Form.Group>
               
               
               
            </RB.Form>
             <div className="d-flex justify-content-around flex-wrap">
        {
           filteredData && filteredData.map(((movie,index) => {
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
                                <h4>{movie.name}</h4><h4>
                                    {
                                        [...Array(movie.rating)].map((ele, i) => (
                                            
                                            <b key={i} style={{ fontSize: "1em",color:"#FDCC0D"}}>&#9733;</b>                                     
                                                                          
                                        ))
                                    }       
                                    {
                                        [...Array(5 - movie.rating)].map((ele, i) => (
                                            <b key={i} style={{ fontSize: "1em"}}>&#9734;</b>                                     
                                        ))
                                    }       
                                
                                </h4>
                </div>
                 <p>Director : {movie.director}</p>
                            <p>Release Date: {movie.release_Date}</p>
                            </div>
                    </div> 
                        
                    
                )
            }))
        }
        </div>
    </>
    )
};

export default MoviesCards2;