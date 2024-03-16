import React from 'react'
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa'
import PreLoader from '../DB-contents/PreLoader'




const MiniSignUp = ({modes, modeHandle, handleForgot, handleLoginSmall, preLoader, LiSEmail, LiSPassword, emailS, passwordS, firstnameS, lastnameS,handleSignUpSmall, signUpMessage, incorrectMessage}) => {
  return (
    <div className='w-full h-screen flex md:hidden flex-col -tems-center justify-center sign-up-bg'>
        {preLoader && <PreLoader/>}
        <div className='w-full h-screen backdrop-blur-lg bg-black/20 flex flex-col items-center justifuy-center'>
            {modes ? <div className='w-full h-screen flex flex-col items-center justify-center gap-5 text-center px-4 pt-5 2sm:pt-3'>
            <h1 className='sm:text-[35px] text-[30px] leading-3 font-semibold '>Hello, Friend!</h1>
                <p className='2sm:text-[18px] text-[17px]'>Enter your personal details and start your journey with us</p>

                <form className='flex flex-col items-center justify-start gap-4 sm:mt-3 mt-0'>
                <span className='py-2 px-4 flex items-center justify-center gap-[15px] bg-transparent border-[1px] border-white text-white rounded-[30px]'>
                        <input type='text' placeholder='First Name' className='2sm:w-[300px] w-[250px] bg-transparent text-center placeholder:text-white' required ref={firstnameS}/>
                    </span>

                <span className='py-2 px-4 flex items-center justify-center gap-[15px] bg-transparent border-[1px] border-white text-white rounded-[30px]'>
                        <input type='text' placeholder='Last Name' className='2sm:w-[300px] w-[250px] bg-transparent text-center placeholder:text-white' required ref={lastnameS}/>
                    </span>

                <span className='py-2 px-4 flex items-center justify-center gap-[15px] bg-transparent border-[1px] border-white text-white rounded-[30px]'>
                        <input type='email' placeholder='Email Address' className='2sm:w-[300px] w-[250px] bg-transparent text-center placeholder:text-white' required ref={emailS}/>
                    </span>

                    <span className='py-2 px-4 flex items-center justify-center gap-[15px] bg-transparent border-[1px] border-white text-white rounded-[30px]'>
                        <input type='password' placeholder='Password' className='2sm:w-[300px] w-[250px] bg-transparent text-center placeholder:text-white spacing no-spacing font-extrabold placeholder:font-normal' required maxLength={6} minLength={6} ref={passwordS}/>
                    </span>
                        <p className='text-[14px] text-white'>{signUpMessage}</p>
                    <span className='py-2 px-4 flex items-center justify-center gap-[15px] text-white rounded-[30px] bg-orange-400'>
                        <button onClick={handleSignUpSmall} className='2sm:w-[300px] w-[250px] h-full bg-transparent text-center placeholder:text-white'>SIGN UP</button>
                    </span>

                </form>

                <span className='flex items-center jusytify-center gap-[10px]'>
                    <p>Already have an account?</p>
                    <button className='font-medium' onClick={modeHandle}>LogIn</button>
                </span>

                <span className='flex items-center jusytify-center gap-[10px]'>
                    <hr className='h-[1px] w-[120px] bg-white'/>
                    <p>or</p>
                    <hr className='h-[1px] w-[120px] bg-white'/>
                </span>

                <span className='flex items-center justify-center gap-[20px]'>
                    <button className='w-[35px] h-[35px] flex items-center justify-center bg-white text-orange-400 rounded-full p-1 text-[18px]'>
                        <FaFacebookF/>
                    </button>
                    <button className='w-[35px] h-[35px] flex items-center justify-center bg-white text-orange-400 rounded-full p-1 text-[22px]'>
                        <FaGooglePlusG/>
                    </button>
                    <button className='w-[35px] h-[35px] flex items-center justify-center bg-white text-orange-400 rounded-full p-1 text-[18px]'>
                        <FaLinkedinIn/>
                    </button>
                </span>
            </div> : 

            <div className='w-full h-screen flex flex-col items-center justify-center gap-5 text-center px-5'>
                <h1 className='sm:text-[35px] text-[30px] leading-3 font-semibold '>Welcome Back!</h1>
                <p className='2sm:text-[18px] text-[17px]'>To keep connected with us please login with your personal info</p>

                <form className='flex flex-col items-center justify-start gap-4 sm:mt-3 mt-0'>
                <span className='py-2 px-4 flex items-center justify-center gap-[15px] bg-transparent border-[1px] border-white text-white rounded-[30px]'>
                        <input type='email' placeholder='Email Address' className='2sm:w-[300px] w-[250px] bg-transparent text-center placeholder:text-white' required ref={LiSEmail}/>
                    </span>

                    <span className='py-2 px-4 flex items-center justify-center gap-[15px] bg-transparent border-[1px] border-white text-white rounded-[30px]'>
                        <input type='password' placeholder='Password' className='2sm:w-[300px] w-[250px] bg-transparent text-center placeholder:text-white spacing no-spacing font-extrabold placeholder:font-normal' required maxLength={6} minLength={6} ref={LiSPassword}/>
                    </span>

                    <h2 onClick={handleForgot}>Forgot Your Password?</h2>
                    <p>{incorrectMessage}</p>

                    <span className='py-2 px-4 flex items-center justify-center gap-[15px] text-white rounded-[30px] bg-orange-400'>
                        <button onClick={handleLoginSmall} className='2sm:w-[300px] w-[250px] h-full bg-transparent text-center placeholder:text-white'>SIGN IN</button>
                    </span>

                </form>

                <span className='flex items-center jusytify-center gap-[10px]'>
                    <p>Don't have an account?</p>
                    <button className='font-medium' onClick={modeHandle}>Register</button>
                </span>

                <span className='flex items-center jusytify-center gap-[10px]'>
                    <hr className='h-[1px] w-[120px] bg-white'/>
                    <p>or</p>
                    <hr className='h-[1px] w-[120px] bg-white'/>
                </span>

                <span className='flex items-center justify-center gap-[20px]'>
                    <button className='w-[35px] h-[35px] flex items-center justify-center bg-white text-orange-400 rounded-full p-1 text-[18px]'>
                        <FaFacebookF/>
                    </button>
                    <button className='w-[35px] h-[35px] flex items-center justify-center bg-white text-orange-400 rounded-full p-1 text-[22px]'>
                        <FaGooglePlusG/>
                    </button>
                    <button className='w-[35px] h-[35px] flex items-center justify-center bg-white text-orange-400 rounded-full p-1 text-[18px]'>
                        <FaLinkedinIn/>
                    </button>
                </span>
            </div>}
        </div>
    </div>
  )
}

export default MiniSignUp