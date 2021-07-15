import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {Container, Grid, Col, Row, Card} from 'react-bootstrap';
const Description = () => {
  return (
    <Container fluid={true}>
    <Row style={{marginTop:'25vh'}}>
    <Col width={6}>
      <Image src={'/code-block.png'} width='600vw' height='400vh'/>
      </Col>
    <Col width={6}>
      <h2 style={{fontSize:'2.6vw'}}> This is <span style={{color:'#50b26c'}}>obServerJS</span></h2>
      <p style={{fontSize:'2vw'}}>
        obServerJS is the first backend debugging tool that allows developers to view the entire request and response lifecycle, along every routing and middleware function. 
        Download our intuitively designed desktop application to have access to the expected response, a visual represention of the entire application stack (every possible route the response object can take in the server), 
        and a testing suite to run multiple endpoints to check for errors.
        </p>
      </Col>
      </Row>
      </Container>
  )
}

export default Description

