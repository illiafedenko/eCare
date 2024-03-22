import React from 'react'
import SideBar from '../../components/special/SideBar';
import CGPortalNavBar from '../../components/special/CGPortalNavBar';
import NotificationCard from '../../components/special/NotificationCard';
import dummyData from '../../dummydata';
import CareGIverInfo from '../../components/special/CareGIverInfo';
import { faBagShopping, faLocationPin, faStar, faTransgenderAlt, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CGCourseCard from '../../components/special/CGCourseCard';
import course1Image from '../../assets/images/about_1.png';
import course2Image from '../../assets/images/course.png';


export default function CGTraining() {

  const handleSidebarShow = () => {
    document.getElementById("left_sidebar").classList.toggle("hidden");
    document.getElementById("blur_board").classList.toggle("hidden");
  }

  return (
    <div className=" w-full h-screen flex flex-row relative ">
      <SideBar portalname="cgportal" menu={dummyData.CGMenu} current="training" />
      <div onClick={handleSidebarShow} id="blur_board" className=' w-full h-screen absolute hidden left-0 top-0 backdrop-blur-[1px] z-[5]'></div>
      <div className=' flex-grow h-full flex flex-col'>
        <CGPortalNavBar current="Training" name="John Doe" />
        <div className=' w-full h-full overflow-y-scroll bg-gray-100 py-[48px] pl-[32px] pr-[16px]'>
          <div className=' w-full bg-white rounded-[20px] px-[10px] sm:px-[20px] md:px-[40px] lg:px-[60px] pt-[48px] pb-[100px]'>
            <p className=' text-[20px] font-poppins font-bold text-left'>My courses</p>
            <div className=' w-full pt-[24px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-x-2 gap-y-2'>
              <CGCourseCard image={course1Image} title="My course" buttonText="Continue" />
              <CGCourseCard image={course1Image} title="My course" buttonText="Continue" />
              <CGCourseCard image={course1Image} title="My course" buttonText="Continue" />
              <CGCourseCard image={course1Image} title="My course" buttonText="Continue" />
            </div>
            <div className=' w-full mt-[48px] flex flex-row justify-between items-start'>
              <p className=' text-[20px] font-poppins font-bold text-left'>Explore other courses</p>
              <div className=' flex flex-grow max-w-[300px] h-[50px] relative'>
                <input
                  className=' w-full text-[18px] px-4 h-full border-[1px] border-gray-300 bg-gray-50 focus:border-blue-500 outline-none rounded-[4px]'
                  placeholder="Search for anything"
                  name="search"
                />
                <div className=' absolute w-[36px] h-full flex flex-col items-center justify-center right-0 top-0'>
                  <FontAwesomeIcon className=' w-4 h-4 text-gray-500' icon={faSearch} />
                </div>
              </div>
            </div>
            <div className=' w-full pt-[24px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-x-2 gap-y-2'>
              <CGCourseCard image={course2Image} title="My course" buttonText="Enroll" />
              <CGCourseCard image={course2Image} title="My course" buttonText="Enroll" />
              <CGCourseCard image={course2Image} title="My course" buttonText="Enroll" />
              <CGCourseCard image={course2Image} title="My course" buttonText="Enroll" />
              <CGCourseCard image={course2Image} title="My course" buttonText="Enroll" />
              <CGCourseCard image={course2Image} title="My course" buttonText="Enroll" />
              <CGCourseCard image={course2Image} title="My course" buttonText="Enroll" />
              <CGCourseCard image={course2Image} title="My course" buttonText="Enroll" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
