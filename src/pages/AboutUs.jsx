import React from 'react';
import Header from '../components/general/Header';
import mainImage from '../assets/images/about_main.png';
import WideImage from '../components/special/WideImage';
import missionImage from '../assets/images/about_1.png';
import HistoryTimeline from '../components/special/HistoryTimeline';
import MeetCareGivers from '../components/special/MeetCareGivers';
import Footer from '../components/general/Footer';

export default function AboutUs() {
  return (
    <div className=' flex flex-col w-full '>
      <Header current="about" />
      <WideImage image={mainImage} text="About Us" />

      <div className=' w-full flex flex-col px-[40px] md:px-[50px] lg:px-[100px]'>
        {/* Mission Statement */}
        <div className=' grid grid-cols-1 mt-[120px]  md:grid-cols-2 gap-[40px]'>
          <div className=' flex flex-col justify-center '>
            <div className=' md:pr-[50px] lg:pr-[100px] flex flex-col items-start gap-[20px]'>
              <p className=' text-[48px] font-poppins font-extrabold text-left leading-none'>Mission Statement</p>
              <p className=' text-[18px] font-Poppins text-left'>Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac. Viverra donec nulla id enim posuere donec morbi dolor. Eu adipiscing massa ut proin mauris orci tincidunt ac in.</p>
            </div>
          </div>
          <div className=' w-full aspect-square relative'>
            <div className=' w-full aspect-square z-[10]'>
              <img src={missionImage} className=' w-full h-full object-cover z-[10]'></img>
            </div>
          </div>
        </div>
        {/* Time line */}
        <HistoryTimeline />
        <MeetCareGivers />

      </div>
      <Footer />

    </div>
  )
}
