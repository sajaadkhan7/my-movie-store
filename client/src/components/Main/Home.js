import React from "react";
import * as ReactBS from 'react-bootstrap';
import HomeImg from '../../images/img.jpg';

const Home = () => {
   
    return (
        <>
           
            <h1 className="text-center mt-3">Welcome to MovieStore</h1>
            <h2 className="text-center mt-3">Here you can watch the latest movies on the go</h2>
              <ReactBS.Image className="img-fluid w-100"  src={HomeImg}></ReactBS.Image>
           
        </>
    )
};

export default Home;