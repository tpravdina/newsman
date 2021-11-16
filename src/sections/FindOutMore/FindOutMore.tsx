/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import './FindOutMore.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/swiper-vars.scss';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';

import Title from '../../components/Title';
import Article from '../../components/Article';
import RectButton from '../../components/Buttons/RectButton';

SwiperCore.use([Navigation, Autoplay]);

interface ArticeProps {
  id: string;
  img: string;
  title: string;
  date: string;
  category: string;
  text: string;
}

const FindOutMore: React.FC = () => {
  const [articlesArray, setArticlesArray] = useState<ArticeProps[]>([]);
  useEffect(() => {
    fetch('/data/db.json')
      .then((response) => response.json())
      .then((data) => {
        setArticlesArray(data.articles);
      });
  });
  const articles = articlesArray;
  return (
    <div className="FindOutMore" id="FindOutMore">
      <Title className="FindOutMore__title" modifier="center-no-line">
        Find out more
      </Title>
      <h2 className="FindOutMore__subtitle">our blog</h2>
      <div className="FindOutMore__slider-button-container">
        <button type="button" className="FindOutMore__prev-slider-button">
          <svg
            className="FindOutMore__prev-arrow"
            viewBox="0 0 90 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.05372 14.056L90.0005 14.0559L90.0005 12.1065L1.05372 12.1065L1.05372 14.056Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              // eslint-disable-next-line max-len
              d="M3.11177 13.1072L16.7374 24.4234L15.4919 25.9231L0.000489406 13.0573L16.1331 0.509765L17.33 2.04859L3.11177 13.1072Z"
            />
          </svg>
        </button>
        <button type="button" className="FindOutMore__next-slider-button">
          <svg
            className="FindOutMore__next-arrow"
            viewBox="0 0 90 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M88.9473 13.8953L0.000487957 13.8953L0.000488281 11.9458L88.9473 11.9458L88.9473 13.8953Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M86.8892 12.9465L73.2636 24.2628L74.5091 25.7625L90.0005 12.8967L73.8679 0.349121L72.671 1.88794L86.8892 12.9465Z"
            />
          </svg>
        </button>
      </div>
      <Swiper
        className="FindOutMore__slider"
        spaceBetween={50}
        slidesPerView={3}
        loop
        autoplay
        speed={2000}
        navigation={{
          nextEl: '.FindOutMore__next-slider-button',
          prevEl: '.FindOutMore__prev-slider-button',
        }}
        initialSlide={0}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          700: {
            slidesPerView: 2,
          },
          950: {
            slidesPerView: 3,
          },
        }}
      >
        {articles.map((article) => (
          <SwiperSlide key={article.id}>
            <Article
              img={article.img}
              title={article.title}
              date={article.date}
              category={article.category}
              text={article.text}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <RectButton className="FindOutMore__see-all-button" withArrow>
        see all articles
      </RectButton>
    </div>
  );
};

export default FindOutMore;
