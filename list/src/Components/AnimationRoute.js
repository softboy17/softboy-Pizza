import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import Contact from "./Contact";
import About from "./About";
import {AnimatePresence} from "framer-motion";

const AnimationRoute = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
        <Routes location={location} key = {location.pathname}>
            <Route path='/' element={<Home/>}/>
            <Route path='/menu' element={<Menu/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/about' element={<About/>}></Route>
        </Routes>
        </AnimatePresence>
    );
};

export default AnimationRoute;