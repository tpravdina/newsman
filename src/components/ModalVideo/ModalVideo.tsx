import React from 'react';
import CloseButton from '../Buttons/CloseButton';
import './ModalVideo.scss';

interface ModalVideoProps{
    handleClose: () => void,
    show: boolean,
    children: React.ReactNode
}

const ModalVideo:React.FC<ModalVideoProps> = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'Modal display-block' : 'Modal display-none';

  return (
    <div className={showHideClassName}>
      <div className="Modal__main">
        {children}
        <CloseButton onClick={handleClose} className="Modal__close-button" />
      </div>
    </div>
  );
};

export default ModalVideo;
