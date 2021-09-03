import React,{Fragment} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { ExternalLink } from 'react-external-link';

function Footer() {
  return (
    <Fragment>
      <footer className="footer">
        <div className="footer__bg">
          <div className="footer__container container grid">
            <div>
              <h1 className="footer__title">CodyPharm</h1>
              <span className="footer__subtitle">Software developer</span>
            </div>

            <ul className="footer__links">
              <li>
                <AnchorLink  href="#services" className="footer__link">Services</AnchorLink >
              </li>
              <li>
                <AnchorLink  href="#portfolio" className="footer__link">Portfolio</AnchorLink >
              </li>
              <li>
                <AnchorLink  href="#contact" className="footer__link">Contact</AnchorLink >
              </li>
            </ul>

            <div className="footer__socials">
              <ExternalLink  href="#" className="footer__social" >
                <i className="uil uil-facebook-f"></i>
              </ExternalLink >
              <ExternalLink  href="#" className="footer__social">
                <i className="uil uil-instagram"></i>
              </ExternalLink >
              <ExternalLink  href="#" className="footer__social">
                <i className="uil uil-twitter-alt"></i>
              </ExternalLink >
            </div>
          </div>
          <p className="footer__copy">&#169; Codypharm. All right reserved</p>
        </div>
      </footer>

      <AnchorLink  href="#" className="scrollup" id="scroll-up">
        <i className="uil uil-arrow-up scrollup__icon"></i>
      </AnchorLink >
      </Fragment>
  )
}

export default Footer