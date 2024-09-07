import React from 'react';
import { X, Globe, Mail, MessageCircle, Twitter, Youtube, Instagram, Facebook, BookOpen, FileText, ChevronRight } from 'lucide-react';
import './CryptoLinksPopup.css';

// Custom TikTok icon component
const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 19.75 4h-2.52A4.278 4.278 0 0 0 16.6 5.82zM8 11.8V10c-.7.1-1.3.3-1.9.6C4 11.9 2.6 14.3 2.5 17c-.1 3.3 1.8 6.3 4.7 7.6 1.4.6 2.8.9 4.3.8H8v-2c-2.2-.2-4-2-4-4.3 0-2.3 1.8-4.1 4-4.3zm12.4-1.3c-.8-.5-1.6-.9-2.4-1.1V8c-1.9 0-3.5-1-4.4-2.4V17c-.1 3.3-2.8 5.9-6.1 5.9-1.2 0-2.4-.4-3.4-1v.1c1.9 1.9 4.6 2.9 7.3 2.5 4.1-.6 7.1-4.1 7.1-8.3V5.5c1.4 1 2.4 2.5 2.9 4.2v.8z" fill="currentColor"/>
  </svg>
);

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
              <li><img src="/api/placeholder/20/20" alt="CoinMarketCap" /> CoinMarketCap</li>
              <li><img src="/api/placeholder/20/20" alt="View Contract" /> View Contract</li>
              <li><img src="/api/placeholder/20/20" alt="View Contract" /> View Contract</li>
              <li><img src="/api/placeholder/20/20" alt="Coingecko" /> Coingecko</li>
              <li><img src="/api/placeholder/20/20" alt="Bubblemaps" /> Bubblemaps</li>
              <li className="CryptoLinksPopup-disabled"><img src="/api/placeholder/20/20" alt="Metamask" /> Metamask</li>
            </ul>
            <h4>NFT</h4>
            <ul>
              <li className="CryptoLinksPopup-disabled"><img src="/api/placeholder/20/20" alt="NFT" /> NFT Collection</li>
            </ul>
            <h4>Repositories</h4>
            <ul>
              <li className="CryptoLinksPopup-disabled"><img src="/api/placeholder/20/20" alt="GitHub" /> GitHub</li>
              <li className="CryptoLinksPopup-disabled"><img src="/api/placeholder/20/20" alt="Bitbucket" /> Bitbucket</li>
            </ul>
          </div>
          <div className="CryptoLinksPopup-column">
            <h4>Social and other links</h4>
            <ul>
              <li><Globe size={20} /> Website</li>
              <li><Mail size={20} /> Email</li>
              <li><MessageCircle size={20} /> Telegram</li>
              <li><Twitter size={20} /> Twitter</li>
              <li><img src="/api/placeholder/20/20" alt="Discord" /> Discord</li>
              <li><Youtube size={20} /> Youtube</li>
              <li><Instagram size={20} /> Instagram</li>
              <li><TikTokIcon /> Tiktok</li>
              <li className="CryptoLinksPopup-disabled"><Facebook size={20} /> Facebook</li>
              <li><BookOpen size={20} /> Medium</li>
              <li><img src="/api/placeholder/20/20" alt="Reddit" /> Reddit</li>
              <li><FileText size={20} /> Extra info</li>
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