import React from 'react'
import { Nav, Navbar, NavbarBrand, Button } from 'react-bootstrap';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import LinkTo from '../components/LinkTo';
import { Link } from '../routes';

const Header = () => {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', color:'white'}}>
    <Navbar style={{opacity:'.97', backgroundColor:'#333333', zIndex:'1'}} className="navbar navbar-expand-md navbar-dark fixed-top" variant="white" expand="lg" collapseOnSelect id ='navbar' >
    <LinkTo href='/'> <motion.img whileHover ={{
      scale: [1, 1.4, 1.2],
      rotate: [0, 360],
      transition: {
        duration: .8
      }
    }} src={'/logo-eye.png'} width='160vw' height='90vh'/>
    </LinkTo>
    <Link route={'/'} ><Navbar.Brand className='d-none d-md-block' id='logo' style={{fontSize:'2.1vw'}}>obServerJS</Navbar.Brand></Link>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Nav className="ml-auto">
    <Navbar.Collapse id="responsive-navbar-nav">
      <Link route={'/#features'}><Nav.Item id='nav-link' style={{color:'white', cursor:'pointer'}}>Features</Nav.Item></Link>
      <Link route={'/#team'} style={{color:'white'}}><Nav.Item id='nav-link' style={{color:'white', cursor:'pointer'}}>Meet The Team</Nav.Item></Link>
      <Link style={{color:'white'}} href='https://github.com/oslabs-beta/obServerJS'><Nav.Item id='nav-link' style={{color:'white',  cursor:'pointer'}}>Documentation</Nav.Item></Link>
      <motion.a id='button-header' whileHover={{
        scale: 1.2,
        transition: { duration: 1 },
      }} target="_blank" href="https://quantumspot.typeform.com/to/HMDJAtmM">
      <Button style={{backgroundColor: '#8CD8BE', border:'none', color: 'black', width:''}} className='btn-md' variant='dark' >Contribute</Button>
      </motion.a>
      </Navbar.Collapse>  
      </Nav>
      <Nav.Link className='d-none d-md-block' target="_blank" href='https://www.linkedin.com/company/observerjs'><FontAwesomeIcon id='icon-class' style={{marginLeft:'3vw', color:'white', height:'3vh', width:'auto'}} icon={faLinkedin}/></Nav.Link>
      <Nav.Link className='d-none d-md-block' target="_blank" href='https://github.com/oslabs-beta/obServerJS'><FontAwesomeIcon id='icon-class' style={{height:'3vh', color:'white', width:'auto'}} icon={faGithub}/></Nav.Link>
      </Navbar>
    </div>
  )
}

export default Header;
