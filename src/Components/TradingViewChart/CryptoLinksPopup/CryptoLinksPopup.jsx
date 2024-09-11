import React from 'react';
import { X, Globe, Mail, MessageCircle, Twitter, Youtube, Instagram, Facebook, BookOpen, ChevronRight } from 'lucide-react';
import './CryptoLinksPopup.css';
import iconimg1 from '../Image/cmc-icon-blue.jpeg';
import iconimg2 from '../Image/oklink.png';
import iconimg3 from '../Image/ether-scan.png';
import iconimg4 from '../Image/coingecko.png';
import iconimg5 from '../Image/bubblemaps.png';
import { FaBitbucket, FaDiscord, FaGithub, FaLink, FaReddit } from 'react-icons/fa';
import { RiNftFill } from 'react-icons/ri';
import iconimg6 from '../Image/metamask.svg';

// Custom TikTok icon component


const CryptoLinksPopup = ({ onClose }) => {
  return (
    <div className="CryptoLinksPopup-overlay" onClick={onClose}>
      <div className="CryptoLinksPopup-container" onClick={(e) => e.stopPropagation()}>
        <div className="CryptoLinksPopup-header">
          <h3>DEXT links</h3>
          <X className="CryptoLinksPopup-close-icon" onClick={onClose} />
        </div>
        <div className="CryptoLinksPopup-content">
          <div className="CryptoLinksPopup-column">
            <h4>Token</h4>
            <ul>
              <li><img src={iconimg1} alt="CoinMarketCap" /> CoinMarketCap</li>
              <li><img src={iconimg2} alt="View Contract" /> View Contract</li>
              <li><img src={iconimg3} alt="View Contract" /> View Contract</li>
              <li><img src={iconimg4} alt="Coingecko" /> Coingecko</li>
              <li><img src={iconimg5} alt="Bubblemaps" /> Bubblemaps</li>
              <li className="CryptoLinksPopup-disabled"><img src={iconimg6} alt="Metamask" /> Metamask</li>
            </ul>
            <h4>NFT</h4>
            <ul>
              <li className="CryptoLinksPopup-disabled"><RiNftFill size={20} /> NFT Collection</li>
            </ul>
            <h4>Repositories</h4>
            <ul>
              <li className="CryptoLinksPopup-disabled"><FaGithub size={20} /> GitHub</li>
              <li className="CryptoLinksPopup-disabled"><FaBitbucket size={20} /> Bitbucket</li>
            </ul>
          </div>
          <div className="CryptoLinksPopup-column">
            <h4>Social and other links</h4>
            <ul>
              <li><Globe size={20} /> Website</li>
              <li><Mail size={20} /> Email</li>
              <li><MessageCircle size={20} /> Telegram</li>
              <li><Twitter size={20} /> Twitter</li>
              <li><FaDiscord size={20} /> Discord</li>
              <li><Youtube size={20} /> Youtube</li>
              <li><Instagram size={20} /> Instagram</li>
              {/* <li><TikTokIcon /> Tiktok</li> */}
              <li className="CryptoLinksPopup-disabled"><Facebook size={20} /> Facebook</li>
              <li><BookOpen size={20} /> Medium</li>
              <li><FaReddit size={20} /> Reddit</li>
              <li><FaLink size={20} /> Extra info</li>
            </ul>
          </div>
        </div>
        <div className="CryptoLinksPopup-footer">
          <p>Hey! It seems we don't have some links.</p>
          <p>You can update social info of the token to improve the DEXT Score and show the links from CoinGecko, Etherscan...</p>
          <p>If you want to speed this process up you can fast track the social links and logo directly to DEXTools by using <a href="#">this form <ChevronRight size={12} /></a> and paying a fee.</p>
        </div>
      </div>
    </div>
  );
};

export default CryptoLinksPopup;