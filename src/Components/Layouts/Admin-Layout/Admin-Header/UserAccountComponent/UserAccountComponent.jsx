import React, { useState } from 'react';
import './UserAccountComponent.css';
import WalletConnectPopup from './WalletConnectPopup/WalletConnectPopup';


const UserAccountComponent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleConnectClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="UserAcComponent-container">
      <h1 className="UserAcComponent-title">USER ACCOUNT</h1>
      <p className="UserAcComponent-subtitle">Gain access to additional features such as..</p>
      
      <div className="UserAcComponent-steps-container">
        <div className="UserAcComponent-step">
          <h2 className="UserAcComponent-step-title">STEP 1</h2>
          <h3 className="UserAcComponent-step-subtitle">Connect your wallet</h3>
          <p className="UserAcComponent-step-description">
            Connect your wallet with DEXTools to access new features and get more advantages over your tools.
          </p>
          <button className="UserAcComponent-connect-button" onClick={handleConnectClick}>Connect</button>
        </div>
        
        <div className="UserAcComponent-step">
          <h2 className="UserAcComponent-step-title UserAcComponent-step-title-inactive">STEP 2</h2>
          <h3 className="UserAcComponent-step-subtitle UserAcComponent-step-subtitle-inactive">
            Verify your wallet into DEXTools.io
          </h3>
          <p className="UserAcComponent-step-description UserAcComponent-step-description-inactive">
            By verifying your wallet we will validate the ownership of your wallet.
          </p>
        </div>
      </div>

      {isPopupOpen && <WalletConnectPopup onClose={handleClosePopup} />}
    </div>
  );
};

export default UserAccountComponent;