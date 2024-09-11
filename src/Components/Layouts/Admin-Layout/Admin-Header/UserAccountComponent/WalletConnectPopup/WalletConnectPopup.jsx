import React from 'react';
import './WalletConnectPopup.css';
import iconimg1 from './Image/Icon img 1.webp';
import iconimg2 from './Image/Icon img 2.webp';
import iconimg3 from './Image/Icon img 3.webp';
import iconimg4 from './Image/Icon img 4.webp';
import iconimg5 from './Image/Icon img 5.webp';
import iconimg6 from './Image/Icon img 6.png';

const wallets = [
  { id: 1, name: 'WalletConnect', icon: iconimg1, qrCode: true },
  { id: 2, name: 'OKX Wallet', icon: iconimg2 },
  { id: 3, name: 'MetaMask', icon: iconimg3 },
  { id: 4, name: 'Binance Web3 Wallet', icon: iconimg4 },
  { id: 5, name: 'Coinbase', icon: iconimg5 },
  { id: 6, name: 'All Wallets', icon: iconimg6, count: '430+' },
];

const WalletConnectPopup = ({ onClose }) => {
  return (
    <div className="WalletConnectPopup-overlay">
      <div className="WalletConnectPopup-content">
        <div className="WalletConnectPopup-header">
          <span className="WalletConnectPopup-info-icon">?</span>
          <h2 className="WalletConnectPopup-title">Connect Wallet</h2>
          <button className="WalletConnectPopup-close-button" onClick={onClose}>×</button>
        </div>
        <ul className="WalletConnectPopup-wallet-list">
          {wallets.map(wallet => (
            <li key={wallet.id} className="WalletConnectPopup-wallet-item">
              <img src={wallet.icon} alt={wallet.name} className="WalletConnectPopup-wallet-icon" />
              <span>{wallet.name}</span>
              {wallet.qrCode && <button className="WalletConnectPopup-qr-button">QR CODE</button>}
              {wallet.count && <span className="WalletConnectPopup-wallet-count">{wallet.count}</span>}
            </li>
          ))}
        </ul>
        <p className="WalletConnectPopup-terms">
          By connecting your wallet, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default WalletConnectPopup;
