import React, {useState, useRef} from 'react'
import { FaEnvelope, FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaLock, FaUser } from 'react-icons/fa'
import MiniSignUp from './MiniSignUp'
import ForgotPassword from './ForgotPassword'
import PreLoader from '../DB-contents/PreLoader'
import { useNavigate } from "react-router-dom";

const SignUp = ({email, password, firstname, lastname, emailS, passwordS, firstnameS, lastnameS, handleSignUp, handleSignUpSmall, signUpMessage, preLoader, setPreLoader, allPages, setAllPages}) => {

        const navigate = useNavigate()
        
        
    const LiEmail = useRef()
    const LiPassword = useRef()
    const LiSEmail = useRef()
    const LiSPassword = useRef()
  const LSEmail = localStorage.getItem('email')
  const LSPassword = localStorage.getItem('password')

  const [incorrectMessage, setIncorrectMessage] = useState('')
  
  
  
  const handleLogin = (e) => {
    e.preventDefault()
    if (LiEmail.current.value === LSEmail && LiPassword.current.value === LSPassword) {
      setPreLoader(true)
      setAllPages({...allPages, activePage: allPages.pages[0]})
      
      setTimeout(() => {
                navigate('/home')
              
          }, 3000);
            setTimeout(() => {
              setPreLoader(false);
          }, 3000);
    } else {
      setIncorrectMessage('Incorrect email address or password') 
    }
  }

  const handleLoginSmall = (e) => {
    e.preventDefault()
    if (LiSEmail.current.value === LSEmail && LiSPassword.current.value === LSPassword) {
      setPreLoader(true)
      setTimeout(() => {
                navigate('/home')
              
          }, 3000);
      

      setTimeout(() => {
        setPreLoader(false);
    }, 3000);
    } else {
      setIncorrectMessage('Incorrect email address or password') 
    }
  }

        const [modes, setModes] = useState(false)
        const modeHandle = () => {
            setModes(!modes)
        }

        const [forgot, setForgot] = useState(false)
        const handleForgot = (e) => {
            // e.preventDefault()
            setForgot(!forgot)
        }


  return (
    <div className='w-full h-screen bg-dark text-light flex overflow-hidden relative'>
        {preLoader && <PreLoader/>}
        <h1 className='fixed italic top-5 left-5 text-[22px] text-white font-semibold z-[100]'>AFRICAN <span className={modes ? 'md:text-black text-white duration-1000' : 'md:text-orange-400 text-white duration-1000'}>-BANK</span></h1>

        {forgot && <ForgotPassword LSEmail={LSEmail} handleForgot={handleForgot} LSPassword={LSPassword}/>}

        <MiniSignUp modes={modes} modeHandle={modeHandle} handleForgot={handleForgot} handleLoginSmall={handleLoginSmall} LiSPassword={LiSPassword} LiSEmail={LiSEmail} firstnameS={firstnameS} lastnameS={lastnameS} emailS={emailS} passwordS={passwordS} handleSignUpSmall={handleSignUpSmall} signUpMessage={signUpMessage} incorrectMessage={incorrectMessage}/>

        <div className={modes ? 'lg:w-[50%] w-[40%] h-[100vh] lg:translate-x-[0%] translate-x-[0%] bg-orange-400 duration-1000 absolute  bottom-0 z-50 hidden md:flex items-center justify-center sign-up-bg' : 'lg:w-[50%] w-[40%] h-[100vh] lg:translate-x-[100%] translate-x-[150%] bg-orange-400 duration-1000 absolute  bottom-0 z-50 hidden md:flex items-center justify-center sign-up-bg'}>
            <span className='w-full h-full bg-black/30 flex items-center justify-center'>
                    
                    {
                        modes ? 
                        <div className='lg:w-[50%] w-[80%] flex flex-col items-center justify-start gap-[20px] text-center'>
                            <h1 className='text-[35px] font-bold '>Welcome Back!</h1>
                            <p className='text-[18px]'>To keep connected with us please login with your personal info</p>
                            <button onClick={modeHandle} className='py-2 w-[180px] bg-transparent flex items-center justify-center rounded-[30px] hover:bg-white/10 border-[1px] border-white duration-500 hover:border-[1px] hover:border-white hover:w-[185px] font-semibold'>SIGN IN</button>
                         </div>
                         : 
                        <div className='lg:w-[50%] w-[80%] flex flex-col items-center justify-start gap-[20px] text-center'>
                            <h1 className='text-[35px] font-bold '>Hello, Friend!</h1>
                            <p className='text-[18px]'>Enter your personal details and start your journey with us</p>
                            <button onClick={modeHandle} className='py-2 w-[180px] bg-transparent flex items-center justify-center rounded-[30px] hover:bg-white/10 border-[1px] border-white duration-500 hover:border-[1px] hover:border-white hover:w-[185px] font-semibold'>SIGN UP</button>
                         </div> 
                         
                    }
                
            </span>

        </div>



        <div className={modes ? 'lg:w-[50%] w-[60%] h-screen  duration-1000 translate-x-[66.9%] lg:translate-x-[100%] hidden md:flex items-center justify-center' : 'lg:w-[50%] w-[60%] h-screen duration-1000 hidden md:flex items-center justify-center'} >
            {modes ? <div  className='duration-1000 flex flex-col items-center justify-start gap-[20px]'>
                
                        <h1 className='text-[35px] font-bold text-orange-400'>Create Account</h1>

            <span className='flex items-center justify-center gap-[20px]'>
                <button className='w-[40px] h-[40px] flex items-center justify-center border-[0.5px] border-orange-400 rounded-full p-1 hover:bg-orange-400 duration-500 hover:text-black text-[18px]'>
                    <FaFacebookF/>
                </button>
                <button className='w-[40px] h-[40px] flex items-center justify-center border-[0.5px] border-orange-400 rounded-full p-1 hover:bg-orange-400 duration-500 hover:text-black text-[22px]'>
                    <FaGooglePlusG/>
                </button>
                <button className='w-[40px] h-[40px] flex items-center justify-center border-[0.5px] border-orange-400 rounded-full p-1 hover:bg-orange-400 duration-500 hover:text-black text-[18px]'>
                    <FaLinkedinIn/>
                </button>
            </span>

            <p className='text-[14px]'>or use your email amount:</p>

            <form className='flex items-center justify-start flex-col gap-[15px]'>
                <span className='py-2 px-4 flex items-center justify-center gap-[15px] bg-[#111]'>
                    <p className='text-[20px] text-[#999]'>
                        <FaUser/>
                    </p>
                    <input type='text' placeholder='First Name' className='w-[300px] bg-transparent' ref={firstname} required/>
                </span>

                <span className='py-2 px-4 flex items-center justify-center gap-[15px] bg-[#111]'>
                    <p className='text-[20px] text-[#999]'>
                        <FaUser/>
                    </p>
                    <input type='text' placeholder='Last Name' className='w-[300px] bg-transparent' ref={lastname} required/>
                </span>

                <span className='py-2 px-4 flex items-center justify-center gap-[15px] bg-[#111]'>
                    <p className='text-[20px] text-[#999]'>
                        <FaEnvelope/>
                    </p>
                    <input type='email' placeholder='Email' className='w-[300px] bg-transparent' ref={email} required/>
                </span>

                <span className='py-2 px-4 flex items-center justify-center gap-[15px] bg-[#111]'>
                    <p className='text-[20px] text-[#999]'>
                        <FaLock/>
                    </p>
                    <input type='password' placeholder='Password' className='w-[300px] bg-transparent' ref={password} required maxLength={6} minLength={6}/>
                </span>
                <p className='text-[12px] text-red-500'>{signUpMessage}</p>
                <button className='py-2 w-[180px] bg-orange-400 flex items-center justify-center rounded-[30px] hover:bg-transparent border-[1px] border-black duration-500 hover:border-[1px] hover:border-orange-400 font-semibold' onClick={handleSignUp}>SIGN UP</button>
            </form>
            </div> : 


            <div className='duration-1000 flex flex-col items-center justify-start gap-[20px]'>

                <h1 className='text-[30px] font-bold text-orange-400'>Sign In To Osmond Bank</h1>

                <span className='flex items-center justify-center gap-[20px]'>
                    <button className='w-[40px] h-[40px] flex items-center justify-center border-[0.5px] border-orange-400 rounded-full p-1 hover:bg-orange-400 duration-500 hover:text-black text-[18px]'>
                        <FaFacebookF/>
                    </button>
                    <button className='w-[40px] h-[40px] flex items-center justify-center border-[0.5px] border-orange-400 rounded-full p-1 hover:bg-orange-400 duration-500 hover:text-black text-[22px]'>
                        <FaGooglePlusG/>
                    </button>
                    <button className='w-[40px] h-[40px] flex items-center justify-center border-[0.5px] border-orange-400 rounded-full p-1 hover:bg-orange-400 duration-500 hover:text-black text-[18px]'>
                        <FaLinkedinIn/>
                    </button>
                </span>

                <p className='text-[14px]'>or use your email amount:</p>

                <form className='flex items-center justify-start flex-col gap-[15px]'>
                    <span className='py-2 px-4 flex items-center justify-center gap-[15px] bg-[#111]'>
                        <p className='text-[20px] text-[#999]'>
                            <FaEnvelope/>
                        </p>
                        <input type='email' placeholder='Email' className='w-[300px] bg-transparent' required ref={LiEmail} />
                    </span>

                    <span className='py-2 px-4 flex items-center justify-center gap-[15px] bg-[#111]'>
                        <p className='text-[20px] text-[#999]'>
                            <FaLock/>
                        </p>
                        <input type='password' placeholder='Password' className='w-[300px] bg-transparent' required ref={LiPassword} maxLength={6} minLength={6}/>
                    </span>
                    <p className='text-[12px] text-red-500'> {incorrectMessage}</p>
                    <h2 onClick={handleForgot} className='cursor-pointer'>Forgot Your Password?</h2>
                        <button onClick={handleLogin} className='py-2 w-[180px] bg-orange-400 flex items-center justify-center rounded-[30px] hover:bg-transparent border-[1px] border-black duration-500 hover:border-[1px] hover:border-orange-400 font-semibold' >SIGN IN</button>
                </form>
            </div>}
        </div>
    </div>
  )
}

export default SignUp