import React from 'react'
import { Menu, Button, Grid, Container } from 'semantic-ui-react';
import { Link } from '../routes';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


const Header = () => {
  return (
      <Menu style={{marginTop:'10px', backgroundColor:'transparent', border:'1px solid transparent'}}>
     <Container>
      <div style={{display:'flex', alignContent:'center'}}>
        <motion.img whileHover ={{
          scale: [1, 1.4, 1.2],
          rotate: [0, 360],
          transition: {
            duration: .8
          }
        }} src={'/logo-eye.png'} width='160vw' height='90vh'/>
        <Link route='/'><a className='item' style={{color: 'white', fontSize:'1.8rem', marginRight:'10rem'}}>obServerJS</a></Link>
      </div>
      <Menu.Menu style={{marginRight:'5rem'}} position='right'></Menu.Menu>
        <Menu.Item style={{color: 'white'}} >Features</Menu.Item>
        <Menu.Item style={{color: 'white'}}>Meet The Team</Menu.Item>
        <Menu.Item style={{color: 'white'}}>Documentation</Menu.Item>
        <Menu.Item><a target="_blank" style={{color:'white'}} href={'https://www.linkedin.com/company/observerjs'}><FontAwesomeIcon style={{height:'3vh', width:'auto', margin:'0 2vw'}} icon={faLinkedin}/></a></Menu.Item>
        <Menu.Item><a target="_blank" style={{color:'white', marginLeft:'-3vw'}}  href={'https://github.com/oslabs-beta/obServerJS'}><FontAwesomeIcon style={{height:'3vh', width:'auto', margin:'0 2vw'}} icon={faGithub}/></a></Menu.Item>

        </Container>
      </Menu>
  )
}

export default Header
