import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from '../images/brian-logo.png'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={logo} width="30" /></Link>
      <Link to="/lebron">Lebron James</Link>
      <Link to="/kobe">Kobe Bryant</Link>
      <Link to="/jordan">Michael Jordan</Link>
      <Link to="/instagram"><button>Instagram</button></Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
