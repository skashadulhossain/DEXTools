import React, { useState } from 'react';
import { Star, Share2 } from 'lucide-react';
import TradingViewWidget from './TradingViewChart';
import '../TradingViewChart/TradingtoInfoBox.css'; // Importing the CSS file
import CryptoLinksPopup from './CryptoLinksPopup/CryptoLinksPopup';
import SharePopup from './SharePopup/SharePopup';
import AuditScan from './AuditScan/AuditScan';
import logoimg from './Image/0xfb7b4564402e5500db5bb6d63ae671302777c75a.png';
import { TbWorld } from 'react-icons/tb';
import { FaXTwitter } from 'react-icons/fa6';
import { FaDiscord, FaTelegram } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { PiDotsThreeCircleFill } from 'react-icons/pi';
import iconimg1 from './Image/ether-scan.png';
import iconimg2 from './Image/coingecko.png';
import iconimg3 from './Image/cmc-icon-blue.jpeg';
import iconimg4 from './Image/bubblemaps.png';

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
        <div className="crypto-info-middle">
          <div className="crypto-icon-box">
              <img src={iconimg1} alt="#" /> <TbWorld className='crypto-icon-2' /> <FaXTwitter className='crypto-icon-2' /> 
              <FaTelegram className='crypto-icon-2' /> <IoMdMail className='crypto-icon-2' /> <FaDiscord className='crypto-icon-2' />
              <img src={iconimg2} alt="#" /> <img src={iconimg3} alt="#" /> <img src={iconimg4} alt="#" />
              <PiDotsThreeCircleFill className='crypto-icon-2' onClick={togglePopup}/>
          </div>
          <button className="crypto-audit-button" onClick={toggleStar}>
            <span className="audit-icon">✔️</span>
            AUDIT
          </button>
        </div>
        <div className="crypto-info-right">
          <div className="crypto-price">$ 0.4241</div>
          <div className="crypto-change-title-box">
            <h4 className="crypto-change">-6.13% <span className="crypto-change-time">24h</span></h4>
            <span className="crypto-eth-price">0.0001872 ETH</span>
          </div>
        </div>
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

