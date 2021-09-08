import React from 'react'


function Services() {
  return (
      <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className=" section__subtitle">What I offer</span>

        <div className="services__container container grid">
          {/** Services 1 */}
          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="services__title">Frontend <br/> Developer</h3>
            </div>

            <span className="button button--flex button--small button--link services__button">
              View More
              <i className="uil uil-arrow-right button__icon"></i>
            </span>

            <div className="services__modal">
              <div className="services__modal-content">
                <h4 className="services__modal-title">Frontend <br/> Developer</h4>
                <i className="uil uil-times services__modal-close"></i>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I develop awesome user interfaces.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I develop cool user experience.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I make your company stand out.</p>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>

          {/** Services 2 */}
          <div className="services__content">
            <div>
              <i className="uil uil-arrow services__icon"></i>
              <h3 className="services__title">Backend <br/> Developer</h3>
            </div>

            <span className="button button--flex button--small button--link services__button">
              View More
              <i className="uil uil-arrow-right button__icon"></i>
            </span>

            <div className="services__modal">
              <div className="services__modal-content">
                <h4 className="services__modal-title">Backend <br/> Developer</h4>
                <i className="uil uil-times services__modal-close"></i>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I develop awesome backends.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I develop clean and fast apis.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I make your backend standout.</p>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>

          {/** Services 3 */}
          <div className="services__content">
            <div>
              <i className="uil uil-link services__icon"></i>
              <h3 className="services__title">blockchain <br/> Developer</h3>
            </div>

            <span className="button button--flex button--small button--link services__button">
              View More
              <i className="uil uil-arrow-right button__icon"></i>
            </span>

            <div className="services__modal">
              <div className="services__modal-content">
                <h4 className="services__modal-title">Blockchain <br/> Developer</h4>
                <i className="uil uil-times services__modal-close"></i>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I develop smart contracts.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I integrate smart contracts to front ends.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I make your company stand out with blockchain technology.</p>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>  
          {/** Services 4 */}
          <div className="services__content">
            <div>
              <i className="uil uil-wordpress-simple services__icon"></i>
              <h3 className="services__title">Wordpress <br/> Developer</h3>
            </div>

            <span className="button button--flex button--small button--link services__button">
              View More
              <i className="uil uil-arrow-right button__icon"></i>
            </span>

            <div className="services__modal">
              <div className="services__modal-content">
                <h4 className="services__modal-title">Wordpress <br/> Developer</h4>
                <i className="uil uil-times services__modal-close"></i>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I customize themes to your taste.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I get needed plugins installed and working.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I customize wordpress theme codes.</p>
                  </li>
                  
                  
                </ul>
              </div>
            </div>
          </div>

          
        </div>          

      </section>
  )
}

export default Services