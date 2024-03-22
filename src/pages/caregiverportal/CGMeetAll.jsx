import React from 'react';
import logoImage from '../../assets/images/logo.png';
import dummyData from '../../dummydata';
import CareGiverBookCard from '../../components/special/CareGiverBookCard';

export default function CGMeetAll() {
  return (
    <div className=' w-full h-screen relative overflow-hidden flex flex-col'>
      <div className=' w-full px-[100px] pt-[50px]'>
        <img src={logoImage} />
      </div>
      <div className='pt-[50px] w-full container mx-auto '>
        <p className=' font-poppins font-bold text-[48px]'>Meet Our Care Givers</p>
        <div className=' w-full mt-[80px] grid md:grid-cols-2 xl:grid-cols-3 justify-center gap-x-[24px] gap-y-[48px]'>
          {
            dummyData.careGivers.map((careGiver, i) => {
              return (
                <div key={i} className=' w-full flex flex-col items-center'>
                  <CareGiverBookCard id={i} careGiver={careGiver} />
                </div>
              )
            })
          }
        </div>
      </div>
      <div className=' w-full h-[160px] flex flex-row items-center absolute bottom-0 backdrop-blur-sm z-10 '>
        <div className=' w-full flex flex-row justify-center'>
          <button className=' w-[148px] h-[56px] text-[16px] text-white font-poppins border-none outline-none bg-gradient-to-br from-green-700 to-green-400 rounded-2'>See All</button>
          <div className=' w-[48px]'></div>
          <button className=' w-[148px] h-[56px] text-[16px] font-poppins border-none outline-none bg-gray-200 rounded-2'>Skip</button>
        </div>
      </div>
    </div>
  )
}
