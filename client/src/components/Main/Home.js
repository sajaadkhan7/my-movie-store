//import required react components
import React from "react";
import { useState } from "react";
//import style from css file
import styles from '../../styles/Home.module.css';
// import banner images
import B1 from '../../images/Banner_images.jpeg';
import B2 from '../../images/Banner_images_1.png';
import B3 from '../../images/Banner_images_2.png';
// import carousel component from react bootstrap
import { Carousel } from "react-bootstrap";
//import user defined component
import MoviesCards from "./moviesCards";
//import loading component from react-loading
import ReactLoading from 'react-loading';
// import useSelector to access global state managed by react redux
import { useSelector } from "react-redux";


const Home = () => {
    // loading state from global store
    const LoadingState = useSelector(state => state.LoadingState);
        const [index, setIndex] = useState(0);
       // for index focus
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
                        <a href="/movies/6262a2fbb04e07c484152922" className="btn btn-light" >View Details</a>
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
                        <a href="/movies/6262a6cdb04e07c484152939" className="btn btn-light" >View Details</a>
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
                        <a href="/movies/6262a748b04e07c484152947" className="btn btn-light" >View Details</a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            // component render
           <MoviesCards/>
        </>
    );
    
};

export default Home;