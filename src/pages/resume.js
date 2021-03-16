import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Resume from "../components/Resume"

const ResumePage = () => (
    <Layout>
        <SEO title="Resume" />
        <Resume />
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default ResumePage;