import React from "react";
import * as ReactBS from 'react-bootstrap';
import HomeImg from '../../images/img2.jpg';

const About = () => {
   
    return (
        <>
        <h1 className="text-center m-3">About</h1>
            <ReactBS.Image className="img-fluid w-100"  src={HomeImg}></ReactBS.Image>
        </>
    )
};

export default About;