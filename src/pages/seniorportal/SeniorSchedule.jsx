import React, { useState, useEffect } from 'react'
import SideBar from '../../components/special/SideBar';
import CGPortalNavBar from '../../components/special/CGPortalNavBar';
import NotificationCard from '../../components/special/NotificationCard';
import dummyData from '../../dummydata';
import CareGIverInfo from '../../components/special/CareGIverInfo';
import { faGear, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DateTimeComponent from '../../components/special/DateTimeComponent';
import SeniorScheduleSelf from './SeniorScheduleSelf';

export default function SeniorSchedule() {

  const [currentTap, setCurrentTap] = useState(0);

  const handleSidebarShow = () => {
    document.getElementById("left_sidebar").classList.toggle("hidden");
    document.getElementById("blur_board").classList.toggle("hidden");
  }


  const [showMore, setShowMore] = useState(false);
  const [showLength, setShowLength] = useState(Math.min(dummyData.availableDateTimeList.length, 4));

  const handleShowMore = () => {
    if (showMore) {
      setShowLength(Math.min(dummyData.availableDateTimeList.length, 4));
    }
    else {
      setShowLength(dummyData.availableDateTimeList.length)
    }
    setShowMore(!showMore)
  }

  return (
    <div className=" w-full h-screen flex flex-row relative ">
      <SideBar portalname="sportal" menu={dummyData.SMenu} current="schedule" />
      <div onClick={handleSidebarShow} id="blur_board" className=' w-full h-screen absolute hidden left-0 top-0 backdrop-blur-[1px] z-[5]'></div>
      <div className=' flex-grow h-full flex flex-col'>
        <CGPortalNavBar current="Schedule" name="John Doe" />
        <div className=' w-full h-full overflow-y-scroll bg-gray-100 py-[48px] pl-[32px] pr-[16px]'>
          <div className=' w-full bg-white rounded-[20px] px-[10px] sm:px-[20px] md:px-[40px] lg:px-[60px] pt-[48px] pb-[100px]'>
            {/* tab  */}
            <div className="border-b border-gray-200 dark:border-neutral-700">
              <nav className="flex space-x-1" aria-label="Tabs" role="tablist">
                <div onClick={() => setCurrentTap(0)} className={`flex flex-row gap-x-2 px-5 items-center cursor-pointer text-gray-500 hover:text-green-600 border-b-2 border-green-600  ${currentTap == 0 ? 'text-green-600' : '[&:not(:hover)]:border-b-transparent'} `}>
                  <p className=' font-semibold'>Myself</p>
                  <FontAwesomeIcon icon={faUser} className=' text-[12px]' />
                </div>
                <div onClick={() => setCurrentTap(1)} className={`flex flex-row gap-x-2 px-5 items-center cursor-pointer text-gray-500 hover:text-green-600 border-b-2 border-green-600  ${currentTap == 1 ? 'text-green-600' : '[&:not(:hover)]:border-b-transparent'} `}>
                  <p className=' font-semibold'>Need help</p>
                  <FontAwesomeIcon icon={faGear} className=' text-[12px]' />
                </div>
              </nav>
            </div>
            <div>
              <div className={`${currentTap == 0 ? '' : ' hidden'}`}>
                <SeniorScheduleSelf />
              </div>
              <div className={`${currentTap == 1 ? '' : ' hidden'}`}>
                2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


/*
            <div className=' w-full flex flex-col text-left'>
              <p className=' text-[24px] font-poppins font-bold'>Select Caregiver</p>
              <p className=' text-[20px] mt-[40px] mb-[10px] font-raleway'>Care giver name<span className=' text-green-600'>*</span></p>
              <div className=' w-full sm:w-1/2 sm:pr-[24px]'>
                <div className=' w-full'>
                  <input
                    className=' w-full text-[18px] font-poppins px-4 h-[60px] border-[1px] border-gray-300 focus:border-blue-500 outline-none rounded-full'
                    placeholder="Eg: John Will"
                    name="caregivername"
                    required
                  />
                </div>
              </div>
            </div>
            <div className=' w-full flex flex-col text-left mt-[120px]'>
              <p className=' text-[24px] font-poppins font-bold'>Request a date</p>

              <div className=' grid grid-cols-1 sm:grid-cols-2 gap-x-[48px] gap-y-[24px]  mt-[40px]'>

                <div className=' w-full'>
                  <p className=' text-[20px] mb-[10px] font-raleway'>Appointment Date<span className=' text-green-600'>*</span></p>
                  <input
                    className=' w-full h-[60px] text-[18px] font-poppins px-4 border-[1px] border-gray-300 focus:border-blue-500 outline-none rounded-full'
                    placeholder="Type here"
                    name="caregivername"
                    required
                  />
                </div>
                <div className=' w-full'>
                  <p className=' text-[20px] mb-[10px] font-raleway'>Hour<span className=' text-green-600'>*</span></p>
                  <input
                    className=' w-full h-[60px] text-[18px] font-poppins px-4 border-[1px] border-gray-300 focus:border-blue-500 outline-none rounded-full'
                    placeholder="Eg: 8:00am-9:00pm"
                    name="caregivername"
                    required
                  />
                </div>
              </div>
            </div>

            <div className=' w-full flex flex-col text-left mt-[48px]'>
              <p className=' text-[24px] font-poppins font-bold'>Available Date and time</p>
              <div className=' grid grid-cols-1 sm:grid-cols-2 gap-x-[48px] gap-y-[6px]  mt-[40px]'>
                {
                  dummyData.availableDateTimeList.slice(0, showLength).map((item, i) => {
                    return (
                      <DateTimeComponent key={i} id={i} date={item.date} time={item.time} selected={false} />
                    )
                  })
                }
              </div>
            </div>
            <div className=' w-full mt-[32px] flex flex-col items-center ' onClick={handleShowMore}>
              <p className='text-[24px] text-green-600 font-poppins hover:cursor-pointer text-center'>{!showMore ? "Load More" : "Show Less"}</p>
            </div>
            <div className=' w-full mt-[48px] flex flex-col items-center '>
              <div className=' w-1/2 h-[60px]'>
                <button className=' w-full h-full rounded-full bg-green-700 font-raleway text-white text-[24px] leading-none text-center'>Submit</button>
              </div>
            </div>
*/