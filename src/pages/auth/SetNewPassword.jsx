import React, { useState } from 'react'
import NormalInput from '../../components/general/NormalInput'
import GradientButton from '../../components/general/GradientButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

export default function SetNewPassword() {
	const [input, setInput] = useState({
		password: "",
		confirm: "",
	});

	const [showModal, setShowModal] = useState(false);

	const handleSubmitEvent = (e) => {
		validationAll();
		setShowModal(true);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInput((prev) => ({
			...prev,
			[name]: value,
		}));
		validation(e.target);
	};

	const validationAll = () => {
		const ps = document.getElementsByName("password")[0];
		const cf = document.getElementsByName("confirm")[0];
		if (validation(ps) & validation(cf)) {
			return true;
		}
		else {
			return false;
		}
	}

	const validation = (target) => {
		const { name, value } = target;
		switch (name) {

			case "password":
				if (value.length > 8) {
					target.classList.remove('border-red-300');
					return true;
				}
				else {
					target.classList.add('border-red-300');
					return false;
				}
				break;

			case "confirm":
				if (value == input.password && value.length > 8) {
					target.classList.remove('border-red-300');
					return true;
				}
				else {
					target.classList.add('border-red-300');
					return false;
				}
				break;

			default:
				break;
		}
	}

	return (
		<div className=' relative h-screen w-screen flex items-center justify-center'>
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
						<p className=' text-[32px] '>Set New Password</p>
						<p className=' text-[16px] text-gray-500 mt-[32px] '>Enter your new password below</p>
					</div>
					<div className='z-20 flex flex-col gap-8'>
						<div className=' py-0 z-[20]'>
							<p className='mb-2 text-left text-gray-500 font-poppins' >Password</p>
							<NormalInput type="password" name="password" onChange={handleChange} placeholder="Minimum 8 Characters" required />
						</div>
						<div className=' py-0 z-[20]'>
							<p className='mb-2 text-left text-gray-500 font-poppins' >Confirm Password</p>
							<NormalInput type="password" name="confirm" onChange={handleChange} placeholder="Minimum 8 Characters" required />
						</div>
					</div>
					<div className='py-0 z-[20]'>
						<GradientButton text="Submit new password" onClick={handleSubmitEvent} />
					</div>
					{/* <div className=' absolute right-0 bottom-[-20px] w-1/3 h-1/3 bg-gradient-to-tl from-green-300 to-white rounded-full'></div> */}
					<div className=' absolute right-[-15px] sm:right-[-45px] top-[30px] w-[160px] h-[160px] bg-green-600 rounded-full z-[5]'></div>
					<div className='absolute right-0 top-0 rounded-[36px] w-full h-full z-[10] backdrop-blur-[128px]'>
					</div>
				</div>
			</div>
			{showModal ? (
				<>
					<div className="flex justify-center items-center w-full overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-[calc(75vw+40px)] md:w-[calc(60vw+40px)] xl:w-[calc(50vw+40px)] 2xl:w-[calc(40vw+40px)] my-6 opacity-100">
							<div className="px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] xl:px-[100px] border-0 rounded-lg shadow-lg relative flex flex-col w-full py-[80px] bg-white outline-none focus:outline-none">
								<p className=' font-poppins text-[32px] font-extrabold '>Password successfully recovered!</p>
								<p className=' font-poppins text-[16px] font-extrabold mt-[24px] mb-[32px] '>Return to login page and use new password</p>
								<div className="flex items-center justify-center p-6 border-solid border-blueGray-200 rounded-b">
									<GradientButton text="Return to Login" onClick={() => setShowModal(false)} />
								</div>
							</div>
						</div>
					</div>
					<div className=' w-full h-full absolute left-0 top-0 z-40 bg-gray-900 backdrop-blur-50 blur-50 opacity-50'></div>
				</>
			) : null}
		</div>
	)
}
