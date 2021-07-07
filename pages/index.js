import React, { Component } from 'react'
import Layout from '../components/Layout'
import { Card, Icon, Button, Header } from 'semantic-ui-react'
import Image from 'next/image';
export default function Home() {
  return (
    <Layout>
    <div style={{display:'flex', justifyContent: 'space-between', alignItems:'center'}}>
    <div style={{ color: 'white', textAlign: 'center', width: '42vw', marginTop: '10vh', display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <div>
        <Header style={{fontSize:'4rem', color:'white'}} as='h1'>Less Time Debugging.</Header>
        <Header style={{fontSize:'4rem', color:'white'}} as='h1'>More Time Tweeting.</Header>
      </div>
      <h2>ObServerJS saves developers time and headaches by providing transparent express routing.</h2>
      <Button size='huge' style={{color: 'black'}}>Try It Out</Button>
      </div>
     <Image style={{zIndex:'2'}} src='/comp.png' alt='computer image' height='360vh' width='360vw' />
      </div>
      <div style={{marginTop: '30rem', color: 'white', width:'100%', backgroundColor: 'white'}}>
      HERE
      </div>
    </Layout>
  )
}
