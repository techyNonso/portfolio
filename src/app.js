import React from 'react'
import "../assets/css/styles.css"

import Header from '../components/Header'
import Main from '../components/Main'
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
import Qualification from '../components/Qualification'

function App() {
  return (
    <div>
      <Header />
      <Main>
        <Home/>
        <About/>
        <Skills/>
        <Qualification />
      </Main>
      </div>
  )
}

export default App