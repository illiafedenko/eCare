import React from 'react'
import logoSrc from '../../assets/images/logo.png';
import miniLogoSrc from '../../assets/images/miniLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import facebookIcon from '../../assets/icons/facebook.png';
import twitterIcon from '../../assets/icons/twitter.png';
import instogramIcon from '../../assets/icons/instogram.png';
import linkedinIcon from '../../assets/icons/linkedin.png';

export default function Footer() {
  return (
    <div className=' w-full bg-gray-50 mt-[120px] px-[40px] md:px-[50px] lg:px-[100px] gap-[40px] md:gap-0'>
      <div className=' w-full grid grid-cols-2 pt-[88px] gap-[20px] mb-[100px]'>
        <div className=' w-full flex flex-col gap-[20px]'>
          <img className='w-[96px] h-[24px] ml-0' src={logoSrc} ></img>
          <p className=' w-3/4 text-left font-poppins'>Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac.</p>
          <div className=' flex flex-row gap-6'>
            <img className='w-6 h-6' src={facebookIcon} ></img>
            <img className='w-6 h-6' src={twitterIcon} ></img>
            <img className='w-6 h-6' src={instogramIcon} ></img>
            <img className='w-6 h-6' src={linkedinIcon} ></img>
          </div>
        </div>
        <div className=' flex flex-row justify-around'>
          <div className=' flex flex-col gap-[12px]'>
            <p className=' text-[20px] text-left font-poppins font-bold'>Quick Links</p>
            <p className=' text-[18px] text-left font-poppins'>Home</p>
            <p className=' text-[18px] text-left font-poppins'>About</p>
            <p className=' text-[18px] text-left font-poppins'>Portfolio</p>
            <p className=' text-[18px] text-left font-poppins'>Services</p>
          </div>
          <div className=' flex flex-col gap-[12px]'>
            <p className=' text-[20px] text-left font-poppins font-bold'>Legal</p>
            <p className=' text-[18px] text-left font-poppins'>Terms of Service</p>
            <p className=' text-[18px] text-left font-poppins'>Privacy Policy</p>
          </div>
        </div>
      </div>
      <div className=' w-full items-center mb-[40px]'>
        <p className=' w-full text-center font-raleway text-[12px]'>Copyright 2024 Harmony, All Rights Reserved</p>
      </div>
    </div>
  )
}
