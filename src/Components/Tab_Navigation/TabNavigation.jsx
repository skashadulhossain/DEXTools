import React, { useState } from 'react';
import './TabNavigation.css';
import HotPairs from './HotPairs/HotPairs';
import Pairs from './Pairs/Pairs';
import TokenCreator from './TokenCreator/TokenCreator';
import NewSocials from './NewSocials/NewSocials';
import Exchanges from './Exchanges/Exchanges';
import LiquidityUnlocks from './LiquidityUnlocks/LiquidityUnlocks';
import TokenUnlocks from './TokenUnlocks/TokenUnlocks';

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState('Hot Pairs');
  const tabs = [
    { name: 'Hot Pairs', isNew: true, component: <HotPairs/> },
    { name: 'Pairs', isNew: false, component: <Pairs/> },
    { name: 'Token Creator', isNew: true, component: <TokenCreator/> },
    { name: 'New Socials', isNew: false, component: <NewSocials/> },
    { name: 'Exchanges', isNew: false, component: <Exchanges/> },
    { name: 'Liquidity Unlocks', isNew: false, component: <LiquidityUnlocks/> },
    { name: 'Token Unlocks', isNew: false, component: <TokenUnlocks/> },
  ];

  const renderActiveTabComponent = () => {
    const activeTabObj = tabs.find(tab => tab.name === activeTab);
    return activeTabObj ? activeTabObj.component : null;
  };

  return (
    <div className="TabNavigation-container">
      <nav className="TabNavigation-tab-navigation">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`TabNavigation-tab ${activeTab === tab.name ? 'TabNavigation-active' : ''}`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
            {tab.isNew && <span className="TabNavigation-new-badge">NEW</span>}
          </button>
        ))}
      </nav>
      <div className="TabNavigation-tab-content">
        {renderActiveTabComponent()}
      </div>
    </div>
  );
};

export default TabNavigation;

// Example Component Implementations
