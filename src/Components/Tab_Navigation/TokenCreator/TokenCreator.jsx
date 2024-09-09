import React from 'react';
import { FiCopy } from 'react-icons/fi';
import './TokenCreator.css';
import boximg1 from './Image/box img 1.jpeg';
import boximg2 from './Image/box img 2.png';
import boximg3 from './Image/box img 3.jpeg';
import boximg4 from './Image/box img 4.jpg';
import iconimg1 from './Image/dext-gray-small.svg';
import iconimg2 from './Image/base.png';
import iconimg3 from './Image/ether.png';
import iconimg4 from './Image/bsc.png';

const TokenCreator = () => {
  const tokens = [
    { name: 'SIGMA', fullName: 'What is the sigma', address: '0xf3e...2f6b', days: 1, image: boximg1, icon: iconimg3, title: 'Ethereum' },
    { name: 'BESO', fullName: 'BESO COIN MEME', address: '0xf846...120a', days: 1, image: boximg2, icon: iconimg4, title: 'BNC Chain' },
    { name: 'GROWLY', fullName: 'GROWLY', address: '0x535...d392', days: 1, image: boximg3, icon: iconimg3, title: 'Ethereum' },
    { name: 'OLYMPIC', fullName: 'Paris 2024', address: '0x59d...b1dc', days: 1, image: boximg4, icon: iconimg3, title: 'Ethereum' },
    { name: 'SIGMA', fullName: 'What is the sigma', address: '0xf3e...2f6b', days: 1, image: boximg1, icon: iconimg3, title: 'Ethereum' },
    { name: 'SIGMA', fullName: 'What is the sigma', address: '0xf3e...2f6b', days: 1, image: boximg1, icon: iconimg3, title: 'Ethereum' },
    { name: 'SIGMA', fullName: 'What is the sigma', address: '0xf3e...2f6b', days: 1, image: boximg1, icon: iconimg3, title: 'Ethereum' },
    { name: 'SIGMA', fullName: 'What is the sigma', address: '0xf3e...2f6b', days: 1, image: boximg1, icon: iconimg3, title: 'Ethereum' },
    { name: 'SIGMA', fullName: 'What is the sigma', address: '0xf3e...2f6b', days: 1, image: boximg1, icon: iconimg3, title: 'Ethereum' },
    { name: 'SIGMA', fullName: 'What is the sigma', address: '0xf3e...2f6b', days: 1, image: boximg1, icon: iconimg3, title: 'Ethereum' },
    { name: 'SIGMA', fullName: 'What is the sigma', address: '0xf3e...2f6b', days: 1, image: boximg1, icon: iconimg3, title: 'Ethereum' },
    { name: 'SIGMA', fullName: 'What is the sigma', address: '0xf3e...2f6b', days: 1, image: boximg1, icon: iconimg3, title: 'Ethereum' },
    { name: 'SIGMA', fullName: 'What is the sigma', address: '0xf3e...2f6b', days: 1, image: boximg1, icon: iconimg3, title: 'Ethereum' },
    { name: 'SIGMA', fullName: 'What is the sigma', address: '0xf3e...2f6b', days: 1, image: boximg1, icon: iconimg3, title: 'Ethereum' },
    { name: 'SIGMA', fullName: 'What is the sigma', address: '0xf3e...2f6b', days: 1, image: boximg1, icon: iconimg3, title: 'Ethereum' },
  ];

  return (
    <div className="token-list">
      <div className="token-grid">
        {tokens.map((token, index) => (
          <div key={index} className="token-card">
            <div className="token-info">
              <div className="token-name-wrapper">
                <div className="token-img-box">
                  <img src={token.image} alt={token.name} className="token-image" />
                  <img src={iconimg1} alt="#" />
                </div>
                <div className="token-names">
                  <span className="token-name">{token.name}</span>
                  <span className="token-full-name">{token.fullName}</span>
                </div>
              </div>
              <div className="token-date">
                <div className="token-date-title">
                  <img src={token.icon} alt="" />
                  <span>{token.title}</span>
                </div>
                <span className="days-ago">{token.days} months ago</span>
              </div>
            </div>
            <div className="token-address">
              <span>{token.address}</span>
              <FiCopy className="copy-icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokenCreator;