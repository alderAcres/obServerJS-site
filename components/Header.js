import React from 'react'
import { Menu, Button } from 'semantic-ui-react';
import { Link } from '../routes';
import Image from 'next/image';
const Header = () => {
  return (
      <Menu style={{marginTop:'10px', backgroundColor:'transparent', border:'1px solid transparent'}}>
      <Image src={'/logo.png'} width='140rem' height='20rem'/>
        <Link route='/'><a className='item' style={{color: 'white', fontSize:'1.3rem'}}>ObserverJS</a></Link>
        <Menu.Menu position='right'></Menu.Menu>
        <Menu.Item style={{color: 'white'}} >Features</Menu.Item>
        <Menu.Item style={{color: 'white'}}>Meet The Team</Menu.Item>
        <Menu.Item style={{color: 'white'}}>Documentation</Menu.Item>
        <Menu.Item><Button color='black'>Become A Sponsor</Button></Menu.Item>
      </Menu>
  )
}

export default Header
