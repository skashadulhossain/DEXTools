import React from 'react'
import './Status.css';
import StatusTab from '../../Components/Status_Components/StatusTab';
import Sidebar from '../../Components/Layouts/Admin-Layout/Admin-Sidebar/SideBar';
import Footer from '../../Components/Layouts/Admin-Layout/Admin-Footer/AdminFooter';

const Status = () => {
  return (
    <>
      <Sidebar>
    <div>
      <StatusTab/>
    </div>
    <div className="Status-footer">
      <Footer/>
    </div>
    </Sidebar>
    </>
    
  )
}

export default Status;
