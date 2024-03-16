import React from 'react'

const SignOutModal = ({LogoutHandle, logout, LogoutHandleLink}) => {
  return (
    <div className='w-full h-screen fixed top-0 left-0 bg-black/50 flex items-center justify-center z-[100]'>

        <div className='sm:w-[500px] 2sm:w-[400px] w-[280px] 2sm:h-[250px] h-[180px] bg-[#111] flex flex-col items-center justify-center rounded-xl shadow-lg shadow-black duration-500'>
            <h1 className='2sm:text-[22px]  text-[16px] mb-[30px]'>ARE YOU SURE YOU WANT TO LOGOUT ?</h1>
            <div className='w-full flex items-center justify-evenly'>
                <button className='w-[40%] 2sm:py-2 py-1 text-[17px] bg-[#333]/80 rounded-md hover:bg-[#333]/60' onClick={LogoutHandle}>Cancel</button>
                <button onClick={LogoutHandleLink} className='w-[40%] 2sm:py-2 py-1 text-[17px] bg-orange-400/80 rounded-md hover:bg-orange-400/60'>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default SignOutModal