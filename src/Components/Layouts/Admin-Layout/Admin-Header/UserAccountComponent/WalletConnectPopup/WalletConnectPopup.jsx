import React from 'react';
import './WalletConnectPopup.css';

const wallets = [
  { id: 1, name: 'WalletConnect', icon: 'wallet-connect-icon.png', qrCode: true },
  { id: 2, name: 'OKX Wallet', icon: 'okx-wallet-icon.png' },
  { id: 3, name: 'MetaMask', icon: 'metamask-icon.png' },
  { id: 4, name: 'Binance Web3 Wallet', icon: 'binance-web3-icon.png' },
  { id: 5, name: 'Coinbase', icon: 'coinbase-icon.png' },
  { id: 6, name: 'All Wallets', icon: 'all-wallets-icon.png', count: '430+' },
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
