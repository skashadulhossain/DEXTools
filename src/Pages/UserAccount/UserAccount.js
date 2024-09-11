import React from 'react'
import UserAccountComponent from '../../Components/Layouts/Admin-Layout/Admin-Header/UserAccountComponent/UserAccountComponent'
import Sidebar from '../../Components/Layouts/Admin-Layout/Admin-Sidebar/SideBar';
import Footer from '../../Components/Layouts/Admin-Layout/Admin-Footer/AdminFooter';

const UserAccount = () => {
  return (
    <Sidebar>
    <div>
      <UserAccountComponent/>
    </div>
    <Footer />
    </Sidebar>
  )
}

export default UserAccount;
