import React from 'react'
import { Button } from 'react-bootstrap';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Link } from '../routes';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Feature = () => {
  return (
    <div id='features' className='feature-div'>
      <h1 className='headers' id='feature-header' style={{ marginBottom: '10vh', textAlign: 'center' }}>Features</h1>
      <div className='feature-container'>
        <div className='feature-box1'>
          <Zoom>
            <Image src={'/response.png'} width='1280vw' height='960vh' />
          </Zoom>
        </div>
        <div className='feature-box2'>
          <h3 className='desc-h2' id='left-header' style={{ fontSize: '2.4vw', marginBottom: '2vh' }}>Simplify Backend Routing Architecture</h3>
          <p className='desc-p' style={{ fontSize: '2vw' }}>obServerJS enables developers to simplify complex server-side code
            by visually displaying the exact path the response object takes given a specific url end point. Expect nothing less than
            full server-side transparancy with obServerJS. </p>
          <Link target="_blank" route={'/#download'}><Button id='button-mobile' className='btn-md' variant='dark' >Download</Button></Link>
        </div>
        <div className='feature-box' style={{ marginTop: '8vh' }}>
          <Zoom>
            <Image src={'/dash1.png'} alt='dashboard' width='1280vw' height='960vh' />
          </Zoom>
        </div>
        <div className='feature-box4'>
          <h3 id='left-header' className='desc-h2' style={{ fontSize: '2.4vw', marginBottom: '2vh' }}>Visualize The Entire App Stack</h3>
          <p className='desc-p' style={{ fontSize: '2vw' }}>In addition to having access to the route specific stack, obServerJS
            offers a visual representation of the entire application stack in a tree of nodes,
            reducing complexity and enabling for a quicker understanding of all potential routes the response object can take through
            routing and controller files.</p>

          <Link target="_blank" route={'/#download'}><Button id='button-mobile' className='btn-md' variant='dark' >Try It Out</Button>
          </Link>
        </div>
        <div className='feature-box5' style={{ marginTop: '8vh' }}>
          <Zoom>
            <Image src={'/response.png'} alt='app-tree' width='1280vw' height='960vh' />
          </Zoom>
        </div>
        <div className='feature-box6'>
          <h3 id='left-header' className='desc-h2' style={{ fontSize: '2.4vw', marginBottom: '2vh' }}>Test Multiple Endpoints</h3>
          <p className='desc-p' style={{ fontSize: '2vw' }}>To make the debugging process even more efficient, obServerJS has a
            testing suite that offers the options of adding multiple endpoints and and to gain information on whether or not errors
            are thrown.</p>
          <motion.a whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }} target="_blank" href='https://github.com/oslabs-beta/obServerJS'><Button id='button-mobile' className='btn-md' variant='dark' >Read The Docs</Button></motion.a>
        </div>
      </div>
    </div>

  )
}

export default Feature
