import React from 'react';
import "../App.css"
import Menu1 from "../assets/menu1.png"
import Menu2 from "../assets/menu2.png"
import Menu5 from "../assets/menu5.png"
import Menu6 from "../assets/menu4.png"
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const Menu = () => {
    const menu = [
        {
            id: 0,
            img: Menu1,
            title: "Margaritta pizza",
            description: "A classic pizza with tomato sauce, mozzarella cheese, and fresh basil.",
            price: 250,
            currency: '$'
        },
        {
            id: 1,
            img: Menu2,
            title: "Pepperoni pizza",
            description: "A classic pizza with tomato sauce, mozzarella cheese, and spicy pepperoni.",
            price: 350,
            currency: '$'
        },
        {
            id: 2,
            img: Menu5,
            title: "Home pizza",
            description: "A pizza with tomato sauce, mozzarella cheese, ham, and pineapple.",
            price: 20,
            currency: '$'
        },
        {
            id: 3,
            img: Menu6,
            title: "4 Season Pizza",
            description: "A pizza with tomato sauce, mozzarella cheese, ham, and pineapple.",
            price: 1250,
            currency: '$'
        },
    ]


    return (
        <motion.div className="menu"
                    intial={{width: 0}}
                    animate={{width: "100%"}}
                    exit={{x: window.innerWidth, transition: {duration: 0.4}}}>
            <h1 className="menu_title">Our Menu</h1>
            <div className="menu_block">
                <div className="menu_items">
                    {
                        menu.map(item => {
                            return (
                                <div className="menu_item">
                                    <div className="item_image">
                                        <img src={item.img} alt={`pizza-${item.img}`}/>
                                    </div>
                                    <div className="item_character">
                                        <h1>{item.title}</h1>
                                        <p>{item.description}</p>
                                        <p>{item.price} <span>{item.currency}</span></p>
                                        <button>order</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </motion.div>
    );
};

export default Menu;