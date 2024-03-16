import React from 'react'
import Header from './Header'
import Card from './DB-contents/Card'
import Transaction from './DB-contents/Transaction'
import Report from './DB-contents/Report'
import Budget from './DB-contents/Budget'
import Subscription from './DB-contents/Subscription'
import Savings from './DB-contents/Savings'
import Loans from './DB-contents/Loans'
import FinancialAdvice from './DB-contents/FinancialAdvice'

const Dashboard = ({sideBarWidthHandle, }) => {

    const LSUsername = localStorage.getItem('firstname')

    
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center xl:px-0 2sm:px-[20px] px-[10px]'>
        <Header sideBarWidthHandle={sideBarWidthHandle} LSUsername={LSUsername}/>

        <div className='w-full flex items-center justify-center gap-[10px]  lg:justify-between flex-wrap'>
            <Card />
            <Transaction />
            <Report />
        </div>
        <div className='mt-[10px] flex w-full items-center lg:justify-between justify-center gap-[10px] flex-wrap'>
            <Budget />

            <span className='sm:w-fit w-full min-h-[350px] flex flex-col items-center justify-between gap-[10px] 2sm:gap-0'>
                <Subscription />
                <Savings />
            </span>

            <span className='sm:w-fit w-full min-h-[350px] flex flex-col items-center justify-between gap-[10px] 2sm:gap-0'>
                <Loans />
                <FinancialAdvice />
            </span>
        </div>
    </div>
  )
}

export default Dashboard