import * as React from "react"
import { Link } from "gatsby"
import About from "../components/About"

import SEO from "../components/seo"

const AboutPage = () => (
    <div>
        <SEO title="About" />
        <About/>
        <Link to="/">Go back to the homepage</Link>
    </div>
)

export default AboutPage;