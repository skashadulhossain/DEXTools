import React, { useState } from 'react';
import './LiquidityUnlocksTop.css';

const LiquidityUnlocksTop = () => {
  const [percentage, setPercentage] = useState(37);
  const [timeRange, setTimeRange] = useState('Today');

  return (
    <div className="LiquidityUnlocksTop-container">
      <div className="LiquidityUnlocksTop-header">
        <h2 className="LiquidityUnlocksTop-title">Liquidity Unlocks</h2>
        <div className="LiquidityUnlocksTop-tabs">
          <button className="LiquidityUnlocksTop-tab">Upcoming</button>
          <button className="LiquidityUnlocksTop-tab">Recent</button>
        </div>
      </div>
      <div className="LiquidityUnlocksTop-controls">
        <div className="LiquidityUnlocksTop-percentage-control">
          <label htmlFor="percentage">Percentage higher than</label>
          <div className="LiquidityUnlocksTop-slider-container">
            <input
              type="range"
              id="percentage"
              min="0"
              max="100"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
            />
            <span className="LiquidityUnlocksTop-percentage-value">{percentage}</span>
          </div>
        </div>
        <div className="LiquidityUnlocksTop-time-range">
          <span>Time range</span>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="Today">Today</option>
            <option value="A Week">A Week</option>
            <option value="A Month">A Month</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default LiquidityUnlocksTop;