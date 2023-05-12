import React from "react";
import * as ReactBS from 'react-bootstrap';
import HomeImg from '../../images/img2.jpg';

const About = () => {
   
    return (
        <>
        {/* <h1 className="text-center m-3">About Us</h1> */}
            <ReactBS.Image className="img-fluid w-100"  src={HomeImg}></ReactBS.Image>
            <h2>This website is using the content from <a href='https://www.themoviedb.org/' >https://www.themoviedb.org/</a>. This website has no means to earn anything. It is just a website that I created for sole purpose of learning to create website using MERN stack with api use. </h2>
        </>
    )
};
export default About;
