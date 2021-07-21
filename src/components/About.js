import React from 'react'
import './About.css'
import './layout'
import { useStaticQuery, graphql } from "gatsby"
import Layout from './layout';
import Content from './AboutConent';


const About = ({ info }) => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allContentfulAbout {
                edges {
                node {
                    aboutMeContent {
                    aboutMeContent
                    }
                }
                }
            }
        }
    `)


    return (
        <Layout>
                <div className="AboutGroup">
                    
                    <div className="AboutText">
                        <main><Content data={data} /></main>
                    </div>
                    
                </div>
        </Layout>
    )
}

export default About;