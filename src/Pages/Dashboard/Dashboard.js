import React from 'react'
import './Dashboard.css'
import Sidebar from '../../Components/Layouts/Admin-Layout/Admin-Sidebar/SideBar'
import Footer from '../../Components/Layouts/Admin-Layout/Admin-Footer/AdminFooter'
import CardSlider from '../../Components/CardSlider/CardSlider'
import CryptoDashboard from '../../Components/DEXboard_Box/DexBoardBox'
import CryptoNewsComponent from '../../Components/CryptoNews/CryptoNews'
import DEXTboardHeader from '../../Components/DEXboard_Box/BoardHeaders/BoardHeaders'
import TabNavigation from '../../Components/Tab_Navigation/TabNavigation'




const Dashboard = () => {
  return (
    <Sidebar>
    <div>
    <CardSlider/>
    <DEXTboardHeader/>
    <CryptoDashboard/>
    <TabNavigation/>
    <div className='Dashboard-CryptoNews'>
      <CryptoNewsComponent/>
    </div>
    <div className='Dashboard-footer'>
      <Footer/> 
    </div>
    </div>
    </Sidebar>
  )
}

export default Dashboard
