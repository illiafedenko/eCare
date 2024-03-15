import React from 'react'

export default function MiniNormalButton(props) {
  return (
    <button className="text-white w-full h-full font-poppins border-none outline-none focus:border-none focus:outline-none rounded-none" style={{ color: props.textColor, backgroundClip: props.color }} onClick={props.onClick} >{props.text}</button>
  )
}
