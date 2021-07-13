import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

const Team = () => {
  return (
    <div className="container">
        <h1 style={{marginTop:'20vh', textDecoration:'underline', textAlign:'center', marginBottom:'10vh'}}>Contributers</h1>
        <div>
      <Container style={{textAlign:'center'}}>
      <Row>
      <Col width={5} style={{margin:'5vh 0'}}>
      <h2 style={{marginBottom:'4vh'}}>Julia Collins</h2>
      <Image style= {{borderRadius: '50px'}} src={'/julia.png'} width='180vw' height='180vh' />
      <span>
      <Row style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <a style={{color:'#333333', margin:'2vh 1vw'}} target="_blank" href={'https://www.linkedin.com/in/julia-collins-0658a6141/'}><FontAwesomeIcon style={{height:'4vh', width:'auto'}} icon={faLinkedinIn}/></a>
        <a style={{color:'#333333', margin:'2vh 1vw'}}  target="_blank" href={'https://github.com/alderAcres'}><FontAwesomeIcon style={{height:'4vh', width:'auto'}} icon={faGithub}/></a>
      </Row>
      </span>
      </Col>
      <Col width={5} style={{margin:'5vh 0'}}>
      <h2 style={{marginBottom:'4vh'}}>Ashley Pean</h2>
      <Image style= {{borderRadius: '50px'}} src={'/ashley.png'} width='180vw' height='180vh' />
      <Row style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
     <a style={{color:'#333333', margin:'2vh 1vw'}}  target="_blank" href={'https://www.linkedin.com/in/ashley-pean/'}><FontAwesomeIcon style={{height:'4vh', width:'auto'}} icon={faLinkedinIn}/></a>
     <a style={{color:'#333333', margin:'2vh 1vw'}}  target="_blank" href={'https://github.com/ashleypean'}><FontAwesomeIcon style={{height:'4vh', width:'auto'}} icon={faGithub}/></a>
     </Row>
     </Col>
      <Col width={5} style={{margin:'5vh 0'}}>
      <h2 style={{marginBottom:'4vh'}}>Eric Wilding</h2>
      <Image style={{borderRadius: '50px'}} src={'/eric.png'} width='180vw' height='180vh' />
      <Row style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <a style={{color:'#333333', margin:'2vh 1vw'}}  target="_blank" href={'https://www.linkedin.com/in/eric-wilding/'}><FontAwesomeIcon style={{height:'4vh', width:'auto'}} icon={faLinkedinIn}/></a>
      <a style={{color:'#333333', margin:'2vh 1vw'}}  target="_blank" href={'https://github.com/e-wilding'}><FontAwesomeIcon style={{height:'4vh', width:'auto'}} icon={faGithub}/></a>
      </Row>     
      </Col>
      <Col width={5} style={{margin:'5vh 0'}}>
      <h2 style={{marginBottom:'4vh'}}>Josh Roberts</h2>
      <Image style= {{borderRadius: '50px'}} src={'/josh.png'} width='180vw' height='180vh' />
      <Row style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <a style={{color:'#333333', margin:'2vh 1vw'}}  target="_blank" href={'https://www.linkedin.com/in/joshrobertsv2/'}><FontAwesomeIcon style={{height:'4vh', width:'auto'}} icon={faLinkedinIn}/></a>
      <a style={{color:'#333333', margin:'2vh 1vw'}}  target="_blank" href={'https://github.com/quantumspot'}><FontAwesomeIcon style={{height:'4vh', width:'auto'}} icon={faGithub}/></a>
      </Row>
      </Col>
      </Row>
      </Container>
      </div>
    </div>

  )
}

export default Team
