import React from 'react'
import './Footer.css'


const Footer = ({data, children}) => (
    <div className="Footer">
        <div className="FooterText">
            <p>Thanks for visiting my page! Hopefully we can work together at some point!</p>
        </div>
        <div className="FooterLinks">
            {data.allContentfulLink.edges.map(edge => (
        <a href={edge.node.url}>{edge.node.title}</a>
      ))}
        </div>
        <div className="Copywright">
            {children}
        </div>
    </div>

)

export default Footer;