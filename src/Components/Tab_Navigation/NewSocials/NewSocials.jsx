import React from 'react';
import './NewSocials.css';
import { Monitor, Mail} from 'lucide-react';
import { FaTelegram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import salana from './Image/solana.png';
import bull from './Image/bull.jpg';
import cate from './Image/cate.jpeg';
import zawg from './Image/zawg.jpg';
import snrepy from './Image/snrepy.png';
import popdog from './Image/popdog.png';
import kid from './Image/kid.jpeg';
import benji from './Image/benji.jpg';
import btc2 from './Image/btc2.png';
import fcb from './Image/fcb.jpeg';
import bof from './Image/bof.jpg';
import phyou from './Image/phyou.png';
import sel from './Image/sel.png';
import nuki from './Image/nuki.png';
import aight from './Image/aight.jpg';
import avi from './Image/avi.jpg';
import gapcat from './Image/gapcat.png';
import space from './Image/space.jpg';
import solama from './Image/solama.jpeg';
import btc from './Image/btc.jpg';

const NewSocials = () => {
  const tokens = [
    { image: bull,name: 'BULL', symbol: 'BULLISH KING', iconimg: salana, title: 'Salana', time: '1 h ago', icons: ['monitor', 'telegram', 'twitter',] },
    { image: cate,name: 'CATE', symbol: 'CATE', iconimg: salana, title: 'Salana', time: '1 h ago', icons: ['monitor', 'telegram', 'twitter',] },
    { image: zawg,name: 'ZAWG', symbol: 'Zawg', iconimg: salana, title: 'Salana', time: '2 h ago', icons: ['monitor', 'telegram', 'twitter',] },
    { image: snrepy,name: 'SNREPY', symbol: 'Snrepy', iconimg: salana, title: 'Salana', time: '5 h ago', icons: ['monitor', 'telegram', 'twitter',] },
    { image: popdog,name: 'Popdog', symbol: 'BULLISH KING', iconimg: salana, title: 'Salana', time: '6 h ago', icons: ['monitor', 'telegram', 'twitter',] },
    { image: kid,name: 'KID', symbol: 'Kid', iconimg: salana, title: 'Salana', time: '8 h ago', icons: ['monitor', 'telegram', 'twitter',] },
    { image: benji,name: 'BENJI', symbol: 'BENJI', iconimg: salana, title: 'Salana', time: '13 h ago', icons: ['monitor', 'telegram', 'twitter',] },    
    { image: btc2,name: 'BTC2', symbol: 'Bitcoin2.0', iconimg: salana, title: 'Salana', time: '17 h ago', icons: ['monitor', 'telegram', 'twitter',] },
    { image: fcb,name: 'FCB', symbol: 'Fringe Boys ...', iconimg: salana, title: 'Salana', time: '20 h ago', icons: ['monitor', 'telegram', 'twitter',] },    
    { image: bof,name: '$BOF', symbol: 'Balls of Fat...', iconimg: salana, title: 'Salana', time: '21 h ago', icons: ['monitor', 'telegram', 'twitter',] },
    { image: phyou,name: 'PHYOU', symbol: 'Trump Hears ...', iconimg: salana, title: 'Salana', time: '23 h ago', icons: ['monitor', 'telegram', 'twitter',] },    
    { image: nuki,name: 'NUKI', symbol: 'TANUKI', iconimg: salana, title: 'Salana', time: '1 d ago', icons: ['monitor', 'telegram', 'twitter',] },  
    { image: aight,name: 'aight', symbol: 'aight bro', iconimg: salana, title: 'Salana', time: '1 d ago', icons: ['monitor', 'mail','telegram', 'twitter',] },  
    { image: avi,name: 'AVI', symbol: 'Avian Labs', iconimg: salana, title: 'Salana', time: '1 d ago', icons: ['monitor', 'mail', 'telegram', 'twitter',] },  
    { image: gapcat,name: 'Gapcat', symbol: 'Gapcat', iconimg: salana, title: 'Salana', time: '1 d ago', icons: ['monitor', 'telegram', 'twitter',] },  
    { image: space,name: 'SPACE', symbol: 'Fillspace', iconimg: salana, title: 'Salana', time: '1 h ago', icons: ['monitor', 'telegram', 'twitter',] },  
    { image: solama,name: 'SOLAMA', symbol: 'SOLAMA', iconimg: salana, title: 'Salana', time: '1 d ago', icons: ['monitor', 'telegram', 'twitter',] },  
    { image: btc,name: 'BTC', symbol: 'Big Titty ch...', iconimg: salana, title: 'Salana', time: '1 d ago', icons: ['monitor', 'telegram', 'twitter',] },  
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
            <div className="NewSocials-token-info-box">
              <div className="NewSocials-token-info">
                <div className="NewSocials-token-icon">
                  <img src={token.image} alt="" />
                </div>
                <div className="NewSocials-token-details">
                  <h3>{token.name}</h3>
                  <p>{token.symbol}</p>
                </div>
              </div>
              <div className="NewSocials-token-network">
                <div className="NewSocials-ethereum-icon">
                  <img src={token.iconimg} alt="" />
                  <span>{token.title}</span>
                </div>
                <span>{token.time}</span>
              </div>
            </div>
            <div className="NewSocials-token-socials">
              {token.icons.map((icon, i) => (
                <span key={i} className="NewSocials-social-icon">
                  {icon === 'monitor' && <Monitor size={16} />}
                  {icon === 'mail' && <Mail size={16} />}
                  {icon === 'twitter' && <FaXTwitter size={16} />}
                  {icon === 'telegram' && <FaTelegram size={16} />}
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
          <div className="NewSocials-token-info-box">
            <div className="NewSocials-token-info">
              <div className="NewSocials-token-icon">
                <img src={token.image} alt="" />
              </div>
              <div className="NewSocials-token-details">
                <h3>{token.name}</h3>
                <p>{token.symbol}</p>
              </div>
            </div>
            <div className="NewSocials-token-network">
              <div className="NewSocials-ethereum-icon">
                <img src={token.iconimg} alt="" />
                <span>{token.title}</span>
              </div>
              <span>{token.time}</span>
            </div>
          </div>
          <div className="NewSocials-token-socials">
            {token.icons.map((icon, i) => (
              <span key={i} className="NewSocials-social-icon">
                {icon === 'monitor' && <Monitor size={16} />}
                {icon === 'mail' && <Mail size={16} />}
                {icon === 'twitter' && <FaXTwitter size={16} />}
                {icon === 'telegram' && <FaTelegram size={16} />}
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
