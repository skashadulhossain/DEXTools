import React from 'react';
import './MultiChart.css';
import MultiChartTab from '../../Components/MultiChartTab/MultiChartTab';
import Sidebar from '../../Components/Layouts/Admin-Layout/Admin-Sidebar/SideBar';
import Footer from '../../Components/Layouts/Admin-Layout/Admin-Footer/AdminFooter';
import PairNavigation from '../../Components/PairExplorer_Componets/PairNavigation/PairNavigation';

const MultiChart = () => {
  return (
    <>
   <Sidebar>
    <PairNavigation />
    <div>
      <MultiChartTab/>
    </div>
    <div className="MultiChart-footer">
      <Footer />
    </div>
    </Sidebar>
    </>

  )
}

export default MultiChart;
