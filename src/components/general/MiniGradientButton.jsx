import React from 'react'

export default function MiniGradientButton(props) {
	return (
		<button className="text-white w-full h-full font-poppins bg-gradient-to-br from-green-600 to-green-400 hover:from-green-600 hover:to-green-300 border-none outline-none focus:border-none focus:outline-none rounded-none" onClick={props.onClick} >{props.text}</button>
	)
}
