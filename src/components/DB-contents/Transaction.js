import React from 'react'

import AllTransactions from "../Data/TransactionData";

const Transaction = () => {

    const data = AllTransactions
    
  return (
    <div className='sm:w-[360px] w-[95%] 2sm:h-[250px] h-fit bg-[#141414] py-2 px-4 rounded-xl'>
        <div className='w-full flex items-center justify-between 2sm:mt-2 mt-1 text-[17px]'>
            <h3 className='font-semibold'>All Transactions</h3>
            <button className='no-underline font-thin text-[15px]'>See All</button>
        </div>

        <div className='w-full mt-3 flex flex-col items-start justify-start'>

            {data.map((person, i) => (

                i < 4 && (
                <span className='w-full flex items-center justify-between 2sm:mb-2 mb-1'>
                    <div className='flex items-center justify-start'>
                        <span className='2sm:w-[40px] w-[35px] 2sm:h-[40px] h-[35px] bg-slate-300 rounded-full flex items-center justify-center 2sm:text-[23px] text-[21px] overflow-hidden'>
                            <img src={person.image} alt='sarah carter' className='w-full h-full object-cover'/>
                        </span>
                        <span className='mt-1 flex items-start justify-center flex-col capitalize ml-2'>
                            <h4 className='leading-3 font-medium text-[15px] 2sm:text-[18]'>{person.user}</h4>
                            <p className='text-[14px] font-light'>{person.date}</p>
                        </span>
                    </div>

                    <h3 className='font-medium text-[15px] 2sm:text-[17px] text-red-500'>{person.amount}</h3>
                </span>
                )
            ))}
        </div>
    </div>
  )
}

export default Transaction