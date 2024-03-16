import React from 'react'
import { FaPlus, FaUser } from 'react-icons/fa'

const Savings = () => {
  return (
    <div className='sm:w-[360px] w-[95%] 2sm:h-[167px] h-[170px] bg-[#141414] py-2 px-4 rounded-xl'>
        <div className='w-full flex items-center justify-between 2sm:mt-2 mt-1 text-[17px]'>
            <h3 className='font-semibold'>Savings</h3>
            <button><FaPlus/></button>
        </div>

        <div className='w-full mt-2 flex flex-col items-start justify-start gap-[10px]'>
            <span className='w-full flex items-center justify-between'>
                <div className='flex items-center justify-start gap-[10px]'>
                    <span className='2sm:w-[35px] w-[30px] 2sm:h-[35px] h-[30px] rounded-full flex items-center justify-center bg-[#444]'>
                        <FaUser/>
                    </span>
                    <h4 className='font-medium text-[14px]'>Pay big sis school fees</h4>
                </div>

                <p className='font-medium'>£4700000</p>
            </span>


            <span className='w-full flex flex-col gap-[15px]'>
                <div className='flex items-center justify-start gap-[10px]'>
                    <h4 className='px-1 bg-[#333] text-[13px]'>Date taken 23/06/23</h4>
                    <h4 className='px-1 bg-[#333] text-[13px]'>Amount left 1700000</h4>
                </div>
                <div className='w-full h-[7px] relative bg-[#444] rounded-xl overflow-hidden'>
                    <span className='w-[72%] h-full rounded-xl bg-orange-400 absolute left-0 bottom-0'></span>
                </div>
            </span>
        </div>
    </div>
  )
}

export default Savings