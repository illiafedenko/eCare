import React from 'react'

export default function NormalInputPromo(props) {
  return (
    <input
      className={`appearance-none rounded-[4px] w-full py-3 px-3 ${props.invalid ? 'border-red-500' : ''} focus:border-blue-500 border-[2px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      onChange={props.onChange}
      required={props.required}
      disabled={props.disabled}
      value={props.value}
    />
  )
}
