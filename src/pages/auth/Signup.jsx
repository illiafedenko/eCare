import React, { useState, useEffect } from 'react';
import imageSrc from '../../assets/images/register_image.png';
import logoSrc from '../../assets/images/logo.png';
import NormalInput from '../../components/general/NormalInput';
import GradientButton from '../../components/general/GradientButton';
import firebase from 'firebase/compat/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../firebaseConfig';
import { useNavigate } from 'react-router'



export default function Signup() {

	const [input, setInput] = useState({
		firstname: "",
		lastname: "",
		email: "",
		password: "",
		confirm: "",
	});
	const [loading, setLoading] = useState(false);

	const firebaseApp = firebase.apps[0];
	const navigate = useNavigate();

	useEffect(() => {

	}, [])


	const handleSubmitEvent = (e) => {
		if (validationAll() == false) return;
		setLoading(true);
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, input.email, input.password)
			.then((userCredential) => {
				const user = userCredential.user;
				const db = getDatabase();
				set(ref(db, 'users/' + user.uid), {
					firstname: input.firstname,
					lastname: input.lastname,
					fullname: input.firstname + " " + input.lastname,
					email: input.email,
					password: input.password,
				});
				setLoading(false);
				const path = "/choose_role";
				navigate(path);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorMessage);
				setLoading(false);
			})
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
		<div className=" relative py-[26px] px-[50px] h-screen w-full">
			<div className='grid grid-cols-1 xl:grid-cols-2 gap-[17px] h-[calc(100vh-52px)]'>
				{/* <div className=" flex flex-col lg:flex-row min-h-full "> */}
				<div className='w-full my-0 lg:pl-0'>
					<div className='w-full p-0 m-0 h-full min-h-[500px] aspect-video relative '>
						<img className="img-fluid rounded-2xl xl:rounded-tl-[20px] xl:rounded-bl-[20px] xl:rounded-tr-[200px] xl:rounded-br-[200px] h-full object-cover w-full" src={imageSrc} alt="register" />
						<img className=' absolute top-5 left-10 ' src={logoSrc} />
					</div>
				</div>
				<div className=" w-full  pt-3 lg:px-[48px] lg:py-0 ">
					<p className='my-2 text-left text-gray-900 text-3xl font-poppins font-bold' >Create your account</p>
					<p className='mt-0 text-left text-gray-500 font-poppins' >Enter your credentials to create an account</p>
					<div className=' flex flex-col gap-5 sm:gap-3 sm:flex-row mt-10 mb-4'>
						<div className=' w-full sm:w-1/2 '>
							<p className='mb-2 text-left text-gray-500 font-poppins' >First Name <span className=' text-red-600'>*</span></p>
							<NormalInput type="text" name="firstname" onChange={handleChange} placeholder="First Name" required />
						</div>
						<div className=' w-full sm:w-1/2 '>
							<p className='mb-2 text-left text-gray-500 font-poppins' >Last Name <span className=' text-red-600'>*</span></p>
							<NormalInput type="text" name="lastname" onChange={handleChange} placeholder="Last Name" required />
						</div>
					</div>
					<div className='my-4 w-full'>
						<p className='mb-2 text-left text-gray-500 font-poppins' >Email <span className=' text-red-600'>*</span></p>
						<NormalInput type="email" name="email" onChange={handleChange} placeholder="Your Email" required />
					</div>
					<div className='my-4 w-full'>
						<p className='mb-2 text-left text-gray-500 font-poppins' >Password <span className=' text-red-600'>*</span></p>
						<NormalInput type="password" name="password" onChange={handleChange} placeholder="Minimum 8 Characters" required />
					</div>
					<div className='my-4 w-full'>
						<p className='mb-2 text-left text-gray-500 font-poppins' >Comfirm Password <span className=' text-red-600'>*</span></p>
						<NormalInput type="password" name="confirm" onChange={handleChange} placeholder="Minimum 8 Characters" required />
					</div>
					<div className="flex items-center mb-4">
						<input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded accent-green-600 " />
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
			<div id='loading' className={`fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-gray-700 bg-opacity-40 ${!loading ? 'invisible' : ''}`}>
				<div className="bg-white border py-2 px-5 rounded-lg flex items-center flex-col">
					<div className="loader-dots block relative w-20 h-5 mt-2">
						<div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
						<div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
						<div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
						<div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
					</div>
					<div className="text-gray-500 text-xs font-medium mt-2 text-center">
						Just a seconds...
					</div>
				</div>
			</div>
		</div >
	)
}
