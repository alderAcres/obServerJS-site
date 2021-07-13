import React, { Component, useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button, Container, Col } from 'react-bootstrap';

const Intro = () => {

  const names = ['Tweeting', 'Studying', 'Napping', 'Slacking', 'Tindering', 'Chatting', 'Coding', 'Snacking']

  const [newName, setnewName] = useState("");

  const shuffle = useCallback(() => {
      const index = Math.floor(Math.random() * names.length);
      setnewName(names[index]);
  }, []);
  useEffect(() => {
      const intervalID = setInterval(shuffle, 2000);
      return () => clearInterval(intervalID);
  }, [shuffle])

  return (
    <div>
    <div style={{marginTop:'16vh', display:'flex', justifyContent: 'space-evenly', alignItems:'center'}}>
    <div style={{ color: 'white', textAlign: 'center', width: '42vw', marginTop: '10vh', display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <div>
        <motion.h1 whileHover = {{
          scale: 1.2,
          transition: {
            duration: .2
          }
        }} style={{fontSize:'4vw', color:'white'}}>Less Time Debugging</motion.h1>
        <motion.h1 whileHover ={{
          scale: 1.2,
          transition: {
            duration: .2
          }
        }} style={{fontSize:'4vw', color:'white', display:'inline-block', whiteSpace:'nowrap'}}>More Time<motion.span>{` ${newName}`}</motion.span>
        </motion.h1>
      </div>
      <h2 style={{fontSize:'1.8vw', letterSpacing: '.08rem'}}>obServerJS saves developers time and headaches by providing transparent express routing.</h2>
      <Button className='btn-lg' variant='light' style={{marginTop:'3vh'}}>Try It Out</Button>
      </div>
      <motion.div initial='hidden' animate='visible' variants={{
        hidden: {
          scale: 0.8,
          opacity: 0
        },
        visible: {
          scale: 1.2,
          opacity: 1,
          transition: {
            delay: .8
          }
        }
      }}>
       </motion.div> 
     <Image src='/macbook-main.png' alt='computer image' height='390vh' width='390vw' />
     </div>
     </div>
  )
}

export default Intro
