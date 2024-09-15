import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TokenHeader.css';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoIosPower } from 'react-icons/io';
import headerlogo from './Image/logo.svg';
import WalletConnectPopup from '../../Layouts/Admin-Layout/Admin-Header/UserAccountComponent/WalletConnectPopup/WalletConnectPopup';

const TokenHeader = () => {

    const navigate = useNavigate();

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleConnectClick = () => {
      setIsPopupOpen(true);
    };
  
    const handleClosePopup = () => {
      setIsPopupOpen(false);
    };

  return (
    <>
    
    <header className="Token-Header">
        <div className="Token-header-title-box">
            <div className="Token-header-logo-box">
                <a href="#"><img src={headerlogo} alt="" />Token Creator</a>
            </div>
            <div className="Token-header-link-box">
                <a href="#" onClick={() => { navigate('/TokenCreationInterface') }} >CREATE TOKEN</a>
                <a href="#" onClick={() => { navigate('/MyToken') }} >MY TOKEN</a>
            </div>
        </div>
        <div className="Token-header-btn-box">
            <IoSettingsOutline className="Token-header-icon" />
            <button onClick={handleConnectClick}><IoIosPower className="Token-header-icon-2" />CONNECT</button>
        </div>
        {isPopupOpen && <WalletConnectPopup onClose={handleClosePopup} />}
    </header>
    
    </>
  )
}

export default TokenHeader;
