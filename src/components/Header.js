import React from 'react'
import { FaBars, FaBell, FaEnvelope, FaUser, } from 'react-icons/fa'

const Header = ({sideBarWidthHandle, LSUsername}) => {
    
  return (
    <div className='w-full h-[7vh]  flex items-center justify-between mb-0 '>
    <button className='flex items-center md:text-[20px] text-[16px] justify-center gap-2' onClick={sideBarWidthHandle}>
        <FaBars className='flex sm:hidden'/>
        <h3 className='md:max-w-[120px] md:min-w-fit max-w-[80px] min-w-fit  truncate'>Hi, {LSUsername}</h3>
    </button>

    <span className='flex items-center justify-center gap-[15px] md:text-[20px] text-[16px]'>
        
        <button>
            <FaEnvelope/>
        </button>



        <button>
            <FaBell/>
        </button>

        <div className='flex items-center md:gap-[15px] gap-[8px]'>
            <span className='md:w-[33px] w-[28px] md:h-[33px] h-[28px] flex items-center justify-center border-[3px] border-orange-400 rounded-full bg-slate-500'>
                <FaUser/>
            </span>
        </div>
    </span>
</div>

  )
}

export default Header