import React from "react";
import { useSelector } from 'react-redux';


import * as RB from 'react-bootstrap';

const List = () => {
    const movies = useSelector(state => state.movies);
    return (
        <>
            <h1 className="text-center m-4 p-4">Movies</h1>
            <RB.ListGroup className="list-group list-group-flush ">
                
                {
                    movies.map((movie => {
                        return (<RB.ListGroupItem className="shadow p-4 m-auto w-75" key={movie.name}>
                            <a href={`movies/${movie._id}`}> {movie.name}</a>
                             </RB.ListGroupItem>);
                        }))
                    }
                
              

            </RB.ListGroup>
          
        </>
    )
};

export default List;