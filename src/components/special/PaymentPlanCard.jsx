import { faCheckCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import MiniNormalButton from '../general/MiniNormalButton'

export default function PaymentPlanCard({ id, name, period, hourly, hours }) {
  return (

    <div className=' flex flex-col items-start max-w-[400px] min-w-[276px] border-[2px] mb-[20px] rounded-[12px] border-green-600 bg-gradient-to-tr from-green-700 to-green-500 py-[40px] px-[48px]'>
      <div className=' inline-block font-poppins text-[16px] font-bold py-[6px] px-[12px] bg-gray-200 rounded-[6px] text-green-700'>{name}</div>
      <div className=' my-[24px] w-full border-t-[1px] border-gray-300'></div>
      <div className=' flex flex-col gap-[4px] items-start text-slate-100'>
        <p className=' text-[60px] font-raleway font-extrabold'>${hourly * hours}</p>
        <p className=' text-[14px] font-poppins'><span className='  font-bold'>{period == 'w' ? 'Weekly ' : 'Monthly '}</span>Plan</p>
      </div>
      <div className=' my-[24px] w-full border-t-[1px] border-gray-300'></div>
      <div className=' w-full flex flex-row items-center gap-[8px] text-white'>
        <FontAwesomeIcon icon={faCheckCircle} />
        <div className=' w-full text-left flex flex-row justify-between items-center gap-2'>
          <p className=' text-[14px] h-[24px] line-clamp-1'>${hourly}/hr</p>
        </div>
      </div>
      <div className=' w-full flex flex-row items-center gap-[8px] text-white'>
        <FontAwesomeIcon icon={faCheckCircle} />
        <div className=' w-full text-left flex flex-row justify-between items-center gap-2'>
          <p className=' text-[14px] h-[24px] line-clamp-1'>{hours} hours</p>
        </div>
      </div>
    </div>
  )
}
