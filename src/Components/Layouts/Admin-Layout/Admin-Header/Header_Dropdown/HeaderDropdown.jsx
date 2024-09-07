// ChainSelection.js
import React, { useState } from 'react';
import '../Header_Dropdown/HeaderDropdown.css';



// Importing images
import ETHEREUMLogo from './img/ether.png';
import Solana from './img/solana.png';
import Polygon from './img/polygon.png';
import BNBChain from './img/opbnb.png';
import Arbitrum from './img/arbitrum.png';
import Fantom from './img/bsc.png';
import Avalanche from './img/avalanche.png';
import Tron from './img/tron.png';
import Cronos from './img/xlayer.png';
import Optimism from './img/polygon.png';
import Base from './img/base.png';
import Near from './img/near.png';
import Hedera from './img/kujira.png';
import Osmosis from './img/osmosis.png';
import ZkSync from './img/zksync.png';
import Aptos from './img/aptos.png';
import Velas from './img/velas.png';
import Pulse from './img/pulse.png';
import BitTorrent from './img/bittorrent.png';
import Starknet from './img/starknet.png';
import Mantle from './img/mantle.png';

// Updated chains array using imported images
const chains = [
  { name: 'Ethereum', logo: ETHEREUMLogo },
  { name: 'Solana', logo: Solana },
  { name: 'Polygon', logo: Polygon },
  { name: 'BNB Chain', logo: BNBChain },
  { name: 'Arbitrum', logo: Arbitrum },
  { name: 'Fantom', logo: Fantom },
  { name: 'Avalanche', logo: Avalanche },
  { name: 'Tron', logo: Tron },
  { name: 'Cronos', logo: Cronos },
  { name: 'Optimism', logo: Optimism },
  { name: 'Base', logo: Base },
  { name: 'Near', logo: Near },
  { name: 'Hedera', logo: Hedera },
  { name: 'Osmosis', logo: Osmosis },
  { name: 'ZkSync', logo: ZkSync },
  { name: 'Aptos', logo: Aptos },
  { name: 'Velas', logo: Velas },
  { name: 'Pulse', logo: Pulse },
  { name: 'BitTorrent', logo: BitTorrent },
  { name: 'Starknet', logo: Starknet },
  { name: 'Mantle', logo: Mantle },
  { name: 'Mantle', logo: Mantle },
  { name: 'Mantle', logo: Mantle },
  { name: 'Mantle', logo: Mantle },
  { name: 'Mantle', logo: Mantle },
  { name: 'Mantle', logo: Mantle },
  { name: 'Mantle', logo: Mantle },
  { name: 'Mantle', logo: Mantle },
  { name: 'Mantle', logo: Mantle },
  { name: 'Mantle', logo: Mantle },
  { name: 'Mantle', logo: Mantle },
  { name: 'Mantle', logo: Mantle },
  { name: 'Mantle', logo: Mantle },
  
  // Add more chains as necessary
];

const ChainSelection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredChains = chains.filter(chain =>
    chain.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="ChainSelection">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search"
        className="chain-search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      {/* List of Chains */}
      <div className="chain-grid">
        {filteredChains.map((chain, index) => (
          <div key={index} className="chain-item">
            <img src={chain.logo} alt={chain.name} className="chain-logo" />
            <span>{chain.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChainSelection;
