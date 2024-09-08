

import React, { useState } from 'react';
import { ArrowUpRight, Monitor, Mail, Send, Twitter, MessageCircle, Clock, ChevronUp, Plus } from 'lucide-react';
import '../DEXboard_Box/DexBoardBox.css';

const CryptoDashboard = () => {
  const [activeTab, setActiveTab] = useState('Daily gainers');

  const gainers = [
    { id: 1, name: 'SunKitty', symbol: 'WTRX', price: 0.00007699, change: 1348.58, icon: '🌞' },
    { id: 2, name: 'MALE', symbol: 'WTRX', price: 0.00007251, change: 1316.45, icon: '👨' },
    { id: 3, name: 'SNAPE', symbol: 'SOL', price: 0.00005141, change: 1296.70, icon: '🧙‍♂️' },
    { id: 4, name: 'KPEPE', symbol: 'WTRX', price: 0.00007792, change: 1210.30, icon: '🐸' },
    { id: 5, name: 'Neiro', symbol: 'WTRX', price: 0.0009827, change: 1208.23, icon: '🦊' },
  ];

  const tokens = [
    { name: 'FN', time: '1 d ago', chain: 'ETH', icon: 'F' },
    { name: 'HB', time: '1 d ago', chain: 'ETH', icon: 'H' },
    { name: 'XUNU', time: '2 d ago', chain: 'BASE', icon: 'X' },
    { name: 'FOFOLETES', time: '2 d ago', chain: 'BASE', icon: 'F' },
  ];

  const socials = [
    { name: 'DIRTYD', time: '51 m ago', icon: '🦁' },
    { name: '$MOCHICAT', time: '1 h ago', icon: '🐱' },
    { name: 'WUKONG', time: '1 h ago', icon: '🐒' },
    { name: 'ADOGE', time: '1 h ago', icon: '🐕' },
    { name: '$CAFE', time: '1 h ago', icon: '☕' },
  ];

  return (
    <div className="CryptoDashboard-container">
      {/* Gainers Section */}
      <div className="CryptoDashboard-section">
        <div className="CryptoDashboard-section-header">
          <div>
            <span 
              className={`CryptoDashboard-tab ${activeTab === 'Daily gainers' ? 'active' : ''}`} 
              onClick={() => setActiveTab('Daily gainers')}
            >
              Daily gainers
            </span>
            <span 
              className={`CryptoDashboard-tab ${activeTab === 'Daily losers' ? 'active' : ''}`} 
              onClick={() => setActiveTab('Daily losers')}
            >
              Daily losers
            </span>
          </div>
          <div className="CryptoDashboard-more">
            More <ArrowUpRight size={14} />
          </div>
        </div>
        {gainers.map((gainer) => (
          <div key={gainer.id} className="CryptoDashboard-gainer-item">
            <div className="CryptoDashboard-gainer-id">#{gainer.id}</div>
            <ChevronUp size={14} className="CryptoDashboard-chevron" />
            <div className="CryptoDashboard-icon">{gainer.icon}</div>
            <div className="CryptoDashboard-gainer-info">
              <div className="CryptoDashboard-gainer-name">{gainer.name} / {gainer.symbol}</div>
              <div className="CryptoDashboard-gainer-price">${gainer.price.toFixed(gainer.price < 0.001 ? 8 : 4)}</div>
            </div>
            <div className="CryptoDashboard-gainer-change">▲ {gainer.change.toFixed(2)}%</div>
          </div>
        ))}
        <div className="CryptoDashboard-gainer-item">
          <Plus size={14} className="CryptoDashboard-plus" />
        </div>
      </div>

      {/* Token Creator Section */}
      <div className="CryptoDashboard-section">
        <div className="CryptoDashboard-section-header">
          <div className="CryptoDashboard-title">
            <div className="CryptoDashboard-icon blue">🔄</div>
            <span className="CryptoDashboard-title-text">Token Creator</span>
            <span className="CryptoDashboard-subtitle">by DEXTools</span>
          </div>
          <div className="CryptoDashboard-more">
            More <ArrowUpRight size={14} />
          </div>
        </div>
        <div className="CryptoDashboard-description">Safety for traders. Visibility for your projects.</div>
        {tokens.map((token, index) => (
          <div key={index} className="CryptoDashboard-token-item">
            <div className="CryptoDashboard-icon">{token.icon}</div>
            <div className="CryptoDashboard-token-info">
              <div>{token.name}</div>
              <div className="CryptoDashboard-time">{token.time}</div>
            </div>
            <div className="CryptoDashboard-chain">
              {token.chain} {token.chain === 'BASE' ? '🔵' : '🔷'}
            </div>
          </div>
        ))}
        <button className="CryptoDashboard-create-token-button">
          Create token
        </button>
        <span className="CryptoDashboard-button-subtext">and update social info for free!</span>
      </div>

      {/* Recently Updated Socials Section */}
      <div className="CryptoDashboard-section">
        <div className="CryptoDashboard-section-header">
          <div className="CryptoDashboard-title">
            <Clock size={18} />
            <span className="CryptoDashboard-title-text">Recently updated socials</span>
          </div>
          <div className="CryptoDashboard-more">
            More <ArrowUpRight size={14} />
          </div>
        </div>
        {socials.map((social, index) => (
          <div key={index} className="CryptoDashboard-social-item">
            <div className="CryptoDashboard-icon">{social.icon}</div>
            <div className="CryptoDashboard-social-info">
              <div>{social.name}</div>
              <div className="CryptoDashboard-time">{social.time}</div>
            </div>
            <div className="CryptoDashboard-social-icons">
              <Monitor size={14} />
              <Mail size={14} />
              <Send size={14} />
              <Twitter size={14} />
              <MessageCircle size={14} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoDashboard;