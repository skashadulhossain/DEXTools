import React, { useState } from 'react';
import { ArrowUpRight, Monitor, Mail, Send, Twitter, MessageCircle, Clock, ChevronUp, Plus, ArrowDownRight } from 'lucide-react';
import '../DEXboard_Box/DexBoardBox.css';
import gainerimg1 from './Image/Gainer Image 1.jpg';

const CryptoDashboard = () => {
  // Data arrays for gainers, socials, and tokens
  const gainersTab1 = [
    { id: 1, name: 'PESU', symbol: 'WETH', price: 0.001589, change: 1348.58, icon: '🌞' },
    { id: 2, name: 'PIGS', symbol: 'TON', price: 0.07096, change: 1316.45, icon: '👨' },
    { id: 3, name: 'WUKONG', symbol: 'TON', price: 0.00002604, change: 1296.70, icon: '🧙‍♂️' },
    { id: 4, name: 'WUKONG', symbol: 'WETH', price: 0.0009500, change: 1210.30, icon: '🐸' },
    { id: 5, name: 'Neiro', symbol: 'WTRX', price: 0.001101, change: 1208.23, icon: '🦊' },
  ];

  const gainersTab2 = [
    { id: 1, name: 'HAPPY', symbol: 'SOL', price: 0.03755, change: 99.87, icon: '🧙‍♂️' },
    { id: 2, name: 'ATH', symbol: 'USTD', price: 0.04166, change: 99.09, icon: '🐸' },
    { id: 3, name: 'NOBU', symbol: 'SOL', price: 0.00001044, change: 98.36, icon: '🦊' },
    { id: 4, name: 'TBD', symbol: 'WETH', price: 0.003921, change: 96.78, icon: '🦊' },
    { id: 5, name: 'SUT', symbol: 'GMT', price: 0.2788, change: 94.79, icon: '🐸' },
  ];

  const socials = [
    { id: 1, name: 'KIDDO', icon: '📘' },
    { id: 2, name: 'GANGER', icon: '🐦' },
    { id: 3, name: 'DIRTYD', icon: '📸' },
    { id: 4, name: '$MOCHICAT', icon: '📸' },
    { id: 5, name: 'WUKONG', icon: '📸' },
  ];

  const tokens = [
    { id: 1, name: 'FN', symbol: 'BTC', price: 45000, icon: '₿', time: '1 d ago', chain: 'ETH' },
    { id: 2, name: 'HB', symbol: 'ETH', price: 3000, icon: 'Ξ', time: '1 d ago', chain: 'ETH' },
    { id: 3, name: 'XUNU', symbol: 'XRP', price: 1, icon: '✕', time: '2 d ago', chain: 'BASE' },
    { id: 4, name: 'FOFOLETES', symbol: 'XRP', price: 1, icon: '✕', time: '2 d ago', chain: 'BASE' },
  ];  

  // State to track active tab for gainers section only
  const [activeGainersTab, setActiveGainersTab] = useState('tab1');

  return (
    <div className="CryptoDashboard-container">
      {/* Gainers Section with Tabs */}
      <div className="CryptoDashboard-section">
        <div className="CryptoDashboard-section-header">
          <div className="CryptoDashboard-tabs">
            <span
              className={`CryptoDashboard-tab ${activeGainersTab === 'tab1' ? 'active' : ''}`}
              onClick={() => setActiveGainersTab('tab1')}
            >
              Daily Gainers
            </span>
            <span
              className={`CryptoDashboard-tab ${activeGainersTab === 'tab2' ? 'active' : ''}`}
              onClick={() => setActiveGainersTab('tab2')}
            >
              Daily Losers
            </span>
          </div>
          <div className="CryptoDashboard-more">
            More <ArrowUpRight size={14} />
          </div>
        </div>

        {/* Tab Content for Gainers */}
        <div className="CryptoDashboard-tab-content">
          {activeGainersTab === 'tab1' &&
            gainersTab1.map((gainer) => (
              <div key={gainer.id} className="CryptoDashboard-gainer-item">
                <div className="CryptoDashboard-gainer-id">#{gainer.id}</div>
                <div className="CryptoDashboard-icon">{gainer.icon}</div>
                <div className="CryptoDashboard-gainer-info">
                  <div className="CryptoDashboard-gainer-name">
                    {gainer.name} <span>/ {gainer.symbol}</span>
                  </div>
                  <div className="CryptoDashboard-gainer-price">
                    ${gainer.price.toFixed(gainer.price < 0.001 ? 8 : 4)}
                  </div>
                </div>
                <div className="CryptoDashboard-gainer-change">
                  <ArrowUpRight size={14} /> {gainer.change.toFixed(2)}%
                </div>
              </div>
            ))
          }

          {activeGainersTab === 'tab2' &&
            gainersTab2.map((gainer) => (
              <div key={gainer.id} className="CryptoDashboard-gainer-item">
                <div className="CryptoDashboard-gainer-id">#{gainer.id}</div>
                <div className="CryptoDashboard-icon">{gainer.icon}</div>
                <div className="CryptoDashboard-gainer-info">
                  <div className="CryptoDashboard-gainer-name">
                    {gainer.name} / {gainer.symbol}
                  </div>
                  <div className="CryptoDashboard-gainer-price CryptoDashboard-gainer-price-2">
                    ${gainer.price.toFixed(gainer.price < 0.001 ? 8 : 4)}
                  </div>
                </div>
                <div className="CryptoDashboard-gainer-change-2">
                  <ArrowDownRight size={14} /> {gainer.change.toFixed(2)}%
                </div>
              </div>
            ))
          }
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
            <div className="CryptoDashboard-token-info">
              <div className="CryptoDashboard-icon">{token.icon}</div>
              <div>{token.name}</div>
            </div>
            <div className="CryptoDashboard-time">{token.time}</div>
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
            <div className="CryptoDashboard-social-info">
              <div className="CryptoDashboard-icon">{social.icon}</div>
              <div>{social.name}</div>
              <div className="CryptoDashboard-time">{social.time}</div>
            </div>
            <div className="CryptoDashboard-social-icons">
              <Monitor size={16} />
              <Mail size={16} />
              <Send size={16} />
              <Twitter size={16} />
              <MessageCircle size={16} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoDashboard;