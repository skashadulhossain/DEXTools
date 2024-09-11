import React from 'react';
import './SideBoxOne.css';
import animationimg from '../Image/download.gif';
import iconimg1 from '../Image/uniswap.png';
import iconimg2 from '../Image/2.svg';
import { FaBinoculars } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import { FaCircleInfo } from 'react-icons/fa6';

const SideBoxOne = () => {
  return (
    <div className="sideboxone-main-container">
      <div className="sideboxone-logo-container">
        <img src={animationimg} alt="DEXTools" className="sideboxone-logo" />
      </div>
      <div className="sideboxone-container">
      <div className="sideboxone-header">
        <div className="sideboxone-pool-info">
          <span className="sideboxone-pool-badge">POOL</span>
          <img src={iconimg1} alt="" />
          <span className="sideboxone-pool-name">UNISWAP V2</span>
        </div>
        <span className="sideboxone-binoculars"><FaBinoculars size={16}/></span>
      </div>
      <div className="sideboxone-pair-info">
        <div className="sideboxone-pair-row">
          <span className="sideboxone-pair-label">DEXT:</span>
          <div className="sideboxone-pair-value">
            0XFB7...C75A <span className="sideboxone-copy-icon"><FiCopy /></span>
          </div>
        </div>
        <div className="sideboxone-pair-row">
          <span className="sideboxone-pair-label">PAIR:</span>
          <div className="sideboxone-pair-value">
            0XA29...7D6D <span className="sideboxone-copy-icon"><FiCopy /></span>
          </div>
        </div>
      </div>
      <button className="sideboxone-defi-label">
        <img src={iconimg2} alt="" /> 
        <span>DeFi</span>
      </button>
      <div className="sideboxone-metrics-grid">
        <div className="sideboxone-metric-item">
          <span className="sideboxone-metric-label">MARKET CAP</span>
          <span className="sideboxone-metric-value">$34.85M</span>
        </div>
        <div className="sideboxone-metric-item">
          <span className="sideboxone-metric-label">LIQUIDITY</span>
          <span className="sideboxone-metric-value">$618.71K <span className="sideboxone-up-icon">↗</span></span>
        </div>
        <div className="sideboxone-metric-item">
          <span className="sideboxone-metric-label">CIRC. SUPPLY</span>
          <span className="sideboxone-metric-value">84.38M</span>
        </div>
        <div className="sideboxone-metric-item">
          <span className="sideboxone-metric-label">HOLDERS</span>
          <span className="sideboxone-metric-value">19.65K</span>
        </div>
        <div className="sideboxone-metric-item">
          <span className="sideboxone-metric-label">TOTAL MKTCAP</span>
          <span className="sideboxone-metric-value">$52.68M</span>
        </div>
        <div className="sideboxone-metric-item">
          <span className="sideboxone-metric-label">24H VOLUME</span>
          <span className="sideboxone-metric-value">$167.02K</span>
        </div>
        <div className="sideboxone-metric-item">
          <span className="sideboxone-metric-label">TOTAL SUPPLY</span>
          <span className="sideboxone-metric-value">127.55M</span>
        </div>
        <div className="sideboxone-metric-item">
          <span className="sideboxone-metric-label">VOLATILITY <span className="sideboxone-info-icon"><FaCircleInfo size={12} /></span></span>
          <span className="sideboxone-metric-value">0.2699</span>
        </div>
      </div>
      <div className="sideboxone-more-info">
        <span>More info</span>
        <IoIosArrowDown size={18} />
      </div>
    </div>
  </div>
  );
};

export default SideBoxOne;