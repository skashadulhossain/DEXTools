import React, { useState } from 'react';
import './PairTab.css';




import PairTradeHistory from './PairTradeHistory/PairTradeHistory';
import MyPositions from './MyPositions/MyPositions';
import TopTraders from './TopTraders/TopTraders';
import Holders from './Holders/Holders';
import PriceAlerts from './PriceAlerts/PriceAlerts';
import MySwaps from './MySwaps/MySwaps';
import PairAccordion from '../PairAccordion/PairAccordion';

const PairTab = () => {
  const [activeTab, setActiveTab] = useState('TradeHistory');

  const tabs = [
    { id: 'TradeHistory', label: 'Trade History' },
    { id: 'MyPositions', label: 'My positions' },
    { id: 'TopTraders', label: 'Top Traders', isNew: true },
    { id: 'Holders', label: 'Holders' },
    { id: 'PriceAlerts', label: 'Price Alerts' },
    { id: 'MySwaps', label: 'My swaps' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'TradeHistory': return <PairTradeHistory/>;
      case 'MyPositions': return <MyPositions/>;
      case 'TopTraders': return <TopTraders/>;
      case 'Holders': return <Holders/>;
      case 'PriceAlerts': return <PriceAlerts/>;
      case 'MySwaps': return <MySwaps />;
      default: return null;
    }
  };

  return (
    <>
    
    <div className="PairTab-container">
      <div className="PairTab-tabList">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`PairTab-tabButton ${activeTab === tab.id ? 'PairTab-active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            {tab.isNew && <span className="PairTab-newBadge">NEW</span>}
          </button>
        ))}
      </div>
      <div className="PairTab-content">
        {renderContent()}
      </div>
    </div>
    <PairAccordion/>
    
    </>
  );
};

export default PairTab;