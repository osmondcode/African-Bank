import React from 'react'
import { FaAngleDown, FaBars, FaBell, FaCalendar, FaEllipsisH, FaEnvelope, FaPuzzlePiece, FaUser } from 'react-icons/fa'
import AllTransactions from "../Data/TransactionData";
import Footer from '../Footer';

const TransactionPage = ({LSUsername, sideBarWidthHandle, }) => {
    const data = AllTransactions

  return (
        <div className='w-full min-h-screen flex flex-col items-center justify-start sm:px-[30px] px-[10px] top-0 left-0 right-0 bottom-0 absolute'>

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

        <div className='w-full  h-[75vh] flex items-center justify-between mt-[10px]'>

            <span className='bg-[#111] lg:w-[70%] w-full h-[75vh] flex flex-col items-start justify-start overflow-hidden'>
                <div className='flex items-center justify-between w-full h-[50px] border-b-[2px] border-b-black px-[20px] md:text-[15px] text-[14px]'>
                    <span className='flex items-center justify-center md:gap-[5px] gap-0'>
                        <h4 className='font-semibold text-[#fff] w-fit h-[50px] flex items-center justify-center px-[5px] border-b-[2px] border-b-[#fdfdfd]'>All <FaAngleDown className=' ml-[8px] flex sm:hidden'/></h4>
                        <h4 className='hidden font-semibold text-[#888] w-fit h-[50px] sm:flex items-center justify-center px-[5px] border-b-[2px] border-b-transparent'>Paid</h4>
                        <h4 className='hidden font-semibold text-[#888] w-fit h-[50px] sm:flex items-center justify-center px-[5px] border-b-[2px]  border-b-transparent'>Pending</h4>
                        <h4 className='hidden font-semibold text-[#888] w-fit h-[50px] sm:flex items-center justify-center px-[5px] border-b-[2px] border-b-transparent'>Cancelled</h4>
                    </span>
                    <span className='flex items-center justify-center md:gap-[15px] gap-[8px]'>
                        <h4 className='flex text-[13px] md:text-[15px] text-[#888] font-medium items-center justify-center gap-[8px]'><FaCalendar/> DATE:</h4>
                        <h4 className='md:text-[15px] text-[13px] font-semibold'>SEPTEMBER 2023</h4>
                        <FaAngleDown/>
                    </span>
                </div>


                <div className='w-full h-[70vh] flex flex-col items-start justify-start sm:px-[20px] px-[10px] pt-[20px] gap-[10px] overflow-y-scroll overflow-x-hidden'>
                    {data.map((person) => (
                        <div key={person.id} className='w-full flex items-center justify-between py-0.5 border-b-[2px] border-b-black'>
                            <div className='flex items-center gap-[15px]'>
                                <span className='md:w-[38px] md:h-[38px] w-[28px] h-[28px] border-[3px] border-slate-800 flex items-center justify-center rounded-full p-[3px]'>
                                    <FaUser/>
                                </span>
                                <span className='flex items-start justify-start flex-col'>
                                    <h4 className='uppercase font-semibold leading-3 text-[13px] lg:text-[16px]'>{person.name}</h4>
                                    <p className='font-medium text-[#888] text-[12px]'>Reciept</p>
                                </span>
                            </div>

                            <div className='sm:w-[60%] w-fit flex justify-between items-center gap-[15px]'>
                                <span className='2sm:flex hidden items-start justify-start flex-col'>
                                    <h4 className='uppercase font-semibold leading-3 text-[13px] lg:text-[16px]'>{person.date}</h4>
                                    <p className='font-medium text-[#888] text-[12px]'>due date</p>
                                </span>
                                <span className='w-[70px] flex items-start justify-start flex-col '>
                                    <h4 className='uppercase font-semibold leading-3 text-[13px] lg:text-[16px]'>£{person.amount}</h4>
                                    <p className='font-medium text-[#888] text-[12px]'>amount</p>
                                </span>
                                <span className='2sm:w-[70px] w-fit flex items-center justify-start gap-[10px]'>
                                    <p className='text-green-500'>
                                        {person.color}
                                    </p>
                                    <h5 className='font-medium leading-3 text-[13px] lg:text-[16px] hidden 2sm:flex'>{person.status}</h5>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </span>


            <span className='w-[27%] h-[75vh] hidden lg:flex flex-col items-center justify-between'>
                <div className='w-full h-[48%] bg-[#111] fles flex-col items-start justify-start'>
                    <span className='w-full h-[40px] mb-[10px] flex items-center justify-between px-[25px] border-b-[2px] border-b-[#000]'>
                        <h3 className='font-semibold'>New Receipt</h3>
                        <FaEllipsisH/>
                    </span>
                    <span className='w-full flex flex-col items-start justify-start px-[25px]'>
                        <h4 className='font-medium mb-[10px]'>Select template</h4>
                        <div className='w-full border-[2px] border-black h-[40px] px-[12px] flex items-center justify-between mb-[10px]'>
                            Image
                            <FaAngleDown/>
                        </div>
                        <p className='text-[13px] mb-[12px] xl:flex hidden'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente repellendus et quae porro esse aliquam dignissimos vero.</p>
                        <p className='text-[13px] mb-[3px] xl:hidden flex'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente .</p>
                        <button className='xl:flex hidden gap-[10px]'>
                            <FaPuzzlePiece/>
                            <h2 className='font-semibold'>
                                Create Receipt
                            </h2>
                        </button>
                    </span>
                </div>
                <div className='w-full h-[48%] bg-[#111] fles flex-col items-start justify-start'>
                    <span className='w-full h-[40px] mb-[15px] flex items-center justify-between px-[25px] border-b-[2px] border-b-[#000]'>
                        <h3>Overview</h3>
                        <FaEllipsisH/>
                    </span>
                    <span className='w-full flex flex-col items-start justify-start px-[25px]'>
                        <h2 className='text-[19px] font-semibold leading-4'>£10,032</h2>
                        <p className='text-[13px] font-medium text-[#777]'>Total paid</p>
                    </span>
                </div>
            </span>
        </div>
            <Footer/>
        </div>


    
  )
}

export default TransactionPage