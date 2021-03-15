import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Contact from "../components/Contact"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    {Contact}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage;
