import React from 'react';
import './LiveNewPair.css';
import Sidebar from '../../Components/Layouts/Admin-Layout/Admin-Sidebar/SideBar';
import Footer from '../../Components/Layouts/Admin-Layout/Admin-Footer/AdminFooter';
import PairNavigation from '../../Components/PairExplorer_Componets/PairNavigation/PairNavigation';
import LiveNewPairsTable from '../../Components/LiveNewPairsTable/LiveNewPairsTable';

const LiveNewPair = () => {
  return (
    <Sidebar>
    <PairNavigation />
    <LiveNewPairsTable/>
    <div className="LiveNewPair-footer">
        <Footer/>
    </div>
    </Sidebar>
  )
}

export default LiveNewPair
