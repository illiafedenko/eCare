import React from 'react'
import Header from '../../components/general/Header'
import mainImage from '../../assets/images/payment_main.png';
import WideImage from '../../components/special/WideImage';
import Footer from '../../components/general/Footer';
import { useNavigate } from 'react-router'

export default function HowToMain() {

  const navigate = useNavigate();

  const handleClick1 = () => {
    const path = "/howto/signup";
    navigate(path);
  }

  const handleClick2 = () => {
    const path = "/howto/match";
    navigate(path);
  }

  return (
    <div className=' w-full flex flex-col'>
      <Header current="howto" />
      <WideImage image={mainImage} text="How To Sign Up" />
      <div className=' w-full flex flex-col px-[40px] md:px-[50px] lg:px-[100px]'>
        <div className=' w-full grid grid-cols-2 pt-[120px] gap-[48px]'>
          <div onClick={handleClick1} className=' flex flex-col items-center py-[36px] px-[40px] bg-white gap-6 font-Poppins shadow-xl hover:shadow-2xl hover:cursor-pointer'>
            <div className=' w-[48px] h-[48px] flex flex-row items-center rounded-[8px] border-none bg-gradient-to-br from-green-600 to-green-300'	>
              <p className=' w-full text-[24px] text-center text-white font-bold font-raleway'>1</p>
            </div>
            <div className=' flex flex-col items-center bg-white gap-2 font-Poppins'>
              <p className=' text-left font-poppins font-bold'>sign up for a free consultation</p>
              <p className=' text-left font-poppins line-clamp-3 h-[72px] '>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. </p>
            </div>
          </div>
          <div onClick={handleClick2} className=' flex flex-col items-center py-[36px] px-[40px] bg-white gap-6 font-Poppins shadow-xl hover:shadow-2xl hover:cursor-pointer'>
            <div className=' w-[48px] h-[48px] flex flex-row items-center rounded-[8px] border-none bg-gradient-to-br from-green-600 to-green-300'	>
              <p className=' w-full text-[24px] text-center text-white font-bold font-raleway'>2</p>
            </div>
            <div className=' flex flex-col items-center bg-white gap-2 font-Poppins'>
              <p className=' text-left font-poppins font-bold'>sign up for a free consultation</p>
              <p className=' text-left font-poppins line-clamp-3 h-[72px] '>Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
