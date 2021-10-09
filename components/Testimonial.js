import React from 'react'
import testimonial1 from "../assets/img/testimonial1.png"
import testimonial2 from "../assets/img/testimonial2.png"
import testimonial3 from "../assets/img/testimonial3.jpeg"



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
                      <img src={testimonial3} className="testimonial__img" />

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
                  <p className="testimonial__description">CodyPharm has been incharge of building all my three websites and he is good at what he does
                  </p>
                </div>
                {/**Testimonial 2 */}
                <div className="testimonial__content swiper-slide">
                  <div className="testimonial__data">
                    <div className="testimonial__header">
                      <img src={testimonial2} className="testimonial__img" />

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
                  <p className="testimonial__description">CodyPharm did a great job for me and when next I need a job done, he is my go to person.
                  </p>
                </div>
                {/**Testimonial 3 */}
                <div className="testimonial__content swiper-slide">
                  <div className="testimonial__data">
                    <div className="testimonial__header">
                      <img src={testimonial1} className="testimonial__img" />

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
                  <p className="testimonial__description">CodyPharm never disappoints, just tell him what you want and he will create something awesome for you.
                  </p>
                </div>
              </div>

              <div className="swiper-pagination swiper-pagination-testimonial"></div>
            </div>

       </section>

  )
}

export default Testimonial