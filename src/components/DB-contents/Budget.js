import React from 'react'
import { FaClipboardCheck, FaPlus } from 'react-icons/fa'

const Budget = ({darkMode}) => {
  return (
    <div className='sm:w-[360px] w-[95%] 2sm:h-[350px] h-fit bg-[#141414] py-2 px-4 rounded-xl'>
        <div className='w-full flex items-center justify-between 2sm:mt-2 mt-1 text-[17px]'>
            <h3 className='font-semibold'>Budget</h3>
            <button><FaPlus/></button>
        </div>

        <div className='w-full mt-2 flex flex-col items-start justify-start'>
            <span className='w-full flex items-center justify-between text-[21px] font-bold'>
                <h1>Cash</h1>
                <h1>£ 500, 000</h1>
            </span>

            <span className='w-full mt-[10px] flex flex-col items-start justify-start gap-[10px] bg-white/10 p-3 rounded-lg'>
                <div className='flex w-full items-start justify-between'>

                    <span className='flex items-start justify-start gap-[10px]'>
                    <button>
                        <FaClipboardCheck/>
                    </button>
                    <div>
                        <h4 className='leading-5 font-medium text-[16px]'>Subscriptions</h4>
                        <p className='text-[11px] '>Automated</p>
                    </div>
                    </span>

                    <h3 className='text-[15px] font-medium'>£40000</h3>
                </div>

                <div className='flex w-full items-start justify-between'>

                    <span className='flex items-start justify-start gap-[10px]'>
                    <button>
                        <FaClipboardCheck/>
                    </button>
                    <div>
                    <h4 className='leading-5 font-medium text-[16px]'>Loan Payment</h4>
                        <p className='text-[11px] '>Automated</p>
                    </div>
                    </span>

                    <h3 className='text-[15px] font-medium'>£120000</h3>
                </div>

                <div className='flex w-full items-start justify-between'>

                    <span className='flex items-start justify-start gap-[10px]'>
                    <button>
                        <FaClipboardCheck/>
                    </button>
                    <div>
                    <h4 className='leading-5 font-medium text-[16px]'>Foodstuff</h4>
                        <p className='text-[11px] '>Automated</p>
                    </div>
                    </span>

                    <h3 className='text-[15px] font-medium'>£20000</h3>
                </div>

                <div className='flex w-full items-start justify-between'>

                    <span className='flex items-start justify-start gap-[10px]'>
                    <button>
                        <FaClipboardCheck/>
                    </button>
                    <div>
                    <h4 className='leading-5 font-medium text-[16px]'>Transportation</h4>
                        <p className='text-[11px] '>Automated</p>
                    </div>
                    </span>

                    <h3 className='text-[15px] font-medium'>£21000</h3>
                </div>

                <div className='flex w-full items-start justify-between'>

                    <span className='flex items-start justify-start gap-[10px]'>
                    <button>
                        <FaClipboardCheck/>
                    </button>
                    <div>
                    <h4 className='leading-5 font-medium text-[16px]'>Investments</h4>
                        <p className='text-[11px] '>Automated</p>
                    </div>
                    </span>

                    <h3 className='text-[15px] font-medium'>£250000</h3>
                </div>
            </span>
        </div>
    </div>
  )
}

export default Budget