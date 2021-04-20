import React from 'react'
import './Blog.css'
import './layout'
import Layout from './layout';
import { useStaticQuery, graphql } from "gatsby";
import Card from './BlogCard';

const Blog = ({ info }) => {
    const data = useStaticQuery(graphql`
        query MyQuery {
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
                        raw
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <div className="BlogGroup">
                
                <div className="BlogInfo">
                    <main><Card data={data} /></main>
                </div>
                
            </div>
        </Layout>
    )
}

export default Blog;