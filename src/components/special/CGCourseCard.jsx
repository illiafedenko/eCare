import React from 'react'

export default function CGCourseCard(props) {
  return (
    <div className=' w-full flex flex-col items-center' >
      <div className=' w-full aspect-4/3 max-w-[320px] rounded-[24px] relative bg-red-50'>
        <img className=' w-full h-full object-cover rounded-[24px]' src={props.image} />
        <div className=' absolute top-0 left-0 flex flex-row items-center justify-center bg-black w-full h-full rounded-[24px] opacity-40'>
        </div>
        <div className=' absolute top-0 left-0 flex flex-row items-center justify-center w-full h-full'>
          <p className=' opacity-100 text-[20px] font-poppins font-bold text-white'>{props.title}</p>
        </div>
        <div className=' absolute bottom-3 w-full px-[24px] h-[32px]'>
          <button className=' w-full h-full bg-gray-100 rounded-full text-[16px] leading-none font-raleway font-bold text-green-600'>{props.buttonText}</button>
        </div>
      </div>
    </div>
  )
}
