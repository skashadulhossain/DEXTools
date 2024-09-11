import React from 'react';
import './SideBoxThree.css';
import { GoInfo } from 'react-icons/go';

const SideBoxThree = () => {
  return (
    <div className="sideboxthree-container">
      <div className="sideboxthree-score-circle">
        <svg viewBox="0 0 36 36" className="sideboxthree-circular-chart">
          <path className="sideboxthree-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
          <path className="sideboxthree-circle" strokeDasharray="99, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
          <text x="18" y="20.35" className="sideboxthree-percentage">99/99</text>
        </svg>
      </div>
      <div className="sideboxthree-score-label">DEXTscore</div>
      <div className="sideboxthree-reliability">Project reliability score based on:</div>
      <div className="sideboxthree-reliability-icons">
        <span className="sideboxthree-icon">⚪ 99pt</span>
        <span className="sideboxthree-icon">🔄 99pt</span>
        <span className="sideboxthree-icon">👥 99pt</span>
        <span className="sideboxthree-icon">🛡️ 99pt</span>
        <span className="sideboxthree-icon">💼 99pt</span>
      </div>
      <div className="sideboxthree-audit-section">
        <div className="sideboxthree-audit-header">
          <span>Audit <GoInfo size={18} /></span>
          <span className="sideboxthree-verify">△ Verify external audits</span>
        </div>
        <div className="sideboxthree-audit-item">
          <span><GoInfo size={18} /> Contract Verified</span>
          <span className="sideboxthree-status sideboxthree-yes">Yes</span>
        </div>
        <div className="sideboxthree-audit-item">
          <span><GoInfo size={18} /> Honeypot</span>
          <span className="sideboxthree-status sideboxthree-no">No</span>
        </div>
        <div className="sideboxthree-audit-item">
          <span><GoInfo size={18} /> Buy Tax</span>
          <span className="sideboxthree-status sideboxthree-zero">0%</span>
        </div>
        <div className="sideboxthree-audit-item">
          <span><GoInfo size={18} /> Sell Tax</span>
          <span className="sideboxthree-status sideboxthree-zero">0%</span>
        </div>
      </div>
      <button className="sideboxthree-check-audits">✓ Check Audits</button>
      <div className="sideboxthree-community-trust">
        <div className="sideboxthree-trust-header">COMMUNITY TRUST (3002 votes) <GoInfo size={18} /></div>
        <div className="sideboxthree-trust-bar">
          <span className="sideboxthree-thumbs-up">👍</span>
          <div className="sideboxthree-bar-container">
            <div className="sideboxthree-bar-positive" style={{width: '93.8%'}}></div>
            <div className="sideboxthree-bar-negative" style={{width: '6.2%'}}></div>
          </div>
          <span className="sideboxthree-thumbs-down">👎</span>
        </div>
        <div className="sideboxthree-trust-percentages">
          <span>93.8%</span>
          <span>6.2%</span>
        </div>
      </div>
      <div className="sideboxthree-token-description">
        <h3>TOKEN DESCRIPTION</h3>
        <p>DEXT is the utility token of DEXTools, which you can use to access all features and tiers of the app.</p>
        <a href="#" className="sideboxthree-update-link">Update</a>
      </div>
    </div>
  );
};

export default SideBoxThree;