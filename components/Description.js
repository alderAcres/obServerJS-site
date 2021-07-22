import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from 'react-bootstrap';

const Description = () => {
  return (
    <div className='desc-grid' >
    <div className='desc-box1'>
      <Image src={'/dash2.png'} alt='code-block' width='600vw' height='360vh'/>
    </div>
    <div className='desc-box2'>
      <h2 className= 'headers' style={{fontSize:'2.6vw', textAlign:'center', marginBottom:'3vh'}}> This is <span style={{color:'#8CD8BE'}}>obServerJS</span></h2>
      <p className= 'desc-p' style={{fontSize:'2vw'}}>
        Download our intuitively designed desktop application to have access to the expected response, a visual represention of the entire application stack (every possible route the response object can take in the server), 
        and a testing suite to run multiple endpoints to check for errors.
        </p>
        <motion.a whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }} target="_blank" href='https://github.com/oslabs-beta/obServerJS'><Button id= 'button-mobile' className='btn-md' variant='dark'>Read The Docs</Button></motion.a>
    </div>
      </div>
  )
}

export default Description

