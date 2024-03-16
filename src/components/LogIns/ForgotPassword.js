import React, {useRef, useState} from 'react'
import ResetPassword from "./ResetPassword";
import ResetSuccess from "./ResetSuccess";

const ForgotPassword = ({handleForgot, LSEmail, LSPassword}) => {

    const [createPass, setCreatePass] = useState(false)

    const [wrongmail, setWrongMail] = useState('')
    

    const email = useRef()

    const [main, setMain] = useState(true)
    
    const handleCreate = () => {
        if (email.current.value === LSEmail) {
            setCreatePass(true)
            setMain(!main)
        } else{
            setWrongMail('Email address you entered is incorrect, please check the email address and try again')

        }

    }

    const [success, setSuccess] = useState(false)

  const handleSuccess = () => {
    setSuccess(!success)
  }

  return (
    <div className='w-full h-screen fixed top-0 left-0 z-[120] bg-black/80 flex items-center justify-center'>
        {createPass && <ResetPassword LSPassword={LSPassword} handleForgot={handleForgot} setCreatePass={setCreatePass} handleSuccess={handleSuccess} createPass={createPass} />}
        {success && <ResetSuccess handleSuccess={handleSuccess} handleForgot={handleForgot}/>}

        {main && 
        <div className='sm:w-[500px] 2sm:w-[400px] w-[90%] h-fit flex items-center justify-start flex-col bg-[#111] text-center sm:p-[30px] 2sm:p-[20px] p-[10px] 2sm:gap-[15px] gap-[10px] rounded-lg'>
            <h1 className='sm:text-[30px] text-[25px] leading-3 text-white font-semibold mb-[15px] 2sm:mt-0 mt-[15px]'>AFRICAN <span className='text-orange-400'>-BANK</span></h1>
            <h2 className='font-semibold sm:text-[22px] 2sm:text-[18px] text-[16px] leading-3'>Forgot your password ?</h2>
            <p className='font-extralight 2sm:text-[16px] text-[14px] mb-[12px]'>Enter your email address and to confirm your account and reset your password</p>
            <input type='email' required placeholder='Email Address' className='w-full sm:p-2 2sm:p-1.5 p-1 bg-[#555] border-[2px] rounded-md border-[#888] sm:text-[18px] text-[15px] font-medium' ref={email}/>
            <p className='text-12px text-red-500 mb-[5px]'>{wrongmail}</p>
            <span className='w-full flex items-center justify-between mb-[15px] 2sm:mb-0'>
                <button className='sm:w-[160px] 2sm:w-[140px] w-[120px] flex items-center justify-center border-[2px] rounded-md border-[#888] sm:py-2 2sm:py-1.5 py-1 font-semibold' onClick={handleForgot}>Cancel</button>
                <button className='sm:w-[160px] 2sm:w-[140px] w-[120px] flex items-center justify-center bg-orange-400 rounded-md border-[2px] border-orange-400 sm:py-2 2sm:py-1.5 py-1 font-semibold' onClick={handleCreate}>Reset</button>
            </span>
        </div>
        }
    </div>
  )
}

export default ForgotPassword