import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Header() {
  return (
      
        <header className="header" id="header">
          <nav className="nav container">
            <AnchorLink  href="#" className="nav__logo">CodyPharm</AnchorLink >
            <div className="nav__menu" id="nav-menu">
              <ul className="nav__list grid">
                <li className="nav__item">
                  <AnchorLink  href="#home" className="nav__link active-link">
                    <i className="uil uil-estate nav__icon"></i>Home
                  </AnchorLink >
                </li>
                <li className="nav__item">
                  <AnchorLink  href="#about" className="nav__link">
                  <i className="uil uil-user nav__icon"></i>About
                  </AnchorLink >
                </li>
                <li className="nav__item">
                  <AnchorLink  href="#skills" className="nav__link">
                  <i className="uil uil-file-alt nav__icon"></i>Skills
                  </AnchorLink >
                </li>
                <li className="nav__item">
                  <AnchorLink  href="#services" className="nav__link">
                  <i className="uil uil-briefcase-alt nav__icon"></i>Services
                  </AnchorLink >
                </li>
                <li className="nav__item">
                  <AnchorLink  href="#portfolio" className="nav__link">
                  <i className="uil uil-scenery nav__icon"></i> Portfolio
                  </AnchorLink >
                </li>
                <li className="nav__item">
                  <AnchorLink  href="#contact" className="nav__link">
                  <i className="uil uil-message nav__icon"></i> Contact
                  </AnchorLink >
                </li>
              </ul>

              <i className="uil uil-times nav__close" id="nav-close"></i>
            </div>
            <div className="nav__btns">
              {/** Theme change button */}
              <i className="uil uil-moon change-theme" id="theme-button"></i>
              <div className="nav__toggle" id="nav-toggle">
              <i className="uil uil-apps"></i>
              </div>
            </div>
          </nav>
        </header>
  )
}

export default Header