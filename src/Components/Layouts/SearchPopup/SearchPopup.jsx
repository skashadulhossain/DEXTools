import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import './SearchPopup.css';

const tokenCreator = [
  { symbol: 'F', name: 'FOFOLE', icon: '🔵' },
  { symbol: 'G', name: 'GOAT', icon: '🔵' },
  { symbol: 'B', name: 'BKITTY', icon: '🟣' },
  { symbol: 'S', name: 'SONDON', icon: '🔵' },
  { symbol: 'X', name: 'XUNU', icon: '🔵' },
  { symbol: 'T', name: 'TURBO', icon: '🔵' },
  { symbol: 'E', name: 'ETH', icon: '🔵' },
  { symbol: '$', name: '$REWA', icon: '🔵' },
  { symbol: 'C', name: 'COOPER', icon: '🔵' },
  { symbol: 'B', name: 'BRICS', icon: '🔵' },
];

const lastUpdated = [
  { name: 'CheB', icon: '🔵' },
  { name: 'TROON', icon: '🔴' },
  { name: 'VOLTRON', icon: '🔴' },
  { name: 'TRONAL', icon: '🔴' },
  { name: 'WDOGE', icon: '🔵' },
  { name: 'BUD', icon: '⚫' },
  { name: 'BTC', icon: '⚫' },
  { name: 'BOTS', icon: '🔴' },
  { name: 'EARL', icon: '🔵' },
  { name: 'VGF', icon: '🔵' },
  { name: 'Harris', icon: '⚫' },
  { name: 'BONE', icon: '🔵' },
  { name: '$SAVEA', icon: '🔵' },
  { name: 'Trump', icon: '🔴' },
  { name: 'Vesper', icon: '⚫' },
  { name: 'R/MOON', icon: '⚫' },
  { name: '$ChiPox', icon: '🔵' },
  { name: 'WHIPIT', icon: '⚫' },
  { name: 'POX', icon: '🔵' },
  { name: 'CLOVER', icon: '⚫' },
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
                <span className="searchpopup-token-symbol">{token.symbol}</span>
                <span className="searchpopup-token-icon">{token.icon}</span>
                <span className="searchpopup-token-name">{token.name}</span>
              </div>
            ))}
          </div>
          <h2 className="searchpopup-section-title">LAST UPDATED</h2>
          <div className="searchpopup-token-grid">
            {lastUpdated.map((token, index) => (
              <div key={index} className="searchpopup-token-box">
                <span className="searchpopup-token-icon">{token.icon}</span>
                <span className="searchpopup-token-name">{token.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
