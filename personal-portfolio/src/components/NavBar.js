import React from 'react'
import { NavBar, Container} from 'react-bootstrap'
import { useState, useEffect } from 'react'

const NavBar = () => {
  const[activeLink, setActiveLink] = useState('home') ; 
  const[scrolled, seScrolled] = useState(false) ;

  useEffect(() => {
    const onScroll = () => {
       if (window.scrollY > 50) {
          seScrolled(true);
       } else {
          seScrolled(false);
       }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll); 
  }, [])

  return (
    <NavBar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
            <NavBar.Brand href="#home">
                <img src={''} alt='Logo' /> 
            </NavBar.Brand>
            <NavBar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </NavBar.Toggle>
            <NavBar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}>Projects</Nav.Link>
                </Nav>
                <span className="navbar-text">
                     <div className="social-icon">
                        <a href="#"><img src={''} alt=''/></a>
                        <a href="#"><img src={''} alt=''/></a>
                        <a href="#"><img src={''} alt=''/></a>
                     </div>
                     <button className="vvd" onClick={() => console.log('Connect')}><span>Let's Connect</span></button>
                </span>
            </NavBar.Collapse>
        </Container>
    </NavBar>
  )
}

export default NavBar