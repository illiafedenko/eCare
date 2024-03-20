import React from 'react'

export default function LargeInput(props) {
  return (
    <div className=' w-full flex flex-col items-start gap-[16px]'>
      <p className=' w-full text-[20px] text-left font-poppins font-bold'>{props.label}</p>
      <div className=' w-full h-[60px]'>
        <input
          className=' w-full text-[18px] px-4 h-full border-[1px] border-gray-300 focus:border-blue-500 outline-none rounded-[4px]'
          placeholder={props.placeholder}
          name={props.name}
          onChange={props.onChange}
          required={props.required}
        />
      </div>
    </div>
  )
}