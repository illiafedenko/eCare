import React, { useState } from 'react'
import NormalInput from '../components/general/NormalInput'
import GradientButton from '../components/general/GradientButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

export default function RecoverPassword() {

	const [email, setEmail] = useState("");

	const handleChange = (e) => {
		setEmail(e.target.value);
		validation(e.target);
	}

	const sendOTP = (e) => {
		console.log(email);
		var em = document.getElementsByName("email")[0];
		validation(em);
	}

	const validation = (target) => {
		const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

		if (email.match(emailRegex)) {
			target.classList.remove('border-red-300');
			return true;
		}
		else {
			target.classList.add('border-red-300');
			return false;
		}
	}

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
					<p className=' text-[32px] '>Recover Password</p>
					<p className=' text-[16px] text-gray-500 mt-[32px] '>Opps. It happens to the best of us. Input your email address to fix the issue.</p>
				</div>
				<div className=' py-0 z-[20]'>
					<p className='mb-2 text-left text-gray-500 font-poppins' >Email</p>
					<NormalInput type="email" name="email" onChange={handleChange} placeholder="Your Email" required />
				</div>
				<div className=' py-0 z-[20]'>
					<GradientButton text="Send OPT" onClick={sendOTP} />
				</div>
				{/* <div className=' absolute right-0 bottom-[-20px] w-1/3 h-1/3 bg-gradient-to-tl from-green-300 to-white rounded-full'></div> */}
				<div className=' absolute right-[-35px] sm:right-[-65px] bottom-[-20px] w-[160px] h-[160px] bg-green-600 rounded-full z-[5]'></div>
				<div className='absolute right-0 top-0 rounded-[36px] w-full h-full z-[10] backdrop-blur-[128px]'>
				</div>
			</div>
		</div>
	)
}
