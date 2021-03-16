import React from 'react'
import './Resume.css'
import './layout'
import { useStaticQuery, graphql } from "gatsby"
import Layout from './layout';
import Content from './ResumeContent';


const Resume = ({ info }) => {
    const data = useStaticQuery(graphql`
        query ResumeQuery {
            allContentfulResume {
            edges {
                node {
                resume {
                    file {
                    url
                    }
                }
                }
            }
            }
        }
    `)


    return (
        <Layout>
            <div className="ResumeGroup">
                <div className="ResumeContent">
                    <main><Content data={data} /></main>
                </div>
            </div>
        </Layout>
    )
}

export default Resume;