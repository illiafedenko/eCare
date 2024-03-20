import React, { useState, useEffect } from 'react';
import logoSrc from '../../assets/images/logo.png';
import miniLogoSrc from '../../assets/images/miniLogo.png';
import MiniGradientButton from './MiniGradientButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faHome, faMoneyBill, faPerson, faPersonCane, faPersonWalkingWithCane, faServer, faUserDoctor } from '@fortawesome/free-solid-svg-icons'

export default function Header(props) {

	const [current, setCurrent] = useState(props.current)

	useEffect(() => {
		document.getElementById(current).classList.remove('text-gray-700');
		document.getElementById(current).classList.add('text-green-600');

		switch (current) {
			case "home":
				document.getElementById('currentDM').innerHTML = "Home";
				break;
			case "about":
				document.getElementById('currentDM').innerHTML = "About us";
				break;
			case "services":
				document.getElementById('currentDM').innerHTML = "Services";
				break;
			case "payment":
				document.getElementById('currentDM').innerHTML = "Cost & Payment";
				break;
			case "caregivers":
				document.getElementById('currentDM').innerHTML = "Care Givers";
				break;
			case "howto":
				document.getElementById('currentDM').innerHTML = "How-To";
				break;
			default:
				document.getElementById('currentDM').innerHTML = "Home";
				break;
		}
	}, [])

	return (
		<div className=' bg-white h-[60px] sm:h-[100px] w-full px-[40px] md:px-[50px] lg:px-[100px] items-center flex flex-row justify-between  font-raleway'>
			<img className=' hidden sm:block' src={logoSrc} ></img>
			<img className=' block sm:hidden' src={miniLogoSrc} ></img>
			<div className=' hidden md:block '>
				<div className=' flex flex-row md:gap-[15px] lg:gap-[30px] xl:gap-[40px] text-[14px] lg:text-[16px]'>
					<a href='/' className=''><p className=' text-gray-700 font-extrabold hover:text-green-600' id="home">Home</p></a>
					<a href='/about' className=''><p className=' text-gray-700 font-extrabold hover:text-green-600' id="about">About Us</p></a>
					<a href='/services' className=''><p className=' text-gray-700 font-extrabold hover:text-green-600' id="services">	Services</p></a>
					<a href='/payment' className=''><p className='  text-gray-700 font-extrabold hover:text-green-600' id="payment">Cost & Payment</p></a>
					<a href='/howto' className=''><p className=' text-gray-700 font-extrabold hover:text-green-600' id="howto">How-To</p></a>
					<a href='/caregivers' className=''><p className='  text-gray-700 font-extrabold hover:text-green-600' id="caregivers">Care Givers</p></a>
				</div>
			</div>
			<div className=' block md:hidden '>
				<div className="flex h-10 w-[160px] items-center justify-center bg-gray-200 px-0">
					<div className="group relative cursor-pointer w-[160px]">

						<div className="flex items-center justify-between space-x-5 w-full bg-white hover:bg-gray-200">
							<p className=' px-2 py-2 text-[16px] text-gray-700 font-extrabold hover:text-green-600' id="currentDM"></p>
							<span className='mx-0' style={{ marginLeft: "0px" }}>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
									stroke="currentColor" className="h-6 w-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
								</svg>
							</span>
						</div>

						<div
							className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-0 text-gray-800 shadow-xl group-hover:visible text-left">
							<a href='#' className=''>
								<p className=' h-10 py-2 px-4 border-b my-0 text-4 text-gray-700 font-extrabold hover:text-green-600 hover:bg-white' id="home_dm">
									Home
								</p>
							</a>
							<a href='#' className=''>
								<p className=' h-10 py-2 px-4 border-b text-4 text-gray-700 font-extrabold hover:text-green-600 hover:bg-white' id="about_dm">
									About Us
								</p>
							</a>
							<a href='#' className=''>
								<p className=' h-10 py-2 px-4 border-b text-4 text-gray-700 font-extrabold hover:text-green-600 hover:bg-white' id="services_dm">
									Services
								</p>
							</a>
							<a href='#' className=''>
								<p className=' h-10 py-2 px-4 border-b text-4 text-gray-700 font-extrabold hover:text-green-600 hover:bg-white' id="payment_dm">
									Cost & Payment
								</p>
							</a>
							<a href='#' className=''>
								<p className=' h-10 py-2 px-4 border-b text-4 text-gray-700 font-extrabold hover:text-green-600 hover:bg-white' id="howto_dm">
									How-To
								</p>
							</a>
							<a href='#' className=''>
								<p className=' h-10 py-2 px-4 text-4 text-gray-700 font-extrabold hover:text-green-600 hover:bg-white' id="caregivers_dm">
									Care Givers
								</p>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className=' w-[80px] h-[32px] sm:w-[100px] sm:h-[40px] text-[12px] sm:text-[16px]'><MiniGradientButton text="Sign Up" /></div>
		</div>
	)
}
