import React, { useState, useEffect } from 'react'

export default function DateTimeComponent(props) {

  const [selected, setSelected] = useState(props.selected)

  const handleClick = () => {

    setSelected(!selected);
  }

  return (
    <>
      {
        !selected ?
          <div onClick={handleClick} className=' w-full hover:cursor-pointer'>
            <div className=' w-full h-[60px] flex flex-row bg-gray-200 items-center justify-between rounded-full px-[20px]'>
              <p className=' text-[16px] font-poppins'>{props.date}</p>
              <p className=' text-[16px] font-poppins'>{props.time}</p>
            </div>
            <p className=' h-[24px] px-[20px]'></p>
          </div>
          :
          <div onClick={handleClick} className=' w-full text-green-600 hover:cursor-pointer'>
            <div className=' w-full h-[60px] flex flex-row bg-slate-300 items-center justify-between rounded-full px-[20px]'>
              <p className=' text-[16px] font-poppins'>{props.date}</p>
              <p className=' text-[16px] font-poppins'>{props.time}</p>
            </div>
            <p className=' h-[24px] text-[12px] px-[20px] font-bold'>Selected</p>
          </div>

      }
    </>
  )
}
