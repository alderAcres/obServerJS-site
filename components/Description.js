import React from 'react';
import { motion } from 'framer-motion';
import { Container, Header, Grid } from 'semantic-ui-react';
import Image from 'next/image';
const Description = () => {
  return (
    <Container>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <Image src={'/code-block.png'} width='600vw' height='380vh'/>
      <div style={{display:'flex', flexDirection:'column', width:'30vw'}}>
      <div style={{marginBottom:'2vh'}}>
          <span style={{color:'black', fontSize:'3vw'}}> This Is </span>
          <span style={{color:'#50b26c', fontSize:'3.1vw'}}> obServerJS</span>
          </div>
          <p style={{fontSize:'1.5vw', color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non tellus tristique, fringilla nulla vel, pellentesque lacus. Sed viverra purus libero, sed lacinia ex euismod ac. Aliquam consequat, massa vel malesuada scelerisque, nulla mi cursus dui, eu sodales ligula eros id mi. Quisque lacus neque, commodo ut nisl euismod, commodo tincidunt orci. Sed ultrices, est vitae dignissim auctor, turpis risus porttitor ex, id placerat lorem justo vitae libero.</p>
          </div>
          </div>
    </Container>
  )
}

export default Description
