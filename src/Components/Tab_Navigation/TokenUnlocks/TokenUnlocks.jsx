import React from 'react';
import './TokenUnlocks.css';
import { Copy, Binoculars, Trash2 } from 'lucide-react';
import { PiCaretUpDown } from 'react-icons/pi';
import { FaBinoculars } from 'react-icons/fa';
import { MdInsertChart } from 'react-icons/md';
import TokenUnlocksTop from './TokenUnlocksTop/TokenUnlocksTop';

const TokenUnlocks = () => {
  const data = [
    { pair: 'NfDAO', symbol: 'NfDAO', address: '0x3ab...44bf', tokensToUnlock: '1.00M (<1%)', currentPrice: '$0.1868', value: '$186,894', nextUnlock: '01:28:45' },
    { pair: 'XQJ', symbol: 'XQJ', address: '0x89e...d389', tokensToUnlock: '300.00 (<1%)', currentPrice: '$0.0131', value: '$3.94572', nextUnlock: '01:46:45' },
    { pair: 'Patience', symbol: 'PACE', address: '0x841...cc8d', tokensToUnlock: '16.1494 (<1%)', currentPrice: '$0.8245', value: '$13.3152', nextUnlock: '02:30:45' },
    { pair: 'Moniwar', symbol: 'MOWA', address: '0x411...85d9', tokensToUnlock: '1.78M (<1%)', currentPrice: '$0.8731', value: '$1,555.91', nextUnlock: '02:38:01' },
    { pair: 'Dogy', symbol: 'DOGY', address: 'GWGa1...BhkA', tokensToUnlock: '30.00B (<1%)', currentPrice: '$0.1615', value: '$4,847.82', nextUnlock: '03:46:45' },
    { pair: 'Chelsea', symbol: 'CLA', address: '0xcca...e15b', tokensToUnlock: '7.17M (<1%)', currentPrice: '$0.0010', value: '$7,235.75', nextUnlock: '04:07:45' },
    { pair: 'X-Mars', symbol: 'X-Mars', address: '0xf52...6bdf', tokensToUnlock: '3.00B (<1%)', currentPrice: '$0.3022', value: '$9.06633', nextUnlock: '05:55:45' },
    { pair: 'ICARUS', symbol: 'ICA', address: '0x341...0fdd', tokensToUnlock: '15.00B (1.5000%)', currentPrice: '$0.8309', value: '$1,246.45', nextUnlock: '06:46:19' },
    { pair: 'NfDAO', symbol: 'NfDAO', address: '0x3ab...44bf', tokensToUnlock: '3.00M (<1%)', currentPrice: '$0.1868', value: '$560,683', nextUnlock: '06:50:45' },
    { pair: 'X-Mars', symbol: 'X-Mars', address: '0xf52...6bdf', tokensToUnlock: '3.00B (<1%)', currentPrice: '$0.3022', value: '$9.06633', nextUnlock: '06:58:45' },
  ];

  return (
    <>
    
    <div className="TokenUnlocks-container">
      <TokenUnlocksTop/>
      <table className="TokenUnlocks-table">
        <thead>
          <tr>
            <th>Pair <PiCaretUpDown size={14} className="TokenUnlocks-filter-icon" /></th>
            <th>Tokens To Unlock <PiCaretUpDown size={14} className="TokenUnlocks-filter-icon" /></th>
            <th>Current Price <PiCaretUpDown size={14} className="TokenUnlocks-filter-icon" /></th>
            <th>Value <PiCaretUpDown size={14} className="TokenUnlocks-filter-icon" /></th>
            <th>Next Unlock <PiCaretUpDown size={14} className="TokenUnlocks-filter-icon" /></th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="TokenUnlocks-pair">
                <div className={`TokenUnlocks-icon ${item.symbol.toLowerCase()}`}>{item.symbol[0]}</div>
                <div className="TokenUnlocks-pair-info">
                  <div className="TokenUnlocks-pair-info-title">
                    <span>{item.pair}</span>
                    <span>/ {item.symbol}</span>
                  </div>
                  <div className="TokenUnlocks-address">
                    <span>{item.address}</span>
                    <Copy size={14} className="TokenUnlocks-copy-icon" />
                  </div>
                </div>
              </td>
              <td>{item.tokensToUnlock}</td>
              <td>{item.currentPrice}</td>
              <td>{item.value}</td>
              <td>
                <div className="TokenUnlocks-next-unlock">
                  {item.nextUnlock}
                </div>
              </td>
              <td>
                <div className="TokenUnlocks-actions">
                  <button className="TokenUnlocks-action-btn"><FaBinoculars /></button>
                  <button className="TokenUnlocks-action-btn"><MdInsertChart /></button>
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

export default TokenUnlocks;