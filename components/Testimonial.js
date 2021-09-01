import React from 'react'
import testimonial1 from "../assets/img/testimonial1.jpg"
import testimonial2 from "../assets/img/testimonial2.jpg"
import testimonial3 from "../assets/img/testimonial3.jpg"



function Testimonial() {
  return (
       <section className="testimonial section">
            <h2 className="section__title">Testimonials</h2>
            <span className="section__subtitle">My client saying</span>

            <div className="testimonial__container container swiper mySwiper">
              <div className="swiper-wrapper">
                {/**Testimonial 1 */}
                <div className="testimonial__content swiper-slide">
                  <div className="testimonial__data">
                    <div className="testimonial__header">
                      <img src={testimonial1} className="testimonial__img" />

                      <div>
                        <h3 className="testimonial__name">Augustine Odibo</h3>
                        <span className="testimonial__client">Client</span>
                      </div>
                    </div>

                    <div>
                      <i className="uil uil-star testimonial__icon-star"></i>
                      <i className="uil uil-star testimonial__icon-star"></i>
                      <i className="uil uil-star testimonial__icon-star"></i>
                      <i className="uil uil-star testimonial__icon-star"></i>
                      <i className="uil uil-star testimonial__icon-star"></i>
                    </div>
                  </div>
                  <p className="testimonial__description">I get a good impression, I carry out my 
                    project with all the possible quality and attention and support 24 hours a day.
                  </p>
                </div>
                {/**Testimonial 2 */}
                <div className="testimonial__content swiper-slide">
                  <div className="testimonial__data">
                    <div className="testimonial__header">
                      <img src={testimonial2} className="testimonial__img" />

                      <div>
                        <h3 className="testimonial__name">Tobi</h3>
                        <span className="testimonial__client">Client</span>
                      </div>
                    </div>

                    <div>
                      <i className="uil uil-star testimonial__icon-star"></i>
                      <i className="uil uil-star testimonial__icon-star"></i>
                      <i className="uil uil-star testimonial__icon-star"></i>
                      <i className="uil uil-star testimonial__icon-star"></i>
                      <i className="uil uil-star testimonial__icon-star"></i>
                    </div>
                  </div>
                  <p className="testimonial__description">I get a good impression, I carry out my 
                    project with all the possible quality and attention and support 24 hours a day.
                  </p>
                </div>
                {/**Testimonial 3 */}
                <div className="testimonial__content swiper-slide">
                  <div className="testimonial__data">
                    <div className="testimonial__header">
                      <img src={testimonial3} className="testimonial__img" />

                      <div>
                        <h3 className="testimonial__name">Fidelis Ikeji</h3>
                        <span className="testimonial__client">Client</span>
                      </div>
                    </div>

                    <div>
                      <i className="uil uil-star testimonial__icon-star"></i>
                      <i className="uil uil-star testimonial__icon-star"></i>
                      <i className="uil uil-star testimonial__icon-star"></i>
                      <i className="uil uil-star testimonial__icon-star"></i>
                      <i className="uil uil-star testimonial__icon-star"></i>
                    </div>
                  </div>
                  <p className="testimonial__description">I get a good impression, I carry out my 
                    project with all the possible quality and attention and support 24 hours a day.
                  </p>
                </div>
              </div>

              <div className="swiper-pagination swiper-pagination-testimonial"></div>
            </div>

       </section>

  )
}

export default Testimonial