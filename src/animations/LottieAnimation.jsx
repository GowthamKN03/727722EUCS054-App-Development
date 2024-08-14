import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../animations/pay.json'; 

const LottieAnimation = ({ isPlaying }) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div className={`lottie-container ${isPlaying ? 'visible' : 'hidden'}`}>
      <Lottie options={defaultOptions} height={500} width={500} />
    </div>
  );
};

export default LottieAnimation;
