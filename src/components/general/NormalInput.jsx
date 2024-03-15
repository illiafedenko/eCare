import React from 'react'

export default function NormalInput(props) {
	return (
		<input
			className="appearance-none rounded w-full py-3 px-3 focus:border-blue-300 border-[1px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
			type={props.type}
			placeholder={props.placeholder}
			name={props.name}
			onChange={props.onChange}
			required={props.required}
		/>
	)
}
