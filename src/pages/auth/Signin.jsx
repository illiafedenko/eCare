import React, { useState, } from 'react';
import imageSrc from '../../assets/images/signin_image.png';
import logoSrc from '../../assets/images/logo.png';
import PasswordInput from '../../components/general/PasswordInput';
import EmailInput from '../../components/general/EmailInput';
import NormalInput from '../../components/general/NormalInput';
import { Prev } from 'react-bootstrap/esm/PageItem';
import GradientButton from '../../components/general/GradientButton';


export default function Signin() {

	const [input, setInput] = useState({
		email: "",
		password: "",
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
		var em = document.getElementsByName("email")[0];
		var ps = document.getElementsByName("password")[0];
		console.log(em, ps);
		console.log(em.value, ps.value);
		console.log(validation(em), validation(ps));
		if (validation(em) & validation(ps)) {
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
					<p className='my-2 text-left text-gray-900 text-3xl font-poppins font-extrabold' >Login to your account</p>
					<p className='mt-0 text-left text-gray-500 font-poppins' >Enter your credentials to login</p>

					<div className='mt-10 mb-4 w-full'>
						<p className='mb-2 text-left text-gray-500 font-poppins' >Email</p>
						<NormalInput placeholder="Your Email" type="email" onChange={handleChange} name="email" required />
					</div>
					<div className='mt-4 mb-2 w-full'>
						<p className='mb-2 text-left text-gray-500 font-poppins' >Password</p>
						<NormalInput placeholder="Your Password" type="password" name="password" onChange={handleChange} required />
					</div>
					<div className='mb-4 w-full'>
						<p className='text-left'><a href='#' className='mb-2 text-left text-gray-900 font-extrabold text-[12px] font-poppins' >Forgot password?</a></p>
					</div>
					<div className="flex items-center mt-6 mb-4">
						<input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded " />
						<label className="ms-2 text-sm text-gray-500 font-poppins font-medium dark:text-gray-300">Remember me</label>
					</div>
					<div className='my-8 w-full'>
						<GradientButton text="Login" onClick={handleSubmitEvent} />
					</div>
					<div className='my-8 w-full'>
						<p className=' text-center text-gray-500 font-poppins'>Don't have an account?, <span><a href='./signup' className=' text-green-500'>Register</a></span></p>
						{/* <p className=' text-center text-gray-500 py-3' style={{ fontFamily: 'poppins', fontSize: '16px' }}>Or</p> */}
					</div>
				</div>
			</div>
		</div>
	)
}
