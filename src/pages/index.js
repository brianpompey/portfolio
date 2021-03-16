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
        <p>Welcome to my portfolio page!</p>
        <p>This is where I get to showcase all the</p>
        <p>Wonderful work that I have been doing!</p>

        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="172" viewBox="0 0 100% 172">
          <path fill="#f3f4f5" fill-opacity="1" >
          <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="M0,128L48,117.3C96,107,192,85,288,112C384,139,480,213,576,208C672,203,768,117,864,80C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
          
          M0,256L48,224C96,192,192,128,288,133.3C384,139,480,213,576,240C672,267,768,245,864,250.7C960,256,1056,288,1152,266.7C1248,245,1344,171,1392,133.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
          
          M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,117.3C672,139,768,213,864,218.7C960,224,1056,160,1152,138.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
          
          M0,128L48,117.3C96,107,192,85,288,112C384,139,480,213,576,208C672,203,768,117,864,80C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
          "
          />
          </path>
        </svg>
      </div>
    </div>
    <div className="IndexRestofPage">
      <div className="Cards">
          <h2>Now Let's Look at Some Projects!</h2>
          <h3>Bootcamp Projects</h3>
          <div className="CardGroup-1">
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
          <hr class="rounded" />
          <h3>Personal Projects</h3>
          <div className="CardGroup-2">
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
      </div>
    </div>
    </Layout>
)

export default IndexPage
