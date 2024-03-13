import React from 'react';
import imageSrc from '../assets/images/register_image.png';
import logoSrc from '../assets/images/logo.png';


export default function Signup() {
	return (
		<div className=" container py-20 h-screen w-full">
			<div className=" flex flex-col lg:flex-row min-h-full ">
				<div className=' w-full lg:w-1/2 my-0 px-3 lg:pr-5 lg:pl-0'>
					<div className=' p-0 m-0 h-full relative '>
						<img className="img-fluid rounded-2xl lg:rounded-tr-3xl lg:rounded-br-3xl h-full object-cover" src={imageSrc} alt="register" />
						<img className=' absolute top-5 left-10' src={logoSrc} />
					</div>

				</div>
				<div className=" w-full lg:w-1/2 pt-3 px-3 lg:pr-0 lg:pl-5 lg:py-0 container">
					<p className='my-2 text-left text-gray-900 text-3xl font-poppins font-extrabold' >Create your account</p>
					<p className='mt-0 text-left text-gray-500 font-poppins' >Enter your credentials to create your account</p>
					<div className=' flex flex-col sm:flex-row mt-10 mb-4'>
						<div className=' w-full sm:w-1/2 pr-0 sm:pr-3'>
							<p className='mb-2 text-left text-gray-500 font-poppins' >First Name</p>
							<input class="appearance-none rounded w-full py-2 px-3 focus:border-blue-300 border-[1px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" placeholder="Your First Name"></input>
						</div>
						<div className=' w-full sm:w-1/2 pl-0 pt-4 sm:pl-3 sm:pt-0 '>
							<p className='mb-2 text-left text-gray-500 font-poppins' >Last Name</p>
							<input class="appearance-none rounded w-full py-2 px-3 focus:border-blue-300 border-[1px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" placeholder="Your Last Name"></input>
						</div>
					</div>
					<div className='my-4'>
						<p className='mb-2 text-left text-gray-500 font-poppins' >Email</p>
						<input class="appearance-none rounded w-full py-2 px-3 focus:border-blue-300 border-[1px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" placeholder="Your Email"></input>
					</div>
					<div className='my-4'>
						<p className='mb-2 text-left text-gray-500 font-poppins' >Password</p>
						<input class="appearance-none rounded w-full py-2 px-3 focus:border-blue-300 border-[1px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="password" placeholder="Minimum 8 characters"></input>
					</div>
					<div className='my-4'>
						<p className='mb-2 text-left text-gray-500 font-poppins' >Comfirm Password</p>
						<input class="appearance-none rounded w-full py-2 px-3 focus:border-blue-300 border-[1px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="password" placeholder="Minimum 8 characters"></input>
					</div>
					<div class="flex items-center mb-4">
						<input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded " />
						<label class="ms-2 text-sm text-gray-500 font-poppins font-medium dark:text-gray-300"><a href='#' className='text-gray-500 underline'>Accept terms and conditions</a></label>
					</div>
					<div className='my-8'>
						<button type="submit" class="text-white font-poppins w-full bg-gradient-to-b from-green-500 to-green-200 hover:from-green-600 hover:to-green-300 border-none outline-none focus:border-none focus:outline-none" >Register</button>
					</div>
					<div className='my-8'>
						<p className=' text-center text-gray-500 font-poppins'>Already have an account?, <span><a href='./signin' className=' text-green-500'>Login</a></span></p>
						{/* <p className=' text-center text-gray-500 py-3' style={{ fontFamily: 'poppins', fontSize: '16px' }}>Or</p> */}
					</div>
				</div>
			</div>
		</div>
	)
}
