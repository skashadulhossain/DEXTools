// HotPairs.jsx
import React from 'react';
import './HotPairs.css';
import { FaBinoculars, FaCopy, FaRegStar } from 'react-icons/fa';
import ppimg1 from './Image/Nairo.png';
import ppimg2 from './Image/Doge.jpeg';
import ppimg3 from './Image/Blaze.jpeg';
import ppimg4 from './Image/Vista.jpg';
import ppimg5 from './Image/Trump.webp';
import ppimg6 from './Image/maga.jpg';
import ppimg7 from './Image/pndc.png';
import ppimg8 from './Image/peipei.png';
import ppimg9 from './Image/doge2.jpeg';
import ppimg10 from './Image/husby.png';
import { FaAnglesDown, FaAnglesUp, FaCircleInfo } from 'react-icons/fa6';
import { WiDirectionDownRight, WiDirectionUpRight } from 'react-icons/wi';
import { PiCaretUpDown } from 'react-icons/pi';
import { MdInsertChart } from 'react-icons/md';

const cryptoHeadData = [
  { id: 1, title: 'Pair', },
  { id: 2, title: 'Price', icon: <FaCircleInfo />  },
  { id: 3, title: '%24h ', icon: <FaCircleInfo />  },
  { id: 4, title: 'DEXTscore', icon: <FaCircleInfo />  },
  { id: 5, title: 'Audits', icon: <FaCircleInfo />  },
  { id: 6, title: 'Created', icon: <FaCircleInfo />  },
  { id: 7, title: 'Volume', icon: <FaCircleInfo />  },
  { id: 8, title: 'Swaps', icon: <FaCircleInfo />  },
  { id: 9, title: 'Volatility', icon: <FaCircleInfo />  },
  { id: 10, title: 'Liquidity', icon: <FaCircleInfo />  },
  { id: 11, title: 'T.M.Cap.', icon: <FaCircleInfo />  },
  { id: 12, title: 'DEX', icon: <FaCircleInfo />  },
  { id: 13, title: 'Actions'},
];

const cryptoData = [
  { id: 1, icon: ppimg1, title: 'NEIRO', pair: 'WETH', address: '0x388...62a3', price: 0.1556, change: 0.23, dextScore: 59, audits: 0, created: '1 month', volume: '5.17M', swaps: 3267, volatility: 2.43, liquidity: '2.12M', tmCap: '156.63M', dex: '💠' },
  { id: 2, icon: ppimg2, title: 'DOGE', pair: ' WETH', address: '0x308...e2a6', price: 0.003675, change: -24.76, dextScore: 49, audits: 3, created: '19 days', volume: '5.58M', swaps: 7263, volatility: 18.39, liquidity: '303.83K', tmCap: '3.79M', dex: '🦄' },
  { id: 3, icon: ppimg3, title: 'BLAZE', pair: 'TITANX', address: '0x4d3...85d1', price: 2.2735, change: 7.76, dextScore: 39, audits: 2, created: '2 months', volume: '9.71M', swaps: 263, volatility: 34.33, liquidity: '283.00K', tmCap: '25.00M', dex: '🦄' },
  { id: 4, icon: ppimg4, title: 'VISTA', pair: 'WETH', address: '0xfdd...2041', price: 22.7611, change: -1.96, dextScore: 19, audits: 1, created: '7 days', volume: '8.92M', swaps: 1751, volatility: 2.88, liquidity: '3.09M', tmCap: '22.16M', dex: '💠' },
  { id: 5, icon: ppimg5, title: 'TRUMP', pair: 'WETH', address: '0xc55...fd46', price: 0.00005311, change: 29.16, dextScore: 49, audits: 0, created: '1 month', volume: '7.86M', swaps: 5824, volatility: 8.83, liquidity: '1.62M', tmCap: '19.24M', dex: '🦄' },
  { id: 6, icon: ppimg6, title: 'MAGA', pair: 'WETH', address: '0x0c3...a6c7', price: 0.00009047, change: -0.36, dextScore: 89, audits: 0, created: '3 month', volume: '3.86M', swaps: 1824, volatility: 6.83, liquidity: '1.62M', tmCap: '2.52M', dex: '💠' },
  { id: 7, icon: ppimg7, title: 'PADC', pair: 'WETH', address: '0xc64...4152', price: 1.02432, change: 24.08, dextScore: 99, audits: 1, created: '23 days', volume: '5.86M', swaps: 2824, volatility: 4.83, liquidity: '1.62M', tmCap: '14.2M', dex: '🦄' },
  { id: 8, icon: ppimg8, title: 'PEIPEI', pair: 'WETH', address: '0xbf1...9b8b', price: 0.24032, change: -1.75, dextScore: 29, audits: 0, created: '19 days', volume: '1.86M', swaps: 3824, volatility: 3.83, liquidity: '1.62M', tmCap: '2.22M', dex: '🦄' },
  { id: 9, icon: ppimg9, title: 'D.O.G.E', pair: 'WETH', address: '0xc84...2162', price: 1.20202, change: 24.08, dextScore: 91, audits: 2, created: '2 month', volume: '2.86M', swaps: 7824, volatility: 2.83, liquidity: '1.62M', tmCap: '15.12M', dex: '💠' },
  { id: 10, icon: ppimg10, title: 'HUSBY', pair: 'WETH', address: '0x940...7ea2', price: 3.0298, change: -8.75, dextScore: 39, audits: 0, created: '3 month', volume: '1.36M', swaps: 4134, volatility: 1.13, liquidity: '1.81M', tmCap: '1.92M', dex: '🦄' },
  // ... add more data as needed
];

const HotPairs = () => {
  return (
    <div className="crypto-hotPair-table-container">
      <table className="crypto-hotPair-table">
        <thead>
          <tr>
          {cryptoHeadData.map((item, index) => (
            <th>
              <div className="hotPair-header">
                <span>{item.title}</span>
                <span className="hotPair-sort-icon">{item.icon}</span>
                <span className="hotPair-sort-icon"><PiCaretUpDown /></span>
              </div>
            </th>
          ))}
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((item, index) => (
            <tr key={item.id}>
              <td>
                <div className="hotPair-cell">
                  <span className="hotPair-number">#{index + 1}</span>
                  <span className={`sort-arrow ${index % 2 === 0 ? 'up' : 'down'}`}>
                    {index % 2 === 0 ? <FaAnglesUp /> : <FaAnglesDown />}
                  </span>
                  <img src={item.icon} alt={item.pair} className="hotPair-icon" />
                  <div className="hotPair-info">
                    <div className="hotPair-name"><span>{item.title}</span> / <span>{item.pair}</span></div>
                    <span className="hotPair-address">{item.address} <span className="hotPair-copy-icon"><FaCopy /></span></span>
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
                  <span className="action-icon"><FaBinoculars /></span>
                  <span className="action-icon"><MdInsertChart /></span>
                  <span className="action-icon"><FaRegStar /></span>
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