import * as React from "react"
import { Link } from "gatsby"
import twittercon from "../images/twittercon.jpg"
import bron from "../images/Lebron_James.jpg"
import kobe from "../images/Kobe.jpg"
import mj from "../images/michael-jordan.jpg"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Indexer">
      <div className="IndexerContent">
        <p>Welcome to my portfolio page.</p>
        <p>This is where I get to showcase all the</p>
        <p>Wonderful work that I have been doing!</p>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f3f4f5" fill-opacity="1" >
            <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="M0,32L40,64C80,96,160,160,240,186.7C320,213,400,203,480,181.3C560,160,640,128,720,112C800,96,880,96,960,106.7C1040,117,1120,139,1200,122.7C1280,107,1360,53,1400,26.7L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" />
          </path>
        </svg>
      </div>
    </div>
    <div className="Cards">
        <h2>Now Let's Look at Some Projects!</h2>
        <Card 
          title="Twitter Clone"
          text="Rails project with a ReactJS Backend"
          image={ twittercon } />
        <Card 
          title="Lebron James"
          text="King James"
          image={ bron } />
        <Card 
          title="Kobe Bryant"
          text="Kobe!!"
          image={ kobe } />
        <Card 
          title="Michael Jordan"
          text="MJ"
          image={ mj } />
    </div>
  </Layout>
)

export default IndexPage
