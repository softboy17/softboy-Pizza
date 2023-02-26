import React from 'react';
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const history = useNavigate();

    return (
        <motion.div className='Home'
        intial = {{width: 0}}
        animate = {{width: "100%"}}
        exit = {{x: window.innerWidth, transition: {duration: 0.4}}}>
            <div className="home_title">
            <h1>SoftBoy's Pizza</h1>
            <h4 style={{fontFamily: " system-ui", fontWeight: "400"}}>PIZZA TO FIT ANY TASTE</h4>
                <button className="home_btn" onClick={() => history('/menu')}>ORDER NOW</button>
            </div>

        </motion.div>
    );
};

export default Home;