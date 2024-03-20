import React, { useState, useEffect } from 'react'

export default function CustomRadioButton(props) {

	return (
		<>
			{!props.value ?
				<div className='w-3 h-3 rounded-full border-[1px] border-green-600 hover:cursor-pointer outline-none bg-white' onClick={() => props.onClick(props.label)}></div>
				: <div className='w-3 h-3 rounded-full border-[1px] border-green-600 bg-green-600 hover:cursor-pointer outline-none' onClick={() =>props.onClick(props.label)}></div>
			}
		</>
	)
}
