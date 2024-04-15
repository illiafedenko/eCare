import React from 'react'

export default function CGApplyWorkHistory() {
  return (
    <div className=' w-full flex flex-col gap-y-4'>
      <p className=' font-poppins text-[24px] '>Work Information & Preferences</p>

      <div className=' w-full'>
        <p className='mb-2 text-left text-gray-500 font-poppins' >Current Work Status <span className=' text-red-600'>*</span></p>
        <select name="workingStatus" className="appearance-none rounded-[4px] w-full py-3 px-3 focus:border-blue-500 border-[1px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline ">
          <option value="FT">Full Time</option>
          <option value="PT">Part Time</option>
          <option value="RE">Retired</option>
          <option value="NW">Not Currently Working</option>
          <option value="SH">Stay-at-Home Parent</option>
          <option value="ST">Student &#40; Must be 21 &#41;</option>
        </select>
      </div>
      <div className=' w-full'>
        <p className='mb-2 text-left text-gray-500 font-poppins' >Do you have a registered automobile, required insurance and driver’s license? <span className=' text-red-600'>*</span></p>
        <div className="flex gap-10">
          <div className="inline-flex items-center">
            <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="html">
              <input name="automobile" type="radio"
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
              Yes
            </label>
          </div>
          <div className="inline-flex items-center">
            <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="react">
              <input name="automobile" type="radio"
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
              No
            </label>
          </div>
        </div>
      </div>
      <div className=' w-full'>
        <p className='mb-2 text-left text-gray-500 font-poppins' >Do you have an estimate of how many hours per week you would like to work? <span className=' text-red-600'>*</span></p>
        <select name="hourInWeek" className="appearance-none rounded-[4px] w-full py-3 px-3 focus:border-blue-500 border-[1px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline ">
          <option value="4">2-4</option>
          <option value="8">4-8</option>
          <option value="12">8-12</option>
          <option value="16">12-16</option>
          <option value="40">All the work I can get!</option>
        </select>
      </div>
      <div className=' w-full flex flex-col items-start'>
        <p className='mb-2 text-left text-gray-500 font-poppins' >Do you have preferred times of day? <span className=' text-red-600'>*</span></p>
        <div className=' flex flex-row gap-x-3'>
          <input type="checkbox" id="mornings" name="mornings" className=' accent-green-600' />
          <label className=' text-gray-500 font-poppins' for="mornings">Mornings</label>
        </div>
        <div className=' flex flex-row gap-x-3'>
          <input type="checkbox" id="afternoons" name="afternoons" className=' accent-green-600' />
          <label className=' text-gray-500 font-poppins' for="afternoons">Afternoons</label>
        </div>
        <div className=' flex flex-row gap-x-3'>
          <input type="checkbox" id="evenings" name="evenings" className=' accent-green-600' />
          <label className=' text-gray-500 font-poppins' for="evenings">Evenings</label>
        </div>
        <div className=' flex flex-row gap-x-3'>
          <input type="checkbox" id="weekends" name="weekends" className=' accent-green-600' />
          <label className=' text-gray-500 font-poppins' for="weekends">Weekends</label>
        </div>
      </div>
      <div className=' w-full'>
        <p className='mb-2 text-left text-gray-500 font-poppins' >Have you been fully vaccinated for Covid-19? <span className=' text-red-600'>*</span></p>
        <div className="flex gap-10">
          <div className="inline-flex items-center">
            <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="html">
              <input name="automobile" type="radio"
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
              Yes
            </label>
          </div>
          <div className="inline-flex items-center">
            <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="react">
              <input name="automobile" type="radio"
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
              No
            </label>
          </div>
        </div>
      </div>

    </div>
  )
}
