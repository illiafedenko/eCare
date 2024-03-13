import React from 'react';
import imageSrc from '../assets/images/register_image.png';
import logoSrc from '../assets/images/logo.png';


export default function Signin() {
	return (
		<div className=" py-[26px] px-[50px] h-screen w-full">
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-[17px] h-[calc(100vh-52px)]'>
				{/* <div className=" flex flex-col lg:flex-row min-h-full "> */}
				<div className='w-full my-0 lg:pl-0'>
					<div className='w-full p-0 m-0 h-full relative '>
						<img className="img-fluid rounded-2xl lg:rounded-tl-[20px] lg:rounded-bl-[20px] lg:rounded-tr-[200px] lg:rounded-br-[200px] h-full object-cover w-full" src={imageSrc} alt="register" />
						<img className=' absolute top-5 left-10 ' src={logoSrc} />
					</div>
				</div>
				<div className=" w-full  pt-3 lg:pr-0 lg:py-0 ">
					<p className='my-2 text-left text-gray-900 text-3xl font-poppins font-extrabold' >Login to your account</p>
					<p className='mt-0 text-left text-gray-500 font-poppins' >Enter your credentials to login</p>
					<div className=' flex flex-col sm:gap-3 sm:flex-row mt-10 mb-4'>
						<div className=' w-full sm:w-1/2 '>
							<p className='mb-2 text-left text-gray-500 font-poppins' >First Name</p>
							<input class="appearance-none rounded w-full py-2 px-3 focus:border-blue-300 border-[1px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" placeholder="Your First Name"></input>
						</div>
						<div className=' w-full sm:w-1/2 '>
							<p className='mb-2 text-left text-gray-500 font-poppins' >Last Name</p>
							<input class="appearance-none rounded w-full py-2 px-3 focus:border-blue-300 border-[1px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" placeholder="Your Last Name"></input>
						</div>
					</div>
					<div className='mt-10 mb-4 w-full'>
						<p className='mb-2 text-left text-gray-500 font-poppins' >Email</p>
						<input class="appearance-none rounded w-full py-2 px-3 focus:border-blue-300 border-[1px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" placeholder="Your Email"></input>
					</div>
					<div className='my-4 w-full'>
						<p className='mb-2 text-left text-gray-500 font-poppins' >Password</p>
						<input class="appearance-none rounded w-full py-2 px-3 focus:border-blue-300 border-[1px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="password" placeholder="Minimum 8 characters"></input>
					</div>
					<div className='my-4 w-full'>
						<p className='mb-2 text-left text-gray-500 font-poppins' >Comfirm Password</p>
						<input class="appearance-none rounded w-full py-2 px-3 focus:border-blue-300 border-[1px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="password" placeholder="Minimum 8 characters"></input>
					</div>
					<div class="flex items-center mb-4">
						<input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded " />
						<label class="ms-2 text-sm text-gray-500 font-poppins font-medium dark:text-gray-300"><a href='#' className='text-gray-500 underline'>Accept terms and conditions</a></label>
					</div>
					<div className='my-8 w-full'>
						<button type="submit" class="text-white font-poppins w-full bg-gradient-to-b from-green-500 to-green-200 hover:from-green-600 hover:to-green-300 border-none outline-none focus:border-none focus:outline-none" >Register</button>
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
