import React, { useRef, useState } from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Parallax, Pagination, Navigation } from "swiper/modules";
import hero from "../../assets/images/hero.png";
import hero1 from "../../assets/images/4.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__start">
        <Swiper
          slidesPerView={1}
          spaceBetween={ 30}
          loop={true}
          speed={600}
          parallax={true}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="imgg" src={hero} alt="" />
            <div className="div">
              <h1 className="hero__title">Fresh Vegetables Big discount</h1>
              <p className="hero__text">
                Save up to 50% off on your first order
              </p>
              <form className="hero__form">
                <input
                  className="hero__form-inp"
                  type="text"
                  placeholder="Your emaill address"
                  required
                />
                <button className="hero__form-btn">Subscribe</button>
              </form>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="imgg"  src={hero} alt="" />
            <div className="div">
              <h1 className="hero__title">Fresh Vegetables Big discount</h1>
              <p className="hero__text">
                Save up to 50% off on your first order
              </p>
              <form className="hero__form">
                <input
                  className="hero__form-inp"
                  type="text"
                  placeholder="Your emaill address"
                  required
                />
                <button className="hero__form-btn">Subscribe</button>
              </form>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="imgg" src={hero} alt="" />
            <div className="div">
              <h1 className="hero__title">Fresh Vegetables Big discount</h1>
              <p className="hero__text">
                Save up to 50% off on your first order
              </p>
              <form className="hero__form">
                <input
                  className="hero__form-inp"
                  type="text"
                  placeholder="Your emaill address"
                  required
                />
                <button className="hero__form-btn">Subscribe</button>
              </form>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
