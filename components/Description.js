import React from 'react'
import { Container, Header, Grid } from 'semantic-ui-react';
import Image from 'next/image';
const Description = () => {
  return (
    <Container>
    <Grid style={{marginTop:'8rem'}}>
      <Grid.Row>
      <Grid.Column width={10}>
        <Image src={'/code-block.png'} width='600rem' height='400rem'/>
      </Grid.Column>
      <Grid.Column width={6}>
      <div style={{display:'flex', flexDirection:'column', marginTop:'4rem'}}>
          <Header style={{color:'black'}} as='h1'>This Is <a style={{color:'#50b26c '}}>obServer</a></Header>
          <p style={{color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non tellus tristique, fringilla nulla vel, pellentesque lacus. Sed viverra purus libero, sed lacinia ex euismod ac. Aliquam consequat, massa vel malesuada scelerisque, nulla mi cursus dui, eu sodales ligula eros id mi. Quisque lacus neque, commodo ut nisl euismod, commodo tincidunt orci. Sed ultrices, est vitae dignissim auctor, turpis risus porttitor ex, id placerat lorem justo vitae libero.</p>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Container>
  )
}

export default Description
