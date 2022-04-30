import React,{useEffect} from "react";
import Layout from "./components/Main/Layout";
import About from "./components/Main/About";
import Home from "./components/Main/Home";
import List from "./components/Main/List";
import Create from "./components/Main/Create";
import Details from "./components/Main/Details";
import ListTS from "./components/Main/ListTS";
import { useDispatch } from 'react-redux';
import { getMovies } from './actions/movies';
import { BrowserRouter,Routes,Route } from "react-router-dom";


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home/>}/>
                    <Route path="/list" element={<List />} />
                    <Route path="/listTS" element={<ListTS />} />
                    
                    <Route path="/create" element={<Create/>}/>
                    <Route path="/about" element={<About />} />
                    <Route path="/movies/:id" element={<Details />} /> 
                </Route>
            </Routes>
        </BrowserRouter>
       
    )
}

export default App;