import React from 'react'
import portfolio1 from "../assets/img/portfolio1.jpg"
import portfolio2 from "../assets/img/portfolio2.jpg"
import portfolio3 from "../assets/img/portfolio3.jpg"


function Portfolio() {
  return (
      <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent work</span>

        <div className="portfolio__container container swiper mySwiper">
          <div className="swiper-wrapper">
            {/**Portfolio 1 */}
            <div className="portfolio__content grid swiper-slide">
                <img src={portfolio1} className="portfolio__img"/>

                <div className="portfolio__data">
                  <h3 className="portfolio__title">eCommerce Website</h3>
                  <p className="portfolio__description">Website adaptable to all devices, with payment gate ways integrated.</p>
                  <a href="#" className="button button--flex button--small portfolio__button">
                    Demo
                    <i className="uil uil-arrow-right"></i>
                  </a>
                </div>
            </div>

            {/**Portfolio 2 */}
            <div className="portfolio__content grid swiper-slide">
                <img src={portfolio2} className="portfolio__img"/>

                <div className="portfolio__data">
                  <h3 className="portfolio__title">Company Website</h3>
                  <p className="portfolio__description">A company website giving a pharmacy an online presence.</p>
                  <a href="#" className="button button--flex button--small portfolio__button">
                    Demo
                    <i className="uil uil-arrow-right"></i>
                  </a>
                </div>
            </div>

            {/**Portfolio 3 */}
            <div className="portfolio__content grid swiper-slide">
                <img src={portfolio3} className="portfolio__img"/>

                <div className="portfolio__data">
                  <h3 className="portfolio__title">Multi vendor site</h3>
                  <p className="portfolio__description">A multivendor  website built with wordpress.</p>
                  <a href="#" className="button button--flex button--small portfolio__button">
                    Demo
                    <i className="uil uil-arrow-right"></i>
                  </a>
                </div>
            </div>

          {/**Portfolio 4 */}
          <div className="portfolio__content grid swiper-slide">
                <img src={portfolio1} className="portfolio__img"/>

                <div className="portfolio__data">
                  <h3 className="portfolio__title">RX Manager</h3>
                  <p className="portfolio__description">A pharmacy management system built with HTML, CSS, Javascript and PHP.</p>
                  <a href="#" className="button button--flex button--small portfolio__button">
                    Demo
                    <i className="uil uil-arrow-right"></i>
                  </a>
                </div>
            </div>
            
            {/**Portfolio 1 */}
            <div className="portfolio__content grid swiper-slide">
                <img src={portfolio1} className="portfolio__img"/>

                <div className="portfolio__data">
                  <h3 className="portfolio__title">Portfolio Website</h3>
                  <p className="portfolio__description">Website adaptable to all devices, built with react.</p>
                  <a href="#" className="button button--flex button--small portfolio__button">
                    Demo
                    <i className="uil uil-arrow-right"></i>
                  </a>
                </div>
            </div>
          </div>

          <div className="swiper-button-next">
            <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
          </div>
          <div className="swiper-button-prev">
          <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </section>
  )
}

export default Portfolio