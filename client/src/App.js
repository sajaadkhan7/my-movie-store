//importing required react 
import React, { useEffect } from "react";
//importing user defined components
import Layout from "./components/Main/Layout";
import About from "./components/Main/About";
import Home from "./components/Main/Home";
import List from "./components/Main/List";
import Create from "./components/Main/Create";
import Details from "./components/Main/Details";
import ListTS from "./components/Main/ListTS";
import MovieDetails from "./components/Main/MovieDetails";
// to dispatch an action use react-redux useDispatch
import { useDispatch } from 'react-redux';
//browser router components
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import getMovies function from actions 
import { getMovies } from './actions/movies';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home/>}/>
                    <Route path="/list" element={<List />} />
                    <Route path="/movies/tmdb/:detailId" element={<MovieDetails/>} />
                    <Route path="/tvshows" element={<ListTS/>} />
                    <Route path="/create" element={<Create/>}/>
                    <Route path="/about" element={<About />} />
                    <Route path="/movies/:id" element={<Details />} /> 
                </Route>
            </Routes>
        </BrowserRouter>
        </>
       
    )
}

export default App;