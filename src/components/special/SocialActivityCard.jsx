import React from 'react'

export default function SocialActivityCard(props) {
  return (
    <div className=' w-full rounded-[6px] border-[1px] border-green-500'>
      <div className=' w-full aspect-video'>
        <img className=' w-full h-full rounded-t-[6px]' src={props.image}></img>
      </div>
      <div className=' w-full overflow-hidden text-left bg-green-50 rounded-b-[6px] px-[24px] py-[48px]'>
        <p className=' text-[20px] font-poppins font-semibold'>{props.name}</p>
        <p className=' text-[18px] mt-[16px] line-clamp-3 font-poppins text-gray-600'>{props.description}</p>
      </div>
    </div>
  )
}
