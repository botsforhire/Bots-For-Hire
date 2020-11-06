import Link from "next/link"
import { Navbar, Nav, Button } from "react-bootstrap"
import { FaPatreon } from 'react-icons/fa'

function Layout(props) {
  return (
    <div>
      <div id="navbar">
        <Navbar bg="light" expand="lg" sticky="top">
          <Navbar.Brand href="/">
            <img
            alt="Bots For Hire Logo"
            src="/logos/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Bots For Hire</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/partners">Partners</Nav.Link> 
              <Nav.Link href="/staff">Our Team</Nav.Link>

              <Nav.Link href="https://patreon.com/botsforhire" title="Our Patreon"><FaPatreon/></Nav.Link>
              </Nav>

            <Button href="https://discord.gg/Pgr4FJn">Contact Us</Button>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <br /><br /><br />
      <div style={props.style}>{props.children}</div>

      <footer className="page-footer font-small blue">

				
				<div className="footer-copyright text-center py-3">All bots are subject to the <Link href="/terms"><a>terms of service</a></Link>.</div>
				
				

      </footer>
    </div>
  )
}

export default Layout