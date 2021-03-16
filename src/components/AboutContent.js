import React from 'react'


const AboutContent = ({data}) => (
    <div className="content">
        {data.allContentfulAbout.edges.map(edge=>(
            <p>{edge.node.aboutMeContent.aboutMeContent}</p>
        ))}
    </div>
)

export default AboutContent;