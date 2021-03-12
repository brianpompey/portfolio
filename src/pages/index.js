import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Indexer">
      <div className="IndexerContent">
        <p>Welcome to my portfolio page.</p>
        <p>This is where I get to showcase all the</p>
        <p>Wonderful work that I have been doing!</p>
      </div>
    </div>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
