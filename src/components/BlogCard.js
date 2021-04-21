import React from 'react'
import './BlogCard.css'
import moment from 'moment'


const BlogCard = ({data}) => (
    <div className="content">
        {data.allContentfulBlogPost.edges.map(edge=>(
            <div className="Card">
                <h1>{edge.node.blogTitle}</h1>
                <p>{moment(`${edge.node.dateWritten.toString()}`).format('MMMM Do YYYY')}</p>
                <p>{edge.node.blogContent.internal.content}</p>
            </div>          
        ))} 
    </div>
)

export default BlogCard;