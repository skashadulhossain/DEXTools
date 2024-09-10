import React, { useState } from 'react';
import './TokenUnlocksTop.css';

const TokenUnlocksTop = () => {
  const [percentage, setPercentage] = useState(37);
  const [timeRange, setTimeRange] = useState('Today');

  return (
    <div className="TokenUnlocksTop-container">
      <div className="TokenUnlocksTop-header">
        <h2 className="TokenUnlocksTop-title">Token Unlocks</h2>
        <div className="TokenUnlocksTop-tabs">
          <button className="TokenUnlocksTop-tab">Upcoming</button>
          <button className="TokenUnlocksTop-tab">Recent</button>
        </div>
      </div>
      <div className="TokenUnlocksTop-controls">
        <div className="TokenUnlocksTop-percentage-control">
          <label htmlFor="percentage">Percentage higher than</label>
          <div className="TokenUnlocksTop-slider-container">
            <input
              type="range"
              id="percentage"
              min="0"
              max="100"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
            />
            <span className="TokenUnlocksTop-percentage-value">{percentage}</span>
          </div>
        </div>
        <div className="TokenUnlocksTop-time-range">
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

export default TokenUnlocksTop;