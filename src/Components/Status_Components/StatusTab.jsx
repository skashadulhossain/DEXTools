import React, { useState, useRef, useEffect } from 'react';
import './StatusTab.css';
import { FiSearch, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const exchanges = [
  { name: 'shiswap V2', icon: '🔁' },
  { name: 'CroDefiswap', icon: '🌊' },
  { name: 'Orion', icon: '🔮' },
  { name: 'Convergence', icon: '🌀' },
  { name: 'Just Money', icon: '💵' },
  { name: 'Safemoonswap', icon: '🌔' },
  { name: 'Swapr', icon: '🔄' },
  { name: 'EmpireDEX', icon: '🏛️' },
  { name: 'UniSwap', icon: '🦄' },
  { name: 'PancakeSwap', icon: '🥞' },
  { name: 'SushiSwap', icon: '🍣' },
  { name: 'Curve', icon: '⚡' },
];

const StatusTab = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedExchange, setSelectedExchange] = useState(null); // New state to track selected exchange
  const tabsRef = useRef(null);

  const handleScroll = (direction) => {
    const container = tabsRef.current;
    const scrollAmount = container.offsetWidth / 2;
    if (container) {
      if (direction === 'left') {
        container.scrollTo({
          left: Math.max(scrollPosition - scrollAmount, 0),
          behavior: 'smooth'
        });
      } else {
        container.scrollTo({
          left: Math.min(scrollPosition + scrollAmount, container.scrollWidth - container.offsetWidth),
          behavior: 'smooth'
        });
      }
    }
  };

  const handleTabClick = (exchange) => {
    setSelectedExchange(exchange); // Set the selected exchange
  };

  useEffect(() => {
    const container = tabsRef.current;
    const handleScrollEvent = () => {
      setScrollPosition(container.scrollLeft);
    };
    container.addEventListener('scroll', handleScrollEvent);
    return () => container.removeEventListener('scroll', handleScrollEvent);
  }, []);

  return (
    <div className="Status-container">
      <div className="Status-header">
        <h1 className="Status-title">DEXTSTATS</h1>
        <p className="Status-subtitle">Check the current trends (hot pairs) for any exchange.</p>
      </div>
      <div className="Status-content">
        <button className="Status-nav-button Status-left" onClick={() => handleScroll('left')}>
          <FiChevronLeft />
        </button>
        <div className="Status-tabs-container" ref={tabsRef}>
          {exchanges.map((exchange, index) => (
            <button
              key={index}
              className={`Status-tab ${selectedExchange?.name === exchange.name ? 'active' : ''}`} // Apply active class
              onClick={() => handleTabClick(exchange)} // Handle tab click
            >
              <span className="Status-icon">{exchange.icon}</span>
              <span className="Status-name">{exchange.name}</span>
            </button>
          ))}
        </div>
        <button className="Status-nav-button Status-right" onClick={() => handleScroll('right')}>
          <FiChevronRight />
        </button>
        <div className="Status-search-container">
          <FiSearch className="Status-search-icon" />
          <input type="text" className="Status-search-input" placeholder="Search exchange" />
        </div>
      </div>

      {/* Render a data box for the selected exchange */}
      {selectedExchange ? (
        <div className="Status-exchange-data">
          <h2>{selectedExchange.name} Data</h2>
          <p>Details about {selectedExchange.name} go here.</p>
          {/* Add more detailed information or components here */}
        </div>
      ) : (
        <div className="Status-no-exchange">
          <h2>No exchange selected</h2>
          <p>Click on a tab above to see an exchange.</p>
        </div>
      )}
    </div>
  );
};

export default StatusTab;
