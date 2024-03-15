import React, { useState } from 'react';
import imageSrc from '../assets/images/register_image.png';
import logoSrc from '../assets/images/logo.png';
import NormalInput from '../components/general/NormalInput';
import GradientButton from '../components/general/GradientButton';


export default function Signup() {

	const [input, setInput] = useState({
		firstname: "",
		lastname: "",
		email: "",
		password: "",
		confirm: "",
	});

	const handleSubmitEvent = (e) => {
		validationAll();
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
		const fn = document.getElementsByName("firstname")[0];
		const ln = document.getElementsByName("lastname")[0];
		const em = document.getElementsByName("email")[0];
		const ps = document.getElementsByName("password")[0];
		const cf = document.getElementsByName("confirm")[0];
		if (validation(fn) & validation(ln) & validation(em) & validation(ps) & validation(cf)) {
			return true;
		}
		else {
			return false;
		}
	}

	const validation = (target) => {
		const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		const { name, value } = target;
		switch (name) {
			case "firstname":
				if (value.length > 0) {
					target.classList.remove('border-red-300');
					return true;
				}
				else {
					target.classList.add('border-red-300');
					return false;
				}
				break;

			case "lastname":
				if (value.length > 0) {
					target.classList.remove('border-red-300');
					return true;
				}
				else {
					target.classList.add('border-red-300');
					return false;
				}
				break;

			case "email":
				if (value.match(emailRegex)) {
					target.classList.remove('border-red-300');
					return true;
				}
				else {
					target.classList.add('border-red-300');
					return false;
				}
				break;

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
		<div className=" py-[26px] px-[50px] h-screen w-full">
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-[17px] h-[calc(100vh-52px)]'>
				{/* <div className=" flex flex-col lg:flex-row min-h-full "> */}
				<div className='w-full my-0 lg:pl-0'>
					<div className='w-full p-0 m-0 h-full relative '>
						<img className="img-fluid rounded-2xl lg:rounded-tl-[20px] lg:rounded-bl-[20px] lg:rounded-tr-[200px] lg:rounded-br-[200px] h-full object-cover w-full" src={imageSrc} alt="register" />
						<img className=' absolute top-5 left-10 ' src={logoSrc} />
					</div>
				</div>
				<div className=" w-full  pt-3 lg:px-[48px] lg:py-0 ">
					<p className='my-2 text-left text-gray-900 text-3xl font-poppins font-bold' >Create your account</p>
					<p className='mt-0 text-left text-gray-500 font-poppins' >Enter your credentials to create an account</p>
					<div className=' flex flex-col gap-5 sm:gap-3 sm:flex-row mt-10 mb-4'>
						<div className=' w-full sm:w-1/2 '>
							<p className='mb-2 text-left text-gray-500 font-poppins' >First Name</p>
							<NormalInput type="text" name="firstname" onChange={handleChange} placeholder="First Name" required />
						</div>
						<div className=' w-full sm:w-1/2 '>
							<p className='mb-2 text-left text-gray-500 font-poppins' >Last Name</p>
							<NormalInput type="text" name="lastname" onChange={handleChange} placeholder="Last Name" required />
						</div>
					</div>
					<div className='my-4 w-full'>
						<p className='mb-2 text-left text-gray-500 font-poppins' >Email</p>
						<NormalInput type="email" name="email" onChange={handleChange} placeholder="Your Email" required />
					</div>
					<div className='my-4 w-full'>
						<p className='mb-2 text-left text-gray-500 font-poppins' >Password</p>
						<NormalInput type="password" name="password" onChange={handleChange} placeholder="Minimum 8 Characters" required />
					</div>
					<div className='my-4 w-full'>
						<p className='mb-2 text-left text-gray-500 font-poppins' >Comfirm Password</p>
						<NormalInput type="password" name="confirm" onChange={handleChange} placeholder="Minimum 8 Characters" required />
					</div>
					<div className="flex items-center mb-4">
						<input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded " />
						<label className="ms-2 text-sm text-gray-500 font-poppins font-medium dark:text-gray-300"><a href='#' className='text-gray-500 underline'>Accept terms and conditions</a></label>
					</div>
					<div className='my-8 w-full'>
						<GradientButton text="Register" onClick={handleSubmitEvent} />
					</div>
					<div className='my-8 w-full'>
						<p className=' text-center text-gray-500 font-poppins'>Already have an account?, <span><a href='./signin' className=' text-green-500'>Login</a></span></p>
						{/* <p className=' text-center text-gray-500 py-3' style={{ fontFamily: 'poppins', fontSize: '16px' }}>Or</p> */}
					</div>
				</div>
			</div>
		</div>
	)
}
