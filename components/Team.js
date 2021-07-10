import React from 'react';
import {Container, Grid} from 'semantic-ui-react';
import Image from 'next/image';
const Team = () => {
  return (
    <div class="container">
        <h1 style={{marginTop:'20vh', textAlign:'center', marginBottom:'20vh'}}>Contributers</h1>
        <div>
      <Grid>
      <Grid.Row>
      <Grid.Column width={4}>
      <h2>Julia Collins</h2>
      <Image style= {{borderRadius: '50px'}} src={'/julia.jpg'} width='140vw' height='180vh' />
      </Grid.Column>
      <Grid.Column width={4}>
      <h2>Ashley Pean</h2>
      <Image style= {{borderRadius: '50px'}} src={'/josh.png'} width='140vw' height='180vh' />
      </Grid.Column>
      <Grid.Column width={4}>
      <h2>Eric Wilding</h2>
      <Image style= {{borderRadius: '50px'}} src={'/julia.jpg'} width='140vw' height='180vh' />
      </Grid.Column>
      <Grid.Column width={4}>
      <h2>Josh Roberts</h2>
      <Image style= {{borderRadius: '50px'}} src={'/julia.jpg'} width='140vw' height='180vh' />
      </Grid.Column>
      </Grid.Row>
      </Grid>
      </div>
    </div>

  )
}

export default Team
