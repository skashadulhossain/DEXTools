import React from 'react';
import './PriceAlerts.css';

const PriceAlerts = () => {
  return (
    <div className="price-alerts">
      <div className="header">
        <div className="header-title">
          <h2>DEXT Price Alerts •</h2>
          <p className="expiration-message">
            The alerts that are not fired within 30 days will expire automatically
          </p>
        </div>
        <div className="alert-count-box">
          <div className="alert-count">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
            </svg>
            <span>0/5</span>
          </div>
          <h5>Set a maximum of 5 alerts</h5>
        </div>
      </div>
      <div className="info-box">
        <p>
          <span className="asterisk">*</span> Please, go to{' '}
          <span className="highlight">Configuration</span> to activate Browser Notifications.
        </p>
      </div>
      <div className="info-box">
        <p>
          <span className="asterisk">**</span> You need a paid subscription or at least 1000 DEXT to use Telegram and Email Alerts.
        </p>
      </div>
    </div>
  );
};

export default PriceAlerts;