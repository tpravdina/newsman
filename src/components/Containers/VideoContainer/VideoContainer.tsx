import React from 'react';
import './VideoContainer.scss';

import videosAndCovers from '../../../mock/videosAndCovers';
import VideoCover from '../../VideoCover';

const VideoContainer: React.FC = () => (
  <div className="VideoContainer">
    {videosAndCovers.map((item) => (
      <VideoCover key={item.video} video={item.video} poster={item.poster} />
    ))}
  </div>
);

export default VideoContainer;
