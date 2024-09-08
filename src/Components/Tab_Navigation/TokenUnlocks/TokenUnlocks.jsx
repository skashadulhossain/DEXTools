import React from 'react';
import './TokenUnlocks.css';
import TokenUnlocksTop from './TokenUnlocksTop/TokenUnlocksTop';



const TokenUnlocks = () => {
  const data = [
    { pair: 'Dogz', symbol: 'Dogz', address: '0x8f6...4d09', tokensToUnlock: '30.00M (<1%)', currentPrice: '$0.5754', value: '$1,726.28', nextUnlock: '05:26:20' },
    { pair: 'BLOOM', symbol: 'BLOOM', address: '0x6c4...b1c4', tokensToUnlock: '2.25K (<1%)', currentPrice: '$174.73', value: '$394,607', nextUnlock: '05:41:20' },
    { pair: 'BLOOM', symbol: 'BLOOM', address: '0x6c4...b1c4', tokensToUnlock: '10.00K (<1%)', currentPrice: '$174.73', value: '$1,747,305', nextUnlock: '05:41:20' },
    { pair: 'BLOOM', symbol: 'BLOOM', address: '0x6c4...b1c4', tokensToUnlock: '2.24K (<1%)', currentPrice: '$174.73', value: '$392,270', nextUnlock: '05:41:20' },
    { pair: 'BLOOM', symbol: 'BLOOM', address: '0x6c4...b1c4', tokensToUnlock: '2.20K (<1%)', currentPrice: '$174.73', value: '$388,407', nextUnlock: '05:41:20' },
    { pair: 'BLOOM', symbol: 'BLOOM', address: '0x6c4...b1c4', tokensToUnlock: '2.12K (<1%)', currentPrice: '$174.73', value: '$371,224', nextUnlock: '05:41:20' },
    { pair: 'BLOOM', symbol: 'BLOOM', address: '0x6c4...b1c4', tokensToUnlock: '2.10K (<1%)', currentPrice: '$174.73', value: '$366,963', nextUnlock: '05:41:20' },
    { pair: 'PEPE DAO Coin', symbol: 'PEPEDAO', address: '0xfed...08ca', tokensToUnlock: '14.02T (<1%)', currentPrice: '$0.1239', value: '$1,737.79', nextUnlock: '14:12:20' },
  ];

  return (
    <>
    <TokenUnlocksTop/>
    <div className="TokenUnlocks-container">
      <table className="TokenUnlocks-table">
        <thead>
          <tr>
            <th>Pair</th>
            <th>Tokens To Unlock</th>
            <th>Current Price</th>
            <th>Value</th>
            <th>Next Unlock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="TokenUnlocks-pair">
                <div className="TokenUnlocks-icon">{item.symbol[0]}</div>
                <div className="TokenUnlocks-pair-info">
                  <span>{item.pair}</span>
                  <span className="TokenUnlocks-address">{item.address}</span>
                </div>
              </td>
              <td>{item.tokensToUnlock}</td>
              <td>{item.currentPrice}</td>
              <td>{item.value}</td>
              <td>
                <div className="TokenUnlocks-next-unlock">{item.nextUnlock}</div>
              </td>
              <td>
                <div className="TokenUnlocks-actions">
                  <button className="TokenUnlocks-action-btn">👀</button>
                  <button className="TokenUnlocks-action-btn">🗑️</button>
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