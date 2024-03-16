import React, { useState } from 'react'
import { FaChartLine, FaClipboard, FaCreditCard, FaDoorOpen, FaHome, FaMoneyBill, FaPaperPlane, FaTimes, FaUser, FaWallet, FaWrench } from 'react-icons/fa'

const Sidebar = ({sideBarWidth, sideBarWidthHandle, LogoutHandle, setPreLoader, togglePage}) => {

    const [hoverState, setHoverState] = useState({
        activeButton: null,
        buttons: [
            {
                id: 1,
                icon: <FaHome/>,
                iconName: 'Dashboard',
            },
            {
                id: 2,
                icon: <FaClipboard/>,
                iconName: 'Budgets'
            },
            {
                id: 3,
                icon: <FaPaperPlane/>,
                iconName: 'Transactions',
            },
            {
                id: 4,
                icon: <FaCreditCard/>,
                iconName: 'Subscription'
            },
            {
                id: 5,
                icon: <FaMoneyBill/>,
                iconName: 'Loans'
            },
            {
                id: 6,
                icon: <FaChartLine/>,
                iconName: 'Report'
            },
            {
                id: 7,
                icon: <FaWallet/>,
                iconName: 'Savings'
            },
            {
                id: 8,
                icon: <FaUser/>,
                iconName: 'Account'
            },
            {
                id: 9,
                icon: <FaWrench/>,
                iconName: 'Settings'
            },
        ]
    })
    

    const toggleActive = (index) => {
        setHoverState({...hoverState, activeButton: hoverState.buttons[index]})
        setPreLoader(true)
        
        setTimeout(() => {
            togglePage(index)
        }, 1000);
            
        setTimeout(() => {
            setPreLoader(false)
        }, 1000);
    }
    

    const activeStyle = (index) => {
        if(hoverState.buttons[index] === hoverState.activeButton){
            return sideBarWidth ? 'sm:w-full w-fit flex items-center justify-start bg-orange-400 rounded-md cursor-pointer' : 'w-full flex items-center justify-start bg-orange-400 rounded-md cursor-pointer'
        } else{
            return sideBarWidth ? 'sm:w-full w-fit flex items-center justify-start hover:bg-orange-400 rounded-md cursor-pointer' : 'w-full flex items-center justify-start hover:bg-orange-400 rounded-md cursor-pointer'
        }
    }


  return (
    <div className={sideBarWidth ? 'max-w-[230px] sm:min-w-[200px] min-w-[60px] pt-[20px] h-screen 2sm:flex hidden flex-col items-start justify-start bg-[#141414] px-3 duration-1000' : 'max-w-[230px] fixed sm:relative z-50 left-0 top-0 min-w-[200px] pt-[20px] h-screen flex  flex-col items-start justify-start bg-[#141414] px-3 duration-1000'}>
        <button className={sideBarWidth ? 'hidden absolute top-[10px] right-[-35px] text-[20px]  w-[40px] h-[40px] bg-[#141414] items-center justify-center rounded-md' : 'flex sm:hidden  absolute top-[10px] right-[-35px] text-[20px] w-[40px] h-[40px] bg-[#141414] items-center justify-center rounded-md'} onClick={sideBarWidthHandle}>
            <FaTimes/>
        </button>

        <div className='w-full flex gap-[10px] items-center justify-center  mb-[5px] mt-3 sm:mt-0'>

            <h1 className={sideBarWidth ? 'lg:text-[24px] hidden sm:flex text-[20px] text-white font-semibold italic' : 'lg:text-[24px] flex text-[20px] text-white font-semibold italic'}>AFRICAN <span className='text-orange-400'>-BANK</span></h1>

            <h1 className={sideBarWidth ? 'sm:hidden flex text-[20px] text-white font-semibold italic' : 'hidden text-[20px] text-white font-semibold italic'}>A <span className='text-orange-400'> -B</span></h1>
        </div>

        <div className='w-full h-[85%] p-2 flex flex-col items-center justify-start gap-y-[10px]'>

            {hoverState.buttons.map((button, index) => (
                <span key={index} className={activeStyle(index)} onClick={() => {toggleActive(index)}}>
                    <p className='text-[18px] flex items-center justify-center p-2 rounded-md'>{button.icon}</p>
                    <p className={sideBarWidth ? 'font-medium text-[16px] lg:text-[18px] sm:flex hidden' : 'font-medium text-[16px] lg:text-[18px] flex'} onClick={sideBarWidthHandle}>{button.iconName}</p>
                </span>
            ))}

            

        </div>

        <span onClick={LogoutHandle} className={sideBarWidth ? 'sm:w-[165px] w-fit flex items-center justify-start hover:bg-orange-400 rounded-md cursor-pointer  duration-500 text-white  absolute bottom-3 left-auto right-auto m-2' : 'w-[165px] flex items-center justify-start hover:bg-orange-400 rounded-md cursor-pointer  duration-500 text-white absolute bottom-3 left-auto right-auto m-2'}>
                <p className='text-[18px] flex items-center justify-center p-2 rounded-md'><FaDoorOpen/></p>
                <p className={sideBarWidth ? 'font-medium text-[16px] lg:text-[18px] sm:flex hidden' : 'font-medium text-[16px] lg:text-[18px] flex'}>Logout</p>
            </span>
    </div>
  )
}

export default Sidebar