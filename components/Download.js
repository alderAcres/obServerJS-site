import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faMicrosoft } from '@fortawesome/free-brands-svg-icons'
const Download = () => {
  return (
 
    <div id='download'>
    <h2 className='download-h2'>Download</h2>
    <div className='download-container'>
    <a target="_blank" href='https://observerjs-mac-build.s3.amazonaws.com/obServerJS-0.1.0.pkg'><FontAwesomeIcon id='icon' style={{height:'9vh', width:'auto'}} icon={faApple}/></a>
    <a target="_blank" href='https://github.com/oslabs-beta/obServerJS'><FontAwesomeIcon id='icon' style={{height:'8vh', width:'auto'}} icon={faMicrosoft}/></a>
    </div>
    </div>

  )
}

export default Download
