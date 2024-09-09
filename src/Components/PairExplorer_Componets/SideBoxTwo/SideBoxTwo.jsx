import React from 'react';
import './SideBoxTwo.css';

const SideBoxTwo = () => {
  return (
    <div className="sideboxtwo-container">
      <div className="sideboxtwo-time-periods">
        <span className="sideboxtwo-time">5m</span>
        <span className="sideboxtwo-time">1h</span>
        <span className="sideboxtwo-time">6h</span>
        <span className="sideboxtwo-time sideboxtwo-active">24h</span>
        <span className="sideboxtwo-time">7d</span>
      </div>
      <div className="sideboxtwo-percentages">
        <span className="sideboxtwo-percentage sideboxtwo-positive">0.89%</span>
        <span className="sideboxtwo-percentage sideboxtwo-negative">-4.69%</span>
        <span className="sideboxtwo-percentage sideboxtwo-negative">-12.10%</span>
      </div>
      <div className="sideboxtwo-stats">
        <div className="sideboxtwo-stat-item">
          <span className="sideboxtwo-stat-label">Txs</span>
          <span className="sideboxtwo-stat-value">99</span>
        </div>
        <div className="sideboxtwo-stat-item">
          <span className="sideboxtwo-stat-label">Vol</span>
          <span className="sideboxtwo-stat-value">$166.33K</span>
        </div>
        <div className="sideboxtwo-stat-item">
          <span className="sideboxtwo-stat-label">Makers</span>
          <span className="sideboxtwo-stat-value">64</span>
        </div>
        <div className="sideboxtwo-stat-item">
          <span className="sideboxtwo-stat-label">Min</span>
          <span className="sideboxtwo-stat-value">$0.33</span>
        </div>
        <div className="sideboxtwo-stat-item">
          <span className="sideboxtwo-stat-label">Max</span>
          <span className="sideboxtwo-stat-value">$0.43</span>
        </div>
      </div>
      <div className="sideboxtwo-bar-container">
        <div className="sideboxtwo-bar">
          <div className="sideboxtwo-bar-buys" style={{ width: '60%' }}></div>
          <div className="sideboxtwo-bar-sells" style={{ width: '40%' }}></div>
        </div>
      </div>
      <div className="sideboxtwo-trades">
        <div className="sideboxtwo-buys">
          <span className="sideboxtwo-trade-label">Buys: 58</span>
          <span className="sideboxtwo-trade-value">$79,795.10</span>
        </div>
        <div className="sideboxtwo-sells">
          <span className="sideboxtwo-trade-label">Sells: 41</span>
          <span className="sideboxtwo-trade-value">$86,534.98</span>
        </div>
      </div>
    </div>
  );
};

export default SideBoxTwo;