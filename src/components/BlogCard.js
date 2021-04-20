import React from 'react'
import './BlogCard.css'


const BlogCard = ({data}) => (
    <div className="content">
        {data.allContentfulAbout.edges.map(edge=>(
            <p>{edge.node.aboutMeContent.aboutMeContent}</p>
        ))}
    </div>
)

export default BlogCard;