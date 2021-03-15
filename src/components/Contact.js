import React from 'react'
import './Contact.css'
import Header from "./header"

const Contact = () => (
    <div className="ContactGroup">
        <Header/>
        <div className="ContactInfo">
        <h2>If you want to get in touch with or hire me <br /> (You Should!)...</h2>
            <p>Email: brianthescholar@gmail.com</p>
            <p>Alt Email: bpompey123@gmail.com</p>
            <p>Phone: (718) 578-8791</p>
            <p> LinkedIN Page: <a href="https://www.linkedin.com/in/brian-pompey-826a58165/" target="_blank">Brian Pompey LinkedIN</a></p>
        </div>
    </div>
)

export default Contact;