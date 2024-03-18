import React from 'react'

export default function CareGIverInfo(props) {
  return (
    <div className=' w-full'>
      <div className=' w-full aspect-square'>
        <img className=' w-full h-full object-cover' src={props.avatar}></img>
      </div>
      <p className=' mt-[24px] text-left font-poppins font-bold text-[24px]'>{props.name}</p>
      <p className=' mt-[8px] text-left font-poppins font-semibold text-[16px]'>{props.role}</p>
      <div className=' w-full h-[144px] overflow-ellipsis'>
        <p className=' mt-[16px] w-full h-full line-clamp-6  text-left font-poppins text-[16px] text-gray-600'>{props.description}</p>
      </div>
    </div>
  )
}
