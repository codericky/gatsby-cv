import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Navbar, Nav, Container} from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header>

    <Navbar fixed="top" bg="dark" expand="md" variant="dark" >
    
    <Container><Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarResponsive" />
      <Navbar.Collapse id="navbarResponsive" >
     
      <Container><Nav as="ul" className="ml-auto" >
        <Nav.Item as="li">
          <Link to="/" className="nav-link" activeClassName="active">Home</Link>
          </Nav.Item>
          <Nav.Item as="li">
          <Link to="/work" className="nav-link" activeClassName="active">Work History</Link>
          </Nav.Item>
          <Nav.Item as="li">
          <Link to="/about" className="nav-link" activeClassName="active">About</Link>
          </Nav.Item>
          <Nav.Item as="li">
          <Link to="/contact" className="nav-link" activeClassName="active">Contact</Link>
          </Nav.Item>
        </Nav>
        </Container>
       
    </Navbar.Collapse>
    </Container>
  
  </Navbar>
  
  

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
