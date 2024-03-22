import React from 'react';
import Header from '../../components/general/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import mainImage from '../../assets/images/home_image2.png';
import MiniGradientButton from '../../components/general/MiniGradientButton';
import MiniNormalButton from '../../components/general/MiniNormalButton';
import grandmaImage from '../../assets/images/grandma.png';
import grandfaImage from '../../assets/images/grandfa.png';
import { faCheckDouble, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import checkIcon from '../../assets/images/check.png';
import serviceIcon1 from '../../assets/images/service_icon1.png';
import serviceIcon2 from '../../assets/images/service_icon2.png';
import serviceIcon3 from '../../assets/images/service_icon3.png';
import serviceIcon4 from '../../assets/images/service_icon4.png';
import ServiceCard from '../../components/special/ServiceCard';
import dummyData from '../../dummydata/index';
import CustomCarousel from '../../components/special/CustomCarousel';
import ClientReview from '../../components/special/ClientReview';
import RatioDiv from '../../components/general/RatioDiv';
import flightImage from '../../assets/images/flight.png';
import Footer from '../../components/general/Footer';



export default function HomePage() {
	return (
		<div className=' flex flex-col w-full '>
			<Header current="home" />
			<div className=' w-full aspect-w-16 aspect-h-9 relative'>
				<img src={mainImage} className=' w-full h-full object-cover' ></img>
				<div className=' absolute left-0 top-0 w-full h-full flex flex-col justify-center'>
					<div className=' pl-[40px] md:pl-[50px] lg:pl-[100px] 2xl:w-3/5 w-4/5 w my-auto  flex flex-col gap-2 sm:gap-5'>
						<p className=' text-white font-bold text-[32px] sm:text-[40px] md:text-[60px] lg:text-[80px] leading-none text-left'>Stay Comfortably Like Your Home</p>
						<p className=' text-white text-[12px] sm:text-[18px] text-left'>Lorem ipsum dolor sit amet consectetur. Mattis aenean quis cursus consectetur tortor facilisis vulputate.</p>
						<div className=' flex flex-row justify-start'><div className=' w-[100px] h-[32px] sm:w-[130px] sm:h-[50px] text-[12px] sm:text-[16px]'><MiniGradientButton text="Apply now" /></div></div>
					</div>
				</div>
			</div>
			{/* About Us */}
			<div className=' grid grid-cols-1 md:grid-cols-2 mt-[120px] px-[40px] md:px-[50px] lg:px-[100px] gap-[40px] md:gap-0'>
				<div className=' w-full aspect-square relative'>
					<div className=' w-[90%] aspect-square z-[10]'>
						<img src={grandfaImage} className=' w-full h-full object-cover z-[10]'></img>
					</div>
					<div className=' w-[90%] aspect-square absolute bottom-0 right-2 border-green-500 border-[2px] z-[-5]'>
					</div>
				</div>
				<div className=' flex flex-col justify-center '>
					<div className=' md:pl-[50px] lg:pl-[100px] flex flex-col items-start'>
						<p className=' text-[48px] font-poppins font-extrabold text-left'>About Us</p>
						<p className=' text-[18px] font-Poppins text-left'>Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. </p>
						<div className=' mt-[32px] flex flex-col gap-2'>
							<div className=' flex flex-row items-center gap-1'>
								<img src={checkIcon} className='w-[24px] h-[24px]'></img>
								<p className=' text-left'>Lorem ipsum dolor sit amet consectetur.</p>
							</div>
							<div className=' flex flex-row items-center gap-1'>
								<img src={checkIcon} className='w-[24px] h-[24px]'></img>
								<p className=' text-left'>Augue non malesuada placerat faucibus nam purus sem.</p>
							</div>
							<div className=' flex flex-row items-center gap-1'>
								<img src={checkIcon} className='w-[24px] h-[24px]'></img>
								<p className=' text-left'>Urna pulvinar porttitor dignissim congue pellentesque ac hac.</p>
							</div>
							<div className=' flex flex-row items-center gap-1'>
								<img src={checkIcon} className='w-[24px] h-[24px]'></img>
								<p className=' text-left'>Eu adipiscing massa ut proin mauris orci tincidunt ac in.</p>
							</div>
						</div>
						<div>
							<div className=' w-[100px] h-[32px] mt-[32px] sm:w-[130px] sm:h-[50px] text-[12px] sm:text-[16px]'>
								<MiniGradientButton text="Apply now" />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Our Services */}
			<div className=' mt-[120px] px-[40px] md:px-[50px] lg:px-[100px]'>
				<p className=' text-[48px] font-poppins font-bold '>Our Services</p>
				<div className='grid lg:grid-cols-2 grid-cols-1 gap-[24px] '>
					<div className=' w-full bg-gray-300'>
						<ServiceCard iconSrc={serviceIcon1} serviceName={dummyData.servicesData[0].name} serviceText={dummyData.servicesData[0].description} />
					</div>
					<div className=' w-full bg-gray-300'>
						<ServiceCard iconSrc={serviceIcon2} serviceName={dummyData.servicesData[1].name} serviceText={dummyData.servicesData[1].description} />
					</div>
					<div className=' w-full bg-gray-300'>
						<ServiceCard iconSrc={serviceIcon3} serviceName={dummyData.servicesData[2].name} serviceText={dummyData.servicesData[2].description} />
					</div>
					<div className=' w-full bg-gray-300'>
						<ServiceCard iconSrc={serviceIcon4} serviceName={dummyData.servicesData[3].name} serviceText={dummyData.servicesData[3].description} />
					</div>
				</div>
			</div>

			{/* Client Reviews */}
			<div className=' w-full mt-[120px] pb-[80px]  bg-green-50'>
				<p className=' mt-[120px] text-[48px] font-poppins font-extrabold'>Client Reviews</p>
				<div className=' flex flex-col items-center mt-[60px]'>
					<div className="flex justify-center items-center  w-3/4">
						<div className=" w-full">
							<CustomCarousel autoSlide={true}>
								<div className=' w-full min-w-full'>
									<ClientReview name={dummyData.clientReviews[0].name} review={dummyData.clientReviews[0].review} avatar={dummyData.clientReviews[0].imageURL} address={dummyData.clientReviews[0].address} />
								</div>
								<div className=' w-full min-w-full'>
									<ClientReview name={dummyData.clientReviews[1].name} review={dummyData.clientReviews[1].review} avatar={dummyData.clientReviews[1].imageURL} address={dummyData.clientReviews[1].address} />
								</div>
								<div className=' w-full min-w-full'>
									<ClientReview name={dummyData.clientReviews[2].name} review={dummyData.clientReviews[2].review} avatar={dummyData.clientReviews[2].imageURL} address={dummyData.clientReviews[2].address} />
								</div>
							</CustomCarousel>
						</div>
					</div>
				</div>
			</div>

			{/* The Best Eldery Care Center For You */}
			<div className=' grid grid-cols-1 md:grid-cols-2 mt-[120px] px-[40px] md:px-[50px] lg:px-[100px] gap-[40px] md:gap-0'>
				<div className=' flex flex-col justify-center '>
					<div className=' md:pr-[50px] lg:pr-[100px] flex flex-col items-start gap-[20px]'>
						<p className=' text-[48px] font-poppins font-extrabold text-left leading-none'>The Best Eldery Care Center For You</p>
						<p className=' text-[18px] font-Poppins text-left'>Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. Eu adipiscing massa ut proin mauris orci tincidunt ac in.</p>
						<div>
							<div className=' w-[100px] h-[32px] mt-[32px] sm:w-[130px] sm:h-[50px] text-[12px] sm:text-[16px]'>
								<MiniGradientButton text="Leran More" />
							</div>
						</div>
					</div>
				</div>
				<div className=' w-full aspect-square relative'>
					<div className=' w-full aspect-square z-[10]'>
						<img src={grandmaImage} className=' w-full h-full object-cover z-[10]'></img>
					</div>
				</div>
			</div>

			{/* Looking for a Better Care? */}
			<div className=' mt-[120px] px-[40px] md:px-[50px] lg:px-[100px] gap-[40px] md:gap-0'>
				<div className=' relative w-full px-[40px] md:px-[100px] py-[72px] flex flex-col gap-5 bg-gradient-to-br from-green-700 to-green-400'>
					<p className=' text-[48px] text-white font-poppins font-extrabold text-left leading-none'>Looking for a Better Care?</p>
					<p className=' text-[18px] text-white font-Poppins text-left'>Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac.</p>
					<div className=' w-[120px] h-[32px] mt-[32px] sm:w-[150px] sm:h-[50px] text-[12px] sm:text-[16px]'>
						<MiniNormalButton color="white" textColor="black" text="Apply Today" />
					</div>
					<div className=' absolute right-0 bottom-0 w-[200px] h-[140px]'>
						<img src={flightImage}></img>
					</div>
				</div>
			</div>


			{/* Footer */}
			<Footer />

		</div >
	)
}