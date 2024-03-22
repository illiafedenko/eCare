import React, { useState } from 'react'
import NormalInput from '../../components/general/NormalInput'
import GradientButton from '../../components/general/GradientButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import OTPInput from '../../components/general/OTPInput';

export default function OTP() {
	return (
		<div className=' relative h-screen w-screen flex items-center justify-center'>
			<div className=' absolute left-[44px] top-[32px]  text-gray-800'>
				<a href='#' className='flex flex-row gap-3 text-gray-800'>
					<div className=' items-center flex flex-col justify-center'>
						<FontAwesomeIcon icon={faArrowLeftLong} />
					</div>
					<div><p className='text-[20px]'>Back</p></div>
				</a>
			</div>
			<div className=' h-3/4 w-3/4 md:w-3/5 xl:w-1/2 2xl:w-2/5 relative flex flex-col justify-around px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] xl:px-[100px] border-[2px] min-w-[300px] border-green-600 rounded-[36px] pt-[80px] pb-[120px] '>
				<div className='font-poppins py-0 px-5 z-[20]'>
					<p className=' text-[32px] '>OTP Verification</p>
					<p className=' text-[16px] mt-[30px] text-gray-500 '>We’ve sent an OTP code check your email (hugues@gmail.com) and fill it in. </p>
				</div>
				<div className=' z-20'>
					<OTPInput />
				</div>
				<div className=' py-0 z-[20]'>
					<GradientButton text="Submit" />
					<p className=' text-center my-[32px] text-gray-500 font-poppins'>Don't received code?, <span><a href='' className=' text-green-500'>Resend</a></span></p>
					<button className="text-white h-[60px] text-[24px] font-poppins w-full bg-gray-600 hover:bg-gray-500 border-none outline-none focus:border-none focus:outline-none" >Change Email</button>
				</div>

				{/* <div className=' absolute right-0 bottom-[-20px] w-1/3 h-1/3 bg-gradient-to-tl from-green-300 to-white rounded-full'></div> */}
				<div className=' absolute left-[-25px] top-[100px] w-[160px] h-[160px] bg-green-600 rounded-full z-[5]'></div>
				<div className='absolute right-0 top-0 rounded-[36px] w-full h-full z-[10] backdrop-blur-[128px]'>
				</div>
			</div>
		</div>
	)
}
