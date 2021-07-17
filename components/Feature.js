import React from 'react'
import {Container, Button, Row, Col } from 'react-bootstrap'; 
import Image from 'next/image';


const Feature = () => {
  return (
<div id= 'features' className='feature-div'>
    <h1 className='headers' id='feature-header' style={{marginBottom:'10vh', textAlign:'center'}}>Features</h1>
    <div className='feature-container'>
    <div className='feature-box1'>
        <Image src={'/app-tree.png'} width='680vw' height='440vh'/>
          </div>
          <div className='feature-box2'>
          <h3 className= 'desc-h2' id='left-header' style={{fontSize:'2.4vw', marginBottom:'2vh'}}>Simplify Backend Routing Architecture</h3>
          <p className= 'desc-p' style={{fontSize:'2vw'}}>obServerJS enables developers to simplify complex server-side code 
          by visually displaying the exact path the response object takes given a specific url end point. Expect nothing less than 
          full server-side transparancy with obServerJS. </p>
          <Button id= 'button-mobile' className="btn-md" style={{textAlign: 'center'}}>Download Now</Button>
        </div> 
        <div className='feature-box' style={{marginTop:'8vh'}}>
          <Image src={'/dashboard1.png'} width='680vw' height='440vh'/>
       </div>
        <div className='feature-box4'>
          <h3 id='left-header' className= 'desc-h2' style={{fontSize:'2.4vw', marginBottom:'2vh'}}>Visualize The Entire App Stack</h3>
          <p className= 'desc-p' style={{fontSize:'2vw'}}>In addition to having access to the route specific stack, obServerJS 
          offers a visual representation of the entire application stack in a tree of nodes, 
          reducing complexity and enabling for a quicker understanding of all potential routes the response object can take through 
          routing and controller files.</p>

          <Button id= 'button-mobile' className="btn-md" style={{textAlign: 'center'}}>Try It Out</Button>
      
        </div>
        <div className='feature-box5' style={{marginTop:'8vh'}}>
            <Image src={'/app-tree.png'} alt='app-tree' width='680vw' height='440vh'/>
          </div> 
          <div className='feature-box6'>
              <h3 id='left-header' className= 'desc-h2' style={{fontSize:'2.4vw', marginBottom:'2vh'}}>Test Multiple Endpoints</h3>
              <p className= 'desc-p' style={{fontSize:'2vw'}}>To make the debugging process even more efficient, obServerJS has a 
              testing suite that offers the options of adding multiple endpoints and and to gain information on whether or not errors 
              are thrown.</p>
              <Button id= 'button-mobile' className="btn-md" >Read The Docs</Button>
              </div>
               </div>
              </div>
  
  )
}

export default Feature
