import React from 'react';
import './PairTradeHistory.css';

const PairTradeHistory = () => {
  const trades = [
    { date: 'Sep 9 07:47:11', type: 'buy', price: 0.4146, total: 1154.13, icon: '🐬', priceEth: 0.0001797, amountDext: 2783.42, amountWeth: 0.5000, maker: '0x00d...bde7', others: ['👥', '🔄', '📊', '2'] },
    { date: 'Sep 9 05:54:35', type: 'buy', price: 0.4120, total: 412.89, icon: '🦊', priceEth: 0.0001784, amountDext: 1002.04, amountWeth: 0.1790, maker: '0xfb6...4cba', others: ['👥', '🔄', '📊', '1'] },
    { date: 'Sep 9 05:51:59', type: 'buy', price: 0.4113, total: 622.31, icon: '🦊', priceEth: 0.0001779, amountDext: 1512.98, amountWeth: 0.2695, maker: '0x0da...d4e4', others: ['🔄', '📊', '1'] },
    { date: 'Sep 9 04:15:35', type: 'sell', price: 0.4078, total: 815.62, icon: '🦊', priceEth: 0.0001772, amountDext: 1999.75, amountWeth: 0.3543, maker: '0x008...2e87', others: ['🔄', '📊', '14'] },
    { date: 'Sep 9 04:15:35', type: 'buy', price: 0.4100, total: 342.84, icon: '🦊', priceEth: 0.0001781, amountDext: 836.13, amountWeth: 0.1492, maker: '0xa28...0816', others: ['👥', '🔄', '📊', '2'] },
    { date: 'Sep 9 03:51:47', type: 'sell', price: 0.4098, total: 2294.82, icon: '🐬', priceEth: 0.0001777, amountDext: 5599.02, amountWeth: 0.9999, maker: '0xc5d...7e8e', others: ['👥', '🔄', '📊', '+99'] },
    { date: 'Sep 9 03:43:23', type: 'buy', price: 0.4114, total: 602.26, icon: '🦊', priceEth: 0.0001804, amountDext: 1463.74, amountWeth: 0.2644, maker: '0x3e9...9bc1', others: ['👥', '🔄', '📊', '5'] },
    { date: 'Sep 9 01:34:47', type: 'sell', price: 0.4083, total: 483.41, icon: '🦊', priceEth: 0.0001797, amountDext: 1183.89, amountWeth: 0.2125, maker: '0x4c...c224', others: ['👥', '🔄', '📊', '8'] },
    { date: 'Sep 9 01:34:35', type: 'buy', price: 0.4096, total: 1142.89, icon: '🐬', priceEth: 0.0001803, amountDext: 2790.10, amountWeth: 0.5027, maker: '0xab9...c2c3', others: ['👥', '🔄', '📊', '+99'] },
    { date: 'Sep 9 01:29:59', type: 'buy', price: 0.4067, total: 2993.50, icon: '🐬', priceEth: 0.0001789, amountDext: 7360.00, amountWeth: 1.31, maker: '0xab9...c2c3', others: ['👥', '🔄', '📊', '+99'] },
    { date: 'Sep 9 01:24:59', type: 'buy', price: 0.3991, total: 756.69, icon: '🦊', priceEth: 0.0001755, amountDext: 1895.86, amountWeth: 0.3328, maker: '0x013...e6e5', others: ['🔄', '📊', '1'] },
    { date: 'Sep 9 01:24:47', type: 'sell', price: 0.3971, total: 833.77, icon: '🦊', priceEth: 0.0001746, amountDext: 2099.52, amountWeth: 0.3665, maker: '0xc5d...7e8e', others: ['👥', '🔄', '📊', '+99'] },
    { date: 'Sep 9 01:24:35', type: 'buy', price: 0.3993, total: 2175.25, icon: '🐬', priceEth: 0.0001755, amountDext: 5447.13, amountWeth: 0.9524, maker: '0xc12...38a7', others: ['🔄', '📊', '1'] },
    { date: 'Sep 9 01:24:35', type: 'sell', price: 0.3936, total: 3382.70, icon: '🐺', priceEth: 0.0001730, amountDext: 8593.82, amountWeth: 1.50, maker: '0xc5d...7e8e', others: ['👥', '🔄', '📊', '+99'] },
    { date: 'Sep 9 01:22:11', type: 'sell', price: 0.4025, total: 1932.25, icon: '🐬', priceEth: 0.0001770, amountDext: 4800.00, amountWeth: 0.8527, maker: '0x30b...7cae', others: ['👥', '🔄', '📊', '85'] },
    { date: 'Sep 9 01:20:23', type: 'sell', price: 0.4076, total: 1588.29, icon: '🐬', priceEth: 0.0001793, amountDext: 3896.09, amountWeth: 0.7002, maker: '0x678...1e20', others: ['👥', '🔄', '📊', '2'] },
    { date: 'Sep 9 01:20:23', type: 'buy', price: 0.4119, total: 6141.10, icon: '🐺', priceEth: 0.0001812, amountDext: 14907.40, amountWeth: 2.66, maker: '0xab9...c2c3', others: ['👥', '🔄', '📊', '+99'] },
    { date: 'Sep 9 01:19:59', type: 'buy', price: 0.3958, total: 962.52, icon: '🦊', priceEth: 0.0001741, amountDext: 2431.50, amountWeth: 0.4233, maker: '0xab9...c2c3', others: ['👥', '🔄', '📊', '+99'] },
    { date: 'Sep 9 01:01:11', type: 'buy', price: 0.3930, total: 394.02, icon: '🦊', priceEth: 0.0001730, amountDext: 1002.50, amountWeth: 0.1737, maker: '0x903...3905', others: ['🔄', '📊', '2'] },
  ];

  return (
    <div className="PairTradeHistory-container">
      <div className="PairTradeHistory-tableWrapper">
        <table className="PairTradeHistory-table">
          <thead>
            <tr>
              <th>Date <span className="PairTradeHistory-filter">▼</span></th>
              <th>Price <span className="PairTradeHistory-filter">▼</span></th>
              <th>Total <span className="PairTradeHistory-filter">▼</span></th>
              <th>Price ETH <span className="PairTradeHistory-filter">▼</span></th>
              <th>Amount DEXT <span className="PairTradeHistory-filter">▼</span></th>
              <th>Amount WETH <span className="PairTradeHistory-filter">▼</span></th>
              <th>Maker <span className="PairTradeHistory-filter">▼</span></th>
              <th>Others</th>
            </tr>
          </thead>
          <tbody>
            {trades.map((trade, index) => (
              <tr key={index} className={`PairTradeHistory-row ${trade.type}`}>
                <td>{trade.date}</td>
                <td className="PairTradeHistory-price">${trade.price.toFixed(4)}</td>
                <td>${trade.total.toFixed(2)} <span className="PairTradeHistory-icon">{trade.icon}</span></td>
                <td>{trade.priceEth.toFixed(7)}</td>
                <td>{trade.amountDext.toFixed(2)}</td>
                <td>{trade.amountWeth.toFixed(4)}</td>
                <td>{trade.maker}</td>
                <td>
                  <div className="PairTradeHistory-action-box">
                    {trade.others.map((icon, i) => (
                      <span key={i} className="PairTradeHistory-icon">{icon}</span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PairTradeHistory;