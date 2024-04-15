import React from 'react'

export default function CGApplyMore() {
  return (
    <div className=' w-full flex flex-col gap-y-4'>
      <p className=' font-poppins text-[24px] '>More About You</p>

      <div className=' w-full'>
        <p className='mb-2 text-left text-gray-500 font-poppins' >Current Work Status <span className=' text-red-600'>*</span></p>
        <textarea className=' text-[12px] w-full h-full text-gray-700 font-poppins px-3 py-3 outline-none border-[1px] border-gray-300 rounded-[4px]'/>
      </div>
    </div>
  )
}
