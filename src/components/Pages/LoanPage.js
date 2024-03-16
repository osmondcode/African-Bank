import React from 'react'
import { FaAngleDown, FaBars, FaBell, FaEnvelope, FaUser } from 'react-icons/fa'

const LoanPage = ({LSUsername, sideBarWidthHandle, }) => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-start md:px-[30px] px-[10px] top-0 left-0 right-0 bottom-0 absolute text-white'>
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

        
        <div className='w-full h-[85vh] flex flex-col mt-0 xl:mt-[20px] items-center overflow-y-scroll md:overflow-y-hidden relative'>
            <h2 className='text-[24px] mb-[10px] font-semibold'>Loan Calculator</h2>
            <p className='font-medium text-[17px] mb-[20px]'>The calculated amount is accurate. the  exact terms of the loan are determined individually</p>
            <hr className='w-full h-[2px] bg-[#141414]'/>

            <div className='w-full h-[80vh] flex flex-col md:flex-row items-center justify-between lg:justify-evenly mt-0 '>
                <div className='sm:w-[52%] 2sm:w-[70%] w-[90%] lg:w-[48%] min-h-[60vh] flex flex-col items-center justify-start  px-[1.5%] md:pt-[5vh] pt-[3vh] relative mb-[5vh] md:mb-0'>    
                    <span className='w-full flex flex-col items-center justify-center'>
                        <h3 className='mb-[10px]  text-[15px]'>How much do you need?</h3>
                        <div className='lg:w-[280px] md:w-[220px] w-full lg:h-[50px] h-[40px] flex flex-col items-start justify-center border-[2px] border-[#333] rounded-lg px-[10px] relative mb-[30px]'>
                            <p className='lg:text-[16px] text-[14px]'>£25 000</p>
                            <input type='range' className='absolute bottom-[-8px] left-auto right-auto w-[92%] range'/>
                        </div>

                        <h3 className='mb-[10px] text-[15px]'>How many months do you need?</h3>
                        <div className='lg:w-[280px] md:w-[220px] w-full lg:h-[50px] h-[40px] flex flex-col items-start justify-center border-[2px] border-[#333] rounded-lg px-[10px] relative mb-[30px]'>
                            <p className='lg:text-[16px] text-[14px]'>24</p>
                            <button className='absolute right-[10px] top-0 bottom-0'><FaAngleDown/></button>
                        </div>

                        <div className='w-full flex md:items-center items-center md:justify-center justify-start absolute bottom-0 left-0'>


                            <div className='lg:w-[280px] md:w-[220px] w-full h-[120px] pt-[15px] flex flex-col items-center justify-start  bg-orange-400/30 rounded-lg'>
                                <h3 className='font-medium mb-[20px] text-[14px] lg:text-[16px]'>You will pay</h3>
                                <h1 className='text-[28px] text-orange-300 font-semibold leading-6'>£1 242.17</h1>
                                <h className='font-semibold text-[#888]'>Per Month</h>
                            </div>
                        </div>
                    </span>
                </div>


                <span className='md:w-1/2 sm:w-[60%] w-[80%] lg:w-[37%] h-[60vh] py-[20vh] md:py-0 bg-[#141414] flex flex-col items-center justify-center'>
                    <div className='flex flex-col items-center justify-center lg:gap-[35px] gap-[25px]'>
                        <span className='md:w-[28vh] w-[26vh] lg:w-[33vh] md:h-[28vh] h-[26vh] lg:h-[33vh] flex flex-col items-center justify-center lg:border-[4.5vh] md:border-[4vh] border-[3vh] border-blue-500 rounded-full'>
                            <p className='lg:text-[17px] text-[15px]'>In Total</p>
                            <h1 className='lg:text-[20px] text-[18px] font-semibold '>£32 500</h1>
                        </span>

                        <span className='w-full flex items-center lg:justify-center justify-around lg:gap-[30px] gap-[10px] flex-wrap'>
                            <div className='min-w-[70px] flex flex-col items-center justify-start'>
                                <p className='flex items-center justify-center lg:gap-[10px] gap-[5px] lg:text-[16px] text-[14px]'>
                                <span className='lg:w-[9px] lg:h-[9px] w-[5px] h-[5px] rounded-full flex bg-blue-500'></span>
                                    Principle
                                </p>
                                <h4 className='font-semibold text-[15px]'>£25 000</h4>
                            </div>

                            <div className='min-w-[80px] flex flex-col items-center justify-start'>
                                <p className='flex items-center justify-center lg:gap-[10px] gap-[5px] lg:text-[16px] text-[14px]'>
                                <span className='lg:w-[9px] lg:h-[9px] w-[5px] h-[5px] rounded-full flex bg-yellow-500'></span>
                                    Preliminary
                                </p>
                                <h4 className='font-semibold text-[15px]'>£5 000</h4>
                            </div>

                            <div className='min-w-[70px] flex flex-col items-center justify-start'>
                                <p className='flex items-center justify-center lg:gap-[10px] gap-[5px] lg:text-[16px] text-[14px]'>
                                <span className='lg:w-[9px] lg:h-[9px] w-[5px] h-[5px] rounded-full flex bg-pink-500'></span>
                                    Percemt
                                </p>
                                <h4 className='font-semibold text-[15px]'>£2 500</h4>
                            </div>
                        </span>
                    </div>
                </span>
            </div>
        </div>

        <div className='w-full h-[50px] flex items-center justify-between px-[20px] absolute bottom-0 rightt-0 bg-[#111] md:text-[15px] text-[12px]'>
            <p> &copy; 2023 african bank. All Rights Reserved</p>
            <p>Designed by <span>Osmond-code</span></p>
        </div>
    </div>
  )
}

export default LoanPage