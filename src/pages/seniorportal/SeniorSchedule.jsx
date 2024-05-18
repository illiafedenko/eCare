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
import SeniorScheduleHelp from './SeniorScheduleHelp';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";

export default function SeniorSchedule() {

  const [currentTap, setCurrentTap] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

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

  useEffect(() => {
    const currentPath = location.pathname.split('/');
    const lastPath = currentPath[currentPath.length - 1];
    if (lastPath == "self") {
      setCurrentTap(0);
    } else if (lastPath == "help") {
      setCurrentTap(1);
    } else {
      navigate('/sportal/schedule/self');
    }
    console.log()
  }, [])


  const onSelf = () => {
    setCurrentTap(0);
    navigate('/sportal/schedule/self');
  }

  const onHelp = () => {
    setCurrentTap(1);
    navigate('/sportal/schedule/help');
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
                <div onClick={() => onSelf()} className={`flex flex-row gap-x-2 px-5 items-center cursor-pointer text-gray-500 hover:text-green-600 border-b-2 border-green-600  ${currentTap == 0 ? 'text-green-600' : '[&:not(:hover)]:border-b-transparent'} `}>
                  <p className=' font-semibold'>Myself</p>
                  <FontAwesomeIcon icon={faUser} className=' text-[12px]' />
                </div>
                <div onClick={() => onHelp()} className={`flex flex-row gap-x-2 px-5 items-center cursor-pointer text-gray-500 hover:text-green-600 border-b-2 border-green-600  ${currentTap == 1 ? 'text-green-600' : '[&:not(:hover)]:border-b-transparent'} `}>
                  <p className=' font-semibold'>Need help</p>
                  <FontAwesomeIcon icon={faGear} className=' text-[12px]' />
                </div>
              </nav>
            </div>
            <div>
              <div className={`${currentTap == 0 ? '' : ' hidden'}`}>
                <SeniorScheduleSelf key={'self' + currentTap} />
              </div>
              <div className={`${currentTap == 1 ? '' : ' hidden'}`}>
                <SeniorScheduleHelp key={'help' + currentTap} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
