import React from 'react'
import {FaBars, FaBell, FaEnvelope, FaUser } from 'react-icons/fa'
import Subscription from '../Data/SubscriptionData'

const SubscriptionPage = ({LSUsername, sideBarWidthHandle, }) => {

    const Data = Subscription
  return (
    <div  className='w-full min-h-screen flex flex-col items-center justify-start md:px-[30px] px-[10px] top-0 left-0 right-0 bottom-0 absolute text-white'>

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

        <div className='w-full h-[83vh] flex flex-col items-center justify-start pt-[20px]'>
            <span className='w-full md:px-[20px] px-0 flex items-center justify-between'>
                <h1 className='md:text-[25px] text-[20px] font-semibold'>Subscription</h1>

                <div className='flex items-center justify-center overflow-hidden rounded-2xl md:w-[200px] w-[160px] md:h-[35px] h-[30px] bg-[#222]'>
                    <span className='md:w-[100px] w-[80px] md:text-[18px] text-[15px] flex items-center justify-center font-medium rounded-3xl bg-orange-400 md:h-[35px] h-[30px]'>Monthly</span>
                    <span className='md:w-[100px] w-[80px] md:text-[18px] text-[15px] flex items-center justify-center font-medium md:h-[35px] h-[30px]'>Yearly</span>
                </div>
            </span>


            <span className='w-full h-[75vh] flex items-center justify-evenly flex-wrap overflow-x-hidden xl:overflow-y-hidden overflow-y-scroll xl:gap-y-0 gap-y-[25px] gap-x-[10px] mt-[15px] pt-[10px]'>
                {Data.map((item) => (
                    <div key={item.id} className='w-[220px] h-fit bg-[#333] cursor-pointer hover:scale-[1.03] duration-500 rounded-md p-[15px] hover:bg-orange-400/80'>
                        <h2 className='text-[25px] font-bold leading-5 text-white/80'>30</h2>
                        <h4 className='text-[14px] font-semibold text-white/60'>Days</h4>
                        <h1 className='text-[24px] font-medium'>£ {item.Amount}</h1>
                        <p className='text-[13px] mb-[15px]'>{item.About}</p>
                        <div className='w-full flex items-center justify-center'>
                            <button className='w-[120px] py-[4px] flex items-center justify-center border-[1.5px] border-black rounded-3xl hover:bg-black duration-500'>Pay Now</button>
                        </div>
                    </div>
                ))}
            </span>
        </div>
    </div>
  )
}

export default SubscriptionPage