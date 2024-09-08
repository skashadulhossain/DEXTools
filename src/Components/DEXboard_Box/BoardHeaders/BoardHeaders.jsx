import React from 'react';
import './BoardHeader.css'

const DEXTboardHeader = () => {
  return (
    <header className="dextboard-header">
      <div className="dextboard-logo">DEXTboard</div>
      <div className="dextboard-stats">
        <span className="stat-item">Networks: <strong>96</strong></span>
        <span className="stat-item">Dexes: <strong>14,368</strong></span>
        <span className="stat-item">Pools: <strong>4,744,366</strong></span>
        <span className="stat-item">Tokens: <strong>6,398,332</strong></span>
        <span className="stat-item">
          Next token burn: <strong>6,831,607 DEXT</strong> 
          <span className="burn-icon">🔥</span>
        </span>
      </div>
      <div className="trending-tokens">
        Today's trending tokens
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
    </header>
  );
};

export default DEXTboardHeader;