import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import './Header.css'
import logo from '../images/brian-logo.png'


class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return(
      <div className="Header">
        <div className="HeaderGroup">
          <Link to="/"><img src={logo} width="30" alt="brian-logo" /></Link>
          <Link to="/about">About Me</Link>
          <Link to="/resume">My Resume</Link>
          <Link to="/blogs">Blog Posts</Link>
          <Link to="/github">Github Page</Link>
          <Link to="/contact"><button>Hire ME</button></Link>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
