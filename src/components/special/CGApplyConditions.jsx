import React from 'react'

export default function CGApplyConditions() {
  return (
    <div className=' w-full flex flex-col gap-y-4'>
      <p className=' font-poppins text-[24px] '>Screening and Application Fee</p>

      <div className=' w-full'>
        <p className='mb-2 text-left text-gray-500 font-poppins' >Ecare requires all Nabors to provide criminal background screening and DMV records. This screening is performed after the application is reviewed, your interview is completed and a provisional offer is made. At that time you’ll need to provide consent for the screening, and pay a $40 fee to cover the costs. You cannot become a Nabor without this step.</p>
        <div className=' w-full max-h-[300px] mt-[40px] font-poppins overflow-y-scroll border-[1px] px-2 py-2'>
          <p className=' w-full text-left text-[20px]'>ECARE SERVICE PROVIDER AGREEMENT</p>
          <p className=' text-left'>
            We only seek Nabors who share our vision to bring JOY to the lives of seniors and their families. While we have very rigorous standards for our independent contractors, we also believe that the diversity of backgrounds and experiences of our Nabors further strengthens the community.
            We only seek Nabors who share our vision to bring JOY to the lives of seniors and their families. While we have very rigorous standards for our independent contractors, we also believe that the diversity of backgrounds and experiences of our Nabors further strengthens the community.
            We only seek Nabors who share our vision to bring JOY to the lives of seniors and their families. While we have very rigorous standards for our independent contractors, we also believe that the diversity of backgrounds and experiences of our Nabors further strengthens the community.
            We only seek Nabors who share our vision to bring JOY to the lives of seniors and their families. While we have very rigorous standards for our independent contractors, we also believe that the diversity of backgrounds and experiences of our Nabors further strengthens the community.
          </p>
        </div>
        <div className="flex items-center my-4">
          <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded accent-green-600" />
          <label className="ms-2 text-sm text-gray-500 font-poppins font-medium dark:text-gray-300">Accept terms and conditions</label>
        </div>
        <p className=' text-left font-poppins'>
          By checking the above box, I acknowledge I have read and agree to the conditions of the Service Provider Agreement.
        </p>
      </div>
    </div>
  )
}
