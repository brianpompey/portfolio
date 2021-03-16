import React from 'react'
import './ResumeContent.css'


const Content = ({data}) => (
    <div className="content">
        {data.allContentfulResume.edges.map(edge=>(
            <embed src={edge.node.resume.file.url} alt="brian pompey resume"/>
        ))}
    </div>
)

export default Content;