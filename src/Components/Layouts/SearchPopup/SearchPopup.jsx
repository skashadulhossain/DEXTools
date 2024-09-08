import React, { useState } from 'react';
import { Monitor, Search, X } from 'lucide-react';
import './SearchPopup.css';
import tokenCreator1 from './Image/ether.png';
import tokenCreator2 from './Image/dext-gray-small.svg';
import tokenCreator3 from './Image/base.png';
import tokenUpdatedicon1 from './Image/solana.png';
import tokenUpdatedicon2 from './Image/tron.png';
import tokenUpdatedicon3 from './Image/bsc.png';
import tokenUpdated1 from './Image/Token img 1.jpg';
import tokenUpdated2 from './Image/Token img 2.jpg';
import tokenUpdated3 from './Image/Token img 3.png';
import tokenUpdated4 from './Image/Token img 4.jpg';
import tokenUpdated5 from './Image/Token img 5.png';
import tokenUpdated6 from './Image/Token img 6.jpg';
import tokenUpdated7 from './Image/Token img 7.png';
import tokenUpdated8 from './Image/Token img 8.png';
import tokenUpdated9 from './Image/Token img 9.png';
import tokenUpdated10 from './Image/Token img 10.jpg';
import tokenUpdated11 from './Image/Token img 11.png';
import tokenUpdated12 from './Image/Token img 12.jpeg';
import tokenUpdated13 from './Image/Token img 13.jpg';
import tokenUpdated14 from './Image/Token img 14.png';
import tokenUpdated15 from './Image/Token img 15.png';
import tokenUpdated16 from './Image/Token img 16.png';
import tokenUpdated17 from './Image/Token img 17.jpg';
import tokenUpdated19 from './Image/Token img 19.png';
import tokenUpdated20 from './Image/Token img 20.jpeg';
import { FaTelegram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const tokenCreator = [
  { symbol: 'F', name: 'FN', icon1: tokenCreator1, icon2: tokenCreator2 },
  { symbol: 'H', name: 'HB', icon1: tokenCreator1, icon2: tokenCreator2 },
  { symbol: 'X', name: 'XUNU', icon1: tokenCreator3, icon2: tokenCreator2 },
  { symbol: 'F', name: 'FOFOLE...', icon1: tokenCreator3, icon2: tokenCreator2 },
  { symbol: 'G', name: 'GOAT', icon1: tokenCreator1, icon2: tokenCreator2 },
  { symbol: 'B', name: 'BKITTY', icon1: tokenCreator1, icon2: tokenCreator2 },
  { symbol: 'S', name: 'SONDOM', icon1: tokenCreator1, icon2: tokenCreator2 },
  { symbol: 'X', name: 'XUNU', icon1: tokenCreator3, icon2: tokenCreator2 },
  { symbol: 'T', name: 'TURBO', icon1: tokenCreator1, icon2: tokenCreator2 },
  { symbol: 'E', name: 'ETH', icon1: tokenCreator1, icon2: tokenCreator2 },
];

const lastUpdated = [
  { symbol: tokenUpdated20, icon: tokenCreator1, title: 'BROKIE' },
  { symbol: tokenUpdated19, icon: tokenCreator1, title: 'DOGE' },
  { symbol: tokenUpdated1, icon: tokenUpdatedicon1, title: 'WUKONG' },
  { symbol: tokenUpdated2, icon: tokenCreator1, title: 'MBAKER' },
  { symbol: tokenUpdated3, icon: tokenUpdatedicon2, title: 'WHALE' },
  { symbol: tokenUpdated4, icon: tokenUpdatedicon3, title: 'BIRB' },
  { symbol: tokenUpdated5, icon: tokenCreator1, title: 'MOOND...' },
  { symbol: tokenUpdated6, icon: tokenUpdatedicon1, title: 'eSol' },
  { symbol: tokenUpdated7, icon: tokenUpdatedicon1, title: 'R/FROG' },
  { symbol: tokenUpdated8, icon: tokenCreator1, title: 'SHIB' },
  { symbol: tokenUpdated9, icon: tokenUpdatedicon2, title: 'MEOWS' },
  { symbol: tokenUpdated10, icon: tokenCreator1, title: 'MW3' },
  { symbol: tokenUpdated11, icon: tokenUpdatedicon2, title: 'KIDDO' },
  { symbol: tokenUpdated12, icon: tokenUpdatedicon1, title: 'GANGER' },
  { symbol: tokenUpdated13, icon: tokenUpdatedicon1, title: 'DirtyD' },
  { symbol: tokenUpdated14, icon: tokenCreator1, title: 'MOCH...' },
  { symbol: tokenUpdated1, icon: tokenCreator1, title: 'WUKONG' },
  { symbol: tokenUpdated15, icon: tokenCreator1, title: 'ADoge' },
  { symbol: tokenUpdated16, icon: tokenCreator1, title: '$Cafe' },
  { symbol: tokenUpdated17, icon: tokenUpdatedicon1, title: 'ROI' },
];

const SearchPopup = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  return (
    <div className="searchpopup-overlay">
      <div className="searchpopup-content">
        <div className="searchpopup-header">
          <div className="searchpopup-search-input-wrapper">
            <Search className="searchpopup-search-icon" />
            <input
              type="text"
              placeholder="Search pair by symbol, name, contract or token"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="searchpopup-popup-search-input"
            />
          </div>
          <button className="searchpopup-popup-close" onClick={onClose}>
            <X />
          </button>
        </div>
        <div className="searchpopup-popup-body">
          <h2 className="searchpopup-section-title">TOKEN CREATOR</h2>
          <div className="searchpopup-token-grid">
            {tokenCreator.map((token, index) => (
              <div key={index} className="searchpopup-token-box">
                <div className="searchpopup-token-img-box">
                  <span className="searchpopup-token-symbol">{token.symbol}</span>
                  <img src={token.icon1} alt="#" />
                  <img src={token.icon2} alt="#" />
                </div>
                <span className="searchpopup-token-name">{token.name}</span>
              </div>
            ))}
          </div>
          <h2 className="searchpopup-section-title">LAST UPDATED</h2>
          <div className="searchpopup-token-grid">
            {lastUpdated.map((token, index) => (
              <div key={index} className="searchpopup-tokenUpdate-box">
                <div className="searchpopup-tokenUpdate-img-box">
                  <img src={token.symbol} className='searchpopup-token-image' alt="#" />
                  <img src={token.icon} alt="#" />
                </div>
                <div className="searchpopup-token-subtitle-box">
                  <span className="searchpopup-tokenUpdate-name">{token.title}</span>
                  <div className="searchpopup-tokenUpdate-icon">
                    <Monitor size={16} />
                    <FaTelegram size={16} />
                    <FaXTwitter size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
