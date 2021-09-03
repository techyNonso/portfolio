import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'


function Qualification() {
  return (
      <section className="qualification section">
          <h2 className="section__title">Qualification</h2>
          <span className="section__subtitle">My personal journey</span>

          <div className="qualification__container container">
            <div className="qualification__tabs">
              <div className="qualification__button button--flex qualification__active" data-target='#education'>
                <i className="uil uil-graduation-cap qualification__icon"></i>
                Education
              </div>

              <div className="qualification__button button--flex" data-target='#work'>
                <i className="uil uil-briefcase-alt qualification__icon"></i>
                Work
              </div>
            </div>
            <div className="qualification__sections">
              {/** Qualification Content 1 */}
              <div className="qualification__content qualification__active" data-content id="education">
                {/** Qualification 1 */}
                <div className="qualification__data" >
                  <div>
                    <h3 className="qualification__title">Pharmacology</h3>
                    <span className="qualification__subtitle">Delta state University</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      2014-2018
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>
                 {/** Qualification 2 */}
                <div className="qualification__data">
                   <div></div>
                   <div>
                    <span className="qualification__rounder"></span>
                    {/**<span className="qualification__line"></span>**/}
                  </div>

                  <div>
                    <h3 className="qualification__title">Pharmacy</h3>
                    <span className="qualification__subtitle">Delta state University</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      2018-2022
                    </div>
                  </div>
                  
                </div>
                
                 
              </div>
              {/** Qualification Content 2 */}
              <div className="qualification__content " data-content id="work">
                {/** Qualification 1 */}
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Web development tutor</h3>
                    <span className="qualification__subtitle">Eagle Planet LTD</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      2018-2018
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>
                 {/** Qualification 2 */}
                <div className="qualification__data">
                   <div></div>
                   <div>
                    <span className="qualification__rounder"></span>
                    {/**<span className="qualification__line"></span>**/}
                  </div>

                  <div>
                    <h3 className="qualification__title">Freelance Web Developer</h3>
                    <span className="qualification__subtitle">Self Employed</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      2018-Present
                    </div>
                  </div>
                  
                </div>
                
                 
              </div>
            </div>
          </div>

      </section>
  )
}

export default Qualification