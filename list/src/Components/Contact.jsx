import React, {useState} from 'react';
import {motion} from "framer-motion";
import axios from "../axios";

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const sendMessage = ()=> {
        if(name && email !==''){
            const dataMessage = {
                name,
                email,
                message
            }
            axios.post("/users", dataMessage).then(res => {
                console.log("send Request")
            })
        }
    }

    return (
        <motion.div className="contact"
                    intial={{width: 0}}
                    animate={{width: "100%"}}
                    exit={{x: window.innerWidth, transition: {duration: 0.4}}}>
            <div className='contact-block'>
                <h2 style={{fontFamily: "Serif", fontWeight: "700", fontSize: "40px"}}>Contact Us</h2>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше имя"/>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value) } placeholder="Email"/>
                <input type="text" value={message} onChange={(e) =>  setMessage(e.target.value)} placeholder="Message"/>
                <button className="contact_btn" onClick={sendMessage}>send message</button>
            </div>
        </motion.div>
    );
};

export default Contact;