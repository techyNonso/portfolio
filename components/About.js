import React from 'react'
import about from "../assets/img/about.jpeg"
import AnchorLink from 'react-anchor-link-smooth-scroll'

function About() {

  const download = () => {
    fetch('https://drive.google.com/uc?id=1CEN-4ZRAD8hdxSZNQ58xw-sMtRP6J83E&export=download',{
      method: 'GET',
      headers:{
        'Content-Type': 'application/pdf',
      },
    })
    .then(res => res.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(new Blob([blob]),);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute(
        'download',
        'myresume.pdf',
      );

      document.body.appendChild(link);

      link.click()

      link.parentNode.removeChild(link)
    })
  }
  return (
      <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>

        <div className="about__container container grid">
          <img src={about} className="about__img" />
        
        
          <div className="about__data">
            <p className="about__description">High level experience in fullstack web development and great understanding of Blockchain development.</p>
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
              <span   onClick={download} className="button button--flex">
              Download CV<i className="uil uil-download-alt button__icon"></i>
              </span >
            </div>
          </div>
        </div>
      </section>

  )
}

export default About