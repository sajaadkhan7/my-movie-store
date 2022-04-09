import React from "react";

import * as RB from 'react-bootstrap';

const List = () => {
    return (
        <>
            <h1 className="text-center m-4 p-4">Movies</h1>
            <RB.ListGroup className="list-group list-group-flush ">
                
                {/* {
                    postss.map((movie => {
                        return (<RB.ListGroupItem className="shadow p-4 m-auto w-75" key={movie.name}>
                            <a href={`movies/${movie._id}`}> {movie.name}</a>
                             </RB.ListGroupItem>);
                        }))
                    } */}
                
                <RB.ListGroupItem>
                    movie list
                </RB.ListGroupItem>
                <RB.ListGroupItem>
                    movie list2
                </RB.ListGroupItem>

            </RB.ListGroup>
          
        </>
    )
};

export default List;