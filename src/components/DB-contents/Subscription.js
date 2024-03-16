import React from 'react'
import { FaClock, FaPlus } from 'react-icons/fa'

const Subscription = ({darkMode}) => {
  return (
    <div className='sm:w-[360px] w-[95%] 2sm:h-[167px] h-[170px] bg-[#141414] py-2 px-4 rounded-xl'>
        <div className='w-full flex items-center justify-between 2sm:mt-2 mt-1 text-[17px]'>
            <h3 className='font-semibold'>Subscription</h3>
            <button><FaPlus/></button>
        </div>

        <div className='w-full mt-2 flex flex-col items-start justify-start gap-[10px]'>
            <span className='w-full flex items-center justify-between'>
                <div className='flex items-center justify-start gap-[10px]'>
                    <FaClock className='text-red-500'/>

                    <span className='flex text-[15px] items-baseline'>
                        <p className='font-medium'>Linkedin</p>
                        <p className='mr-[4px] text-gray-400 text-[13px]'>due</p>
                        <p className='text-[14px] text-gray-400'>10/09/23</p>
                    </span>
                </div>

                <h4 className='font-medium'>£20000</h4>
            </span>

            <span className='w-full flex items-center justify-between'>
                <div className='flex items-center justify-start gap-[10px]'>
                    <FaClock className='text-red-500'/>

                    <span className='flex text-[15px] items-baseline'>
                        <p className='font-medium'>Netflix</p>
                        <p className='mr-[4px] text-gray-400 text-[13px]'>due</p>
                        <p className='text-[14px] text-gray-400'>7/09/23</p>
                    </span>
                </div>

                <h4 className='font-medium'>£17000</h4>
            </span>

            <span className='w-full flex items-center justify-between'>
                <div className='flex items-center justify-start gap-[10px]'>
                    <FaClock className='text-red-500'/>

                    <span className='flex text-[15px] items-baseline'>
                        <p className='font-medium'>DSTV</p>
                        <p className='mr-[4px] text-gray-400 text-[13px]'>due</p>
                        <p className='text-[14px] text-gray-400'>4/09/23</p>
                    </span>
                </div>

                <h4 className='font-medium'>£13000</h4>
            </span>
        </div>
    </div>
  )
}

export default Subscription