import React, { useState } from 'react';
import './SideboxTop.css';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import iconimg1 from '../Image/dext logo.png';
import iconimg2 from '../Image/ether.png';

const SideboxTop = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedTokens, setSelectedTokens] = useState({
    from: { symbol: 'DEXT', amount: 10 },
    to: { symbol: 'ETH', amount: 0.001757 }
  });

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="SideboxTop-accordion">
      <div className="SideboxTop-header" onClick={toggleAccordion}>
        <span className="SideboxTop-title">
          <svg className="SideboxTop-icon" viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M19,8L15,12H18A6,6 0 0,1 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20A8,8 0 0,0 20,12H23L19,8M6,12A6,6 0 0,1 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4A8,8 0 0,0 4,12H1L5,16L9,12H6Z" />
          </svg>
          DEXTswap
        </span>
        <span className={`SideboxTop-arrow ${isOpen ? 'open' : ''}`}><IoIosArrowUp /></span>
      </div>
      {isOpen && (
        <div className="SideboxTop-content">
          <div className="SideboxTop-token-input">
            <input type="number" value={selectedTokens.from.amount} readOnly />
            <button className="SideboxTop-token-selector">
              <img src={iconimg1} alt="DEXT" />
              <span>DEXT</span>
              <span className="SideboxTop-dropdown-arrow"><IoIosArrowDown size={18} /></span>
            </button>
          </div>
          <div className="SideboxTop-swap-icon">⇅</div>
          <div className="SideboxTop-token-input">
            <input type="number" value={selectedTokens.to.amount} readOnly />
            <button className="SideboxTop-token-selector">
              <img src={iconimg2} alt="ETH" />
              <span>ETH</span>
              <span className="SideboxTop-dropdown-arrow"><IoIosArrowDown size={18} /></span>
            </button>
          </div>
          <button className="SideboxTop-connect-wallet">Connect wallet</button>
          <div className="SideboxTop-info">
            <div className="SideboxTop-info-row">
              <span>Price per DEXT</span>
              <span>0.01756 ETH</span>
            </div>
            <div className="SideboxTop-info-row">
              <span>Slippage</span>
              <span className="SideboxTop-auto">Auto <span className="SideboxTop-settings-icon">⚙</span></span>
            </div>
            <div className="SideboxTop-info-row">
              <span>Provider</span>
              <span className="SideboxTop-provider">
                <img src="https://cryptologos.cc/logos/okb-okb-logo.png" alt="Provider" />
                <span className="SideboxTop-dropdown-arrow"><IoIosArrowDown size={18} /></span>
              </span>
            </div>
          </div>
          <div className="SideboxTop-footer">
            <span>By OKX</span>
            <span className="SideboxTop-try-uniswap">
              Or try <img src="https://cryptologos.cc/logos/uniswap-uni-logo.png" alt="Uniswap" /> Uniswap V2
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideboxTop;