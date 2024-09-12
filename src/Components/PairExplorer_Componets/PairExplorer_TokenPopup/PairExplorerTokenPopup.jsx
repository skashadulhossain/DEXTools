import React from 'react';
import './PairExplorerTokenPopup.css';
import { IoIosSearch, IoMdClose } from 'react-icons/io';
import { FiCopy } from 'react-icons/fi';
import boximg1 from './Image/ether.png';
import boximg2 from './Image/logo.png';
import boximg3 from './Image/img 3.png';
import boximg4 from './Image/img 4.png';
import boximg5 from './Image/img 5.png';
import boximg6 from './Image/img 6.png';
import boximg7 from './Image/img 7.png';

const TokenPopup = [
    { image: boximg1, title: 'ETH (output token)', subtitle: 'Ether', address: '0xeeee...eeee' },
    { image: boximg2, title: 'DEXT', subtitle: 'DEXTools', address: '0xfb7...c75a' },
    { image: boximg3, title: 'USDC (input token)', subtitle: 'USD Coin', address: '0xa0b...eb48' },
    { image: boximg4, title: 'USDT', subtitle: 'Tether USD', address: '0xdac...1ec7' },
    { image: boximg5, title: 'DAI', subtitle: 'Dai Stablecoin', address: '0x6b1...1d0f' },
    { image: boximg6, title: 'WFTH', subtitle: 'Wrapped Ether', address: '0xa0b...eb48' },
    { image: boximg7, title: 'WBTC', subtitle: 'Wrapped BCT', address: '0x226...c599' },
];

const PairExplorerTokenPopup = ({ onClose }) => {
  return (
    <div className="PairExplorerTokenPopup-overlay">
        <div className="PairExplorerTokenPopup-content">
            <div className="PairExplorerTokenPopup-top-title-box">
                <h2>Select Token</h2>
                <IoMdClose className='PairExplorerTokenPopup-close-icon' onClick={onClose} />
            </div>
            <div className="PairExplorerTokenPopup-search-content">
                <div className="PairExplorerTokenPopup-search-box">
                    <input type="text" placeholder='Search symbol, contract address' />
                    <IoIosSearch className='PairExplorerTokenPopup-search-icon' />
                </div>
            </div>
            <div className="PairExplorerTokenPopup-title-box">
                <h2>Select Token</h2>
            </div>
            <div className="PairExplorerTokenPopup-container">
                {TokenPopup.map((Token, index) => (
                <div className="PairExplorerTokenPopup-content-item" key={index}>
                    <div className="PairExplorerTokenPopup-img-box">
                        <img src={Token.image} alt="" />
                        <img src={boximg1} alt="" />
                    </div>
                    <div className="PairExplorerTokenPopup-box-title">
                        <span>{Token.title}</span>
                        <span>{Token.subtitle}</span>
                    </div>
                    <div className="PairExplorerTokenPopup-copy">
                        <span>{Token.address}</span>
                        <FiCopy size={16} className='PairExplorerTokenPopup-copy-icon' />
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default PairExplorerTokenPopup;