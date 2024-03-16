import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Loans = () => {
  return (
    <div className='sm:w-[360px] w-[95%] 2sm:h-[167px] h-[200px] bg-[#141414] py-2 px-4 rounded-xl'>
        <div className='w-full flex items-center justify-between 2sm:mt-2 mt-1 text-[17px]'>
            <h3 className='font-semibold'>Loans</h3>
            <button><FaPlus/></button>
        </div>

        <div className='w-full mt-2 flex items-start justify-start gap-[10px]'>
            <span className='w-[90px] h-[90px] flex items-center justify-center relative gradient rounded-full'>
                <h1 className='text-[23px] absolute z-40 font-bold'>
                    50%
                </h1>
            </span>

            <span className='ml-[25px] flex flex-col items-start justify-start h-full'>
                <p className='text-[14px]'>Savings</p>
                <h3 className='font-semibold'>£ 1, 000, 000</h3>

                <p className='text-[14px] mt-[8px]'>Target Reached</p>
                <h3 className='font-semibold'>£ 500, 000</h3>
            </span>
        </div>
    </div>
  )
}

export default Loans