
import * as ReactBS from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { deleteMovie, updateMovie } from '../../actions/movies';
import { useState } from 'react';


const Details = () => {
   // const [element, setEle] = useState({});
    //get the current id of the element
    const [showHide, setShowhide] = useState(false);
    const dispatch = useDispatch();

    const { id } = useParams(); 
    const movies = useSelector(state => state.movies); 
    const singleEle = movies.find(element => element._id === id);

    const [postData, setPostData] = useState({
        name: '',
        director: '',
        rating: 0,
        release_Date: '',
        actor: {
            actor_name: '',
            age: 0,
            status: ''
        }
    });

   
    const handleSubmitUp = (e) => {
        e.preventDefault();
        alert('Movie has been updated.');
        console.log(postData);
        dispatch(updateMovie(singleEle._id, postData));
        setShowhide(false);
        
    }

    const onDelete = () => {

        if (true) {
            dispatch(deleteMovie(id));
            alert('deleted');
            window.location.assign('/list');
        }
        else return;
    }

    const OnEdit = () => {  
        setShowhide(true);
        setPostData({
            name: singleEle.name,
            director: singleEle.director,
            rating: singleEle.rating,
            release_Date: singleEle.release_Date,
            actor: {
                actor_name: singleEle.actor.actor_name,
                age: singleEle.actor.age,
                status: singleEle.actor.status
            }
        });
        
        console.log('in onEdit'); 
    }




    return (
        <>
            { 
             singleEle &&
            <div>
            <h1 className="text-center">{singleEle.name}</h1>
                        <ReactBS.Table className="m-auto w-75" striped bordered hover>
                            <tbody>
                    <tr>
                        <th scope="row">Movie Name:</th>
                        <td>{singleEle.name}</td>
                    </tr>
                    <tr>
                        <th scope="row">Director:</th>
                        <td>{singleEle.director}</td>
                    </tr>
                    <tr>
                        <th scope="row">Actor Name:</th>
                        <td>{singleEle.actor.actor_name}</td>
                    </tr>
                    <tr>
                        <th scope="row">Actor Age:</th>
                        <td>{singleEle.actor.age}</td>
                    </tr>
                    <tr>                
                        <th scope="row">Status:</th>
                        <td>{singleEle.actor.status}</td>
                    </tr>
                    <tr>
                        <th scope="row">Rating:</th>
                        <td>{singleEle.rating}</td>
                    </tr>
                    <tr>
                        <th scope="row">Release Date:</th>
                    <td>{ singleEle.release_Date}</td>
                                </tr>
                                </tbody>
                       
                        </ReactBS.Table>
                        <div className='mt-2 text-center m-auto w-50'>

                        <ReactBS.Button  variant="success" onClick={OnEdit}>Edit</ReactBS.Button>{' '}
                        <ReactBS.Button variant="danger" onClick={onDelete}>Delete</ReactBS.Button>{' '}
                        </div>
                </div>
                
            }
            
                {showHide &&  <div>
                     <h2 className="m-auto text-center p-4 m-3"> Update New Movie</h2>
                     <ReactBS.Form className="w-75 m-auto" onSubmit={handleSubmitUp}>
                         <ReactBS.FormGroup className="mb-4">
                             <ReactBS.FormLabel>Movie Name: </ReactBS.FormLabel>
                             <ReactBS.FormControl
                                 placeholder="Enter movie name..." type="text"
                            value={postData.name}
                            
                                 onChange={(e)=>setPostData({...postData,name:e.target.value})} >
                     </ReactBS.FormControl>
                     
                     </ReactBS.FormGroup>
         
         
                         <ReactBS.FormGroup className="mb-4">
                             <ReactBS.FormLabel>Director Name: </ReactBS.FormLabel>
                             <ReactBS.FormControl placeholder="Enter Director name..." type="text"
                              value={postData.director}
                              onChange={(e)=>setPostData({...postData,director:e.target.value})}
                             ></ReactBS.FormControl>
                         </ReactBS.FormGroup>
         
         
                         <ReactBS.FormGroup className="mb-4">
                             <ReactBS.FormLabel>Rating : </ReactBS.FormLabel>
                             <ReactBS.FormControl placeholder="Enter Movie Rating..." type="number" min={0} max={5}
                              value={postData.rating}
                              onChange={(e)=>setPostData({...postData,rating:e.target.value})}
                             ></ReactBS.FormControl>
                         </ReactBS.FormGroup>
         
         
                         <ReactBS.FormGroup className="mb-4">
                             <ReactBS.FormLabel>Release Date: </ReactBS.FormLabel>
                             <ReactBS.FormControl placeholder="Enter Release Date..." type="date"
                              value={postData.release_Date}
                              onChange={(e)=>setPostData({...postData,release_Date:e.target.value})}
                             ></ReactBS.FormControl>
                         </ReactBS.FormGroup>
         
                         
                         <ReactBS.FormGroup className="mb-4">
                             <ReactBS.FormLabel>Actor Name: </ReactBS.FormLabel>
                             <ReactBS.FormControl placeholder="Enter actor name..." type="text"
                                 value={postData.actor.actor_name}
                                 onChange={(e) => setPostData({ ...postData, actor: { actor_name: e.target.value ,status:postData.actor.status, age: postData.actor.age}})}
                             ></ReactBS.FormControl>
                         </ReactBS.FormGroup>
                         
         
                        <ReactBS.FormGroup className="mb-4">
                             <ReactBS.FormLabel>
                                 Actor Age: </ReactBS.FormLabel>
                             <ReactBS.FormControl placeholder="Enter Age..." type="number"
                              value={postData.actor.age}
                                 onChange={(e) => setPostData({ ...postData, actor: { age: e.target.value,status: postData.actor.status,actor_name:postData.actor.actor_name }})}
                             ></ReactBS.FormControl>
                         </ReactBS.FormGroup>
         
         
                         <ReactBS.FormGroup className="mb-4">
                             <ReactBS.FormLabel>Married Status: </ReactBS.FormLabel>
                             <ReactBS.FormControl placeholder="Enter status..." type="text"
                              value={postData.actor.status}
                                 onChange={(e) => setPostData({ ...postData, actor: { status: e.target.value, age: postData.actor.age ,actor_name:postData.actor.actor_name }})} >
                                 </ReactBS.FormControl>
                         </ReactBS.FormGroup>
                         <ReactBS.FormGroup className="mb-4">
                         <ReactBS.FormControl  className="btn btn-success" type="submit"></ReactBS.FormControl>
                         </ReactBS.FormGroup>
                         
                     </ReactBS.Form>
                    </div>
                }
        
        </>
    )
}

export default Details;
