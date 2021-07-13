import React from 'react'
import { Header, Grid, Container, Button } from 'semantic-ui-react'; 
import Image from 'next/image';
const Feature = () => {
  return (
    <Container>
    <Header as='h1' style={{textAlign:'center', marginBottom:'10vh', fontSize:'3vw'}}>Features</Header>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <Image src={'/app-tree.png'} width='500rem' height='350rem'/>
      <Container style={{width:'28vw'}}>
          <Header as='h2'>Simplify Backend Routing Architecture</Header>
          <p>Measure the impact of your socila media campaigns through comprehensive reporting. Measure coversions by social channel and separate ROI between owned and paid media.</p>
          <Button primary>Download Now</Button>
          </Container>
          </div>
          <div style={{marginTop:'10vh', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <Container style={{width:'28vw'}}>
          <Header as='h2'>Track Execution & Visualize The Response Lifecycle</Header>
          <p>Measure the impact of your socila media campaigns through comprehensive reporting. Measure coversions by social channel and separate ROI between owned and paid media.</p>
          <Button primary>Try It Out</Button>
          </Container>
          <Image src={'/app-tree.png'} width='500rem' height='350rem'/>
          </div>
    </Container>
  )
}

export default Feature
