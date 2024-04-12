import React, { useState, useEffect } from 'react'
import Header from '../../components/general/Header'
import Footer from '../../components/general/Footer'
import mainImage from '../../assets/images/faq_main.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faArrowRightLong, faBagShopping, faCalendar, faCalendarCheck, faCheckCircle, faLocationPin, faMinus, faMoneyBill, faMoneyCheckDollar, faPlus, faSearch, faSmile, faTransgenderAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import WideImage from '../../components/special/WideImage';
import image1 from '../../assets/images/about_1.png';

export default function WhyBecomeCareGiver() {
  return (
    <div className=' w-full h-full flex-col'>
      <Header current="caregivers" />
      <WideImage image={mainImage} text="Become a CareGiver" />

      <div className=' w-full flex flex-col px-[40px] md:px-[50px] lg:px-[100px]'>
        {/* Filters */}
        <div className=' mt-[120px] flex flex-col'>
          <p className=' text-[48px] font-poppins font-bold'>
            Why Become a CareGiver
          </p>
          <p className=' mt-[20px] text-[20px] text-gray-600 font-poppins'>
            We only seek CareGivers who share our vision to bring JOY to the lives of seniors and their families. While we have very rigorous standards for our independent contractors, we also believe that the diversity of backgrounds and experiences of our CareGivers further strengthens the community.
          </p>
        </div>
        <div className=' mt-[100px] grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-y-10 justify-around'>
          <div className=' flex flex-col gap-y-5 items-center'>
            <div className=' w-[120px] h-[120px] rounded-full bg-green-300 flex flex-row items-center justify-center'>
              <FontAwesomeIcon className=' text-white text-[60px]' icon={faMoneyCheckDollar} />
            </div>
            <p className=' text-[24px]'>Extra income</p>
          </div>
          <div className=' flex flex-col gap-y-5 items-center'>
            <div className=' w-[120px] h-[120px] rounded-full bg-green-300 flex flex-row items-center justify-center'>
              <FontAwesomeIcon className=' text-white text-[60px]' icon={faCalendarCheck} />
            </div>
            <p className=' text-[24px]'>Flexible scheduling</p>
          </div>
          <div className=' flex flex-col gap-y-5 items-center'>
            <div className=' w-[120px] h-[120px] rounded-full bg-green-300 flex flex-row items-center justify-center'>
              <FontAwesomeIcon className=' text-white text-[60px]' icon={faUserFriends} />
            </div>
            <p className=' text-[24px]'>Stay in the community</p>
          </div>
          <div className=' flex flex-col gap-y-5 items-center'>
            <div className=' w-[120px] h-[120px] rounded-full bg-green-300 flex flex-row items-center justify-center'>
              <FontAwesomeIcon className=' text-white text-[60px]' icon={faSmile} />
            </div>
            <p className=' text-[24px]'>Joy to seniors</p>
          </div>
        </div>
        <div className=' mt-[100px] grid md:grid-cols-2 grid-cols-1 items-center gap-y-10 gap-x-10'>
          <div className=' w-full aspect-4/3 min-h-[200px] flex flex-col items-center'>
            <img src={image1} className=' w-full h-full object-cover' />
          </div>
          <div>
            <p className=' text-[36px] font-poppins font-bold'>Requirements</p>
            <div className=' mt-[40px] flex flex-col gap-y-5'>
              <div className=' flex flex-row justify-start gap-x-4 items-center'>
                <FontAwesomeIcon className=' text-[24px] text-green-500' icon={faCheckCircle} />
                <p className=' text-[16px] font-poppins font-semibold text-left'>A demonstrated passion for supporting aging adults in the community</p>
              </div>
              <div className=' flex flex-row justify-start gap-x-4 items-center'>
                <FontAwesomeIcon className=' text-[24px] text-green-500' icon={faCheckCircle} />
                <p className=' text-[16px] font-poppins font-semibold text-left'>Application, interview and reference checks</p>
              </div>
              <div className=' flex flex-row justify-start gap-x-4 items-center'>
                <FontAwesomeIcon className=' text-[24px] text-green-500' icon={faCheckCircle} />
                <p className=' text-[16px] font-poppins font-semibold text-left'>4-year college degree (preferred but not required)</p>
              </div>
              <div className=' flex flex-row justify-start gap-x-4 items-center'>
                <FontAwesomeIcon className=' text-[24px] text-green-500' icon={faCheckCircle} />
                <p className=' text-[16px] font-poppins font-semibold text-left'>Valid driver’s license, registration and insurance</p>
              </div>
              <div className=' flex flex-row justify-start gap-x-4 items-center'>
                <FontAwesomeIcon className=' text-[24px] text-green-500' icon={faCheckCircle} />
                <p className=' text-[16px] font-poppins font-semibold text-left'>Comprehensive criminal background check</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}
