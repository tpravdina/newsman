import React from 'react';
import './VideoGallery.scss';

import Title from '../../components/Title';
import RectButton from '../../components/Buttons/RectButton';
import VideoContainer from '../../components/Containers/VideoContainer';

const VideoGallery: React.FC = () => (
  <div className="VideoGallery" id="VideoGallery">
    <Title modifier="left-line">Video</Title>
    <VideoContainer />
    <RectButton withArrow modifier="short" className="VideoGallery__button">more</RectButton>
  </div>
);

export default VideoGallery;
