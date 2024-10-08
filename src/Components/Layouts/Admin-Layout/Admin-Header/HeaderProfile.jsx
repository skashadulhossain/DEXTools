import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeaderProfile.css';
import { FaSearch, FaCog, FaStar } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import ETHEREUMLogo from './img/ether.png';
import ChainSelection from './Header_Dropdown/HeaderDropdown';
import HeaderSetting from './Header_Setting/HeaderSetting';
import StarComponent from './Header_Star/HeaderStar';
import SearchPopup from '../../SearchPopup/SearchPopup';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 

const AdminHeader = ({ isOpen }) => {

  const navigate = useNavigate();
  const [showChainSelection, setShowChainSelection] = useState(false); 
  const [isSettingOpen, setIsSettingOpen] = useState(false); 
  const [isStarOpen, setIsStarOpen] = useState(false); 
  const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false); 

  const toggleChainSelection = () => setShowChainSelection(!showChainSelection);
  const toggleSetting = () => setIsSettingOpen(!isSettingOpen);
  const toggleStar = () => setIsStarOpen(!isStarOpen);

  const toggleSearchPopup = () => setIsSearchPopupOpen(!isSearchPopupOpen); 

  return (
    <div className={`AdminHeader ${isOpen ? 'sidebar-open' : ''}`}>
      <div className="AdminHeader-left">
        <button onClick={toggleChainSelection} className="AdminHeader-chains">
          <img src={ETHEREUMLogo} alt="Ethereum" className="AdminHeader-logo" />
          ETHEREUM <MdKeyboardArrowDown />
        </button>
        <div className="AdminHeader-info">
          <span>ETH: $2,407.67 <span className="red-text">-4.2%</span> 24h</span>
          <span className="gas-info">⛽ 2.70</span>
        </div>
      </div>

      <div className="AdminHeader-search-container" onClick={toggleSearchPopup}>
        <FaSearch className="AdminHeader-search-icon" />
        <input 
          type="text" 
          className="AdminHeader-search" 
          placeholder="Search pair by symbol, name, contract or token" 
          readOnly
        />
      </div>

      <div className="AdminHeader-icons">
        <Tippy content="Setting">
          <span>
            <FaCog onClick={toggleSetting} />
          </span>
        </Tippy>
        <FaStar onClick={toggleStar} />
        <button className="AdminHeader-connect" onClick={() => { navigate('/UserAccount') }}>Connect</button>
      </div>

      {/* Render other components */}
      {showChainSelection && <ChainSelection />}
      
      <HeaderSetting isSettingOpen={isSettingOpen} toggleSetting={toggleSetting} />
      <StarComponent isOpen={isStarOpen} toggleStar={toggleStar} />

      {/* Conditionally render the SearchPopup */}
      <SearchPopup isOpen={isSearchPopupOpen} onClose={toggleSearchPopup} />
    </div>
  );
};

export default AdminHeader;