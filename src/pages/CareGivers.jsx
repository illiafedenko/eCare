import React from 'react'
import Header from '../components/general/Header'
import Footer from '../components/general/Footer'
import MiniGradientButton from '../components/general/MiniGradientButton'
import mainImage from '../assets/images/home_image2.png';
import IconSelectBox from '../components/general/IconSelectBox';

export default function CareGivers() {
  return (
    <div className=' w-full h-full flex-col'>
      <Header current="caregivers" />
      {/* Image */}
      <div className=' w-full aspect-w-16 aspect-h-9 relative'>
        <img src={mainImage} className=' w-full h-full object-cover' ></img>
        <div className=' absolute left-0 top-0 w-full h-full flex flex-col justify-center'>
          <div className=' pl-[40px] md:pl-[50px] lg:pl-[100px] 2xl:w-3/5 w-4/5 w my-auto  flex flex-col gap-2 sm:gap-5'>
            <p className=' text-white font-bold text-[32px] sm:text-[40px] md:text-[60px] lg:text-[80px] leading-none text-left'>Find The Right Care Giver</p>
            <p className=' text-white text-[12px] sm:text-[18px] text-left'>Lorem ipsum dolor sit amet consectetur. Mattis aenean quis cursus consectetur tortor facilisis vulputate.</p>
            <div className=' flex flex-row justify-start'><div className=' w-[100px] h-[32px] sm:w-[130px] sm:h-[50px] text-[12px] sm:text-[16px]'><MiniGradientButton text="Apply now" /></div></div>
          </div>
        </div>
      </div>

      <div className=' w-full flex flex-col px-[40px] md:px-[50px] lg:px-[100px]'>
        {/* Filters */}
        {/* <div className=' mt-[120px] flex flex-col'>
          <p className=' text-[48px] font-poppins font-bold'>Care Givers</p>
          <IconSelectBox />
        </div> */}

        <div className=' w-full grid grid-cols-3'>
          
        </div>

      </div>

      <Footer />
    </div>
  )
}
