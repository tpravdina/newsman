import React from 'react';
import './AboutNewsman.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/swiper-vars.scss';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';

import aboutNewsmanSliderImages from '../../mock/aboutNewsmanSliderImages';
import Logo from '../../components/Logo';
import RoundNextButton from '../../components/Buttons/RoundNextButton';

SwiperCore.use([Navigation, Autoplay]);

const AboutNewsman: React.FC = () => (
  <div className="AboutNewsman" id="AboutNewsman">
    <div className="AboutNewsman__slider-container">
      <Swiper
        className="AboutNewsman__slider"
        slidesPerView={1}
        loop
        autoplay
        speed={2000}
        navigation={{
          nextEl: '.AboutNewsman__next-slider-button',
        }}
        initialSlide={4}
        allowTouchMove={false}
      >
        {aboutNewsmanSliderImages.map((slide) => (
          <SwiperSlide key={slide}>
            <img className="AboutNewsman__slide-img" src={slide} alt={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
      <RoundNextButton className="AboutNewsman__next-slider-button" />
    </div>
    <Logo className="AboutNewsman__logo" color="white" />
    <div className="AboutNewsman__text">
      <p className="AboutNewsman__paragraph">
        <i>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet
          minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </i>
      </p>
      <p className="AboutNewsman__paragraph">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
        consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Velit
        officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
      </p>
    </div>
  </div>
);

export default AboutNewsman;
