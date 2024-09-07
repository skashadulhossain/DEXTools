import React from 'react';
import { X, Twitter, Send, FileText } from 'lucide-react';
import './SharePopup.css'

const SharePopup = ({ onClose }) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You might want to add a visual feedback for successful copy
  };

  return (
    <div className="SharePopup-overlay">
      <div className="SharePopup-container">
        <div className="SharePopup-header">
          <h3>Share</h3>
          <X className="SharePopup-close-icon" onClick={onClose} />
        </div>
        <div className="SharePopup-content">
          <div className="SharePopup-section">
            <h4>Short link:</h4>
            <div className="SharePopup-input-group">
              <input type="text" value="https://www.dextools.io/token/dextools" readOnly />
              <button onClick={() => copyToClipboard("https://www.dextools.io/token/dextools")}>Copy</button>
            </div>
            <p className="SharePopup-info">The preview data in this link may not be up to date</p>
          </div>
          <div className="SharePopup-section">
            <h4>Real-time link:</h4>
            <div className="SharePopup-input-group">
              <input type="text" value="https://www.dextools.io/token/dextools?t=17256..." readOnly />
              <button onClick={() => copyToClipboard("https://www.dextools.io/token/dextools?t=17256...")}>Copy</button>
            </div>
            <p className="SharePopup-info">Use this link to ensure up to date data in the preview</p>
          </div>
          <div className="SharePopup-section">
            <h4>Embed the chart in your website</h4>
            <div className="SharePopup-input-group">
              <input type="text" value='<iframe id="dextools-widget" title="DEXTools Trading Chart" width="500" height="400" src="https://www.dextools.io/widget-chart/..." />' readOnly />
              <button onClick={() => copyToClipboard('<iframe id="dextools-widget" title="DEXTools Trading Chart" width="500" height="400" src="https://www.dextools.io/widget-chart/..." />')}>Copy</button>
            </div>
          </div>
          <div className="SharePopup-section">
            <h4>Or embed the aggregator in your website</h4>
            <div className="SharePopup-input-group">
              <input type="text" value='<iframe id="dextswap-aggregator-widget" title="DEXTools Aggregator" width="500" height="400" src="https://www.dextools.io/widget-aggregator/..." />' readOnly />
              <button onClick={() => copyToClipboard('<iframe id="dextswap-aggregator-widget" title="DEXTools Aggregator" width="500" height="400" src="https://www.dextools.io/widget-aggregator/..." />')}>Copy</button>
            </div>
          </div>
          <div className="SharePopup-social">
            <h4>Or share it on social media:</h4>
            <div className="SharePopup-social-icons">
              <Twitter />
              <Send />
              <FileText />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharePopup;