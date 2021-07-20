import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faMicrosoft } from '@fortawesome/free-brands-svg-icons'
const Download = () => {
  return (
 
    <div className='download'>
    <h2 className='download-h2'>Download</h2>
    <div className='download-container'>
    <FontAwesomeIcon id='icon' style={{height:'9vh', width:'auto'}} icon={faApple}/>
    <FontAwesomeIcon id='icon'style={{height:'8vh', width:'auto'}} icon={faMicrosoft}/>
    </div>
    </div>

  )
}

export default Download
