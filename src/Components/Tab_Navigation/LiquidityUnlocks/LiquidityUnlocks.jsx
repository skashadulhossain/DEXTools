import React from 'react';
import './LiquidityUnlocks.css';
import { Copy} from 'lucide-react';
import { PiCaretUpDown } from 'react-icons/pi';
import { MdInsertChart } from 'react-icons/md';
import { FaBinoculars, FaLock, FaRegStar } from 'react-icons/fa';
import LiquidityUnlocksTop from './LiquidityUnlocksTop/LiquidityUnlocksTop';

const LiquidityUnlocks = () => {
  const data = [
    { pair: 'HAMSTER', symbol: 'WBNB', address: '0x68f...1d55', nextUnlock: '00:07:25' },
    { pair: 'HUOYD', symbol: 'USDT', address: '0x5b5...b147', nextUnlock: '00:09:13' },
    { pair: 'BBD', symbol: 'WBNB', address: '0xb6e...e9f2', nextUnlock: '00:15:10' },
    { pair: 'TATE', symbol: 'WETH', address: '0x928...6e37', nextUnlock: '00:28:24' },
    { pair: 'CATDOG', symbol: 'WBNB', address: '0x51c...f93a', nextUnlock: '00:30:10' },
    { pair: '666 2.0', symbol: 'WBNB', address: '0xb5b...f515', nextUnlock: '00:52:40' },
    { pair: 'FanShen', symbol: 'USDT', address: '0xaa5...30fd', nextUnlock: '01:16:10' },
    { pair: 'HUOYD', symbol: 'USDT', address: '0x5b5...b147', nextUnlock: '01:29:17' },
    { pair: 'SONIK', symbol: 'WBNB', address: '0x488...be8d', nextUnlock: '01:32:02' },
  ];

  return (
    
    <>
    
    <div className="LiquidityUnlocks-container">
      <LiquidityUnlocksTop/>
      <table className="LiquidityUnlocks-table">
        <thead>
          <tr>
            <th>Pair <PiCaretUpDown className="LiquidityUnlocks-filter-icon" /></th>
            <th>Liquidity To Unlock <PiCaretUpDown className="LiquidityUnlocks-filter-icon" /></th>
            <th>Next Unlock <PiCaretUpDown className="LiquidityUnlocks-filter-icon" /></th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="LiquidityUnlocks-pair">
                <div className="LiquidityUnlocks-icon">{item.pair[0]}</div>
                <div className="LiquidityUnlocks-pair-info">
                  <div className="LiquidityUnlocks-pair-title">
                    <span>{item.pair}</span>
                    <span>/ {item.symbol}</span>
                  </div>
                  <div className="LiquidityUnlocks-address">
                    <span>{item.address}</span>
                    <Copy size={14} className="LiquidityUnlocks-copy-icon" />
                  </div>
                </div>
              </td>
              <td>
                <div className="LiquidityUnlocks-lock-icon-box">
                  <FaLock size={28} className="LiquidityUnlocks-lock-icon"/>-
                </div>
              </td>
              <td>
                <div className="LiquidityUnlocks-next-unlock">
                  {item.nextUnlock}
                </div>
              </td>
              <td>
                <div className="LiquidityUnlocks-actions">
                  <button className="LiquidityUnlocks-action-btn"><FaBinoculars /></button>
                  <button className="LiquidityUnlocks-action-btn"><MdInsertChart /></button>
                  <button className="LiquidityUnlocks-action-btn"><FaRegStar /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    </>
  );
};

export default LiquidityUnlocks;