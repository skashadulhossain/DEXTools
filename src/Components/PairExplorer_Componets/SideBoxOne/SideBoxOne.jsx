import React from 'react';
import './SideBoxOne.css';

const SideBoxOne = () => {
  return (
    <div className="sideboxone-container">
      <div className="sideboxone-header">
        <div className="sideboxone-logo-container">
          <img src="/path-to-dextools-logo.png" alt="DEXTools" className="sideboxone-logo" />
          <img src="/path-to-robot-logo.png" alt="Robot" className="sideboxone-robot-logo" />
        </div>
        <div className="sideboxone-pool-info">
          <span className="sideboxone-pool-badge">POOL</span>
          <span className="sideboxone-pool-name">UNISWAP V2</span>
          <span className="sideboxone-binoculars">👀</span>
        </div>
      </div>
      <div className="sideboxone-pair-info">
        <div className="sideboxone-pair-row">
          <span className="sideboxone-pair-label">DEXT:</span>
          <span className="sideboxone-pair-value">0XFB7...C75A <span className="sideboxone-copy-icon">📋</span></span>
        </div>
        <div className="sideboxone-pair-row">
          <span className="sideboxone-pair-label">PAIR:</span>
          <span className="sideboxone-pair-value">0XA29...7D6D <span className="sideboxone-copy-icon">📋</span></span>
        </div>
      </div>
      <div className="sideboxone-defi-label">
        <span className="sideboxone-defi-icon">🔄</span> DeFi
      </div>
      <div className="sideboxone-metrics-grid">
        <div className="sideboxone-metric-item">
          <span className="sideboxone-metric-label">MARKET CAP</span>
          <span className="sideboxone-metric-value">$34.85M</span>
        </div>
        <div className="sideboxone-metric-item">
          <span className="sideboxone-metric-label">LIQUIDITY</span>
          <span className="sideboxone-metric-value">$618.71K <span className="sideboxone-up-icon">↗</span></span>
        </div>
        <div className="sideboxone-metric-item">
          <span className="sideboxone-metric-label">CIRC. SUPPLY</span>
          <span className="sideboxone-metric-value">84.38M</span>
        </div>
        <div className="sideboxone-metric-item">
          <span className="sideboxone-metric-label">HOLDERS</span>
          <span className="sideboxone-metric-value">19.65K</span>
        </div>
        <div className="sideboxone-metric-item">
          <span className="sideboxone-metric-label">TOTAL MKTCAP</span>
          <span className="sideboxone-metric-value">$52.68M</span>
        </div>
        <div className="sideboxone-metric-item">
          <span className="sideboxone-metric-label">24H VOLUME</span>
          <span className="sideboxone-metric-value">$167.02K</span>
        </div>
        <div className="sideboxone-metric-item">
          <span className="sideboxone-metric-label">TOTAL SUPPLY</span>
          <span className="sideboxone-metric-value">127.55M</span>
        </div>
        <div className="sideboxone-metric-item">
          <span className="sideboxone-metric-label">VOLATILITY <span className="sideboxone-info-icon">ℹ</span></span>
          <span className="sideboxone-metric-value">0.2699</span>
        </div>
      </div>
      <div className="sideboxone-more-info">
        <span>More info ▼</span>
      </div>
    </div>
  );
};

export default SideBoxOne;