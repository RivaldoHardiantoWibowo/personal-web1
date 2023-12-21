import { useState,useEffect } from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import logos from '../assets/img/logos.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import navIcon4 from '../assets/img/nav-icon4.svg'

export const NavBar = () => {
  
    const  [activeLink, setActiveLink] = useState('home')
    const [scrolled, seScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true)
            }else{
                seScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }


    return (
        <Navbar expand="lg" className={scrolled ?  "scrolled": ""}>
      <Container>
        <Navbar.Brand href="/">
            <img src={logos} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"> 
        <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills"className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project"className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
            <Nav.Link href="#connect"className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('connect')}>Contact</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="www.linkedin.com/in/rivaldo-hardianto-wibowo"><img src={navIcon1} alt="linkedin" /></a>
                <a href="https://github.com/RivaldoHardiantoWibowo"><img src={navIcon4} alt="github"/></a>
                <a href="https://www.instagram.com/rivaldo_hardianto_w/"><img src={navIcon3} alt="instagram" /></a>
            </div>
            <form method="post" action="https://www.instagram.com/rivaldo_hardianto_w/">
            <button className="vvd" onClick={() => console.log('content')}><span>Let's Connect</span></button>
            </form>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}