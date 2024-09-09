import React from 'react';
import './Holders.css';
import PairAccordion from '../../PairAccordion/PairAccordion';

const Holders = () => {
  const holderData = [
    { address: '0x67e...6305', supply: 30.58, amount: '39.00M', value: '$15.92M' },
    { address: '0x469...73c3', supply: 4.61, amount: '5.88M', value: '$2.40M' },
    { address: '0x997...b70f', supply: 3.98, amount: '5.07M', value: '$2.07M' },
    { address: '0xa88...ccda', supply: 2.41, amount: '3.07M', value: '$1.25M' },
    { address: '0x533...9648', supply: 2.29, amount: '2.92M', value: '$1.19M' },
    { address: '0x171...98ea', supply: 1.6, amount: '2.04M', value: '$833.37K' },
    { address: '0x477...f7a1', supply: 1.34, amount: '1.70M', value: '$695.53K' },
    { address: '0x96c...b5f3', supply: 0.96, amount: '1.22M', value: '$501.53K' },
    { address: '0x6ae...182b', supply: 0.93, amount: '1.18M', value: '$485.62K' },
    { address: '0xd42...fb77', supply: 0.7, amount: '886.72K', value: '$362.13K' },
  ];

  return (
    <>
        <div className="Holders-container">
      <div className="Holders-header">
        <div className="Holders-title">
          <span className="Holders-icon">🕒</span>
          TOKEN HOLDERS CHART
        </div>
        <div className="Holders-total">Total Holders: 19652</div>
      </div>
      <table className="Holders-table">
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
                <span className="Holders-address">{holder.address}</span>
                <span className="Holders-copy">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 9H11C9.89543 9 9 9.89543 9 11V20C9 21.1046 9.89543 22 11 22H20C21.1046 22 22 21.1046 22 20V11C22 9.89543 21.1046 9 20 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </td>
              <td>{holder.supply}%</td>
              <td>
                <div className="Holders-bar-container">
                  <div className="Holders-bar" style={{width: `${holder.supply}%`}}></div>
                </div>
              </td>
              <td>{holder.amount}</td>
              <td>{holder.value}</td>
            </tr>
          ))}
          <tr className="Holders-remaining">
            <td>Remaining Holders</td>
            <td>50.6%</td>
            <td>
              <div className="Holders-bar-container">
                <div className="Holders-bar" style={{width: '50.6%'}}></div>
              </div>
            </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <PairAccordion/>
    </>

  );
};

export default Holders;