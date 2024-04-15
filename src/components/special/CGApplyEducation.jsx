import React from 'react'
import NormalInput from '../general/NormalInput';

export default function CGApplyEducation() {
  return (
    <div className=' w-full flex flex-col gap-y-4'>
      <p className=' font-poppins text-[24px] '>Highest Level of Education</p>

      <div className=' w-full'>
        <p className='mb-2 text-left text-gray-500 font-poppins' >School <span className=' text-red-600'>*</span></p>
        <NormalInput type="text" name="school" placeholder="Street Address" required />
      </div>
      <div className=' w-full'>
        <p className='mb-2 text-left text-gray-500 font-poppins' >Degree <span className=' text-red-600'>*</span></p>
        <NormalInput type="text" name="degree" placeholder="City" required />
      </div>

      <div className=' w-full'>
        <p className='mb-2 text-left text-gray-500 font-poppins' >Year <span className=' text-red-600'>*</span></p>
        <NormalInput type="text" name="graduationYear" placeholder="1990" required />
      </div>

    </div>
  )
}
