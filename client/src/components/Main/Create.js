import React,{useState} from "react";
import * as RBF from 'react-bootstrap';
import { useDispatch  } from "react-redux";
import { createMovie } from "../../actions/movies";
const Create = () => {
    const [postData, setPostData] = useState({
        name: '',
        director: '',
        release_Date: '',
        rating: 0,
        actor: {
            actor_name: '',
            age: 0,
            status: ''
        }
    });
    
 
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();

        
        alert('Movie has been created.');
        
        dispatch(createMovie(postData));
        window.location.assign('/list');
    }


    return (
        <>
            
            <h2 className="m-auto text-center p-4 m-3">Create New Movie</h2>
            <RBF.Form className="w-75 m-auto" onSubmit={handleSubmit}>
                <RBF.FormGroup  className="mb-4">
                    <RBF.FormLabel>Movie Name: </RBF.FormLabel>
                    <RBF.FormControl required
                        placeholder="Enter movie name..." type="text"
                        value={postData.name}
                        onChange={(e)=>setPostData({...postData,name:e.target.value})} >
            </RBF.FormControl>
            
            </RBF.FormGroup>


                <RBF.FormGroup className="mb-4">
                    <RBF.FormLabel>Director Name: </RBF.FormLabel>
                    <RBF.FormControl placeholder="Enter Director name..." type="text" required
                     value={postData.director}
                     onChange={(e)=>setPostData({...postData,director:e.target.value})}
                    ></RBF.FormControl>
                </RBF.FormGroup>


                <RBF.FormGroup className="mb-4">
                    <RBF.FormLabel>Rating : </RBF.FormLabel>
                    <RBF.FormControl placeholder="Enter Movie Rating..." type="number" min={0} max={5}
                        
                     value={postData.rating}
                     onChange={(e)=>setPostData({...postData,rating:e.target.value})}
                    ></RBF.FormControl>
                </RBF.FormGroup>


                <RBF.FormGroup className="mb-4">
                    <RBF.FormLabel>Release Date: </RBF.FormLabel>
                    <RBF.FormControl placeholder="Enter Release Date..." type="date" required
                     value={postData.release_Date}
                     onChange={(e)=>setPostData({...postData,release_Date:e.target.value})}
                    ></RBF.FormControl>
                </RBF.FormGroup>

                
                <RBF.FormGroup className="mb-4">
                    <RBF.FormLabel>Actor Name: </RBF.FormLabel>
                    <RBF.FormControl placeholder="Enter actor name..." type="text"
                        value={postData.actor.actor_name}
                        onChange={(e) => setPostData({ ...postData, actor: { actor_name: e.target.value ,status:postData.actor.status, age: postData.actor.age}})}
                    ></RBF.FormControl>
                </RBF.FormGroup>
                

               <RBF.FormGroup className="mb-4">
                    <RBF.FormLabel>
                        Actor Age: </RBF.FormLabel>
                    <RBF.FormControl placeholder="Enter Age..." type="number"
                     value={postData.actor.age}
                        onChange={(e) => setPostData({ ...postData, actor: { age: e.target.value,status: postData.actor.status,actor_name:postData.actor.actor_name }})}
                    ></RBF.FormControl>
                </RBF.FormGroup>


                <RBF.FormGroup className="mb-4">
                    <RBF.FormLabel>Married Status: </RBF.FormLabel>
                    <RBF.FormControl placeholder="Enter status..." type="text"
                     value={postData.actor.status}
                        onChange={(e) => setPostData({ ...postData, actor: { status: e.target.value, age: postData.actor.age ,actor_name:postData.actor.actor_name }})} >
                        </RBF.FormControl>
                </RBF.FormGroup>
                <RBF.FormGroup className="mb-4">
                <RBF.FormControl  className="btn btn-success" type="submit"></RBF.FormControl>
                </RBF.FormGroup>
                
            </RBF.Form>
            
        </>
            
    )
};

export default Create;