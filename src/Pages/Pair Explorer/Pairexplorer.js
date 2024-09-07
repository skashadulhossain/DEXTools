import React from 'react'
import Sidebar from '../../Components/Layouts/Admin-Layout/Admin-Sidebar/SideBar'
import TradingtoInfoBox from '../../Components/TradingViewChart/TradingtoInfoBox';

// import TradingViewWidget from '../../Components/TradingViewChart/TradingViewChart';


const Pairexplorer = () => {
  return (
    <Sidebar>
    <div>
      {/* <div style={{ width: '100%', height: '500px' }}>
        <TradingViewWidget/>
      </div> */}
      <TradingtoInfoBox/>
    </div>
    </Sidebar>
  )
}

export default Pairexplorer;
