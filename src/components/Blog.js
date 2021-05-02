import React from 'react'
import './Blog.css'
import './layout'
import Layout from './layout';
import { useStaticQuery, graphql } from "gatsby";
import Content from './BlogContent';

const Blog = ({ info }) => {
    const data = useStaticQuery(graphql`
        query BlogQuery {
            allContentfulBlogPost {
                edges {
                    node {
                        blogTitle
                        blogImage {
                            file {
                                url
                            }
                        }
                        blogContent {
                            internal {
                                content
                            }
                        }
                        dateWritten(formatString: "")
                    }
                }
            }
        }
    `)

    return (
        <Layout> 
            <div className="BlogGroup">
            </div>
            <div className="BlogStuff">
                <div className="BlogInfo">
                    <main><Content data={data} /></main>
                </div>
                
            </div>
        </Layout>
    )
}

export default Blog;