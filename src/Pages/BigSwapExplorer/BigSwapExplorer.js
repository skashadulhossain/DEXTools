import React from 'react';
import './BigSwapExplorer.css';
import Sidebar from '../../Components/Layouts/Admin-Layout/Admin-Sidebar/SideBar';
import { FaCircleInfo } from 'react-icons/fa6';
import { PiCaretUpDown } from 'react-icons/pi';
import { MdInsertChart } from 'react-icons/md';
import iconimg from './Image/ether-scan.png';
import tableimg1 from './Image/box img 1.jpg';
import tableimg2 from './Image/box img 2.png';
import tableimg3 from './Image/box img 3.png';
import tableimg4 from './Image/box img 4.png';
import tableimg5 from './Image/box img 5.png';
import tableimg6 from './Image/box img 6.png';
import tableimg7 from './Image/box img 7.png';
import tableimg8 from './Image/box img 8.jpg';
import tableimg9 from './Image/box img 9.jpg';
import tableimg10 from './Image/box img 10.png';
import Footer from '../../Components/Layouts/Admin-Layout/Admin-Footer/AdminFooter';
import PairNavigation from '../../Components/PairExplorer_Componets/PairNavigation/PairNavigation';

const tableData = [
  { pair: { name: 'VISTA', subtitle: '/ WETH', address: '0xfdd...2041', icon: tableimg1 }, executionTime: '2024-09-10 12:29:11', type: 'Buy', quantity: 771.49, totalETH: 5.88706, totalUSD: 13937.0, variation: 0.507, maker: '0xae2fc4...ae13' },
  { pair: { name: 'VISTA', subtitle: '/ WETH', address: '0xfdd...2041', icon: tableimg2 }, executionTime: '2024-09-10 12:29:11', type: 'Sell', quantity: 771.48, totalETH: 5.90196, totalUSD: 13691.8, variation: 0.507, maker: '0xae2fc4...ae13' },
  { pair: { name: 'ezETH', subtitle: '/ WETH', address: '0xbe8...0a63', icon: tableimg3 }, executionTime: '2024-09-10 12:28:47', type: 'Sell', quantity: 10.7087, totalETH: 10.8952, totalUSD: 25534.2, variation: 1.923, maker: '0xe83cd6...e2dc' },
  { pair: { name: 'wstETH', subtitle: '/ WETH', address: '0x109...7daa', icon: tableimg4 }, executionTime: '2024-09-10 12:27:59', type: 'Sell', quantity: 197.98, totalETH: 233.103, totalUSD: 546565, variation: 2.938, maker: '0x755bae...29f7' },
  { pair: { name: 'wstETH', subtitle: '/ WETH', address: '0x93d...f0bd', icon: tableimg5 }, executionTime: '2024-09-10 12:27:59', type: 'Sell', quantity: 35.6142, totalETH: 41.9321, totalUSD: 98318.5, variation: null, maker: '0x755bae...29f7' },
  { pair: { name: 'WETH', subtitle: '/ USDT', address: '0x11b...97f6', icon: tableimg6 }, executionTime: '2024-09-10 12:27:47', type: 'Buy', quantity: 4.3332, totalETH: 4.33327, totalUSD: 10146.0, variation: 0.041, maker: '0xd8ca3c...7499' },
  { pair: { name: 'VISTA', subtitle: '/ WETH', address: '0xfdd...2041', icon: tableimg7 }, executionTime: '2024-09-10 12:27:47', type: 'Sell', quantity: 765.84, totalETH: 5.9825, totalUSD: 13885.1, variation: 0.509, maker: '0xae2fc4...ae13' },
  { pair: { name: 'VISTA', subtitle: '/ WETH', address: '0xfdd...2041', icon: tableimg8 }, executionTime: '2024-09-10 12:27:47', type: 'Buy', quantity: 765.84, totalETH: 5.9222, totalUSD: 14027.1, variation: 0.506, maker: '0xae2fc4...ae13' },
  { pair: { name: 'INFI', subtitle: '/ USDT', address: '0xc7b...0e9b', icon: tableimg9 }, executionTime: '2024-09-10 12:27:23', type: 'Buy', quantity: 4.3109, totalETH: 4.31091, totalUSD: 10104.8, variation: 0.128, maker: '0xeca2e2...6456' },
  { pair: { name: 'BLAZE', subtitle: '/ USDT', address: '0xc7b...0e9b', icon: tableimg10 }, executionTime: '2024-09-11 12:27:23', type: 'Buy', quantity: 2.4509, totalETH: 1.41091, totalUSD: 46904.8, variation: 0.328, maker: '0xeca2e2...6546' },
];

