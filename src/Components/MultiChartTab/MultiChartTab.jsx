import React, { useState } from 'react';
import { Search } from 'lucide-react';
import './MultiChartTab.css'; // New CSS file
import SmallChartView from './SmallChartView/SmallChartView';
import MediumChartView from './MediumChartView/MediumChartView';
import NormalChartView from './NormalChartView/NormalChartView';

const MultiChartTab = () => {
  const [activeTab, setActiveTab] = useState('Small');

  const renderActiveView = () => {
    switch (activeTab) {
      case 'Small':
        return <SmallChartView />;
      case 'Medium':
        return <MediumChartView />;
      case 'Normal':
        return <NormalChartView />;
      default:
        return null;
    }
  };

  return (
    <div className="MultiChartTab-container">
      <h1 className="MultiChartTab-title">Multichart</h1>
      <p className="MultiChartTab-subtitle">
        Find and add up to ten pairs in this view to display them at once.
      </p>
      <div className="MultiChartTab-note">
        <span className="MultiChartTab-noteIcon">i</span> Note that you can drag any element to a different position.
      </div>
      <div className="MultiChartTab-controls">
        <div className="MultiChartTab-searchContainer">
          <Search className="MultiChartTab-searchIcon" />
          <input
            type="text"
            placeholder="Search pair by symbol, name, contract or token"
            className="MultiChartTab-searchInput"
          />
        </div>
        <div className="MultiChartTab-tabContainer">
          <span className="MultiChartTab-tabLabel">Select the size of the boxes:</span>
          <div className="MultiChartTab-tabs">
            {['Small', 'Medium', 'Normal'].map((tab) => (
              <button
                key={tab}
                className={`MultiChartTab-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
      {renderActiveView()}
    </div>
  );
};

export default MultiChartTab;
