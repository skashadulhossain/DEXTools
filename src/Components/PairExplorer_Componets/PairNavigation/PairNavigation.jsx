import React, { useState } from 'react';
import './PairNavigation.css';
import { IoIosArrowDown } from 'react-icons/io';

const PairNavigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="PairNavigation-nav">
      <div className="PairNavigation-leftSection">
        <div className="PairNavigation-dropdown" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <div className="PairNavigation-dropdow-btn">
            <span className="PairNavigation-hotPairs">HOT PAIRS</span>
            <IoIosArrowDown size={18} className="PairNavigation-dropdownIcon" />
          </div>
          {isDropdownOpen && (
            <div className="PairNavigation-dropdownMenu">
              <div className="PairNavigation-dropdownItem">
                <span className="PairNavigation-icon">🔥</span>
                Hot-Pairs
              </div>
              <div className="PairNavigation-dropdownItem">
                <span className="PairNavigation-icon">🔗</span>
                Socials
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="PairNavigation-scrollContainer">
        <ul className="PairNavigation-list">
          <li className="PairNavigation-item">
            <span className="PairNavigation-icon">🔥</span>
            <span className="PairNavigation-percentage PairNavigation-negative">-09%</span>
          </li>
          <li className="PairNavigation-item">
            <span className="PairNavigation-number">#5</span>
            <span className="PairNavigation-icon">🐕</span>
            <span className="PairNavigation-name">HUSBY</span>
            <span className="PairNavigation-percentage PairNavigation-positive">+38.12%</span>
          </li>
          <li className="PairNavigation-item">
            <span className="PairNavigation-number">#6</span>
            <span className="PairNavigation-icon">🍎</span>
            <span className="PairNavigation-name">PEIPEI</span>
            <span className="PairNavigation-percentage PairNavigation-positive">+0.33%</span>
          </li>
          <li className="PairNavigation-item">
            <span className="PairNavigation-number">#7</span>
            <span className="PairNavigation-icon">🐶</span>
            <span className="PairNavigation-name">DOGE</span>
            <span className="PairNavigation-percentage PairNavigation-positive">+3.47%</span>
          </li>
          <li className="PairNavigation-item">
            <span className="PairNavigation-name">5 h</span>
          </li>
          <li className="PairNavigation-item">
            <span className="PairNavigation-number">#8</span>
            <span className="PairNavigation-icon">🐶</span>
            <span className="PairNavigation-name">Mog</span>
            <span className="PairNavigation-percentage PairNavigation-positive">+7.28%</span>
          </li>
          <li className="PairNavigation-item">
            <span className="PairNavigation-number">#9</span>
            <span className="PairNavigation-icon">🇺🇸</span>
            <span className="PairNavigation-name">TRUMP</span>
            <span className="PairNavigation-percentage PairNavigation-positive">+2.21%</span>
          </li>
          <li className="PairNavigation-item">
            <span className="PairNavigation-number">#10</span>
            <span className="PairNavigation-icon">🇺🇸</span>
            <span className="PairNavigation-name">MAGA</span>
            <span className="PairNavigation-percentage PairNavigation-negative">-8.74%</span>
          </li>
          <li className="PairNavigation-item">
            <span className="PairNavigation-number">#11</span>
            <span className="PairNavigation-icon">❓</span>
            <span className="PairNavigation-name">???</span>
          </li>
          <li className="PairNavigation-item">
            <span className="PairNavigation-number">#12</span>
            <span className="PairNavigation-icon">❓</span>
            <span className="PairNavigation-name">???</span>
          </li>
        </ul>
      </div>
      <div className="PairNavigation-rightSection">
        <span className="PairNavigation-dextForce">DEXT FORCE</span>
        <button className="PairNavigation-joinButton">Join the party</button>
      </div>
    </nav>
  );
};

export default PairNavigation;