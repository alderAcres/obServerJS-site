import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from '../routes';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


const Header = () => {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', color:'white'}}>
    <Navbar style={{opacity:'.97', backgroundColor:'#333333', zIndex:'1'}} className="navbar navbar-expand-md navbar-dark fixed-top" variant="white" expand="lg" collapseOnSelect id ='navbar' >
    <motion.img whileHover ={{
      scale: [1, 1.4, 1.2],
      rotate: [0, 360],
      transition: {
        duration: .8
      }
    }} src={'/logo-eye.png'} width='160vw' height='90vh'/>
    <Navbar.Brand className='d-none d-md-block' id='logo' style={{fontSize:'2.1vw'}} href="#home">obServerJS</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Nav className="ml-auto">
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav.Link style={{color:'white'}} href="#features">Features</Nav.Link>
      <Nav.Link style={{color:'white'}} href="#pricing">Meet The Team</Nav.Link>
      <Nav.Link style={{color:'white'}} href="#pricing">Documentation</Nav.Link>
      </Navbar.Collapse>  
      </Nav>
      <Nav.Link target="_blank" href='https://www.linkedin.com/company/observerjs'><FontAwesomeIcon style={{marginLeft:'3vw', color:'white', height:'3vh', width:'auto'}} icon={faLinkedin}/></Nav.Link>
      <Nav.Link target="_blank" href='https://github.com/oslabs-beta/obServerJS'><FontAwesomeIcon style={{height:'3vh', color:'white', width:'auto'}} icon={faGithub}/></Nav.Link>
      </Navbar>
    </div>
  )
}

export default Header
