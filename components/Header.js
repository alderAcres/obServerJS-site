import React from 'react'
import { Menu, Button, Grid, Container } from 'semantic-ui-react';
import { Link } from '../routes';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
        <Menu.Item><iframe src="https://ghbtns.com/github-btn.html?user=oslabs-beta&repo=obServerJS&type=star&count=true" frameborder="0" scrolling="0" width="80" height="22" title="GitHub"></iframe></Menu.Item>
        </Container>
      </Menu>
  )
}

export default Header
