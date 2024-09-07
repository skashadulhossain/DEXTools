import React, { useState } from 'react';
import { FiChevronDown, FiBarChart, FiX } from 'react-icons/fi'; // Import the close icon
import '../Header_Star/HeaderStar.css';

const StarComponent = ({ isOpen, toggleStar }) => {
  const [sortBy, setSortBy] = useState('Last added');
  const [filterBy, setFilterBy] = useState('All');
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false); // To toggle sort dropdown

  const sortOptions = ['Last added', 'Price', 'Symbol', '24% Change', '24% Change Loss']; // Sort options

  const handleSortOptionClick = (option) => {
    setSortBy(option);
    setIsSortDropdownOpen(false); // Close the dropdown when an option is selected
  };

  return (
    <div className={`headerStar_modal ${isOpen ? 'open' : ''}`}>
      <div className={`headerStar_modal-content ${isOpen ? 'open' : ''}`}>
        <div className="headerStar_header">
          <h2>FAVORITES <span className="headerStar_badge">3</span></h2>
          <div className="headerStar_icons">
            <FiBarChart className="headerStar_chart-icon" /> {/* Chart icon */}
            <FiX className="headerStar_close-icon" onClick={toggleStar} /> {/* Close icon */}
          </div>
        </div>
        <div className="headerStar_filters">
          <div className="headerStar_dropdown" onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}>
            <span>{sortBy}</span>
            <FiChevronDown />
          </div>
          {isSortDropdownOpen && (
            <ul className="headerStar_dropdown-menu">
              {sortOptions.map((option) => (
                <li key={option} onClick={() => handleSortOptionClick(option)}>
                  {option}
                </li>
              ))}
            </ul>
          )}
          <div className="headerStar_dropdown">
            <span>{filterBy}</span>
            <FiChevronDown />
          </div>
        </div>
        <div className="headerStar_empty-state">
          <p>Your favorite list is empty!</p>
          <p>Start building your favorite list by adding this pair.</p>
        </div>
      </div>
    </div>
  );
};

export default StarComponent;
