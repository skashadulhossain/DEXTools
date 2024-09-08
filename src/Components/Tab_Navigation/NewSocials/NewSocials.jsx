import React from 'react';
import './NewSocials.css';
import { Monitor, Mail, Send, Twitter, Plus } from 'lucide-react';

const NewSocials = () => {
  const tokens = [
    { name: 'OPCAT', symbol: 'OP_CAT', time: '2 h ago', icons: ['monitor', 'mail', 'send', 'twitter', 'circle', 'plus'] },
    { name: 'RUG', symbol: 'Rug', time: '2 h ago', icons: ['monitor', 'mail', 'send', 'twitter'] },
    { name: 'WIN69', symbol: 'Window Meme', time: '3 h ago', icons: ['monitor', 'send', 'twitter'] },
    { name: 'BROKIE', symbol: 'Brokie', time: '3 h ago', icons: ['monitor', 'send', 'twitter'] },
    { name: 'MBAKER', symbol: 'Master Baker', time: '6 h ago', icons: ['monitor', 'send', 'twitter'] },
    { name: 'MOONDOGE', symbol: 'MOONDOGE', time: '8 h ago', icons: ['monitor', 'mail', 'send', 'twitter'] },
    { name: 'SHIB', symbol: 'Strategic Hu...', time: '10 h ago', icons: ['monitor', 'send', 'twitter'] },
    { name: 'MW3', symbol: 'MILADYWARFAR...', time: '10 h ago', icons: ['monitor', 'send', 'twitter'] },
    { name: '$MOCHICAT', symbol: 'MochiCat Mem...', time: '15 h ago', icons: ['monitor', 'send', 'twitter'] },
    { name: 'WUKONG', symbol: 'WUKONG', time: '15 h ago', icons: ['monitor', 'send', 'twitter'] },
    { name: 'ADoge', symbol: 'ADoge', time: '15 h ago', icons: ['monitor', 'mail', 'send', 'twitter'] },
    { name: '$Cafe', symbol: 'CAFE MEME', time: '15 h ago', icons: ['monitor', 'send', 'twitter'] },
  ];

  return (
    <div className="NewSocials-container">
      <div className="NewSocials-header">
        <h2>Last updated tokens</h2>
        <button className="NewSocials-update-btn">Update socials</button>
      </div>
      <div className="NewSocials-top-tokens">
        {tokens.slice(0, 3).map((token, index) => (
          <div key={index} className="NewSocials-token-card">
            <div className="NewSocials-token-info">
              <div className="NewSocials-token-icon">{token.name[0]}</div>
              <div className="NewSocials-token-details">
                <h3>{token.name}</h3>
                <p>{token.symbol}</p>
              </div>
            </div>
            <div className="NewSocials-token-network">
              <span className="NewSocials-ethereum-icon">Ξ</span>
              <span>Ethereum</span>
              <span>{token.time}</span>
            </div>
            <div className="NewSocials-token-socials">
              {token.icons.map((icon, i) => (
                <span key={i} className="NewSocials-social-icon">
                  {icon === 'monitor' && <Monitor size={16} />}
                  {icon === 'mail' && <Mail size={16} />}
                  {icon === 'send' && <Send size={16} />}
                  {icon === 'twitter' && <Twitter size={16} />}
                  {icon === 'circle' && <div className="NewSocials-circle-icon" />}
                  {icon === 'plus' && <Plus size={16} />}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="NewSocials-description">
        Below is a list of the cryptocurrencies and token social links that have been updated most recently.
      </p>
      <div className="NewSocials-token-grid">
        {tokens.slice(3).map((token, index) => (
          <div key={index} className="NewSocials-token-card">
            <div className="NewSocials-token-info">
              <div className="NewSocials-token-icon">{token.name[0]}</div>
              <div className="NewSocials-token-details">
                <h3>{token.name}</h3>
                <p>{token.symbol}</p>
              </div>
            </div>
            <div className="NewSocials-token-network">
              <span className="NewSocials-ethereum-icon">Ξ</span>
              <span>Ethereum</span>
              <span>{token.time}</span>
            </div>
            <div className="NewSocials-token-socials">
              {token.icons.map((icon, i) => (
                <span key={i} className="NewSocials-social-icon">
                  {icon === 'monitor' && <Monitor size={16} />}
                  {icon === 'mail' && <Mail size={16} />}
                  {icon === 'send' && <Send size={16} />}
                  {icon === 'twitter' && <Twitter size={16} />}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewSocials;