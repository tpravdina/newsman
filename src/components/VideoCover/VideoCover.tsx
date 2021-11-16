import React, { useState } from 'react';
import './VideoCover.scss';

import ModalVideo from '../ModalVideo';
import PlayButton from '../Buttons/PlayButton';

interface Props {
    video: string,
    poster: string
  }

const VideoCover:React.FC<Props> = ({ video, poster }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="VideoCover">
      <ModalVideo show={show} handleClose={() => setShow(false)}>
        <video
          src={video}
          poster={poster}
          className="VideoCover__modal-video"
          autoPlay
          muted
          controls
        >
          <track
            kind="captions"
          />
        </video>
      </ModalVideo>
      <div className="VideoCover__container">
        <img src={poster} alt={poster} className="VideoCover__cover-img" />
        <PlayButton onClick={() => setShow(true)} className="VideoCover__play-button" />
      </div>
    </div>
  );
};

export default VideoCover;
