import React from 'react';
import './TokenUnlocks.css';
import { Copy, Binoculars, Trash2, Clock, Filter } from 'lucide-react';
import TokenUnlocksTop from './TokenUnlocksTop/TokenUnlocksTop';
import { PiCaretUpDown } from 'react-icons/pi';

const TokenUnlocks = () => {
  const data = [
    { pair: 'Dogz', symbol: 'Dogz', address: '0x8f6...4d09', tokensToUnlock: '30.00M (<1%)', currentPrice: '$0.5754', value: '$1,726.28', nextUnlock: '03:07:48' },
    { pair: 'BLOOM', symbol: 'BLOOM', address: '0x6c4...b1c4', tokensToUnlock: '2.25K (<1%)', currentPrice: '$174.73', value: '$394,607', nextUnlock: '03:22:48' },
    { pair: 'BLOOM', symbol: 'BLOOM', address: '0x6c4...b1c4', tokensToUnlock: '10.00K (<1%)', currentPrice: '$174.73', value: '$1,747,305', nextUnlock: '03:22:48' },
    { pair: 'BLOOM', symbol: 'BLOOM', address: '0x6c4...b1c4', tokensToUnlock: '2.24K (<1%)', currentPrice: '$174.73', value: '$392,270', nextUnlock: '03:22:48' },
    { pair: 'BLOOM', symbol: 'BLOOM', address: '0x6c4...b1c4', tokensToUnlock: '2.10K (<1%)', currentPrice: '$174.73', value: '$366,963', nextUnlock: '03:22:48' },
    { pair: 'BLOOM', symbol: 'BLOOM', address: '0x6c4...b1c4', tokensToUnlock: '2.12K (<1%)', currentPrice: '$174.73', value: '$371,224', nextUnlock: '03:22:48' },
    { pair: 'BLOOM', symbol: 'BLOOM', address: '0x6c4...b1c4', tokensToUnlock: '2.20K (<1%)', currentPrice: '$174.73', value: '$384,407', nextUnlock: '03:22:48' },
    { pair: 'PEPE DAO Coin', symbol: 'PEPEDAO', address: '0xfed...08ca', tokensToUnlock: '14.02T (<1%)', currentPrice: '$0.1239', value: '$1,737.79', nextUnlock: '11:53:48' },
  ];

  return (
    <>
       <TokenUnlocksTop/>

       <div className="TokenUnlocks-container">
      <table className="TokenUnlocks-table">
        <thead>
          <tr>
            <th>Pair <PiCaretUpDown  size={14} className="TokenUnlocks-filter-icon" /></th>
            <th>Tokens To Unlock <PiCaretUpDown  size={14} className="TokenUnlocks-filter-icon" /></th>
            <th>Current Price <PiCaretUpDown  size={14} className="TokenUnlocks-filter-icon" /></th>
            <th>Value <PiCaretUpDown  size={14} className="TokenUnlocks-filter-icon" /></th>
            <th>Next Unlock <PiCaretUpDown  size={14} className="TokenUnlocks-filter-icon" /></th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="TokenUnlocks-pair">
                <div className={`TokenUnlocks-icon ${item.symbol.toLowerCase()}`}>{item.symbol[0]}</div>
                <div className="TokenUnlocks-pair-info">
                  <span>{item.pair}</span>
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
                  <Clock size={14} className="TokenUnlocks-clock-icon" />
                  {item.nextUnlock}
                </div>
              </td>
              <td>
                <div className="TokenUnlocks-actions">
                  <button className="TokenUnlocks-action-btn"><Binoculars size={18} /></button>
                  <button className="TokenUnlocks-action-btn"><Trash2 size={18} /></button>
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