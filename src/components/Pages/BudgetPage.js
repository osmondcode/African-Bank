import React from 'react'
import { FaBars, FaBell, FaClipboardCheck, FaEdit, FaEnvelope,  FaTrash, FaUser } from 'react-icons/fa'
import Plans from "../Data/BudgetData";
import Footer from '../Footer';


const BudgetPage = ({sideBarWidthHandle, LSUsername, addingModalHandle}) => {
    const data = Plans

    
    
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

    <div className='w-full h-[85vh] flex flex-col items-start justify-start '>
        <span className='w-full h-[8vh] flex items-center justify-between '>
            <h2 className='text-[18px]'>Your Budget</h2>
            <span className='flex items-center gap-[15px]'>
                <button className='md:py-[5px] py-[3px] md:w-[90px] w-[80px] bg-orange-400 font-medium rounded-md hover:bg-orange-400/80 duration-500' onClick={addingModalHandle}>Add new</button>
            </span>
        </span>
        

        <div className='w-full h-[75vh] flex flex-col items-start justify-start bg-[#141414]'>

            <div className='w-full flex items-center justify-between sm:px-[15px] px-[5px] py-2 md:text-[18px] text-[17px] font-semibold border-b-[2px] border-b-[#000]'>
                <span className='lg:w-[200px] md:w-[150px] w-[100px] flex items-center justify-center'>
                    <h3>Name</h3>
                </span>
                <span className='lg:w-[200px] md:w-[150px] w-[100px] flex items-center justify-center'>
                    <h3>Price</h3>
                </span>
                <span className='lg:w-[200px] md:w-[150px] w-[100px] flex items-center justify-center'>
                    <h3>Operation</h3>
                </span>
            </div>
            
            {data.length === 0 ? <div className='w-full h-[65vh] flex items-center justify-center text-gray-400 text-[20px]'>
                <h1>You have no Budget</h1>
            </div> : <div className='w-full h-[70vh] overflow-y-scroll overflow-x-hidden'>


            {data.map((item, i) => (
                
                <div key={i} className='w-full mb-[10px] bg-[#141414] hover:bg-[#000]/90 cursor-pointer flex items-center justify-between sm:px-[15px] px-[5px] py-2'>
                    <span className='lg:w-[200px] w-[150px] flex items-center gap-[10px]'>
                        <p className='sm:text-[20px] text-[17px]'>
                            <FaClipboardCheck/>
                        </p>
                        <h2 className='md:text-[18px] text-[16px] w-full truncate capitalize'>{item.plan}</h2>
                    </span>

                    <div className='lg:w-[200px] md:w-[150px] w-[100px] flex items-center justify-center'>
                        <p className='md:text-[18px] text-[16px] font-medium'>£ {item.amount}</p>
                    </div>

                    <span className='lg:w-[200px] md:w-[150px] w-[100px] flex items-center justify-center gap-[30px]'>
                        <p className='lg:flex hidden py-0.5 px-1 rounded-md bg-green-600'>Automated</p>
                        <div className='flex items-center gap-[20px] sm:text-[16px] text-[14px]'>
                            <button className='md:p-2 p-1.5 rounded-md bg-[#282828]'><FaEdit/></button>
                            <button className='md:p-2 p-1.5 rounded-md bg-[#282828]'><FaTrash/></button>
                        </div>
                    </span>
                </div>
                
            ))}
            </div>
            }
        </div>
       </div>

        <Footer/>
    </div>
  )
}

export default BudgetPage