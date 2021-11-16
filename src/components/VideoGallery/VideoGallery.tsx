import React from 'react';
import VideoCover from '../VideoCover';
import './VideoGallery.scss';
import videosAndCovers from '../../mock/videosAndCovers';

const VideoGallery:React.FC = () => (
  <div className="VideoGallery">
    {videosAndCovers.map((item) => (<VideoCover key={item.video} video={item.video} poster={item.poster} />))}
  </div>
);
export default VideoGallery;
