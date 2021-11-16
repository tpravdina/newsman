import React, { useState, useRef } from 'react';
import './Video.scss';

import PlayButton from '../Buttons/PlayButton';
import PauseButton from '../Buttons/PauseButton';

interface VideoProps {
  className: string;
}

const Video: React.FC<VideoProps> = ({ className }) => {
  const [pause, setPause] = useState(true);
  const [firstClick, setFirstClick] = useState(true);
  const vidRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = (): void => {
    setFirstClick(false);
    if (vidRef.current !== null) {
      if (pause) {
        vidRef.current.play();
        setPause(false);
      } else {
        vidRef.current.pause();
        setPause(true);
      }
    }
  };

  return (
    <div className={`Video ${className}`}>
      <video
        className="Video__main-video"
        ref={vidRef}
        onClick={handlePlayVideo}
        src="/video/mainVideo.mp4"
        poster="/img/video-covers/main-video-cover.jpg"
      >
        <track kind="captions" />
      </video>
      {!firstClick && pause && <PauseButton onClick={handlePlayVideo} className="Video__button" />}
      {firstClick && <PlayButton onClick={handlePlayVideo} className="Video__button" />}
    </div>
  );
};

export default Video;
