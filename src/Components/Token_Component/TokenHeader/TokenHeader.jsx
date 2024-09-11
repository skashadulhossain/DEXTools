import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TokenHeader.css';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoIosPower } from 'react-icons/io';
import headerlogo from './Image/logo.svg';

const TokenHeader = () => {
    const navigate = useNavigate();
  return (
    <>
    
    <header className="Token-Header">
        <div className="Token-header-title-box">
            <div className="Token-header-logo-box">
                <a href="#"><img src={headerlogo} alt="" />Token Creator</a>
            </div>
            <div className="Token-header-link-box">
                <a href="#"  onClick={() => { navigate('/MyToken') }}>CREATE TOKEN</a>
                <a href="#"  onClick={() => { navigate('/TokenCreationInterface') }}>MY TOKEN</a>
            </div>
        </div>
        <div className="Token-header-btn-box">
            <IoSettingsOutline className="Token-header-icon" />
            <button><IoIosPower className="Token-header-icon-2" />CONNECT</button>
        </div>
    </header>
    
    </>
  )
}

export default TokenHeader;
