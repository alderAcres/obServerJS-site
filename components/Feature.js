import React from 'react'
import {Container, Button, Row, Col } from 'react-bootstrap'; 
import Image from 'next/image';
const Feature = () => {
  return (
    <Container>
    <h1 style={{textAlign:'center', margin:'20vh 0 10vh 0'}}>Features</h1>
    
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <Image src={'/app-tree.png'} width='680vw' height='440vh'/>
      <Container style={{width:'28vw'}}>
          <h2 style={{fontSize:'3vw'}}>Simplify Backend Routing Architecture</h2>
          <p style={{fontSize:'2vw'}}>Measure the impact of your socila media campaigns through comprehensive reporting. Measure coversions by social channel and separate ROI between owned and paid media.</p>
          <Button className="btn-md" variant="dark">Download Now</Button>
          </Container>
          </div>
          
          <div style={{marginTop:'10vh', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <Container style={{width:'28vw'}}>
          <h2 style={{fontSize:'3vw'}}>Track Execution & Visualize The Response Lifecycle</h2>
          <p style={{fontSize:'2vw'}}>Measure the impact of your socila media campaigns through comprehensive reporting. Measure coversions by social channel and separate ROI between owned and paid media.</p>
          <Button className="btn-md" variant="dark">Try It Out</Button>
          </Container>
          <Image src={'/app-tree.png'} width='680vw' height='440vh'/>
          </div>
    </Container>
  )
}

export default Feature
