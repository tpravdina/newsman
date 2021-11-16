import React from 'react';
import './StepSlider.scss';

interface StepSliderSlideProps {
  img: string | undefined;
  className: string;
}
const StepSliderSlide: React.FC<StepSliderSlideProps> = ({ img, className }) => (
  <div className={`StepSlider__slide ${className}`}>
    <img src={img} alt={img} />
  </div>
);

interface StepSliderProps {
  currentOffset: number;
  imgArray: (string | undefined)[];
}

const StepSlider: React.FC<StepSliderProps> = ({ currentOffset, imgArray }) => (
  <div className="StepSlider">
    <div className="StepSlider__container">
      {imgArray.map((img, index) => (
        <StepSliderSlide
          key={img}
          img={img}
          className={`position-${(index - currentOffset + imgArray.length + 1) % imgArray.length}`}
        />
      ))}
    </div>
  </div>
);

export default StepSlider;
