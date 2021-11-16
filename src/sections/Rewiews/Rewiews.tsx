import React, { useState, useEffect } from 'react';
import RoundNextButton from '../../components/Buttons/RoundNextButton';
import StepSlider from '../../components/StepSlider';
import './Rewiews.scss';

interface Review {
  id?: string;
  img?: string;
  name?: string;
  role?: string;
  text?: string;
}

function getTwoDigitNumber(num: number): string {
  if (num < 10) {
    return `0${num}`;
  }
  return num.toString();
}

const Rewiews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch('/data/db.json')
      .then((response) => response.json())
      .then((data) => {
        setReviews(data.reviews);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const imgArray = reviews.map((elem) => elem.img);

  const [currentOffset, setCurrentOffset] = useState(0);

  return (
    <div className="Rewiews" id="Rewiews">
      <div className="Rewiews__slider-container">
        <StepSlider currentOffset={currentOffset} imgArray={imgArray} />
        <div className="Rewiews__numbers">
          {`${getTwoDigitNumber(currentOffset + 1)}/${getTwoDigitNumber(imgArray.length)}`}
        </div>
        <h2 className="Rewiews__title">Reviews</h2>
        <RoundNextButton
          className="Rewiews__next-button"
          onClick={() => {
            setCurrentOffset((currentOffset + 1) % imgArray.length);
          }}
        />
        <div className="Rewiews__black-filter" />
      </div>
      <div className="Rewiews__review">
        <p className="Rewiews__review__name">{reviews[currentOffset]?.name}</p>
        <p className="Rewiews__review__role">{reviews[currentOffset]?.role}</p>
        <p className="Rewiews__review__text">{reviews[currentOffset]?.text}</p>
      </div>
    </div>
  );
};

export default Rewiews;
