import React from 'react'
import './UserAccount.css';
import UserAccountComponent from '../../Components/Layouts/Admin-Layout/Admin-Header/UserAccountComponent/UserAccountComponent'
import Sidebar from '../../Components/Layouts/Admin-Layout/Admin-Sidebar/SideBar';
import Footer from '../../Components/Layouts/Admin-Layout/Admin-Footer/AdminFooter';

const UserAccount = () => {
  return (
    <Sidebar>
    <div>
      <UserAccountComponent/>
    </div>
    <div className="UserAccount-footer">
      <Footer />
    </div>
    </Sidebar>
  )
}

export default UserAccount;
