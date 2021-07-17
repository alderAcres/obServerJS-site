import React from 'react'
import Head from 'next/head'
import { Container } from 'semantic-ui-react';
import Header from './Header';
const Layout = (props) => {
  return (
    <Container>
      <Head>
      <title>ObServerJS</title>
      <script async defer src="https://buttons.github.io/buttons.js"></script>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Righteous&display=swap" rel="stylesheet"/>
      <meta name= 'keywords' content='express, node, javascript, debugging, backend' />
      </Head>
      <Header/>
    {props.children}
    <div id='github'>
    <a class="github-button" href="https://github.com/oslabs-beta/obServerJS" data-color-scheme="no-preference: dark_dimmed; light: dark_dimmed; dark: dark_dimmed;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star oslabs-beta/obServerJS on GitHub">Star</a>
    </div>
    <p style={{margin: '8vh 0', textAlign:'center'}}>© 2021 obServerJS. All Rights Reserved.</p>
    </Container>
  )
}

export default Layout
