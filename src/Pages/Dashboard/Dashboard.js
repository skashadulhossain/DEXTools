import React from 'react'
import Sidebar from '../../Components/Layouts/Admin-Layout/Admin-Sidebar/SideBar'
import Footer from '../../Components/Layouts/Admin-Layout/Admin-Footer/AdminFooter'
import CardSlider from '../../Components/CardSlider/CardSlider'
import CryptoDashboard from '../../Components/DEXboard_Box/DexBoardBox'
import CryptoNewsComponent from '../../Components/CryptoNews/CryptoNews'



const Dashboard = () => {
  return (
    <Sidebar>
    <div>
    <CardSlider/>
    <CryptoDashboard/>
    <CryptoNewsComponent/>
      <Footer/>
    </div>
    </Sidebar>
  )
}

export default Dashboard
