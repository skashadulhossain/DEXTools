

import React from 'react';
import './UserAreaComponent.css';
import UserAreaNavbar from './UserAreaNavbar/UserAreaNavbar';
import Footer from '../Layouts/Admin-Layout/Admin-Footer/AdminFooter';

const UserAreaComponents = () => {
  return (
    <>
     <UserAreaNavbar/>
      <div className="UserAreaComponents-wallet-connect">
         <h1 className="UserAreaComponents-title">Wallet Connect</h1>
    <div className="UserAreaComponents-steps">
      <div className="UserAreaComponents-step UserAreaComponents-active">
        <span className="UserAreaComponents-step-number">1</span>
        <span className="UserAreaComponents-step-text">CONNECT</span>
      </div>
      <div className="UserAreaComponents-step">
        <span className="UserAreaComponents-step-number">2</span>
        <span className="UserAreaComponents-step-text">VERIFY</span>
      </div>
    </div>
    <div className="UserAreaComponents-content">
      <div className="UserAreaComponents-step-content UserAreaComponents-active-step">
        <h2 className="UserAreaComponents-step-title">STEP 1</h2>
        <h3 className="UserAreaComponents-step-subtitle">CONNECT YOUR WALLET</h3>
        <p className="UserAreaComponents-step-description">
          Connect your wallet with DEXTools to access new features and get more advantages over your tools.
        </p>
        <button className="UserAreaComponents-connect-button">
          <span className="UserAreaComponents-connect-icon"></span>
          CONNECT WALLET
        </button>
      </div>
      <div className="UserAreaComponents-step-content UserAreaComponents-inactive-step">
        <h2 className="UserAreaComponents-step-title">STEP 2</h2>
        <h3 className="UserAreaComponents-step-subtitle">VERIFY YOUR WALLET INTO DEXTOOLS.IO</h3>
        <p className="UserAreaComponents-step-description">
          By verifying your wallet we will validate the ownership of your wallet.
        </p>
      </div>
    </div>
  </div>
  <Footer/>
    </>
   
  

  );
};

export default UserAreaComponents;