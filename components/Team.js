import React from 'react';
import {Container, Grid} from 'semantic-ui-react';
import Image from 'next/image';
const Team = () => {
  return (
    <div className="container">
        <h1 style={{marginTop:'20vh', textAlign:'center', marginBottom:'20vh'}}>Contributers</h1>
        <div>
      <Grid style={{textAlign:'center'}}>
      <Grid.Row>
      <Grid.Column width={4}>
     <Container>
      <h3>Julia Collins</h3>
      <Image style= {{borderRadius: '50px'}} src={'/julia.png'} width='180vw' height='180vh' />
      <iframe style={{marginLeft:'2vw', marginTop:'2vh'}} src="https://ghbtns.com/github-btn.html?user=alderAcres&type=follow&size=large" frameborder="0" scrolling="0" width="230" height="30" title="GitHub"></iframe>
      </Container>
      </Grid.Column>
      <Grid.Column width={4}>
      <h3>Ashley Pean</h3>
      <Image style= {{borderRadius: '50px'}} src={'/ashley.png'} width='180vw' height='180vh' />
      <iframe style={{marginLeft:'2vw', marginTop:'2vh'}} src="https://ghbtns.com/github-btn.html?user=ashleypean&type=follow&size=large" frameborder="0" scrolling="0" width="230" height="30" title="GitHub"></iframe>
      </Grid.Column>
      <Grid.Column width={4}>
      <h3>Eric Wilding</h3>
      <Image style= {{borderRadius: '50px'}} src={'/eric.png'} width='180vw' height='180vh' />
      <iframe style={{marginLeft:'2vw', marginTop:'2vh'}} src="https://ghbtns.com/github-btn.html?user=e-wilding&type=follow&size=large" frameborder="0" scrolling="0" width="230" height="30" title="GitHub"></iframe>
      </Grid.Column>
      <Grid.Column width={4}>
      <h3>Josh Roberts</h3>
      <Image style= {{borderRadius: '50px'}} src={'/josh.png'} width='180vw' height='180vh' />
      <iframe style={{marginLeft:'1vw', marginTop:'2vh'}} src="https://ghbtns.com/github-btn.html?user=quantumspot&type=follow&size=large" frameborder="0" scrolling="0" width="230" height="30" title="GitHub"></iframe>
      </Grid.Column>
      </Grid.Row>
      </Grid>
      </div>
    </div>

  )
}

export default Team
