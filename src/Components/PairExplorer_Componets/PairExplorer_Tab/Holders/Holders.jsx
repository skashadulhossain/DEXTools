import React from 'react';
import './Holders.css';
import { Copy } from 'lucide-react';
import { GrPieChart } from 'react-icons/gr';

const TokenHoldersChart = () => {
  const holderData = [
    { address: '0x67e...6305', supply: 30.58, amount: '39.00M', value: '$16.64M' },
    { address: '0x469...73c3', supply: 4.61, amount: '5.88M', value: '$2.51M' },
    { address: '0x997...b70f', supply: 4.06, amount: '5.18M', value: '$2.21M' },
    { address: '0xa88...ccda', supply: 2.41, amount: '3.07M', value: '$1.31M' },
    { address: '0x533...9648', supply: 2.29, amount: '2.92M', value: '$1.24M' },
    { address: '0x171...98ea', supply: 1.6, amount: '2.04M', value: '$871.03K' },
    { address: '0x477...f7a1', supply: 1.34, amount: '1.70M', value: '$726.96K' },
    { address: '0x96c...b5f3', supply: 0.96, amount: '1.22M', value: '$524.20K' },
    { address: '0x6ae...182b', supply: 0.93, amount: '1.18M', value: '$507.57K' },
    { address: '0xd42...fb77', supply: 0.7, amount: '886.72K', value: '$378.49K' },
  ];

  return (
    <div className="token-holders-chart">
      <div className="chart-header">
        <div className="chart-title">
          <GrPieChart />
          TOKEN HOLDERS CHART
        </div>
        <div className="total-holders">Total Holders: 19667</div>
      </div>
      <table className="holders-table">
        <thead>
          <tr>
            <th>Address</th>
            <th>Supply</th>
            <th></th>
            <th>Amount</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {holderData.map((holder, index) => (
            <tr key={index}>
              <td>
                <span className="address">{holder.address}</span>
                <Copy size={14} className="copy-icon" />
              </td>
              <td>{holder.supply}%</td>
              <td className="bar-cell">
                <div className="progress-bar">
                  <div className="progress" style={{width: `${holder.supply}%`}}></div>
                </div>
              </td>
              <td>{holder.amount}</td>
              <td>{holder.value}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Remaining Holders</td>
            <td>50.52%</td>
            <td className="bar-cell">
              <div className="progress-bar">
                <div className="progress remaining" style={{width: '50.52%'}}></div>
              </div>
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default TokenHoldersChart;