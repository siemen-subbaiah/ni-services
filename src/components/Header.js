import React from "react"
import { Link } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import { data } from "../constants/NavLinks"
import logo from "../assets/images/logo.png"

const Header = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand className="d-block d-lg-none nav-b">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
            Nischidha Imaging Services
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="ham justify-content-end"
        >
          <Nav>
            {data.map(items => {
              return (
                <Nav.Link
                  key={items.id}
                  as={Link}
                  to={items.to}
                  activeClassName="style-links"
                >
                  {items.name}
                </Nav.Link>
              )
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
