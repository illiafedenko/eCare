import React from 'react'
import SideBar from '../../components/special/SideBar';
import CGPortalNavBar from '../../components/special/CGPortalNavBar';
import NotificationCard from '../../components/special/NotificationCard';
import dummyData from '../../dummydata';
import CareGIverInfo from '../../components/special/CareGIverInfo';
import { faBagShopping, faLocationPin, faStar, faTransgenderAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function CGSchedule() {

  const handleSidebarShow = () => {
    document.getElementById("left_sidebar").classList.toggle("hidden");
    document.getElementById("blur_board").classList.toggle("hidden");
  }

  return (
    <div className=" w-full h-screen flex flex-row relative ">
      <SideBar portalname="cgportal" menu={dummyData.CGMenu} current="schedule" />
      <div onClick={handleSidebarShow} id="blur_board" className=' w-full h-screen absolute hidden left-0 top-0 backdrop-blur-[1px] z-[5]'></div>
      <div className=' flex-grow h-full flex flex-col'>
        <CGPortalNavBar current="Schedule" name="John Doe" />
        <div className=' w-full h-full overflow-y-scroll bg-gray-100 py-[48px] pl-[32px] pr-[16px]'>
          <div className=' w-full bg-white rounded-[20px] px-[10px] sm:px-[20px] md:px-[40px] lg:px-[60px] pt-[48px] pb-[100px]'>
            <div className=' flex flex-col max-w-[720px] px-6 py-5 gap-y-[48px] bg-slate-50 rounded-[24px]'>
              <div className=' flex flex-row justify-between items-center'>
                <div className=' flex flex-row items-center gap-[20px]'>
                  <img className=' w-[72px] h-[72px] object-cover rounded-full' src={dummyData.seniors[0].avatar} />
                  <div className=' flex flex-col items-start'>
                    <div className=' flex flex-row items-center gap-4'>
                      <p className=' text-[36px] 2xl:text-[48px] text-left line-clamp-1 leading-none font-poppins font-bold'>{dummyData.careGivers[0].name}</p>
                      <div className=' w-[24px] h-[24px] min-w-[24px] min-h-[24px] flex flex-row items-center justify-center bg-gradient-to-br from-green-600 to-green-300 rounded-[4px]'>
                        <FontAwesomeIcon className=' w-4 h-4 text-white' icon={faStar} />
                      </div>
                    </div>
                    <p className=' text-[20px] text-green-600 font-poppins font-bold'>Senior</p>
                  </div>
                </div>

                <div className=' text-white flex flex-row items-cente sm:flex-col sm:items-start md:flex-row md:items-center gap-x-1 gap-y-[8px]'>
                  <div className=" text-[12px] h-[30px] flex flex-row justify-center items-center gap-2 rounded-full bg-green-600 px-2 font-bold">
                    <FontAwesomeIcon className=' font-poppins font-bold' icon={faLocationPin} />
                    <p className=' text-[12px] font-poppins font-bold'>{dummyData.careGivers[0].location}</p>
                  </div>
                  <div className=" text-[12px] h-[30px] flex flex-row justify-center items-center gap-2 rounded-full bg-green-600 px-2 font-bold">
                    <FontAwesomeIcon className=' font-poppins font-bold' icon={faBagShopping} />
                    <p className=' text-[12px] font-poppins font-bold'>{dummyData.careGivers[0].role}</p>
                  </div>
                  <div className=" text-[12px] h-[30px] flex flex-row justify-center items-center gap-2 rounded-full bg-green-600 px-2 font-bold">
                    <FontAwesomeIcon className=' font-poppins font-bold' icon={faTransgenderAlt} />
                    <p className=' text-[12px] font-poppins font-bold'>{dummyData.careGivers[0].gender}</p>
                  </div>
                </div>
              </div>
              <div className=' w-full hover:cursor-pointer'>
                <div className=' w-full h-[60px] flex flex-row bg-green-100 text-green-600 items-center justify-between rounded-full px-[20px]'>
                  <p className=' text-[16px] font-poppins'>Wednesday 15th october 2023</p>
                  <p className=' text-[16px] font-poppins'>8:00am-9:00pm</p>
                </div>
                <p className=' h-[24px] px-[20px]'></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
