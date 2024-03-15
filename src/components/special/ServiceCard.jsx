import React from 'react'

export default function ServiceCard(props) {
	return (
		<div className=' flex flex-col py-[36px] px-[40px] bg-white gap-6 font-Poppins hover:shadow-xl'>
			<div className=' w-[48px] h-[48px]'	>
				<img src={props.iconSrc}></img>
			</div>
			<div className=' flex flex-col bg-white gap-2 font-Poppins'>
				<p className=' text-left font-poppins font-bold'>{props.serviceName}</p>
				<p className=' text-left font-poppins line-clamp-3 h-[72px] '>{props.serviceText}</p>
			</div>
		</div>
	)
}
