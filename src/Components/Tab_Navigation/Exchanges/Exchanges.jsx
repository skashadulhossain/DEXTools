import React from 'react';
import './Exchanges.css';
import { PiCaretUpDown } from 'react-icons/pi';
import { FaCircleInfo, FaShare } from 'react-icons/fa6';
import ppimg1 from './Image/download.png';
import ppimg2 from './Image/pumpfun.webp';
import ppimg3 from './Image/orca.svg';
import ppimg4 from './Image/Meteora.webp';
import ppimg5 from './Image/phoenix.webp';
import ppimg6 from './Image/lifinity.webp';
import ppimg7 from './Image/Fluxbeam.webp';
import ppimg8 from './Image/dooar.webp';
import ppimg9 from './Image/download (1).png';
import ppimg10 from './Image/download (2).png';

const Exchanges = () => {
  const exchanges = [
    { name: 'Raydium', logo: ppimg1, contract: '675kp...1mp8', pools: '13.19K', volume: '$310.52M', swaps: '11.20M' },
    { name: 'Pump.fun', logo: ppimg2, contract: '6ef8r...wf6p', pools: '8.15K', volume: '$45.66M', swaps: '1.57M' },
    { name: 'Orca Whirlpool', logo: ppimg3, contract: '0x890...8ec6', pools: '4.44K', volume: '$229.09M', swaps: '820.58K' },
    { name: 'Meteora', logo: ppimg4, contract: '0xca1...0c73', pools: '16.39K', volume: '$6.90B', swaps: '621.94K' },
    { name: 'Phoenix', logo: ppimg5, contract: 'eo7wj...5uab', pools: '1.57K', volume: '$15.64B', swaps: '453.79K' },
    { name: 'Lifinity V2', logo: ppimg6, contract: 'whirl...tycc', pools: '1.61K', volume: '$206.48M', swaps: '414.20K' },
    { name: 'Fluxbeam', logo: ppimg7, contract: 'cpmmo...kp1c', pools: '620', volume: '$6.57M', swaps: '405.53K' },
    { name: 'Dooar', logo: ppimg8, contract: 'cammc...rwqk', pools: '554', volume: '$113.92M', swaps: '373.07K' },
    { name: 'Saber', logo: ppimg9, contract: 'lbuzk...pwxo', pools: '1.14K', volume: '$71.72M', swaps: '343.51K' },
    { name: 'Aldrin V2', logo: ppimg10, contract: 'lbuzk...pwxo', pools: '1.14K', volume: '$71.72M', swaps: '343.51K' },
  ];

  return (
    <div className="Exchanges-container">
      <table className="Exchanges-table">
        <thead>
          <tr>
            <th>
              Exchange <PiCaretUpDown className="Exchanges-icon" />
            </th>
            <th>Factory Contract</th>
            <th>
              Pools <PiCaretUpDown className="Exchanges-icon" />
            </th>
            <th>
              Volume 24h <FaCircleInfo className="Exchanges-icon" />
              <PiCaretUpDown className="Exchanges-icon" />
            </th>
            <th>
              Swaps 24h <FaCircleInfo className="Exchanges-icon" />
              <PiCaretUpDown className="Exchanges-icon" />
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exchanges.map((exchange, index) => (
            <tr key={index}>
              <td className="Exchanges-name">
                <img src={exchange.logo} alt={exchange.name} className="Exchanges-logo" />
                {exchange.name}
              </td>
              <td>{exchange.contract}</td>
              <td>{exchange.pools}</td>
              <td>{exchange.volume}</td>
              <td>{exchange.swaps}</td>
              <td>
                <button className="Exchanges-action-button">
                  <FaShare size={14} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Exchanges;
