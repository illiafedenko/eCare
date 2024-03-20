import React from 'react'
import Header from '../components/general/Header'
import mainImage from '../assets/images/payment_main.png';
import WideImage from '../components/special/WideImage';
import Footer from '../components/general/Footer';
import { useNavigate } from 'react-router'
import BookComponent from '../components/special/BookComponent';

export default function HowToSignUp() {
  return (
    <div className=' w-full flex flex-col'>
      <Header current="howto" />
      <WideImage image={mainImage} text="How To Sign Up" />
      <div className=' w-full flex flex-col px-[40px] md:px-[50px] lg:px-[100px]'>
        <div className=' w-full mt-[80px] mb-[60px] flex flex-row gap-5 items-center'>
          <div className=' w-[48px] h-[48px] flex flex-row items-center rounded-[8px] border-none bg-gradient-to-br from-green-600 to-green-300'	>
            <p className=' w-full text-[24px] text-center text-white font-bold font-raleway'>1</p>
          </div>
          <p className=' text-left font-poppins font-bold'>Sign up for a free consultation</p>
        </div>
        <BookComponent />
      </div>

      <Footer />
    </div>
  )
}
