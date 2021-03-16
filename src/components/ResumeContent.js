import React from 'react'
import './ResumeContent.css'


const Content = ({data}) => (
    <div className="content">
        <img src={data.allContentfulResume.edges.node.resume.file.url} alt="brian pompey resume"/>
    </div>
)

export default Content;