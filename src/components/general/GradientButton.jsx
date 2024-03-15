import React from 'react'

export default function GradientButton(props) {
    return (
        <button className="text-white h-[60px] text-[20px] font-poppins w-full bg-gradient-to-b from-green-500 to-green-200 hover:from-green-600 hover:to-green-300 border-none outline-none focus:border-none focus:outline-none" onClick={props.onClick} >{props.text}</button>
    )
}
