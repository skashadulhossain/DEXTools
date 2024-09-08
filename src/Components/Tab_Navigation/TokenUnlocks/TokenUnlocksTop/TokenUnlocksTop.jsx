import React, { useState } from 'react';
import './TokenUnlocksTop.css';

const TokenUnlocksTop = () => {
  const [percentage, setPercentage] = useState(37);
  const [timeRange, setTimeRange] = useState('Today');

  return (
    <div className="liquidity-unlocks">
      <div className="header">
        <h1>Liquidity Unlocks</h1>
        <div className="tabs">
          <button className="tab active">Upcoming</button>
          <button className="tab">Recent</button>
        </div>
      </div>
      <div className="controls">
        <div className="percentage-control">
          <label>Percentage higher than</label>
          <input
            type="range"
            min="0"
            max="100"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
          />
          <span>{percentage}</span>
        </div>
        <div className="time-range-control">
          <label>Time range</label>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option>Today</option>
            <option>A Week</option>
            <option>A Month</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TokenUnlocksTop;