import React from 'react';
import './Exchanges.css';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi'; // Replace FiArrowUpDown with FiArrowUp and FiArrowDown
import { FaExclamation } from 'react-icons/fa';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';

const Exchanges = () => {
  const exchanges = [
    { name: 'Raydium', logo: 'raydium.png', contract: '675kp...1mp8', pools: '11.29K', volume: '$232.13M', swaps: '8.03M' },
    { name: 'Pump.fun', logo: 'pump-fun.png', contract: '6ef8r...wf6p', pools: '8.15K', volume: '$45.66M', swaps: '1.57M' },
    { name: 'Uniswap V2', logo: 'uniswap.png', contract: '0x890...8ec6', pools: '4.44K', volume: '$229.09M', swaps: '820.58K' },
    { name: 'PancakeSwap V2', logo: 'pancakeswap.png', contract: '0xca1...0c73', pools: '16.39K', volume: '$6.90B', swaps: '621.94K' },
    { name: 'Meteora', logo: 'meteora.png', contract: 'eo7wj...5uab', pools: '1.57K', volume: '$15.64B', swaps: '453.79K' },
    { name: 'Orca Whirlpool', logo: 'orca.png', contract: 'whirl...tycc', pools: '1.61K', volume: '$206.48M', swaps: '414.20K' },
    { name: 'Raydium CPMM', logo: 'raydium.png', contract: 'cpmmo...kp1c', pools: '620', volume: '$6.57M', swaps: '405.53K' },
    { name: 'Raydium CLMM', logo: 'raydium.png', contract: 'cammc...rwqk', pools: '554', volume: '$113.92M', swaps: '373.07K' },
    { name: 'Meteora DLMM', logo: 'meteora.png', contract: 'lbuzk...pwxo', pools: '1.14K', volume: '$71.72M', swaps: '343.51K' },
  ];

  return (
    <div className="Exchanges-container">
      <table className="Exchanges-table">
        <thead>
          <tr>
            <th>
              Exchange <FaExclamation className="Exchanges-icon" />
            </th>
            <th>Factory Contract</th>
            <th>
              Pools <FiArrowUp className="Exchanges-icon" />
              <FiArrowDown className="Exchanges-icon" />
            </th>
            <th>
              Volume 24h <FiArrowUp className="Exchanges-icon" />
              <FiArrowDown className="Exchanges-icon" />
            </th>
            <th>
              Swaps 24h <FiArrowUp className="Exchanges-icon" />
              <FiArrowDown className="Exchanges-icon" />
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
                  <HiOutlineArrowUpRight />
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
