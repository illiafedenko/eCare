import { faCheckCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import MiniNormalButton from '../general/MiniNormalButton'

export default function PaymentPlanCard(props) {
  return (
    <>
      {props.popular ?
        <div className=' flex flex-col items-start max-w-[400px] min-w-[300px] bg-gradient-to-br from-green-600 to-green-300 border-[2px] rounded-[12px] border-green-600  py-[40px] px-[48px]'>

          <div className=' bg-yellow-400 rounded-[6px] px-3 mb-2'>
            Popular
          </div>
          <div className=' inline-block font-raleway text-[16px] font-semibold py-[6px] px-[12px] bg-gray-300 rounded-[6px]'>{props.category}</div>
          <div className=' my-[24px] w-full border-t-[1px] border-gray-300'></div>
          <div className=' flex flex-col gap-[4px] items-start'>
            <p className=' text-[60px] font-raleway font-extrabold'>{props.price}</p>
            <p className=' text-[14px] font-poppins'>Per member, per Month</p>
          </div>
          <div className=' my-[24px] w-full border-t-[1px] border-gray-300'></div>
          <div className=' w-full flex flex-row items-center gap-[8px]'>
            <FontAwesomeIcon icon={faCheckCircle} />
            <div className=' w-full text-left flex flex-row justify-between items-center gap-2'>
              <p className=' text-[14px] h-[24px] line-clamp-1'>Name of the Service </p>
              {/* <span className=" text-[12px] h-[20px]  min-w-[90px] inline-flex items-center rounded-md bg-green-200 px-2 font-medium text-green-700">Coming soon</span> */}
            </div>
          </div>
          <div className=' w-full flex flex-row items-center gap-[8px]'>
            <FontAwesomeIcon icon={faCheckCircle} />
            <div className=' text-left w-full flex flex-row justify-between items-center gap-2'>
              <p className=' text-[14px] h-[24px] line-clamp-1'>Name of the Service Service Service Offerings </p>
              <span className=" min-w-[90px]"></span>
            </div>
          </div>
          <div className=' w-full flex flex-row items-center gap-[8px]'>
            <FontAwesomeIcon icon={faCircleXmark} className=' text-red-600' />
            <div className=' text-left w-full flex flex-row justify-between items-center gap-2'>
              <p className=' text-[14px] h-[24px] line-clamp-1'>Name of the Service Service Service Offerings </p>
              <span className=" text-[12px] h-[20px]  min-w-[90px] inline-flex items-center rounded-md bg-green-200 px-2 font-medium text-green-700">Coming soon</span>
            </div>
          </div>
          <div className=' w-full flex flex-row items-center gap-[8px]'>
            <FontAwesomeIcon icon={faCheckCircle} />
            <div className=' text-left w-full flex flex-row justify-between items-center gap-2'>
              <p className=' text-[14px] h-[24px] line-clamp-1'>Name of the Service Service Service Offerings </p>
              <span className=" text-[12px] h-[20px]  min-w-[90px] inline-flex items-center rounded-md bg-green-200 px-2 font-medium text-green-700">Coming soon</span>
            </div>
          </div>
          <div className=' w-full flex flex-row items-center gap-[8px]'>
            <FontAwesomeIcon icon={faCheckCircle} />
            <div className=' text-left w-full flex flex-row justify-between items-center gap-2'>
              <p className=' text-[14px] h-[24px] line-clamp-1'>Name of the Service Service Service Offerings </p>
              <span className=" text-[12px] h-[20px]  min-w-[90px] inline-flex items-center rounded-md bg-green-200 px-2 font-medium text-green-700">Coming soon</span>
            </div>
          </div>
          <div className=' w-full flex flex-row items-center gap-[8px]'>
            <FontAwesomeIcon icon={faCheckCircle} />
            <div className=' text-left w-full flex flex-row justify-between items-center gap-2'>
              <p className=' text-[14px] h-[24px] line-clamp-1'>Name of the Service Service Service Offerings </p>
              <span className=" text-[12px] h-[20px]  min-w-[90px] inline-flex items-center rounded-md bg-green-200 px-2 font-medium text-green-700">Coming soon</span>
            </div>
          </div>
          <div className=' w-full flex flex-row items-center gap-[8px]'>
            <FontAwesomeIcon icon={faCheckCircle} />
            <div className=' text-left w-full flex flex-row justify-between items-center gap-2'>
              <p className=' text-[14px] h-[24px] line-clamp-1'>Name of the Service Service Service Offerings </p>
              <span className=" text-[12px] h-[20px]  min-w-[90px] inline-flex items-center rounded-md bg-green-200 px-2 font-medium text-green-700">Coming soon</span>
            </div>
          </div>
          <div className=' w-full mt-[40px] mb-[40px]'>
            <div className=' w-full h-[36px] bg-black rounded-[6px] hover:cursor-pointer flex flex-row items-center'>
              <p className='text-[16px] w-full text-center font-raleway text-white'>Start free 14-day Trial</p>
            </div>
          </div>
        </div>
        :
        <div className=' flex flex-col items-start max-w-[400px] min-w-[300px] border-[2px] mb-[20px] rounded-[12px] border-green-600 py-[40px] px-[48px]'>
          <div className=' inline-block font-raleway text-[16px] font-semibold py-[6px] px-[12px] bg-gray-300 rounded-[6px]'>{props.category}</div>
          <div className=' my-[24px] w-full border-t-[1px] border-gray-300'></div>
          <div className=' flex flex-col gap-[4px] items-start'>
            <p className=' text-[60px] font-raleway font-extrabold'>{props.price}</p>
            <p className=' text-[14px] font-poppins'>Per member, per Month</p>
          </div>
          <div className=' my-[24px] w-full border-t-[1px] border-gray-300'></div>
          <div className=' w-full flex flex-row items-center gap-[8px]'>
            <FontAwesomeIcon icon={faCheckCircle} />
            <div className=' w-full text-left flex flex-row justify-between items-center gap-2'>
              <p className=' text-[14px] h-[24px] line-clamp-1'>Name of the Service </p>
              {/* <span className=" text-[12px] h-[20px]  min-w-[90px] inline-flex items-center rounded-md bg-green-200 px-2 font-medium text-green-700">Coming soon</span> */}
            </div>
          </div>
          <div className=' w-full flex flex-row items-center gap-[8px]'>
            <FontAwesomeIcon icon={faCheckCircle} />
            <div className=' text-left w-full flex flex-row justify-between items-center gap-2'>
              <p className=' text-[14px] h-[24px] line-clamp-1'>Name of the Service Service Service Offerings </p>
              <span className=" min-w-[90px]"></span>
            </div>
          </div>
          <div className=' w-full flex flex-row items-center gap-[8px]'>
            <FontAwesomeIcon icon={faCircleXmark} className=' text-red-600' />
            <div className=' text-left w-full flex flex-row justify-between items-center gap-2'>
              <p className=' text-[14px] h-[24px] line-clamp-1'>Name of the Service Service Service Offerings </p>
              <span className=" text-[12px] h-[20px]  min-w-[90px] inline-flex items-center rounded-md bg-green-200 px-2 font-medium text-green-700">Coming soon</span>
            </div>
          </div>
          <div className=' w-full flex flex-row items-center gap-[8px]'>
            <FontAwesomeIcon icon={faCheckCircle} />
            <div className=' text-left w-full flex flex-row justify-between items-center gap-2'>
              <p className=' text-[14px] h-[24px] line-clamp-1'>Name of the Service Service Service Offerings </p>
              <span className=" text-[12px] h-[20px]  min-w-[90px] inline-flex items-center rounded-md bg-green-200 px-2 font-medium text-green-700">Coming soon</span>
            </div>
          </div>
          <div className=' w-full mt-[40px] mb-[40px]'>
            <div className=' w-full h-[36px] bg-black rounded-[6px] hover:cursor-pointer flex flex-row items-center'>
              <p className='text-[16px] w-full text-center font-raleway text-white'>Start free 14-day Trial</p>
            </div>
          </div>
        </div>
      }
    </>
  )
}
