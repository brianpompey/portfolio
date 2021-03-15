import * as React from "react"
import { Link } from "gatsby"

import Contact from "../components/Contact"
import SEO from "../components/seo"

const ContactPage = () => (
  <div>
    <SEO title="Contact" />
    <Contact/>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default ContactPage;
