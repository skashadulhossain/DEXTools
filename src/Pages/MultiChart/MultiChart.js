import React from 'react'
import MultiChartTab from '../../Components/MultiChartTab/MultiChartTab'
import Sidebar from '../../Components/Layouts/Admin-Layout/Admin-Sidebar/SideBar'

const MultiChart = () => {
  return (
    <>
   <Sidebar>
    <div>
      <MultiChartTab/>
    </div>
 </Sidebar>
    </>

  )
}

export default MultiChart;
