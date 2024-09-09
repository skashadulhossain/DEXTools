// HotPairs.jsx
import React from 'react';
import './HotPairs.css';
import { FaCopy } from 'react-icons/fa';
import ppimg1 from './Image/Nairo.png';
import ppimg2 from './Image/Doge.jpeg';
import ppimg3 from './Image/Blaze.jpeg';
import ppimg4 from './Image/Vista.jpg';
import ppimg5 from './Image/Trump.webp';
import { FaAnglesDown, FaAnglesUp } from 'react-icons/fa6';
import { WiDirectionDownRight, WiDirectionUpRight } from 'react-icons/wi';
import { PiCaretUpDown } from 'react-icons/pi';

const cryptoHeadData = [
  { id: 1, title: 'Pair', icon: <PiCaretUpDown /> },
  { id: 2, title: 'Price', icon: <PiCaretUpDown /> },
  { id: 3, title: '% 24h ', icon: <PiCaretUpDown /> },
  { id: 4, title: 'DEXTscore', icon: <PiCaretUpDown /> },
  { id: 5, title: 'Audits', icon: <PiCaretUpDown /> },
  { id: 6, title: 'Created', icon: <PiCaretUpDown /> },
  { id: 7, title: 'Volume', icon: <PiCaretUpDown /> },
  { id: 8, title: 'Swaps', icon: <PiCaretUpDown /> },
  { id: 9, title: 'Volatility', icon: <PiCaretUpDown /> },
  { id: 10, title: 'Liquidity', icon: <PiCaretUpDown /> },
  { id: 11, title: 'T.M.Cap.', icon: <PiCaretUpDown /> },
  { id: 12, title: 'DEX', icon: <PiCaretUpDown /> },
  { id: 13, title: 'Actions'},
];

const cryptoData = [
  { id: 1, icon: ppimg1, title: 'NEIRO', pair: 'WETH', address: '0x388...62a3', price: 0.1556, change: 0.23, dextScore: 99, audits: 0, created: '1 month', volume: '5.17M', swaps: 3267, volatility: 2.43, liquidity: '2.12M', tmCap: '156.63M', dex: '🦄' },
  { id: 2, icon: ppimg2, title: 'DOGE', pair: ' WETH', address: '0x308...e2a6', price: 0.003675, change: 34.76, dextScore: 99, audits: 3, created: '19 days', volume: '5.58M', swaps: 7263, volatility: 18.39, liquidity: '303.83K', tmCap: '3.79M', dex: '🦄' },
  { id: 3, icon: ppimg3, title: 'BLAZE', pair: 'TITANX', address: '0x4d3...85d1', price: 2.2735, change: 7.76, dextScore: 99, audits: 2, created: '2 months', volume: '9.71M', swaps: 263, volatility: 34.33, liquidity: '283.00K', tmCap: '25.00M', dex: '🦄' },
  { id: 4, icon: ppimg4, title: 'VISTA', pair: 'WETH', address: '0xfdd...2041', price: 22.7611, change: -1.96, dextScore: 98, audits: 1, created: '7 days', volume: '8.92M', swaps: 1751, volatility: 2.88, liquidity: '3.09M', tmCap: '22.16M', dex: '💠' },
  { id: 5, icon: ppimg5, title: 'TRUMP', pair: 'WETH', address: '0xc55...fd46', price: 0.00005311, change: 29.16, dextScore: 99, audits: 0, created: '1 month', volume: '7.86M', swaps: 4824, volatility: 4.83, liquidity: '1.62M', tmCap: '22.42M', dex: '🦄' },
  // ... add more data as needed
];

const HotPairs = () => {
  return (
    <div className="crypto-table-container">
      <table className="crypto-table">
        <thead>
          <tr>
          {cryptoHeadData.map((item, index) => (
            <th>
              <div className="pair-header">
                <span>{item.title}</span> <span className="sort-icon">{item.icon}</span>
              </div>
            </th>
          ))}
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((item, index) => (
            <tr key={item.id}>
              <td>
                <div className="pair-cell">
                  <span className="pair-number">#{index + 1}</span>
                  <span className={`sort-arrow ${index % 2 === 0 ? 'up' : 'down'}`}>
                    {index % 2 === 0 ? <FaAnglesUp /> : <FaAnglesDown />}
                  </span>
                  <img src={item.icon} alt={item.pair} className="pair-icon" />
                  <div className="pair-info">
                    <div className="pair-name"><span>{item.title}</span> / <span>{item.pair}</span></div>
                    <span className="pair-address">{item.address} <span className="copy-icon"><FaCopy /></span></span>
                  </div>
                </div>
              </td>
              <td>${item.price.toFixed(8)}</td>
              <td>
                <div className={`change-cell ${item.change >= 0 ? 'positive' : 'negative'}`}>
                  {item.change >= 0 ? <WiDirectionUpRight /> : <WiDirectionDownRight />} {Math.abs(item.change)}%
                </div>
              </td>
              <td>
                <div className="dext-score-wrapper">
                  <svg viewBox="0 0 36 36" className="dext-score-circle">
                    <path className="circle-bg"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path className="circle"
                      strokeDasharray={`${item.dextScore}, 100`}
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" className="dext-score">{item.dextScore}</text>
                  </svg>
                </div>
              </td>
              <td>
                <span className={`audit-badge ${item.audits > 0 ? 'with-audits' : 'no-audits'}`}>
                  🛡️ {item.audits}
                </span>
              </td>
              <td>{item.created}</td>
              <td>${item.volume}</td>
              <td>{item.swaps}</td>
              <td>{item.volatility}</td>
              <td>{item.liquidity}</td>
              <td>{item.tmCap}</td>
              <td>{item.dex}</td>
              <td>
                <div className="actions-cell">
                  <span className="action-icon">👤</span>
                  <span className="action-icon">📊</span>
                  <span className="action-icon">⭐</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HotPairs;