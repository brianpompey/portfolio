import * as React from "react"
import { Link } from "gatsby"

import Blog from "../components/Blog"
import SEO from "../components/seo"

const BlogPage = () => (
  <div>
    <SEO title="Blogs" />
    <Blog/>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default BlogPage;
