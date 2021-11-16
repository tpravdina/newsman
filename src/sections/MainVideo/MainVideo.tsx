import React from 'react';

import './MainVideo.scss';
import Video from '../../components/Video';

const MainVideo: React.FC = () => (
  <div className="MainVideo">
    <Video className="MainVideo__video" />
  </div>
);

export default MainVideo;
