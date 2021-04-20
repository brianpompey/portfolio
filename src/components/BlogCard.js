import React from 'react'
import './BlogCard.css'


const BlogCard = ({data}) => (
    <div className="content">
        {data.allContentfulBlogPost.edges.map(edge=>(
            <p>{edge.node.blogTitle}</p>
        ))}
    </div>
)

export default BlogCard;