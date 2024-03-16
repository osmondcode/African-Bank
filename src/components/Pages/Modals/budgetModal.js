import React from 'react'

const budgetModal = ({addingModalHandle}) => {
  return (
    <div className='w-full h-screen bg-black/90 fixed flex items-center justify-center top-0 left-0 z-[120]' onClick={addingModalHandle}>
        <div className='sm:w-[500px] 2sm:w-[400px] w-[280px] 2sm:h-[250px] h-[180px] bg-[#111] flex flex-col items-center justify-center rounded-xl shadow-lg shadow-black duration-500'>

        </div>
    </div>
  )
}

export default budgetModal