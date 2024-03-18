import React, { useState, useEffect } from 'react'

export default function SwitchButton() {

  const [selected, setSelected] = useState();

  const handleSwift = () => {
    setSelected(!selected);
  }

  return (
    <div className=' bg-white border-[1px] min-w-[340px] text-[20px] font-raleway border-black rounded-[6px] flex flex-row items-center hover:cursor-pointer'>
      <div className=' bg-black text-white rounded-[6px] px-[40px] py-[10px]'>Monthly</div>
      <div className=' bg-white text-black py-[5px] px-[10px]'>
        <span className=' py-[5px]'>Yearly</span>
        <span className=' '>&nbsp;</span>
        <span className=' bg-[#F9D783] rounded-[6px] px-[8px]'>Save 20%</span></div>
    </div>
  )
}
