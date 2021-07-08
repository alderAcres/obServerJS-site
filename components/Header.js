import React from 'react'
import { Menu, Button, Grid, Container } from 'semantic-ui-react';
import { Link } from '../routes';
import Image from 'next/image';

const Header = () => {
  return (
      <Menu style={{marginTop:'10px', backgroundColor:'transparent', border:'1px solid transparent'}}>
     <Container>
      <div style={{display:'flex', alignContent:'center'}}>
        <Image src={'/logo-eye.png'} width='160rem' height='80rem'/>
        <Link route='/'><a className='item' style={{justifySelf:'flex-end', color: 'white', fontSize:'1.8rem', marginRight:'10rem'}}>ObserverJS</a></Link>
      </div>
      <Menu.Menu style={{marginRight:'5rem'}} position='right'></Menu.Menu>
        <Menu.Item style={{color: 'white'}} >Features</Menu.Item>
        <Menu.Item style={{color: 'white'}}>Meet The Team</Menu.Item>
        <Menu.Item style={{color: 'white'}}>Documentation</Menu.Item>
        <Menu.Item><Button color='black'>Become A Sponsor</Button></Menu.Item>
        </Container>
      </Menu>
  )
}

export default Header
