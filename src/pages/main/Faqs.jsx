import React, { useState, useEffect } from 'react'
import Header from '../../components/general/Header'
import Footer from '../../components/general/Footer'
import MiniGradientButton from '../../components/general/MiniGradientButton'
import mainImage from '../../assets/images/faq_main.png';
import IconSelectBox from '../../components/general/IconSelectBox';
import dummyData from '../../dummydata';
import CareGiverBookCard from '../../components/special/CareGiverBookCard';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faArrowRightLong, faBagShopping, faLocationPin, faMinus, faPlus, faSearch, faTransgenderAlt } from '@fortawesome/free-solid-svg-icons';
import WideImage from '../../components/special/WideImage';
import FaqAccordion from '../../components/special/FaqAccordion';

export default function Faqs() {

  return (
    <div className=' w-full h-full flex-col'>
      <Header current="caregivers" />
      <WideImage image={mainImage} text="FAQs" />

      <div className=' w-full flex flex-col px-[40px] md:px-[50px] lg:px-[100px]'>
        {/* Filters */}
        <div className=' mt-[120px] flex flex-col'>
          <p className=' text-[36px] font-poppins font-bold'>Don’t see your answer?</p>
          <p className=' mt-[20px] text-[20px] font-poppins'>Email hello@naborforce.com or give us a call at 844.My.Nabor</p>
        </div>
        <div className=' h-[100px]'></div>
        <FaqAccordion data={dummyData.faqs} />

      </div>

      <Footer />
    </div>
  )
}
