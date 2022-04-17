import React from "react";
import { useState } from "react";
//import * as ReactBS from 'react-bootstrap';
import styles from '../../styles/Home.module.css';

import B1 from '../../images/Banner_images.jpeg';
import B2 from '../../images/Banner_images_1.png';
import B3 from '../../images/Banner_images_2.png';

import { Button, Carousel } from "react-bootstrap";
import MoviesCards from "./moviesCards";


const Home = () => {
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
    };
  

    
    
    return (

        <>

            
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className={`w-auto ${styles.onHover} ${styles.tran}`}
                        src={B3}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Doctor Strange in the Multiverse of madness</h3>
                        <a href="#" className="btn btn-light" >View Details</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                      className={`w-auto ${styles.onHover} ${styles.tran}`}
                        src={B1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Sonic 2 The Hedgehog</h3>
                        <a href="#" className="btn btn-light" >View Details</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={B2}
                        alt="movies"
                        className={`w-auto ${styles.onHover} ${styles.tran}`}
                    />
                    <Carousel.Caption>
                        <h3>Fantastic Beasts The Secrets of Dumbledore</h3>
                        <a href="#" className="btn btn-light" >View Details</a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
           
            <MoviesCards />
  
           
        </>
    );
    
};

export default Home;