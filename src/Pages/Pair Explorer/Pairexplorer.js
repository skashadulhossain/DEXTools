import React from 'react';
import './Pairexplorer.css';
import Sidebar from '../../Components/Layouts/Admin-Layout/Admin-Sidebar/SideBar';
import CryptoInfoBox from '../../Components/TradingViewChart/TradingtoInfoBox';
import HotPairs from '../../Components/Tab_Navigation/HotPairs/HotPairs';
import SideBoxOne from '../../Components/PairExplorer_Componets/SideBoxOne/SideBoxOne';
import SideBoxTwo from '../../Components/PairExplorer_Componets/SideBoxTwo/SideBoxTwo';
import SideBoxThree from '../../Components/PairExplorer_Componets/SideBoxThree/SideBoxThree';
import PairNavigation from '../../Components/PairExplorer_Componets/PairNavigation/PairNavigation';
import PairTab from '../../Components/PairExplorer_Componets/PairExplorer_Tab/PairTab';
import SideboxTop from '../../Components/PairExplorer_Componets/SideboxTop/SideboxTop';
import Footer from '../../Components/Layouts/Admin-Layout/Admin-Footer/AdminFooter';



const Pairexplorer = () => {
  return (
    <Sidebar>
      <div className="Pairexplorer-container">
        
        {/* Top Navigation Bar */}
        <div className="Pairexplorer-top-bar">
         <PairNavigation/>
        </div>

        {/* Main Content Area */}
        <div className="Pairexplorer-content">

          {/* Left Panel with multiple sections */}
          <div className="Pairexplorer-left-panel">
        <SideboxTop/>
         <SideBoxOne/>  
         <SideBoxTwo/>
         <SideBoxThree/>
   
          </div>

          {/* Right Panel */}
          <div className="Pairexplorer-right-panel">
            {/* Main Chart Section */}
            <div className="Pairexplorer-chart">
             <CryptoInfoBox/>
            </div>
            
            {/* Trade History Section */}
            <div className="Pairexplorer-trade-history">
              <PairTab/>
           
             
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </Sidebar>
  );
};

export default Pairexplorer;
