import React, {useRef, useState} from 'react'

const ResetPassword = ({LSPassword, handleForgot, setCreatePass, handleSuccess, createPass}) => {

  

  const create = useRef()
  const confirm = useRef()

  const [error, setError] = useState('')

  const handleReset = () => {
    if (create.current.value === confirm.current.value) {
      localStorage.setItem('password', confirm.current.value)
      setCreatePass(!createPass)
      handleSuccess()
    } else {
      setError('The password you have entered does not match, please check it and try again')
    }
  }


  return (
    <div className='sm:w-[500px] 2sm:w-[400px] w-[90%] min-h-[340px] flex items-center justify-start flex-col bg-[#111] text-center sm:p-[30px] p-[20px] gap-[15px] absolute top-auto left-auto right-auto bottom-auto'>
        <h1 className='lg:text-[30px] 2sm:text-[25px] text-[20px] leading-3 text-white font-semibold lg:mb-[15px] 2sm:mb-[10px] mb-[5px]'>AFRICAN <span className='text-orange-400'>-BANK</span></h1>
            <h2 className='font-semibold lg:text-[22px] 2sm:text-[19px] text-[17px] leading-3'>Reset your password</h2>
            
            <span className='w-full flex flex-col gap-[12px] items-start justify-start'>
                <h2 className='2sm:text-[16px] text-[14px]'>New Password</h2>
                <input type='Password' required placeholder='Enter a new password' className='w-full lg:p-2 2sm:p-1.5 p-1 bg-[#555] border-[2px] rounded-md border-[#888] sm:text-[18px] text-[15px] font-medium mb-[5px]' ref={create}/>
            </span>
            <span className='w-full flex flex-col gap-[12px] items-start justify-start'>
                <h2 className='2sm:text-[16px] text-[14px]'>Confirm New Password</h2>
                <input type='Password' required placeholder='Enter a new password' className='w-full lg:p-2 2sm:p-1.5 p-1 bg-[#555] border-[2px] rounded-md border-[#888] sm:text-[18px] text-[15px] font-medium mb-[5px]' ref={confirm}/>
            </span>
            <p  className='text-12px text-red-500 mb-[5px]'>{error}</p>
            <button className='w-full mt-3 flex items-center justify-center  rounded-md border-[2px] bg-orange-400 hover:bg-orange-400/70 border-orange-400 hover:border-orange-400/70 lg:p-2 2sm:p-1.5 p-1 font-semibold text-[15px] 2sm:text-[17px]' onClick={handleReset}>Reset Password</button>
    </div>
  )
}

export default ResetPassword