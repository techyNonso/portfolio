import React from 'react'

function Footer() {
  return (
      <footer className="footer">
        <div className="footer__bg">
          <div className="footer__container container grid">
            <div>
              <h1 className="footer__title">CodyPharm</h1>
              <span className="footer__subtitle">Software developer</span>
            </div>

            <ul className="footer__links">
              <li>
                <a href="#services" className="footer__link">Services</a>
              </li>
              <li>
                <a href="#portfolio" className="footer__link">Portfolio</a>
              </li>
              <li>
                <a href="#contact" className="footer__link">Contact me</a>
              </li>
            </ul>

            <div className="footer__socials">
              <a href="#" className="footer__social" target="_blank">
                <i className="uil uil-facebook-f"></i>
              </a>
              <a href="#" className="footer__social" target="_blank">
                <i className="uil uil-instagram"></i>
              </a>
              <a href="#" className="footer__social" target="_blank">
                <i className="uil uil-twitter-alt"></i>
              </a>
            </div>
          </div>
          <p className="footer__copy">&#169; Codypharm. All right reserved</p>
        </div>
      </footer>
  )
}

export default Footer