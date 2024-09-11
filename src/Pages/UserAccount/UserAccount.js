import React from 'react'
import UserAccountComponent from '../../Components/Layouts/Admin-Layout/Admin-Header/UserAccountComponent/UserAccountComponent'
import Sidebar from '../../Components/Layouts/Admin-Layout/Admin-Sidebar/SideBar';

const UserAccount = () => {
  return (
    <Sidebar>
    <div>
      <UserAccountComponent/>
    </div>
    </Sidebar>
  )
}

export default UserAccount;
