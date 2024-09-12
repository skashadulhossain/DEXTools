import React from 'react';
import './TopTraders.css';
import { FiCopy } from 'react-icons/fi';
import { FaCircleInfo, FaFilter } from 'react-icons/fa6';

const TopTraders = () => {
  const traders = [
    { id: 1, maker: '0xc5d...7e8e', total: '576.39K', pnl: '576.39K', speed: 'fast', unrealized: '-', externalPnl: '576.39K', bought: '-', sold: '576.39K', balance: '991.86K / 157 txns', txns: 'Unknown' },
    { id: 2, maker: '0x407...064c', total: '412.50K', pnl: '412.50K', speed: 'fast', unrealized: '-', externalPnl: '412.50K', bought: '-', sold: '412.50K', balance: '613.27K / 33 txns', txns: 'Unknown' },
    { id: 3, maker: '0x3c7...7efd', total: '176.40K', pnl: '176.40K', speed: 'fast', unrealized: '-', externalPnl: '176.40K', bought: '-', sold: '176.40K', balance: '299.44K / 7 txns', txns: 'Unknown' },
    { id: 4, maker: '0xd93...0946', total: '150.85K', pnl: '150.85K', speed: 'medium', unrealized: '-', externalPnl: '150.85K', bought: '-', sold: '150.85K', balance: '243.33K / 14 txns', txns: 'Unknown' },
    { id: 5, maker: '0x832...865a', total: '120.21K', pnl: '120.21K', speed: 'fast', unrealized: '-', externalPnl: '120.21K', bought: '-', sold: '120.21K', balance: '200.00K / 1 txns', txns: 'Unknown' },
    { id: 6, maker: '0x433...caeb', total: '114.63K', pnl: '114.63K', speed: 'medium', unrealized: '-', externalPnl: '115.08K', bought: '4.90K', sold: '119.54K', balance: '8.22K / 5 txns\n220.43K / 7 txns', txns: 'Unknown' },
    { id: 7, maker: '0x05e...65d4', total: '108.34K', pnl: '108.34K', speed: 'fast', unrealized: '-', externalPnl: '109.70K', bought: '16.05K', sold: '124.40K', balance: '34.27K / 6 txns\n290.00K / 32 txns', txns: 'Unknown' },
    { id: 8, maker: '0xaf1...d2fa', total: '92.62K', pnl: '92.62K', speed: 'fast', unrealized: '-', externalPnl: '92.62K', bought: '-', sold: '92.62K', balance: '157.88K / 17 txns', txns: 'Unknown' },
    { id: 9, maker: '0xd32...6eff', total: '85.56K', pnl: '85.56K', speed: 'fast', unrealized: '-', externalPnl: '85.56K', bought: '-', sold: '85.56K', balance: '145.82K / 1 txns', txns: 'Unknown' },
    { id: 10, maker: '0xb72...acf8', total: '80.24K', pnl: '80.24K', speed: 'slow', unrealized: '-', externalPnl: '80.24K', bought: '-', sold: '80.24K', balance: '137.22K / 6 txns', txns: 'Unknown' },
    { id: 11, maker: '0x0a6...3586', total: '77.85K', pnl: '77.85K', speed: 'fast', unrealized: '-', externalPnl: '77.85K', bought: '-', sold: '77.85K', balance: '131.76K / 2 txns', txns: 'Unknown' },
    { id: 12, maker: '0x16c...ba1b', total: '70.89K', pnl: '70.89K', speed: 'medium', unrealized: '-', externalPnl: '71.12K', bought: '5.15K', sold: '76.05K', balance: '8.57K / 5 txns\n132.43K / 8 txns', txns: 'Unknown' },
    { id: 13, maker: '0xdeb...a545', total: '69.23K', pnl: '69.23K', speed: 'fast', unrealized: '-', externalPnl: '69.23K', bought: '-', sold: '69.23K', balance: '117.86K / 1 txns', txns: 'Unknown' },
  ];

  return (
    <div className="TopTraders-container">
      <div className="TopTraders-header">
        <span>Total</span>
        <label className="TopTraders-switch">
          <input type="checkbox" />
          <span className="TopTraders-slider"></span>
        </label>
        <span>PNL</span>
      </div>
      <table className="TopTraders-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Maker</th>
            <th>Total <span className="TopTraders-info"><FaCircleInfo /></span></th>
            <th>PNL <span className="TopTraders-info"><FaCircleInfo /></span></th>
            <th>Speed</th>
            <th>Unrealized <span className="TopTraders-info"><FaCircleInfo /></span></th>
            <th>External PNL <span className="TopTraders-info"><FaCircleInfo /></span></th>
            <th>Bought</th>
            <th>Sold</th>
            <th>Balance</th>
            <th>TXNS</th>
          </tr>
        </thead>
        <tbody>
          {traders.map((trader) => (
            <tr key={trader.id} className="TopTraders-row">
              <td>{trader.id}</td>
              <td>
                <div className="TopTraders-copy-box">
                  <span>{trader.maker}</span>
                  <FiCopy className='TopTraders-copy' />
                </div>
              </td>
              <td className="TopTraders-green">${trader.total}</td>
              <td className="TopTraders-green">${trader.pnl}</td>
              <td>
                {trader.speed === 'fast' && <span className="TopTraders-speed TopTraders-fast">●</span>}
                {trader.speed === 'medium' && <span className="TopTraders-speed TopTraders-medium">●</span>}
                {trader.speed === 'slow' && <span className="TopTraders-speed TopTraders-slow">●</span>}
              </td>
              <td>{trader.unrealized}</td>
              <td className="TopTraders-yellow">${trader.externalPnl}</td>
              <td className="TopTraders-green">{trader.bought !== '-' && '$'}{trader.bought}</td>
              <td>
                <div className="TopTraders-td-box">
                  <span className="TopTraders-red">${trader.sold}</span>
                  <span className="TopTraders-balance">{trader.balance}
                  </span>
                </div>
              </td>
              <td>
                <span className="TopTraders-unknown">
                  {trader.txns}
                  <FaCircleInfo size={14} />
                </span>
              </td>
              <td><FaFilter size={14} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopTraders;