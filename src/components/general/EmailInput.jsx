import React from 'react'

export default function EmailInput(props) {
	return (
		<input
			className="appearance-none rounded w-full py-2 px-3 focus:border-blue-300 border-[1px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline "

			type="email"
			placeholder={props.placeholder}
			required
		/>
	)
}
