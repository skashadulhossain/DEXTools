import React, { useState } from 'react';
import './PairAccordion.css';

const PairAccordion = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="PairAccordion-container">
      <div className="PairAccordion-header">
        <h2 className="PairAccordion-title">DEXTools Live Price and Buy Information</h2>
        <div className="PairAccordion-controls">
          <button className="PairAccordion-update">Update</button>
          <img className="PairAccordion-logo" src="/path-to-dext-logo.png" alt="DEXT Logo" />
          <button className="PairAccordion-toggle" onClick={toggleAccordion}>
            {isExpanded ? '−' : '+'}
          </button>
        </div>
      </div>
      <p className="PairAccordion-info">
        The DEXTools live price is $0.415 USD with a market cap of $34.46M USD, a 24-hour trading volume of $166.33K USD, a 0.0059% increase in the last 24 hours, and a circulating supply of 84.38M DEXT coins out of a maximum of 127.55M.
      </p>
      <div className="PairAccordion-questions">
        <div className="PairAccordion-question">
          <span className="PairAccordion-arrow">▶</span> How much is 1 DEXT?
        </div>
        <div className="PairAccordion-question">
          <span className="PairAccordion-arrow">▶</span> Where can I buy DEXT coins?
        </div>
        <div className="PairAccordion-question">
          <span className="PairAccordion-arrow">▶</span> Which is DEXT token distribution?
        </div>
        <div className="PairAccordion-question">
          <span className="PairAccordion-arrow">▶</span> Which is the DEXT (DEXTools) contract on Ethereum?
        </div>
        <div className="PairAccordion-question">
          <span className="PairAccordion-arrow">▶</span> How much DEXT can I buy with 100 USD?
        </div>
        <div className="PairAccordion-question">
          <span className="PairAccordion-arrow">▶</span> How can I buy DEXT tokens?
        </div>
      </div>
    </div>
  );
};

export default PairAccordion;