import React from 'react';
import './Multiswap.css';
import Sidebar from '../../Components/Layouts/Admin-Layout/Admin-Sidebar/SideBar';

const MultiSwap = () => {
  return (
    <>
    <Sidebar>
    <div className="Multiswap-container">
      <h1 className="Multiswap-title">MULTISWAP</h1>
      <p className="Multiswap-description">
        Search and add as many pairs as you want in this view to trade it at once.
      </p>
      <div className="Multiswap-info">
        <span className="Multiswap-info-icon">ⓘ</span>
        <span className="Multiswap-info-text">
          Please accept the conditions of the exchange each time you add a pair to work properly.
        </span>
      </div>
      <div className="Multiswap-search-container">
        <input
          type="text"
          className="Multiswap-search-input"
          placeholder="Find by symbol, name, contract or token"
        />
      </div>
    </div>
    </Sidebar>
    </>
   
  );
};

export default MultiSwap;