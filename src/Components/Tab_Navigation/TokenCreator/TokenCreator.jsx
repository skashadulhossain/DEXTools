import React from 'react';
import { FiCopy } from 'react-icons/fi';
import './TokenCreator.css';

const TokenCreator = () => {
  const tokens = [
    { name: 'BKITTY', fullName: 'Brucey Kitty', address: '0xf76...188a', days: 8, image: '/api/placeholder/24/24' },
    { name: 'SONDON', fullName: 'SONDON', address: '0x668...fa38', days: 8, image: '/api/placeholder/24/24' },
    { name: 'TURBO', fullName: 'TURBO', address: '0x3e7...4c86', days: 13, image: '/api/placeholder/24/24' },
    { name: 'ETH', fullName: 'Egidso', address: '0x25e...0fbb', days: 13, image: '/api/placeholder/24/24' },
    { name: '$REWARDS', fullName: 'USDC Rewards', address: '0x3bd...ec9a', days: 14, image: '/api/placeholder/24/24' },
    { name: 'COOPER', fullName: 'Cooper The Turtle', address: '0xf18...f70c', days: 16, image: '/api/placeholder/24/24' },
    { name: 'BRICS', fullName: 'BRICS', address: '0xd75...9a57', days: 16, image: '/api/placeholder/24/24' },
    { name: 'TAS', fullName: 'Take A Stand', address: '0xaf1...1576', days: 16, image: '/api/placeholder/24/24' },
    { name: 'ORACLE', fullName: 'Oracle', address: '0x5e3...b8d1', days: 17, image: '/api/placeholder/24/24' },
    { name: 'BREAD', fullName: 'Bread', address: '0xe25...798e', days: 17, image: '/api/placeholder/24/24' },
    { name: 'MARO', fullName: 'Maga Neiro', address: '0x609...0f5e', days: 18, image: '/api/placeholder/24/24' },
    { name: 'GRU', fullName: 'Elons Minions', address: '0xf19...cb64', days: 20, image: '/api/placeholder/24/24' },
    { name: 'UMXO', fullName: 'Unimatrix Zero', address: '0x38a...ef54', days: 21, image: '/api/placeholder/24/24' },
    { name: '$WOLF', fullName: 'Drunk$Wolf', address: '0x371...a44e', days: 23, image: '/api/placeholder/24/24' },
    { name: 'FLUFFI', fullName: 'Fluffington', address: '0x603...509d', days: 23, image: '/api/placeholder/24/24' },
  ];

  return (
    <div className="token-list">
      <div className="token-grid">
        {tokens.map((token, index) => (
          <div key={index} className="token-card">
            <div className="token-info">
              <div className="token-name-wrapper">
                <img src={token.image} alt={token.name} className="token-image" />
                <div className="token-names">
                  <span className="token-name">{token.name}</span>
                  <span className="token-full-name">{token.fullName}</span>
                </div>
              </div>
              <div className="token-date">
                <span className="ethereum-icon">Ξ</span>
                <span>Ethereum</span>
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