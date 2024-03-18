import { faBagShopping, faGenderless, faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function CareGiverBookCard(props) {
  return (
    <div className=' w-full rounded-[8px] border-[2px] border-gray-200'>
      <div className=' w-full aspect-4/3'>
        <img className=' w-full h-full object-cover rounded-t-[8px]' src={props.image} />
        <div className=' py-5 px-3 w-full h-full flex flex-col'>
          <div className=' w-full flex flex-row['>
            <div className=' flex flex-col items-start'>
              <p>{props.name}</p>
              <p>Care Give</p>
            </div>
            <div className=' flex flex-col items-end'>
              <span className=" text-[12px] h-[20px]  min-w-[90px] inline-flex items-center rounded-full bg-green-200 px-2 font-medium text-green-700">Available</span>
            </div>
          </div>
          <div className=' w-full pt-4 grid grid-cols-3 gap-2'>
            <div className=" text-[12px] h-[30px] flex flex-row items-center gap-2 rounded-full bg-gray-200 px-2 font-bold">
              <FontAwesomeIcon className=' text-green-600' icon={faLocationPin} />
              <p className=' text-[12px] font-poppins font-bold'>{props.location}</p>
            </div>
            <div className=" text-[12px] h-[30px] flex flex-row items-center gap-2 rounded-full bg-gray-200 px-2 font-bold">
              <FontAwesomeIcon className=' text-green-600' icon={faBagShopping} />
              <p className=' text-[12px] font-poppins font-bold'>{props.role}</p>
            </div>
            <div className=" text-[12px] h-[30px] flex flex-row items-center gap-2 rounded-full bg-gray-200 px-2 font-bold">
              <FontAwesomeIcon className=' text-green-600' icon={faGenderless} />
              <p className=' text-[12px] font-poppins font-bold'>{props.gender}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
