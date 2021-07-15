import React from 'react'
import {Container, Button, Row, Col } from 'react-bootstrap'; 
import Image from 'next/image';
const Feature = () => {
  return (
    <Container style={{textAlign:'center'}} fluid={true}>
    <h1 style={{textAlign:'center', margin:'20vh 0 10vh 0'}}>Features</h1>
    
      <Row className='god-row'>
      <Col lg={7} sm={12}>
        <Image src={'/app-tree.png'} width='680vw' height='440vh'/>
        </Col>
        <Col width={5} >
          <h3 style={{fontSize:'2.4vw', textAlign:'center', marginBottom:'2vh'}}>Track Execution & Simplify Backend Routing Architecture</h3>
          <p style={{fontSize:'2vw'}}>With increasingly complex backend codebase built to scale, obServerJS enables develeopers to simplify server-side architecture by having access to the exact path that the repsonse object took given a specific request end point. With our desktop application, all routing, middleware, and dispatch functions are made available in a flow chart outlining the path and response object.</p>
          <div style={{display:'flex', justifyContent:'center'}}>
          <Button className="btn-md" style={{width:'18vw', height:'auto', border:'none', fontSize:'2vw', backgroundColor:'#50b26c'}}>Download Now</Button>
          </div>
          </Col>
          </Row>
          <Row style={{marginTop:'10vh'}}>
      <Col>
          <h3 style={{fontSize:'2.4vw', textAlign:'center', marginBottom:'2vh'}}>Visualize The Entire App Stack</h3>
          <p style={{fontSize:'2vw'}}>In addition to having access to the route specific stack, obServerJS offers a visual representation of the entire application stack in a tree of nodes, reducing complexity and enabling for a quicker understanding of all potential routes the response object can take through routing and controller files.</p>
          <div style={{display:'flex', justifyContent:'center'}}>
          <Button className="btn-md" style={{width:'16vw', height:'auto', fontSize:'2vw', border:'none', backgroundColor:'#50b26c'}}>Try It Out</Button>
         </div>
          </Col>
          <Col lg={7} sm={12}>
          <Image src={'/app-tree.png'} width='680vw' height='440vh'/>
          </Col>
          </Row>
          <Row style={{marginTop:'10vh'}}>
          <Col lg={7} sm={12}>
            <Image src={'/app-tree.png'} width='680vw' height='440vh'/>
            </Col>
            <Col width={4}>
              <h3 style={{fontSize:'2.4vw', textAlign:'center', marginBottom:'2vh'}}>Test Multiple Endpoints</h3>
              <p style={{fontSize:'2vw'}}>To make the debugging process even more efficient, obServerJS has a testing suite that offers the options of adding multiple endpoints and and to gain information on whether or not errors are thrown.</p>
              <div style={{display:'flex', justifyContent:'center'}}>
              <Button className="btn-md" style={{width:'18vw', fontSize:'2vw', height:'auto', border:'none', backgroundColor:'#50b26c'}}>Read The Docs</Button>
              </div>
              </Col>
              </Row>
    </Container>
  )
}

export default Feature
