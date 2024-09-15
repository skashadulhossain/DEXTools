import React from 'react';
import './LiveNewPairsTable.css';
import { FaCircleInfo } from 'react-icons/fa6';
import { PiCaretUpDown } from 'react-icons/pi';
import { FaCopy, FaRegStar } from 'react-icons/fa';
import { MdInsertChart } from 'react-icons/md';
import tableimg1 from './Image/Table img 1.png';
import tableimg2 from './Image/Table img 2.png';
import tableimg3 from './Image/Table img 3.png';
import tableimg4 from './Image/Table img 4.png';
import tableimg5 from './Image/Table img 5.png';
import tableimg6 from './Image/Table img 6.png';
import tableimg7 from './Image/Table img 7.png';
import tableimg8 from './Image/Table img 8.png';
import tableimg9 from './Image/Table img 9.jpg';
import tableimg10 from './Image/Table img 10.jpg';
import { IoIosLock, IoMdTime } from 'react-icons/io';
import iconimg1 from './Image/icon img 1.svg';
import iconimg2 from './Image/icon img 2.png';

const cryptoHeadData = [
    { id: 1, title: 'Pair info', },
    { id: 2, title: 'Listed Since', icon: <FaCircleInfo />  },
    { id: 3, title: 'Token Price USD (ETH)', icon: <FaCircleInfo />  },
    { id: 4, title: 'Initial Liquidity', icon: <FaCircleInfo />  },
    { id: 5, title: 'Total Liquidity', icon: <FaCircleInfo />  },
    { id: 6, title: 'Pool Amount', icon: <FaCircleInfo />  },
    { id: 7, title: 'Pool Variation', icon: <FaCircleInfo />  },
    { id: 8, title: 'Pool Remaining', icon: <FaCircleInfo />  },
    { id: 9, title: 'Contract', icon: <FaCircleInfo />  },
    { id: 10, title: 'Actions', icon: <FaCircleInfo />  },
  ];
  
  const cryptoData = [
    { id: 1, icon: tableimg1, title: 'DOGE', LiveNewPairs: 'WETH', address: '0x940...7ea2', price: '1h 48m 27s', created: '$0.0₇1079', volume: '2024-09-15', swaps: 4134, volatility: 1.13, liquidity: '1.81M', tmCap: '1.92M', dex: '🦄' },
    { id: 2, icon: tableimg2, title: 'MONKE', LiveNewPairs: 'WETH', address: '0xbf1...9b8b', price: '2h 5m 25s', created: '$0.0002496', volume: '2024-09-15', swaps: 3824, volatility: 3.83, liquidity: '1.62M', tmCap: '2.22M', dex: '🦄' },
    { id: 3, icon: tableimg3, title: 'CATE', LiveNewPairs: 'WETH', address: '0xc55...fd46', price: '2h 56m 45s', created: '$0.080179', volume: '2024-09-15', swaps: 5824, volatility: 8.83, liquidity: '1.62M', tmCap: '19.24M', dex: '🦄' },
    { id: 4, icon: tableimg4, title: 'MAG', LiveNewPairs: 'WETH', address: '0xfdd...2041', price: '3h 19m 20s', created: '$0.0₇4583', volume: '2024-09-14', swaps: 1751, volatility: 2.88, liquidity: '3.09M', tmCap: '22.16M', dex: '💠' },
    { id: 5, icon: tableimg5, title: 'WLFI', LiveNewPairs: 'WETH', address: '0xc84...2162', price: '3h 44m 45s', created: '$0.0001437', volume: '2024-09-14', swaps: 7824, volatility: 2.83, liquidity: '1.62M', tmCap: '15.12M', dex: '💠' },
    { id: 6, icon: tableimg6, title: 'BLAZE', LiveNewPairs: 'TITANX', address: '0x4d3...85d1', price: '4h 10m 18s', created: '$1.0200496', volume: '2024-09-13', swaps: 263, volatility: 34.33, liquidity: '283.00K', tmCap: '25.00M', dex: '🦄' },
    { id: 7, icon: tableimg7, title: 'MAGA', LiveNewPairs: 'WETH', address: '0x0c3...a6c7', price: '4h 43m 10s', created: '$2.0052496', volume: '2024-09-12', swaps: 1824, volatility: 6.83, liquidity: '1.62M', tmCap: '2.52M', dex: '💠' },
    { id: 8, icon: tableimg8, title: 'DOGE', LiveNewPairs: ' WETH', address: '0x308...e2a6', price: '6h 12m 56s', created: '$0.303₇79', volume: '2024-09-12', swaps: 7263, volatility: 18.39, liquidity: '303.83K', tmCap: '3.79M', dex: '🦄' },
    { id: 9, icon: tableimg9, title: 'PADC', LiveNewPairs: 'WETH', address: '0xc64...4152', price: '8h 27m 59s', created: '$3.202₇07', volume: '2024-09-11', swaps: 2824, volatility: 4.83, liquidity: '1.62M', tmCap: '14.2M', dex: '🦄' },
    { id: 10, icon: tableimg10, title: 'NEIRO', LiveNewPairs: 'WETH', address: '0x388...62a3', price: '10h 23m 10s', created: '$1.0₇2379', volume: '2024-09-11', swaps: 3267, volatility: 2.43, liquidity: '2.12M', tmCap: '156.63M', dex: '💠' },
    // ... add more data as needed
  ];

const LiveNewPairsTable = () => {
  return (
    <div className="LiveNewPairsTable-section">
      <div className="LiveNewPairsTable-title-box">
        <h1>Live New Pairs</h1>
      </div>
      <div className="LiveNewPairsTable-suntitle-container">
        <p>New pairs listed on <span>Ethereum</span> exchanges with pool variation in real time</p>
        <input type="text" placeholder='Find by symbol, name, token contact or pair addres' />
      </div>
      <div className="LiveNewPairsTable-container">
      <table>
        <thead>
          <tr>
          {cryptoHeadData.map((item) => (
            <th>
              <div className="LiveNewPairs-header">
                <span>{item.title}</span>
                <span className="LiveNewPairs-sort-icon">{item.icon}</span>
                <span className="LiveNewPairs-sort-icon"><PiCaretUpDown /></span>
              </div>
            </th>
          ))}
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="LiveNewPairs-cell">
                  <img src={item.icon} alt={item.LiveNewPairs} className="LiveNewPairs-icon" />
                  <div className="LiveNewPairs-info">
                    <div className="LiveNewPairs-name"><span>{item.title}</span> / <span>{item.LiveNewPairs}</span></div>
                    <span className="LiveNewPairs-address">{item.address} <span className="LiveNewPairs-copy-icon"><FaCopy /></span></span>
                  </div>
                </div>
              </td>
              <td>
                <div className="LiveNewPairs-time">
                    <IoMdTime />{item.price}
                </div>
              </td>
              <td>{item.created}</td>
              <td>${item.volume}</td>
              <td>{item.swaps}</td>
              <td>{item.volatility}</td>
              <td>{item.liquidity}</td>
              <td>{item.tmCap}</td>
              <td>{item.dex}</td>
              <td>
                <div className="LiveNewPairs-actions">
                  <img src={iconimg2} alt="" />
                  <img src={iconimg1} alt="" />
                  <span className="LiveNewPairs-actions-lock"><IoIosLock /></span>
                  <span className="LiveNewPairs-actions-icon"><MdInsertChart /></span>
                  <span className="LiveNewPairs-actions-icon"><FaRegStar /></span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default LiveNewPairsTable