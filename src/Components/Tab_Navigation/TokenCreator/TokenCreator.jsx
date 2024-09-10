import React from 'react';
import { FiCopy } from 'react-icons/fi';
import './TokenCreator.css';
import boximg1 from './Image/box img 1.jpeg';
import boximg2 from './Image/box img 2.png';
import boximg3 from './Image/box img 3.jpeg';
import boximg4 from './Image/box img 4.jpg';
import boximg5 from './Image/box img 5.jpg';
import boximg6 from './Image/box img 6.jpeg';
import boximg7 from './Image/box img 7.jpg';
import boximg8 from './Image/box img 8.png';
import boximg9 from './Image/box img 9.jpeg';
import boximg10 from './Image/box img 10.png';
import boximg11 from './Image/box img 11.png';
import boximg12 from './Image/box img 12.png';
import boximg13 from './Image/box img 13.jpeg';
import boximg14 from './Image/box img 14.jpeg';
import boximg15 from './Image/box img 15.jpg';
import boximg16 from './Image/box img 16.png';
import boximg17 from './Image/box img 17.jpg';
import boximg18 from './Image/box img 18.jpg';
import iconimg1 from './Image/dext-gray-small.svg';
import iconimg2 from './Image/base.png';
import iconimg3 from './Image/ether.png';
import iconimg4 from './Image/bsc.png';

const TokenCreator = () => {
  const tokens1 = [
    { name: 'SIGMA', fullName: 'What is the sigma', address: '0xf3e...2f6b', days: 1, image: boximg1, icon: iconimg3, title: 'Ethereum' },
    { name: 'BESO', fullName: 'BESO COIN MEME', address: '0xf846...120a', days: 1, image: boximg2, icon: iconimg4, title: 'BNC Chain' },
    { name: 'GROWLY', fullName: 'GROWLY', address: '0x535...d392', days: 1, image: boximg3, icon: iconimg3, title: 'Ethereum' },
  ];

  const tokens2 = [
    { name: 'BKITTY', fullName: 'Brucey Kitty', address: '0xf76...188a', days: 10, image: boximg5, icon: iconimg3, title: 'Ethereum' },
    { name: 'XUNU', fullName: 'XU INU', address: '0x3a4...ebc9', days: 12, image: boximg6, icon: iconimg2, title: 'Base' },
    { name: 'COOPER', fullName: 'Cooper The Turtle', address: '0xf18...f70c', days: 17, image: boximg7, icon: iconimg3, title: 'Ethereum' },
    { name: 'OLYMPIC', fullName: 'Paris 2024', address: '0x59d...b1dc', days: 11, image: boximg4, icon: iconimg3, title: 'Ethereum' },
    { name: 'GRU', fullName: 'Elons Minions', address: '0xf19...cb64', days: 22, image: boximg8, icon: iconimg3, title: 'Ethereum' },
    { name: 'GNBULL', fullName: 'Green Bull', address: '0x3cb...d1a3', days: 27, image: boximg9, icon: iconimg3, title: 'Ethereum' },
    { name: 'NUCLEAR', fullName: 'Nuclear Power', address: '0xbe1...0dbd', days: 28, image: boximg10, icon: iconimg3, title: 'Ethereum' },
    { name: 'KAMALASUT', fullName: 'Kamalasutra', address: '0xa5f...5cc1', days: 28, image: boximg11, icon: iconimg3, title: 'Ethereum' },
    { name: 'RAYGUN', fullName: 'Raygun', address: '0x01d...4990', days: 11, image: boximg12, icon: iconimg3, title: 'Ethereum' },
    { name: 'NEIRO', fullName: 'NEIRO COINS BNB', address: '0x7af...2e63', days: 17, image: boximg13, icon: iconimg4, title: 'BNC Chain' },
    { name: 'BOYCOTT', fullName: 'Olympics', address: '0x0ff...297b', days: 8, image: boximg14, icon: iconimg3, title: 'Ethereum' },
    { name: 'PEARS', fullName: 'PEARS COIN', address: '0x000...ed92', days: 5, image: boximg15, icon: iconimg4, title: 'BNC Chain' },
    { name: 'EVECOIN', fullName: 'GlamTech Eve', address: '0x7cd...e9f0', days: 29, image: boximg6, icon: iconimg3, title: 'Ethereum' },
    { name: 'DWOG', fullName: 'DWOG', address: '0x81e...8d96', days: 7, image: boximg17, icon: iconimg3, title: 'Ethereum' },
    { name: 'CODE', fullName: 'Code Token', address: '0x283...901a', days: 22, image: boximg18, icon: iconimg3, title: 'Ethereum' },
  ];

  return (
    <div className="token-list">
      <div className="token-grid">
        {tokens1.map((token, index) => (
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
                <span className="days-ago">{token.days} days ago</span>
              </div>
            </div>
            <div className="token-address">
              <span>{token.address}</span>
              <FiCopy className="copy-icon" />
            </div>
          </div>
        ))}
      </div>
      <p>Below is a list of the cryptocurrencies and token social links
        that have been created with Token Creator most recently.</p>
      <div className="token-grid">
        {tokens2.map((token, index) => (
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
                <span className="days-ago">{token.days} days ago</span>
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