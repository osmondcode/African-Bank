import React from 'react'

const ResetSuccess = ({handleSuccess, handleForgot}) => {
    const handleAll = () => {
        handleSuccess()
        handleForgot()
    }
  return (
    <div  className='sm:w-[500px] 2sm:w-[400px] w-[90%] h-fit flex items-center justify-start flex-col bg-[#111] text-center sm:p-[30px] 2sm:p-[20px] p-[10px] 2sm:gap-[15px] gap-[10px] rounded-lg'>
        <h1 className='sm:text-[30px] text-[25px] leading-3 text-white font-semibold mb-[15px] 2sm:mt-0 mt-[15px]'>OSMOND <span className='text-orange-400'>-BANK</span></h1>
        <h2 className='font-semibold sm:text-[22px] 2sm:text-[18px] text-[16px] leading-3'>Successful password reset</h2>
        <p className='font-extralight 2sm:text-[16px] text-[14px] mb-[12px]'>You can now use your new password to login to your account</p>
        <button className='w-full mt-3 flex items-center justify-center  rounded-md border-[2px] bg-orange-400 hover:bg-orange-400/70 border-orange-400 hover:border-orange-400/70 lg:p-2 2sm:p-1.5 p-1 font-semibold text-[15px] 2sm:text-[17px]' onClick={handleAll}>Login</button>
    </div>
  )
}

export default ResetSuccess