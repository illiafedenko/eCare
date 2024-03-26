import React from 'react'

export default function SmallInput(props) {
  return (
    <div className=' w-full flex flex-col items-start'>
      <span className=' font-poppins text-left'>{props.label}</span>
      <div className=' w-full h-[48px]'>
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
