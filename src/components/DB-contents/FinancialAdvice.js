import React from 'react'
import { FaPlus } from 'react-icons/fa'

const FinancialAdvice = () => {
  return (
    <div className='sm:w-[360px] w-[95%] 2sm:h-[167px] h-[200px] bg-[#141414] py-2 px-4 rounded-xl'>
        <div className='w-full flex items-center justify-between 2sm:mt-2 mt-1 text-[17px]'>
            <h3 className='font-semibold'>Financial Advice</h3>
            <button><FaPlus/></button>
        </div>

        <div className='w-full mt-2 flex items-start justify-start gap-[10px]'>
            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente repellendus et quae porro esse aliquam dignissimos vero hic, maxime exercitationem .
            </p>
        </div>
    </div>
  )
}

export default FinancialAdvice