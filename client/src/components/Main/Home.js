import React from "react";
import { useState } from "react";
//import * as ReactBS from 'react-bootstrap';

import B1 from '../../images/Banner_images.jpeg';
import B2 from '../../images/Banner_images_1.png';
import B3 from '../../images/Banner_images_2.png';

import { Carousel } from "react-bootstrap";
import MoviesCards from "./moviesCards";


const Home = () => {
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
    };
  

    
    
    return (

        <>
           
            {/* <h1 className="text-center mt-3">Welcome to MovieStore</h1>
            <h2 className="text-center mt-3">Here you can watch the latest movies on the go</h2>
             // <ReactBS.Image className="img-fluid w-100"  src={HomeImg}></ReactBS.Image> */}
            
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-auto"
                        src={B3}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-auto"
                        src={B1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={B2}
                        alt="movies"
                        className="d-block w-auto"
                    />


                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
           
            <MoviesCards />
  


           
        </>
    );
    
};

export default Home;