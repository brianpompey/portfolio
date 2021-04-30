import React from 'react'
import './BlogContent.css'
import moment from 'moment'


const BlogContent = ({data}) => (
    /* I'd love to have it be sortable and maybe even searchable */
    /* Maybe it can still show a preview and be expandable though*/
    <div className="blog-content">
        {data.allContentfulBlogPost.edges.map(edge=>(
            <div className="Cons">
                <h1>{edge.node.blogTitle}</h1>
                <p>{moment(`${edge.node.dateWritten.toString()}`).format('MMMM Do YYYY')}</p>
                <p>{edge.node.blogContent.internal.content}</p>
            </div>          
        ))} 
    </div>
)

export default BlogContent;