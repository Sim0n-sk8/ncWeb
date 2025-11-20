import React, { Component } from "react";
import SwiperSlider, { SwiperSlide } from "./swiper";

class HeroSliderOne extends Component {
  render() {
    const params = {
      slidesPerView: 1,
      loop: true,
      navigation: true,
      autoplay: {
        delay: 10500,
        disableOnInteraction: true,
      },
    };

    const images = [
      "slider3.jpg",
      "slider2.jpg",
      "slider1.jpg",
    ];

    return (
      <div className="hero-alider-area">
        {/* Text overlay */}
        <div className="hero-slider__content-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="hero-slider__content">
                  <h2 className="hero-slider__title">
                    Transforming patient care through software solutions
                  </h2>
                  <p className="hero-slider__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusm tempor incididunt ut labore et dolore.
                  </p>
                  <a
                    className="hero-slider__btn"
                    href={`${process.env.PUBLIC_URL}/contact-us`}
                  >
                    GET START
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background image slider */}
        <SwiperSlider options={params}>
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div
                className="hero-slider__single-item"
                style={{
                  backgroundImage: `url(assets/img/slider/${img})`,
                }}
              />
            </SwiperSlide>
          ))}
        </SwiperSlider>
      </div>
    );
  }
}

export default HeroSliderOne;
