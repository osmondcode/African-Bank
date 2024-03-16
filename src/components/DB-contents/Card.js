import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Card = () => {
  return (
    <div className='sm:w-[360px] w-[95%] 2sm:h-[250px] h-[200px] bg-[#141414] py-2 px-4 rounded-xl'>
        <div className='w-full flex items-center justify-between 2sm:mt-2 mt-1 text-[17px]'>
            <h3 className='font-semibold'>Cards</h3>
            <button><FaPlus/></button>
        </div>

        <div className='w-full 2sm:h-[180px] h-[140px] mt-3 rounded-lg 2sm:p-3  p-2 bg-gradient-to-br from-[#201f1f] to-[#a56a39] text-white'>
            <h3 className='2sm:mt-3 mt-1 2sm:text-[16px] text-[14px] font-light capitalize'>balance</h3>
            <h1 className='2sm:text-[23px] text-[20px] mb-2 2sm:mt-1 mt-0 font-medium'>£133, 003</h1>
            <h3 className='2sm:text-[21px] text-[17px] spacing'>**** **** **** 2314</h3>

            <span className='2sm:mt-3 mt-1 flex items-start justify-between'>
                <p className='flex flex-col capitalize 2sm:text-[16px] text-[14px] leading-4'>
                    expires
                    <span className='font-semibold'>
                        12/26
                    </span>
                </p>

                <span className='2sm:w-[60px] w-[50px] relative'>
                    <div className='2sm:w-[35px] w-[30px] 2sm:h-[35px] h-[30px] rounded-full  bg-red-500 absolute left-0 top-0 z-20'></div>
                    <div className='2sm:w-[35px] w-[30px] 2sm:h-[35px] h-[30px] rounded-full  bg-yellow-500 absolute right-0 top-0 z-10'></div>
                </span>
            </span>
        </div>
    </div>
  )
}

export default Card