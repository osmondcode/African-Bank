import React, { useState } from 'react'
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import SignOutModal from './SignOutModal';
import { useNavigate } from 'react-router-dom';
import PreLoader from './DB-contents/PreLoader';
import BudgetModal from "./Pages/Modals/budgetModal";


const Home = ({sideBarWidthHandle, sideBarWidth, LSUsername, preLoader, setPreLoader, togglePage, allPages, activePageHandle, addingModalHandle, adding}) => {
  const navigate = useNavigate()
  const [logout, setLogout] = useState(false)
  const LogoutHandle = () => {
    setLogout(!logout)
  }

  const LogoutHandleLink = () => {
    setLogout(!logout)
    navigate('/')
  }
  


  return (
    <div className=' w-full min-h-screen bg-dark text-light flex items-start justify-between'>
        <Sidebar sideBarWidth={sideBarWidth} sideBarWidthHandle={sideBarWidthHandle} LogoutHandle={LogoutHandle} setPreLoader={setPreLoader} togglePage={togglePage}/>
        {preLoader && <PreLoader/>}

        {adding && <BudgetModal addingModalHandle={addingModalHandle}/>}
        
        <div className='w-full min-h-screen flex items-center justify-center relative'>

          {allPages.pages.map((pageDiv, index) => (
            activePageHandle(index)
          ))}
        </div>
      {/* <Dashboard sideBarWidthHandle={sideBarWidthHandle} LSUsername={LSUsername}/> */}


      {logout && <SignOutModal logout={logout} LogoutHandle={LogoutHandle} LogoutHandleLink={LogoutHandleLink} LSUsername={LSUsername}/>}
    </div>
  )
}

export default Home