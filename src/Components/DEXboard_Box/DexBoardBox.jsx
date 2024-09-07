import React, { useState } from 'react';
import { ArrowUpRight, Monitor, Mail, Send, Twitter, MessageCircle, Plus, Clock } from 'lucide-react';
import '../DEXboard_Box/DexBoardBox.css';

const CryptoDashboard = () => {
  const [activeTab, setActiveTab] = useState('Daily gainers');

  const gainers = [
    { id: 1, name: 'Panda', symbol: 'WETH', price: 0.01616, change: 67370.41, icon: '🐼' },
    { id: 2, name: 'EPUMP', symbol: 'WETH', price: 0.001346, change: 36056.12, icon: '🟣' },
    { id: 3, name: 'EBULL', symbol: 'WETH', price: 0.01567, change: 21181.58, icon: '🟪' },
    { id: 4, name: 'PEPEKING', symbol: 'WETH', price: 0.001872, change: 18114.90, icon: '🐸' },
    { id: 5, name: 'FUSE', symbol: 'WETH', price: 0.03153, change: 16268.52, icon: '▶️' },
  ];

  const tokens = [
    { name: 'XUNU', time: '6 h ago', chain: 'BASE', icon: 'X' },
    { name: 'FOFOLETES', time: '14 h ago', chain: 'BASE', icon: 'F' },
    { name: 'GOAT', time: '3 d ago', chain: 'ETH', icon: 'G' },
    { name: 'BKITTY', time: '6 d ago', chain: 'ETH', icon: '🐱' },
  ];

  const socials = [
    { name: 'CHI', time: '35 m ago', icon: '🔥' },
    { name: 'TITAN', time: '1 h ago', icon: '🟣' },
    { name: 'GROYPER', time: '1 h ago', icon: '🐸' },
    { name: 'SMURFCAT', time: '2 h ago', icon: '🐱' },
    { name: 'CT', time: '2 h ago', icon: '🟠' },
  ];

  return (
    <div className="crypto-dashboard">
      {/* Gainers Section */}
      <div className="dashboard-section">
        <div className="section-header">
          <div>
            <span 
              className={`tab ${activeTab === 'Daily gainers' ? 'active' : ''}`} 
              onClick={() => setActiveTab('Daily gainers')}
            >
              Daily gainers
            </span>
            <span 
              className={`tab ${activeTab === 'Daily losers' ? 'active' : ''}`} 
              onClick={() => setActiveTab('Daily losers')}
            >
              Daily losers
            </span>
          </div>
          <div className="more">
            More <ArrowUpRight size={14} />
          </div>
        </div>
        {gainers.map((gainer) => (
          <div key={gainer.id} className="gainer-item">
            <div className="gainer-id">#{gainer.id}</div>
            <div className="icon">{gainer.icon}</div>
            <div className="gainer-info">
              <div className="gainer-name-change">
                <span>{gainer.name} / {gainer.symbol}</span>
                <span className="change">▲ {gainer.change.toFixed(2)}%</span>
              </div>
              <div className="price">${gainer.price}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Token Creator Section */}
      <div className="dashboard-section">
        <div className="section-header">
          <div className="title">
            <div className="icon blue">🔄</div>
            <span className="title-text">Token Creator</span>
          </div>
          <div className="more">
            More <ArrowUpRight size={14} />
          </div>
        </div>
        <div className="subtitle">by DEXTools</div>
        <div className="description">Safety for traders. Visibility for your projects.</div>
        {tokens.map((token, index) => (
          <div key={index} className="token-item">
            <div className="icon">{token.icon}</div>
            <div className="token-info">
              <div>{token.name}</div>
              <div className="time">{token.time}</div>
            </div>
            <div className="chain">
              {token.chain} {token.chain === 'BASE' ? '🔵' : '🔷'}
            </div>
          </div>
        ))}
        <button className="create-token-button">
          Create token and update social info for free!
        </button>
      </div>

      {/* Recently Updated Socials Section */}
      <div className="dashboard-section">
        <div className="section-header">
          <div className="title">
            <Clock size={18} />
            <span className="title-text">Recently updated socials</span>
          </div>
          <div className="more">
            More <ArrowUpRight size={14} />
          </div>
        </div>
        {socials.map((social, index) => (
          <div key={index} className="social-item">
            <div className="icon">{social.icon}</div>
            <div className="social-info">
              <div>{social.name}</div>
              <div className="time">{social.time}</div>
            </div>
            <div className="social-icons">
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