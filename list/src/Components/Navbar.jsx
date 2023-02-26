import React from 'react';
import {Link} from "react-router-dom";
import '../App.css'

const Navbar = () => {
    return (
        <div className="link_block">
            <Link style={{color: "white"}} to='/'>Home</Link>
            <Link style={{color: "white"}} to='/menu'>Menu</Link>
            <Link style={{color: "white"}} to='about'>About</Link>
            <Link style={{color: "white"}} to='contact'>Contact</Link>
        </div>
    );
};

export default Navbar;