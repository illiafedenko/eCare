import React from 'react'

export default function WideImage(props) {
  return (
    <div className=' relative w-full aspect-wide'>
      <img src={props.image} className=' w-full h-full'></img>
      <p className=' absolute left-0 bottom-0 pl-[40px] md:pl-[50px] lg:pl-[100px] pb-[20px] md:pb-[40px] lg:pb-[60px] text-white font-bold text-[32px] sm:text-[40px] md:text-[60px] leading-none text-left'>{props.text}</p>
    </div>
  )
}
