import React from 'react'
import './BlogCard.css'


const BlogCard = ({data}) => (
    <div className="content">
        {data.allContentfulBlogPost.edges.map(edge=>(
            <div>
                <h1>{edge.node.blogTitle}</h1>
                <p>{edge.node.blogContent.raw}</p>
            </div>          
        ))}
    </div>
)

export default BlogCard;