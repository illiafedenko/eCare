import React from 'react'

export default function SettingInput(props) {
  return (
    <div className=' w-full flex flex-col items-start gap-1'>
      <p className=' w-full text-[16px] text-left font-raleway'>{props.label}</p>
      <div className=' w-full h-[48px]'>
        <input
          className=' w-full text-[16px] font-raleway px-4 h-full border-[1px] border-gray-300 disabled:bg-gray-200 disabled:text-gray-400 focus:border-blue-500 outline-none rounded-[16px]'
          placeholder={props.placeholder}
          type={props.type}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          required={props.required}
          disabled={props.disabled}
        />
      </div>
    </div>
  )
}
