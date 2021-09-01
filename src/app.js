import React from 'react'
import "../assets/css/swiper-bundle.min.css"
import "../assets/css/styles.css"

import Header from '../components/Header'
import Main from '../components/Main'
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
import Qualification from '../components/Qualification'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Todo from '../components/Todo'
import Testimonial from '../components/Testimonial'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


function App() {
  return (
    <div>
      <Header />
      <Main>
        <Home/>
        <About/>
        <Skills/>
        <Qualification />
        <Services/>
        <Portfolio />
        <Todo/>
        <Testimonial/>
        <Contact/>
        <Footer />
      </Main>
      </div>
  )
}

export default App