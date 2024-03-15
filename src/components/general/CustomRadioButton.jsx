import React, { useState, useEffect } from 'react'

export default function CustomRadioButton(props) {

	/**
	 * Definition
	 */
	const [checked, setChecked] = useState(props.value);
	const [init, setInit] = useState([]);

	/**
	 * Synchronization
	 */
	useEffect(() => {
		console.log(checked);
		// setChecked(props.value)
	}, [checked])


	const handleClick = () => {
		setChecked(!checked);
	}

	return (
		<>
			{!checked ?
				<div className='w-3 h-3 rounded-full border-[1px] border-transparent hover:border-green-600 hover:cursor-pointer outline-none bg-white' onClick={handleClick}></div>
				: <div className='w-3 h-3 rounded-full border-[1px] border-transparent hover:border-green-600 bg-green-600 hover:cursor-pointer outline-none' onClick={handleClick}></div>
			}
		</>
	)
}
