import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Report = () => {
  return (
    <div className='sm:w-[360px] w-[95%] 2sm:h-[250px] h-fit bg-[#141414] py-2 px-4 rounded-xl'>
        <div className='w-full flex items-center justify-between 2sm:mt-2 mt-1 text-[17px]'>
            <h3 className='font-semibold'>Report</h3>
            <button><FaPlus/></button>
        </div>

        <div className='w-full flex items-start justify-start mt-3 2sm:gap-7 gap-5'>
            <span className='flex flex-col-reverse 2sm:text-[17px] text-[15px]  2sm:gap-1.5 gap-1'>
                <h4>0</h4>
                <h4>25</h4>
                <h4>50</h4>
                <h4>75</h4>
                <h4>100</h4>
            </span>

            <span className='grid grid-cols-6 gap-3 2sm:gap-1'>
                <div className='flex flex-col gap-2 2sm:mr-3 mr-0'>
                    <span className='h-[130px] 2sm:h-[150px] bg-[#333] rounded-lg relative overflow-hidden'>
                        <div className='absolute bottom-0 left-0 bg-orange-400 w-full h-[59%] rounded-lg'></div>
                    </span>
                    <p className='capitalize'>apr</p>
                </div>


                <div className='flex flex-col gap-2 2sm:mr-3 mr-0'>
                    <span className='h-[130px] 2sm:h-[150px] bg-[#333] rounded-lg relative overflow-hidden'>
                        <div className='absolute bottom-0 left-0 bg-orange-400 w-full h-[74%] rounded-lg'></div>
                    </span>
                    <p className='capitalize'>may</p>
                </div>


                <div className='flex flex-col gap-2 2sm:mr-3 mr-0'>
                    <span className='h-[130px] 2sm:h-[150px] bg-[#333] rounded-lg relative overflow-hidden'>
                        <div className='absolute bottom-0 left-0 bg-orange-400 w-full h-[61%] rounded-lg'></div>
                    </span>
                    <p className='capitalize'>jun</p>
                </div>


                <div className='flex flex-col gap-2 2sm:mr-3 mr-0'>
                    <span className='h-[130px] 2sm:h-[150px] bg-[#333] rounded-lg relative overflow-hidden'>
                        <div className='absolute bottom-0 left-0 bg-orange-400 w-full h-[50%] rounded-lg'></div>
                    </span>
                    <p className='capitalize'>jul</p>
                </div>


                <div className='flex flex-col gap-2 2sm:mr-3 mr-0'>
                    <span className='h-[130px] 2sm:h-[150px] bg-[#333] rounded-lg relative overflow-hidden'>
                        <div className='absolute bottom-0 left-0 bg-orange-400 w-full h-[74%] rounded-lg'></div>
                    </span>
                    <p className='capitalize'>aug</p>
                </div>

                <div className='flex flex-col gap-2 2sm:mr-3 mr-0'>
                    <span className='h-[130px] 2sm:h-[150px] bg-[#333] rounded-lg relative overflow-hidden'>
                        <div className='absolute bottom-0 left-0 bg-orange-400 w-full h-[81%] rounded-lg'></div>
                    </span>
                    <p className='capitalize'>sep</p>
                </div>
            </span>
        </div>
    </div>
  )
}

export default Report