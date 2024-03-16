import React from 'react'
import {FaAngleDown, FaArrowRight, FaBars, FaBell, FaCircle, FaEllipsisH, FaEnvelope, FaFile, FaFilter, FaUser } from 'react-icons/fa'
import Footer from '../Footer'

const ReportPages = ({LSUsername, sideBarWidthHandle, }) => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-start md:px-[30px] px-[10px] top-0 left-0 right-0 bottom-0 absolute text-white'>

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

        <div className='w-full h-[93vh] relative'>

            <span className='w-full flex items-center justify-between sticky top-0 left-0 bg-black pt-[3vh]'>
                <div>
                    <h1 className='md:text-[25px] text-[20px] font-medium md:leading-7 leading-5'>REPORT</h1>
                    <p className='text-[14px]'>Here's your analytic details</p>
                </div>

                <div className='flex items-center justify-center 2sm:gap-[12px] gap-[6px]'>
                    <button className='flex items-center justify-center 2sm:gap-[7px] gap-[4px] md:text-[15px] text-[13px] w-fit h-fit 2sm:px-1.5 px-1 py-1 bg-[#111] rounded-md border-[1px] border-[#444]'>
                        <FaFilter/>
                        Filter by
                    </button>
                    <button className='flex items-center justify-center 2sm:gap-[7px] gap-[4px] md:text-[15px] text-[13px] w-fit h-fit 2sm:px-1.5 px-1 py-1 rounded-md border-[1px] border-orange-400 bg-orange-400'>
                        <FaFile/>
                        Exports
                        <FaAngleDown/>
                    </button>
                </div>
            </span>
            
            <div className='w-full flex flex-col lg:flex-row items-center lg:justify-between justify-center mt-[5vh] gap-y-[10vh] gap-x-[20px]'>
                <span className='lg:w-[48%] md:w-[60%] sm:w-[65%] 2sm:w-[80%] w-full h-[60vh] flex items-center justify-between flex-wrap gap-y-[15px]'>
                    <span className='w-full flex items-center justify-between gap-x-[15px]'>
                        <div className='lg:w-[48%] w-[160px] lg:h-[180px] h-[150px] border-[1px] border-[#888] rounded-md flex flex-col items-center justify-between'>
                            <span className='w-full h-[50px] flex items-center justify-between px-[20px] text-[14px]'>
                                <h3>Total Sales</h3>
                                <button><FaEllipsisH/></button>
                            </span>

                            <span className='w-full h-[50px] px-[20px]'>
                                <h2 className='md:text-[20px] text-[17px] font-semibold '>£ 120,784.02</h2>
                                <p className='flex items-center gap-[7px] text-[11px]'> <p className='w-fit h-fit bg-green-800'>per day</p> £ 1408</p>
                            </span>

                            <span className='w-full md:h-[50px] h-[40px] bg-[#111] flex items-center justify-between px-[20px] text-[14px]'>
                                <h2>View Report</h2>
                                <button><FaArrowRight/></button>
                            </span>
                        </div>
                        <div className='lg:w-[48%] w-[160px] lg:h-[180px] h-[150px] border-[1px] border-[#888] rounded-md flex flex-col items-center justify-between'>
                        <span className='w-full h-[50px] flex items-center justify-between px-[20px] text-[14px]'>
                                <h3>Total Orders</h3>
                                <button><FaEllipsisH/></button>
                            </span>

                            <span className='w-full h-[50px] px-[20px]'>
                                <h2 className='md:text-[20px] text-[17px] font-semibold '>£ 180,474.07</h2>
                                <p className='flex items-center gap-[7px] text-[11px]'> <p className='w-fit h-fit bg-green-800'>per day</p> £ 408</p>
                            </span>

                            <span className='w-full md:h-[50px] h-[40px] bg-[#111] flex items-center justify-between px-[20px] text-[14px]'>
                                <h2>View Report</h2>
                                <button><FaArrowRight/></button>
                            </span>
                        </div>
                    </span>

                    <span className='w-full flex items-center justify-between gap-x-[15px]'>
                        <div className='lg:w-[48%] w-[160px] lg:h-[180px] h-[150px] border-[1px] border-[#888] rounded-md flex flex-col items-center justify-between'>
                            <span className='w-full h-[50px] flex items-center justify-between px-[20px] text-[14px]'>
                                <h3>Wallet</h3>
                                <button><FaEllipsisH/></button>
                            </span>

                            <span className='w-full h-[50px] px-[20px]'>
                                <h2 className='md:text-[20px] text-[17px] font-semibold '>£ 474.87</h2>
                                <p className='flex items-center gap-[7px] text-[11px]'> <p className='w-fit h-fit bg-green-800'>per day</p> £ 0.8</p>
                            </span>

                            <span className='w-full md:h-[50px] h-[40px] bg-[#111] flex items-center justify-between px-[20px] text-[14px]'>
                                <h2>View Report</h2>
                                <button><FaArrowRight/></button>
                            </span>
                        </div>

                        <div className='lg:w-[48%] w-[160px] lg:h-[180px] h-[150px] border-[1px] border-[#888] rounded-md flex flex-col items-center justify-between'>
                            <span className='w-full h-[50px] flex items-center justify-between px-[20px] text-[14px]'>
                                <h3>Cashback</h3>
                                <button><FaEllipsisH/></button>
                            </span>

                            <span className='w-full h-[50px] px-[20px]'>
                                <h2 className='md:text-[20px] text-[17px] font-semibold '>£ 4.03</h2>
                                <p className='flex items-center gap-[7px] text-[11px]'> <p className='w-fit h-fit bg-green-800'>per day</p> £ 0.3</p>
                            </span>

                            <span className='w-full md:h-[50px] h-[40px] bg-[#111] flex items-center justify-between px-[20px] text-[14px]'>
                                <h2>View Report</h2>
                                <button><FaArrowRight/></button>
                            </span>
                        </div>
                    </span>
                </span>

                <span className='lg:w-[48%] w-[350px] h-[57vh] rounded-md border-[0.5px] border-[#888] pt-[20px]'>
                    <div className='w-full px-[25px] py-[10px] flex items-center justify-between'>
                        <h2 className='text-[20px] font-medium'>Revenue</h2>
                        <button className='flex items-center gap-[10px] font-light border-[0.5px] border-[#444] px-[8px] py-[4px] rounded-md'>
                            Month <FaAngleDown/>
                        </button>
                    </div>
                    <div className='w-full px-[25px] py-[10px] flex items-center justify-between'>
                        <h1 className='text-[30px] flex items-center justify-center gap-[6px] font-semibold text-white/80'>£12,204.27s <p className='text-[14px] font-extralight text-green-500'>100%</p></h1>
                        <span className='flex gap-[15px]'>
                            <p className='flex items-center justify-center gap-[6px] text-[15px]'>
                                <FaCircle className='w-[7px] h-[7px] text-orange-400'/>
                                Profit
                            </p>
                            <p className='flex items-center justify-center gap-[6px] text-[15px]'>
                                <FaCircle  className='w-[7px] h-[7px] text-[#444]'/>
                                Loss
                            </p>
                        </span>
                    </div>

                    <div className='w-full px-[25px] flex items-end justify-between '>
                        <span className='flex flex-col gap-[15px]'>
                            <h4 className='text-[18px] font-medium'>20k</h4>
                            <h4 className='text-[18px] font-medium'>15k</h4>
                            <h4 className='text-[18px] font-medium'>10k</h4>
                            <h4 className='text-[18px] font-medium'>5k</h4>
                            <h4 className='text-[18px] font-medium'>0</h4>
                        </span>

                        <span className='w-[80%] flex items-baseline justify-between'>
                            <div className='flex flex-col items-center justify-center gap-[5px]'>
                                <span className='flex gap-[5px] items-baseline'>
                                    <div className='w-[20px] h-[45px] bg-orange-400'></div>
                                    <div className='w-[20px] h-[35px] bg-[#444]'></div>
                                </span>
                                <h3 className='text-[18px] font-medium'>Jan</h3>
                            </div>

                            <div className='flex flex-col items-center justify-center gap-[5px]'>
                                <span className='flex gap-[5px] items-baseline'>
                                    <div className='w-[20px] h-[95px] bg-orange-400'></div>
                                    <div className='w-[20px] h-[80px] bg-[#444]'></div>
                                </span>
                                <h3 className='text-[18px] font-medium'>Feb</h3>
                            </div>

                            <div className='flex flex-col items-center justify-center gap-[5px]'>
                                <span className='flex gap-[5px] items-baseline'>
                                    <div className='w-[20px] h-[105px] bg-orange-400'></div>
                                    <div className='w-[20px] h-[95px] bg-[#444]'></div>
                                </span>
                                <h3 className='text-[18px] font-medium'>Mar</h3>
                            </div>

                            <div className='flex flex-col items-center justify-center gap-[5px]'>
                                <span className='flex gap-[5px] items-baseline'>
                                    <div className='w-[20px] h-[85px] bg-orange-400'></div>
                                    <div className='w-[20px] h-[75px] bg-[#444]'></div>
                                </span>
                                <h3 className='text-[18px] font-medium'>Apr</h3>
                            </div>

                            <div className='flex flex-col items-center justify-center gap-[5px]'>
                                <span className='flex gap-[5px] items-baseline'>
                                    <div className='w-[20px] h-[65px] bg-orange-400'></div>
                                    <div className='w-[20px] h-[45px] bg-[#444]'></div>
                                </span>
                                <h3 className='text-[18px] font-medium'>May</h3>
                            </div>

                            <div className='flex flex-col items-center justify-center gap-[5px]'>
                                <span className='flex gap-[5px] items-baseline'>
                                    <div className='w-[20px] h-[105px] bg-orange-400'></div>
                                    <div className='w-[20px] h-[85px] bg-[#444]'></div>
                                </span>
                                <h3 className='text-[18px] font-medium'>Jun</h3>
                            </div>
                        </span>
                    </div>
                </span>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default ReportPages