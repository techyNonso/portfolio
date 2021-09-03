import React from 'react'
import about from "../assets/img/about.jpg"
import AnchorLink from 'react-anchor-link-smooth-scroll'

function About() {
  return (
      <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>

        <div className="about__container container grid">
          <img src={about} className="about__img" />
        
        
          <div className="about__data">
            <p className="about__description">High level experience in fullstack web development and Blockchain development. High level experience in fullstack web development. </p>
            <div className="about__info">
              <div>
                <span className="about__info-title">04+</span>
                <span className="about__info-name">Years <br/> experience</span>
              </div>

              <div>
                <span className="about__info-title">13+</span>
                <span className="about__info-name">Projects <br/> completed</span>
              </div>
              
            </div>

            <div className="about__buttons">
              <AnchorLink  download="" href="../assets/pdf/Alexa-cv.pdf" className="button button--flex">
              Download CV<i className="uil uil-download-alt button__icon"></i>
              </AnchorLink >
            </div>
          </div>
        </div>
      </section>

  )
}

export default About