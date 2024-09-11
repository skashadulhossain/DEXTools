import React, { useState } from 'react';
import { Star, Share2 } from 'lucide-react';
import TradingViewWidget from './TradingViewChart';
import '../TradingViewChart/TradingtoInfoBox.css'; // Importing the CSS file
import CryptoLinksPopup from './CryptoLinksPopup/CryptoLinksPopup';
import SharePopup from './SharePopup/SharePopup';
import AuditScan from './AuditScan/AuditScan';
import logoimg from './Image/0xfb7b4564402e5500db5bb6d63ae671302777c75a.png';


const CryptoInfoBox = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSharePopupOpen, setIsSharePopupOpen] = useState(false);
  const [isStarOpen, setIsStarOpen] = useState(false); 

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const toggleStar = () => {
     setIsStarOpen(!isStarOpen);
};
  return (
    <div className="crypto-info-box">
      <div className="crypto-info-header">
        <div className="crypto-info-content">
        <div className="crypto-info-left">
          <img src={logoimg} alt="DEXTools" className="crypto-logo" />
          <div>
            <div className="crypto-title">DEXTools</div>
            <div className="crypto-subtitle">DEXT / WETH</div>
          </div>
          <Star className="crypto-icon" />
          <Share2 className="crypto-icon" onClick={() => setIsSharePopupOpen(true)}/>
        </div>
        <div className="crypto-info-right">
          <div className="crypto-price" onClick={toggleStar} >$ 0.4241</div>
          <div className="crypto-change-title-box">
            <h4 className="crypto-change">-6.13% <span className="crypto-change-time">24h</span></h4>
            <span className="crypto-eth-price">0.0001872 ETH</span>
          </div>
        </div>
        </div>
        <div className="crypto-info-middle">
          <div className="crypto-icon-box">
            {['📊', '🌐', '𝕏', '✈', '✉', '👾', '🦎', '🔗', '🅰', '...'].map((icon, index) => (
              <span key={index} className="crypto-icon-text">{icon}</span>
            ))}
          </div>
          <button className="crypto-audit-button" onClick={togglePopup}>
            <span className="audit-icon">✔️</span>
            AUDIT
          </button>
        </div>
      </div>
      <div className="crypto-chart-container">
        <div className="crypto-tradingview-container">
          <TradingViewWidget />
        </div>
      </div>
      {isPopupOpen && <CryptoLinksPopup onClose={togglePopup} />}
      {isSharePopupOpen && <SharePopup onClose={() => setIsSharePopupOpen(false)} />}
      <AuditScan isOpen={isStarOpen} toggleStar={toggleStar} />
    </div>
    
  );
};

export default CryptoInfoBox;

