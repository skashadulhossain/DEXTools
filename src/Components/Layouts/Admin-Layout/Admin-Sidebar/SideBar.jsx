import React, { useState } from 'react';
import './Sidebar.css';
import { FaHome, FaRocket, FaSearch, FaCogs, FaUser, FaWallet, FaExchangeAlt, FaGlobe, FaPlus, FaGift } from 'react-icons/fa';
import { BsGraphUp } from 'react-icons/bs';
import { AiFillSetting, AiFillPieChart } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import mainLogo from './Image/dextools_logo.png';
import AdminHeader from '../Admin-Header/HeaderProfile';

const mainRoutes = [
  { path: '/', name: 'DEXTboard', icon: <FaHome /> },
  { path: '/Pairexplorer', name: 'Pair Explorer', icon: <BsGraphUp /> },
  { path: '/LiveNewPairs', name: 'Live New Pairs', icon: <FaRocket /> },
  { path: '/BigSwapExplorer', name: 'Big Swap Explorer', icon: <FaExchangeAlt /> },
  { path: '/TokenCreator', name: 'Token Creator', icon: <FaPlus /> },
  { path: '/Multichart', name: 'Multichart', icon: <AiFillPieChart /> },
  { path: '/Multiswap', name: 'Multiswap', icon: <AiFillSetting /> },
  { path: '/Stats', name: 'Stats', icon: <FaSearch /> },
  { path: '/WalletInfo', name: 'Wallet Info', icon: <FaWallet /> },
  { path: '/UserArea', name: 'User Area', icon: <FaUser /> },
  { path: '/Products', name: 'Products', icon: <FaCogs /> },

];

const extraRoutes = [
  { path: '/Simulator', name: 'Simulator', icon: <FaCogs /> },
  { path: '/DEXTswap', name: 'DEXTswap', icon: <FaExchangeAlt /> },
  { path: '/Web', name: 'Web', icon: <FaGlobe /> },
  { path: '/UpdateTokenInfo', name: 'Update token info', icon: <FaGift />, badge: 'Offer!' },
];

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={`admin_sidebar_main_Container ${isOpen ? 'sidebar-open' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`admin_sidebar ${isOpen ? 'sidebar-open' : ''}`}>
          <div className='admin_top_section'>
            <img src={mainLogo} alt='Logo' className='admin_logo_image' />
            <h1 className={`admin_Main_Heading ${isOpen ? 'visible' : 'hidden'}`}>DEXTools</h1>
          </div>
          <div className='admin_all_menus_container'>
          <section className='admin_routes'>
            {mainRoutes.map((route) => (
              <NavLink
                to={route.path}
                key={route.name}
                className={({ isActive }) =>
                  `admin_sidebar_link ${isActive ? 'admin_active' : ''}`
                }
              >
                <div className='admin_icon'>{route.icon}</div>
                <div className={`admin_link_text ${isOpen ? 'visible' : 'hidden'}`}>
                  {route.name}
                </div>
              </NavLink>
            ))}

            
          </section>
          <section className='admin_extra_routes'>
            <div className={`admin_extra_header ${isOpen ? 'visible' : 'hidden'}`}>EXTRA</div>
            {extraRoutes.map((route) => (
              <NavLink
                to={route.path}
                key={route.name}
                className={({ isActive }) =>
                  `admin_sidebar_link ${isActive ? 'admin_active' : ''}`
                }
              >
                <div className='admin_icon'>{route.icon}</div>
                <div className={`admin_link_text ${isOpen ? 'visible' : 'hidden'}`}>
                  {route.name}
                  {route.badge && (
                    <span className={`badge offer-badge`}>
                      {route.badge}
                    </span>
                  )}
                </div>
              </NavLink>
            ))}
          </section>
          </div>
        </div>
        <main>
          <div><AdminHeader isOpen={isOpen} /></div>
          <div className='admin_main_pages'>{children}</div>
        </main>
      </div>
    </>
  );
};

export default Sidebar;
