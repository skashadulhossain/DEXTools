import React, { useState } from 'react';
import { FiX, FiAlertTriangle, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import './AuditScan.css';

const AuditScan = ({ isOpen, toggleStar }) => {
  const [isMoreInfoOpen, setIsMoreInfoOpen] = useState(false);

  const auditData = [
    { name: 'Quick Intel', icon: '⚡' },
    { name: 'GoPlus', icon: 'G+' },
    { name: 'Honeypot.is', icon: '🍯' },
  ];

  const alertItems = [
    { name: 'Buy Tax', type: 'info' },
    { name: 'Sell Tax', type: 'info' },
    { name: 'Proxy Contract', type: 'info' },
    { name: 'Mintable', type: 'info' },
    { name: 'Tax Modifiable', type: 'info' },
    { name: 'Transfer Pausable', type: 'info' },
    { name: 'Blacklisted', type: 'info' },
    { name: 'Scam risk', type: 'info' },
  ];

  const toggleMoreInfo = () => {
    setIsMoreInfoOpen(!isMoreInfoOpen);
  };

  return (
    <div className={`AuditScan_headerStar_modal ${isOpen ? 'open' : ''}`}>
      <div className={`AuditScan_headerStar_modal-content ${isOpen ? 'open' : ''}`}>
        <div className="AuditScan_audit-scan">
          <div className="AuditScan_audit-header">
            <h2>Audit Scan</h2>
            <div className="AuditScan_audit-status">
              <span className="AuditScan_status-icon">✓</span>
              <span className="AuditScan_status-text">NO ALERTS</span>
            </div>
            <FiX className="AuditScan_headerStar_close-icon" onClick={toggleStar} />
          </div>
          <div className="AuditScan_verify-external">
            <FiAlertTriangle />
            <span>Verify external audits</span>
          </div>
          <div className="AuditScan_alert-types">
            <span className="AuditScan_alert-type danger">Danger (0)</span>
            <span className="AuditScan_alert-type warning">Warning (0)</span>
            <span className="AuditScan_alert-type neutral">Neutral (8)</span>
          </div>
          <div className="AuditScan_audit-providers">
            {auditData.map((provider, index) => (
              <div key={index} className="AuditScan_provider">
                <span className="AuditScan_provider-icon">{provider.icon}</span>
                <span className="AuditScan_provider-name">{provider.name}</span>
              </div>
            ))}
          </div>
          <div className="AuditScan_alert-list">
            <h3>Alerts</h3>
            {alertItems.map((item, index) => (
              <div key={index} className="AuditScan_alert-item">
                <span className="AuditScan_alert-name">{item.name}</span>
                {auditData.map((provider, providerIndex) => (
                  <span key={providerIndex} className="AuditScan_alert-value">
                    {item.name === 'Buy Tax' || item.name === 'Sell Tax'
                      ? '0%'
                      : item.name === 'Scam risk'
                      ? (provider.name === 'Quick Intel' ? '???' : '-')
                      : (provider.name === 'Honeypot.is' && index > 4) ? '-' : 'No'}
                  </span>
                ))}
              </div>
            ))}
          </div>
          <div className={`AuditScan_more-info ${isMoreInfoOpen ? 'open' : ''}`} onClick={toggleMoreInfo}>
            <span>More info</span>
            {isMoreInfoOpen ? <FiChevronUp /> : <FiChevronDown />}
            <div className="AuditScan_more-info-content">
              {/* Add more info content here */}
              <p>Additional information about the audit...</p>
            </div>
          </div>
          <div className="AuditScan_token-sniffer-container">
            <span>More</span>
            <a href="#" className="AuditScan_token-sniffer">TokenSniffer</a>
          </div>
          <button className="AuditScan_show-disclaimer">Show disclaimer</button>
          <div className="AuditScan_share-buttons">
            <button className="AuditScan_share-button">X</button>
            <button className="AuditScan_share-button">Reddit</button>
            <button className="AuditScan_share-button">Telegram</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditScan;