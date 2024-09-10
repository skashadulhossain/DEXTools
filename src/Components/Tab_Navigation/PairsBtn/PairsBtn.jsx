import React from 'react';
import './PairsBtn.css';
import btnimg1 from './Image/1.svg';
import btnimg2 from './Image/2.svg';
import btnimg3 from './Image/3.svg';
import btnimg4 from './Image/4.svg';
import btnimg5 from './Image/5.svg';
import btnimg6 from './Image/6.svg';
import btnimg7 from './Image/7.svg';
import btnimg8 from './Image/8.svg';

const CryptoPairButtons = () => {
  const buttons = [
    { icon: btnimg1, label: 'Exchange' },
    { icon: btnimg2, label: 'DeFi' },
    { icon: btnimg3, label: 'MEME' },
    { icon: btnimg4, label: 'AI' },
    { icon: btnimg5, label: 'NFTs' },
    { icon: btnimg6, label: 'Gaming' },
    { icon: btnimg7, label: 'Sports' },
    { icon: btnimg8, label: 'Celebrity' },
  ];

  return (
    <div className="crypto-pair-buttons">
      {buttons.map((button, index) => (
        <button key={index} className="crypto-pair-button">
          <img src={button.icon} alt="icon" />
          <span>{button.label}</span>
        </button>
      ))}
    </div>
  );
};

export default CryptoPairButtons;