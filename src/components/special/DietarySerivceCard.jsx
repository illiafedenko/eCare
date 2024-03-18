import React from 'react'
import dish1Image from '../../assets/images/dish1.png';

export default function DietarySerivceCard(props) {
  return (
    <div className=' w-full rounded-[6px]'>
      <div className=' w-full aspect-video'>
        <img className=' w-full h-full rounded-t-[6px]' src={props.image}></img>
      </div>
      <div className=' w-full overflow-hidden text-left bg-green-50 rounded-b-[6px] px-[24px] py-[30px]'>
        <p className=' text-[20px] font-poppins font-semibold'>{props.name}</p>
        <p className=' text-[18px] mt-[16px] line-clamp-4 font-poppins text-gray-600'>{props.description}</p>
      </div>
    </div>
  )
}