const BigSwapExplorer = () => {
  return (
    <Sidebar>
    <PairNavigation />
    <div className="BigSwapContainer">
      <h1 className="BigSwapTitle">BIG SWAP EXPLORER</h1>
      <div className="BigSwapControls">
        <p className="BigSwapDescription">
          Shows latest big swaps in <span className="BigSwapEthereumText">Ethereum</span> with useful information
        </p>
        <div className="BigSwapFilters">
          <label className="BigSwapToggle">
            <input type="checkbox" />
            <span className="BigSwapToggleSlider"></span>
            Hide stable-native pairs swaps
          </label>
          <div className="BigSwapInfoIcon"><FaCircleInfo /></div>
          <input type="text" className="BigSwapSearch" placeholder="Find by symbol, name, token contract, pair address or maker" />
          <input type="text" className="BigSwapAmount" placeholder="Enter a USD amount higher than 10000" />
        </div>
      </div>
      <div className="BigSwapTableContainer">
        <table className="BigSwapTable">
          <thead>
            <tr>
              <th>Pair <PiCaretUpDown className='BigSwapTable-icon' /></th>
              <th>Execution time <PiCaretUpDown className='BigSwapTable-icon' /></th>
              <th>Type <PiCaretUpDown className='BigSwapTable-icon' /></th>
              <th>Quantity <PiCaretUpDown className='BigSwapTable-icon' /></th>
              <th>Total ETH <PiCaretUpDown className='BigSwapTable-icon' /></th>
              <th>Total USD <PiCaretUpDown className='BigSwapTable-icon' /></th>
              <th>Variation <PiCaretUpDown className='BigSwapTable-icon' /></th>
              <th>Maker <PiCaretUpDown className='BigSwapTable-icon' /></th>
              <th>Actions <PiCaretUpDown className='BigSwapTable-icon' /></th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>
                  <div className="BigSwapPair">
                    <img src={row.pair.icon} alt={row.pair.name} />
                    <div>
                      <div className="BigSwapPairName">
                        <span>{row.pair.name}</span>
                        <span>{row.pair.subtitle}</span>
                      </div>
                      <span className="BigSwapContractAddress">{row.pair.address}</span>
                    </div>
                  </div>
                </td>
                <td>{row.executionTime}</td>
                <td><span className={`BigSwapType${row.type}`}>{row.type}</span></td>
                <td>{row.quantity.toFixed(2)}</td>
                <td>{row.totalETH.toFixed(5)}</td>
                <td>${row.totalUSD.toLocaleString(undefined, {minimumFractionDigits: 1, maximumFractionDigits: 1})}</td>
                <td><span className="BigSwapVariation">{row.variation === null ? 'Unknown' : `${row.variation.toFixed(3)}%`}</span></td>
                <td><span className="BigSwapMaker">{row.maker}</span></td>
                <td>
                  <div className="BigSwapActionButton-box">
                    <MdInsertChart className="BigSwapActionButton" size={22} />
                    <img src={iconimg} alt="" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <div className="BigSwapExplorer-footer">
      <Footer />
    </div>
    </Sidebar>
   
  );
};

export default BigSwapExplorer;