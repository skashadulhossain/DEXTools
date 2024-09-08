// HotPairs.jsx
import React from 'react';
import './HotPairs.css';

const cryptoData = [
  { id: 1, icon: '/img/neiro.png', pair: 'NEIRO / WETH', address: '0x388...62a3', price: 0.1556, change: 0.23, dextScore: 99, audits: 0, created: '1 month', volume: '5.17M', swaps: 3267, volatility: 2.43, liquidity: '2.12M', tmCap: '156.63M', dex: '🦄' },
  { id: 2, icon: '/img/doge.png', pair: 'DOGE / WETH', address: '0x308...e2a6', price: 0.003675, change: 34.76, dextScore: 99, audits: 3, created: '19 days', volume: '5.58M', swaps: 7263, volatility: 18.39, liquidity: '303.83K', tmCap: '3.79M', dex: '🦄' },
  { id: 3, icon: '/img/blaze.png', pair: 'BLAZE / TITANX', address: '0x4d3...85d1', price: 2.2735, change: 7.76, dextScore: 99, audits: 2, created: '2 months', volume: '9.71M', swaps: 263, volatility: 34.33, liquidity: '283.00K', tmCap: '25.00M', dex: '🦄' },
  { id: 4, icon: '/img/vista.png', pair: 'VISTA / WETH', address: '0xfdd...2041', price: 22.7611, change: 1.96, dextScore: 98, audits: 1, created: '7 days', volume: '8.92M', swaps: 1751, volatility: 2.88, liquidity: '3.09M', tmCap: '22.16M', dex: '💠' },
  { id: 5, icon: '/img/neiro.png', pair: 'Neiro / WETH', address: '0xc55...fd46', price: 0.00005311, change: -29.16, dextScore: 99, audits: 0, created: '1 month', volume: '7.86M', swaps: 4824, volatility: 4.83, liquidity: '1.62M', tmCap: '22.42M', dex: '🦄' },
  // ... add more data as needed
];

const HotPairs = () => {
  return (
    <div className="crypto-table-container">
      <table className="crypto-table">
        <thead>
          <tr>
            <th className="pair-header">Pair <span className="sort-icon">⇅</span></th>
            <th>Price <span className="sort-icon">⇅</span></th>
            <th>% 24h <span className="sort-icon">⇅</span></th>
            <th>DEXTscore <span className="sort-icon">⇅</span></th>
            <th>Audits <span className="sort-icon">⇅</span></th>
            <th>Created <span className="sort-icon">⇅</span></th>
            <th>Volume <span className="sort-icon">⇅</span></th>
            <th>Swaps <span className="sort-icon">⇅</span></th>
            <th>Volatility <span className="sort-icon">⇅</span></th>
            <th>Liquidity <span className="sort-icon">⇅</span></th>
            <th>T.M.Cap. <span className="sort-icon">⇅</span></th>
            <th>DEX <span className="sort-icon">⇅</span></th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((item, index) => (
            <tr key={item.id}>
              <td className="pair-cell">
                <span className="pair-number">#{index + 1}</span>
                <span className={`sort-arrow ${index % 2 === 0 ? 'up' : 'down'}`}>
                  {index % 2 === 0 ? '▲' : '▼'}
                </span>
                <img src={item.icon} alt={item.pair} className="pair-icon" />
                <div className="pair-info">
                  <span className="pair-name">{item.pair}</span>
                  <span className="pair-address">{item.address} <span className="copy-icon">📋</span></span>
                </div>
              </td>
              <td>${item.price.toFixed(8)}</td>
              <td className={`change-cell ${item.change >= 0 ? 'positive' : 'negative'}`}>
                {item.change >= 0 ? '▲' : '▼'} {Math.abs(item.change)}%
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
              <td className="actions-cell">
                <span className="action-icon">👤</span>
                <span className="action-icon">📊</span>
                <span className="action-icon">⭐</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HotPairs;