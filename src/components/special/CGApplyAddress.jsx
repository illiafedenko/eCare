import React from 'react';
import NormalInput from '../general/NormalInput';
import dummyData from '../../dummydata';


export default function CGApplyAddress() {
  return (
    <div className=' w-full flex flex-col gap-y-4'>
      <p className=' font-poppins text-[24px] '>Address</p>

      <div className=' w-full'>
        <p className='mb-2 text-left text-gray-500 font-poppins' >Street Address <span className=' text-red-600'>*</span></p>
        <NormalInput type="text" name="street" placeholder="Street Address" required />
      </div>
      <div className=' w-full'>
        <p className='mb-2 text-left text-gray-500 font-poppins' >City <span className=' text-red-600'>*</span></p>
        <NormalInput type="tel" name="city" placeholder="City" required />
      </div>
      <div className=' w-full'>
        <p className='mb-2 text-left text-gray-500 font-poppins' >State <span className=' text-red-600'>*</span></p>
        <select name="state" className="appearance-none rounded-[4px] w-full py-3 px-3 focus:border-blue-500 border-[1px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline ">
          {
            dummyData.USStateList.map((item, i) => {
              return <option value={item.abbr}>{item.stateName}</option>
            })
          }
        </select>
      </div>
      <div className=' w-full'>
        <p className='mb-2 text-left text-gray-500 font-poppins' >Zip Code<span className=' text-red-600'>*</span></p>
        <NormalInput type="text" name="zipcode" placeholder="zip code" required />
      </div>

    </div>
  )
}
