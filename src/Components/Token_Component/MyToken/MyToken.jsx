import React, { useState } from 'react';
import './MyToken.css';

import { FiPlus } from 'react-icons/fi';
import { FaAngleDown, FaCameraRotate } from 'react-icons/fa6';
import { BiBlock } from 'react-icons/bi';
import { TbArrowsUpDown } from 'react-icons/tb';
import dropimg1 from './Image/ether.png';
import dropimg2 from './Image/optimism.png';
import dropimg3 from './Image/bsc.png';
import dropimg4 from './Image/polygon.png';
import dropimg5 from './Image/pulse.png';
import dropimg6 from './Image/arbitrum.png';
import dropimg7 from './Image/base.png';
import dropimg8 from './Image/avalanche.png';
import TokenHeader from '../TokenHeader/TokenHeader';
import Footer from '../../Layouts/Admin-Layout/Admin-Footer/AdminFooter';

const MyToken = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState({ name: '', img: '' });

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNetworkSelect = (networkName, networkImg) => {
    setSelectedNetwork({ name: networkName, img: networkImg });
    setIsDropdownOpen(false); 
  };

  return (
    <>
      <section className="MyToken-section">
        <TokenHeader />
        <div className="MyToken-container">
          <div className="MyToken-content-box">
            <div className="MyToken-btn-container">
              <div className="MyToken-btn-box">
                <button><FiPlus className="MyToken-icon" /><span>CREATE TOKEN</span></button>
                <button><FaCameraRotate className="MyToken-icon" /><span>ADD LIQUIDITY</span></button>
                <button><BiBlock className="MyToken-icon" /><span>BLACKLIST</span></button>
              </div>
              <div className="MyToken-dropdown-btn-box">
                <button onClick={handleDropdownClick}>
                  {selectedNetwork.img && <img src={selectedNetwork.img} alt="" />}
                  <span>{selectedNetwork.name || ''}</span>
                  <FaAngleDown className="MyToken-dropdown-btn-icon" />
                </button>
                {isDropdownOpen && (
                  <ul className={`MyToken-dropdown-list ${isDropdownOpen ? 'open' : ''}`}>
                    <li onClick={() => handleNetworkSelect('Ethereum', dropimg1)}><img src={dropimg1} alt="" /> Ethereum</li>
                    <li onClick={() => handleNetworkSelect('Optimism', dropimg2)}><img src={dropimg2} alt="" /> Optimism</li>
                    <li onClick={() => handleNetworkSelect('BNB Smart Chain', dropimg3)}><img src={dropimg3} alt="" /> BNB Smart Chain</li>
                    <li onClick={() => handleNetworkSelect('Polygon', dropimg4)}><img src={dropimg4} alt="" /> Polygon</li>
                    <li onClick={() => handleNetworkSelect('Pulse', dropimg5)}><img src={dropimg5} alt="" /> Pulse</li>
                    <li onClick={() => handleNetworkSelect('Base', dropimg7)}><img src={dropimg7} alt="" /> Base</li>
                    <li onClick={() => handleNetworkSelect('Arbitrum One', dropimg6)}><img src={dropimg6} alt="" /> Arbitrum One</li>
                    <li onClick={() => handleNetworkSelect('Avalanche', dropimg8)}><img src={dropimg8} alt="" /> Avalanche</li>
                  </ul>
                )}
              </div>
            </div>
            <div className="MyToken-title-container">
              <button>TOKEN <TbArrowsUpDown className="MyToken-title-btn-icon" /></button>
              <button>TOTAL SUPPLY <TbArrowsUpDown className="MyToken-title-btn-icon" /></button>
              <h3>CONTRACT</h3>
              <h3>SOCIALS</h3>
              <h3>ACTIONS</h3>
            </div>
            <div className="MyToken-subtitle-container">
              <p>Connect your wallet to see your created tokens.</p>
            </div>
          </div>
        </div>
        <Footer/>
      </section>
    </>
  );
};

export default MyToken;