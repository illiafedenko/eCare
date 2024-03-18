import React from 'react';
import Header from '../components/general/Header';
import Footer from '../components/general/Footer';
import WideImage from '../components/special/WideImage';
import mainImage from '../assets/images/payment_main.png';
import { main } from '@popperjs/core';
import MiniNormalButton from '../components/general/MiniNormalButton';
import flightImage from '../assets/images/flight.png';
import SwitchButton from '../components/general/SwitchButton';
import PaymentPlanCard from '../components/special/PaymentPlanCard';

export default function PaymentPage() {
  return (
    <div className=' w-full h-full flex-col'>
      <Header current="payment" />
      <WideImage image={mainImage} text={"Cost and Payment"} />


      <div className=' w-full flex flex-col px-[40px] md:px-[50px] lg:px-[100px]'>



        {/* Payment Plans */}
        <div className=' mt-[120px] flex flex-col items-center'>
          <p className=' text-[48px] leading-none font-poppins font-bold'>Payment Plans</p>
          <div className=' h-[60px]'></div>
          <SwitchButton />
          <div className=' h-[40px]'></div>
          <div className=' flex lg:flex-row flex-col gap-x-[24px] gap-y-[48px]'>
            <PaymentPlanCard category="BASIC" price="$599" unit="Month" popular={false} />
            <PaymentPlanCard category="PREMIUM" price="$1299" unit="Month" popular={true}  />
            <PaymentPlanCard category="REGULAR" price="$1999" unit="Month" popular={false}  />
          </div>
        </div>

        {/* Insurance and Medicare/Medicaid */}
        <div className=' w-full mt-[120px]'>
          <p className=' text-[48px] font-poppins font-bold'>Insurance and Medicare/Medicaid</p>
          <p className=' text-[18px] mt-[24px] text-gray-500 font-poppins'>Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. Eu adipiscing massa ut proin mauris orci tincidunt ac in. Augue non malesuada placerat faucibus nam purus sem. Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. Eu adipiscing massa ut proin mauris orci tincidunt ac in. Augue non malesuada placerat faucibus nam purus sem.</p>
        </div>


        {/* Financial Assistance Resources */}
        <div className=' mt-[120px] relative w-full px-[40px] md:px-[100px] py-[72px] flex flex-col gap-5 bg-gradient-to-br from-green-700 to-green-400'>
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
      <Footer />
    </div>
  )
}
