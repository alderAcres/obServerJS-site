import React from 'react'
import Head from 'next/head'
import { Container } from 'semantic-ui-react';
import Header from './Header';
const Layout = (props) => {
  return (
    <Container>
      <Head>
      <title>ObServer.JS</title>
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
      ></link>
      <meta name= 'keywords' content='express, node, javascript, debugging, backend' />
      </Head>
      <Header/>
    {props.children}
    </Container>
  )
}

export default Layout
