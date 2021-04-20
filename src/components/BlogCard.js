import React from 'react'
import './BlogCard.css'


const BlogCard = ({data}) => (
    <div className="content">
        {data.allContentfulBlogPost.edges.map(edge=>(
            <div className="card">
                <h1>{edge.node.blogTitle}</h1>
                <p>{edge.node.dateWritten}</p>
                <p>{edge.node.blogContent.internal.content}</p>
            </div>          
        ))}
    </div>
)

export default BlogCard;