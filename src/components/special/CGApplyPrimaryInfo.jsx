import React from 'react'
import NormalInput from '../general/NormalInput'

export default function CGApplyPrimaryInfo() {
  return (
    <div className=' w-full flex flex-col gap-y-4'>
      <p className=' font-poppins text-[24px] '>Personal Information</p>
      <div className=' flex flex-col gap-5 sm:gap-3 sm:flex-row'>
        <div className=' w-full sm:w-1/2 '>
          <p className='mb-2 text-left text-gray-500 font-poppins' >First Name <span className=' text-red-600'>*</span></p>
          <NormalInput type="text" name="firstname" placeholder="First Name" required />
        </div>
        <div className=' w-full sm:w-1/2 '>
          <p className='mb-2 text-left text-gray-500 font-poppins' >Last Name <span className=' text-red-600'>*</span></p>
          <NormalInput type="text" name="lastname" placeholder="Last Name" required />
        </div>
      </div>
      <div className=' w-full'>
        <p className='mb-2 text-left text-gray-500 font-poppins' >Email <span className=' text-red-600'>*</span></p>
        <NormalInput type="text" name="email" placeholder="Email" required />
      </div>
      <div className=' w-full'>
        <p className='mb-2 text-left text-gray-500 font-poppins' >Phone Number <span className=' text-red-600'>*</span></p>
        <NormalInput type="tel" name="phonenumber" placeholder="312-620-9297" required />
      </div>
      <div className=' w-full'>
        <p className='mb-2 text-left text-gray-500 font-poppins' >Date of Birth <span className=' text-red-600'>*</span></p>
        <NormalInput type="text" name="birthday" placeholder="MM-DD-YYYY" required />
      </div>
      <div className=' w-full'>
        <p className='mb-2 text-left text-gray-500 font-poppins' >Gender <span className=' text-red-600'>*</span></p>
        <div className="flex gap-10">
          <div className="inline-flex items-center">
            <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="html">
              <input name="type" type="radio"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-green-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-400 checked:before:bg-gray-900 hover:before:opacity-10"
                id="html" checked />
              <span
                className="absolute text-green-400 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </span>
            </label>
            <label className="mt-px font-light text-gray-700 font-poppins cursor-pointer select-none" htmlFor="html">
              Man
            </label>
          </div>
          <div className="inline-flex items-center">
            <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="react">
              <input name="type" type="radio"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-green-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-400 checked:before:bg-gray-900 hover:before:opacity-10"
                id="react" />
              <span
                className="absolute text-green-400 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </span>
            </label>
            <label className="mt-px font-light text-gray-700 font-poppins cursor-pointer select-none" htmlFor="react">
              Woman
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
