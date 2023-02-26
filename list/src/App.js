import React from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import AnimationRoute from "./Components/AnimationRoute";
import logo from './assets/logo.jpg';
import {Link} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <header className="header">
                <div className="heading">
                    <div className="logo_header">
                        <Link to='/'>
                            <img src={logo} alt="logoHeader"/>
                        </Link>
                    </div>
                    <Navbar/>
                </div>
            </header>
            <AnimationRoute/>
        </div>
    );
}

export default App;
