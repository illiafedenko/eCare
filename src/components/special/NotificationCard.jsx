import React from 'react'

export default function NotificationCard(props) {
  return (
    <div className=' w-full h-24 px-6 bg-gray-50 flex flex-row gap-x-[24px] justify-start items-center rounded-[8px]'>
      <img className=' w-[72px] h-[72px] object-cover rounded-full' src={props.avatar} />
      <div className=' flex flex-col gap-y-1 text-left'>
        <p className=' text-[18px] font-poppins'><span className=' font-bold'>{props.name}</span>&nbsp;&nbsp;&nbsp;{props.event}</p>
        <p className=' text-[12px] font-poppins font-bold text-green-600'>{props.date}</p>
      </div>
    </div>
  )
}
