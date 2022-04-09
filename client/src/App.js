import React,{useEffect, useState} from "react";
import Layout from "./components/Main/Layout";
import About from "./components/Main/About";
import Home from "./components/Main/Home";
import List from "./components/Main/List";
import Create from "./components/Main/Create";
import Details from "./components/Main/Details";
//import { useDispatch } from 'react-redux';
//import { getPosts } from './actions/posts';
import { BrowserRouter,Routes,Route } from "react-router-dom";


const App = () => {
   
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home/>}/>
                    <Route path="/list"  element={<List/>}/>
                    <Route path="/create" element={<Create/>}/>
                    <Route path="/about" element={<About />} />
                    <Route path="/movies/:id" element={<Details />} /> 
                </Route>
            </Routes>
        </BrowserRouter>
       
    )
}

export default App;