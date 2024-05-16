import React, { useState, useRef } from 'react'
import SideBar from '../../components/special/SideBar';
import CGPortalNavBar from '../../components/special/CGPortalNavBar';
import dummyData from '../../dummydata';
import SeniorSettingNormalInfor from '../../components/special/SeniorSettingNormalInfor';
import SeniorChangePassword from '../../components/special/SeniorChangePassword';
import SeniorSettingPreferences from '../../components/special/SeniorSettingPreferences';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

export default function SeniorSetting() {

  const [currentTap, setCurrentTap] = useState(0);

  const handleSidebarShow = () => {
    document.getElementById("left_sidebar").classList.toggle("hidden");
    document.getElementById("blur_board").classList.toggle("hidden");
  }


  return (
    <div className=" w-full h-screen flex flex-row relative ">
      <SideBar portalname="sportal" menu={dummyData.SMenu} current="setting" />
      <div onClick={handleSidebarShow} id="blur_board" className=' w-full h-screen absolute hidden left-0 top-0 backdrop-blur-[1px] z-[5]'></div>
      <div className=' flex-grow h-full flex flex-col'>
        <CGPortalNavBar current="Setting" name="John Doe" />
        <div className=' w-full h-full overflow-y-scroll bg-gray-100 py-[48px] pl-[32px] pr-[16px]'>
          <div className=' w-full flex flex-col items-center bg-white rounded-[20px] px-[10px] sm:px-[20px] md:px-[40px] lg:px-[60px] pt-[48px] pb-[100px] gap-y-10'>
            <div className=' w-full flex flex-col max-w-[800px] gap-y-10'>
              {/* tab  */}
              <div className="border-b border-gray-200 dark:border-neutral-700">
                <nav className="flex space-x-1" aria-label="Tabs" role="tablist">
                  <div onClick={() => setCurrentTap(0)} className={`flex flex-row gap-x-2 px-5 items-center cursor-pointer text-gray-500 hover:text-green-600 border-b-2 border-green-600  ${currentTap == 0 ? 'text-green-600' : '[&:not(:hover)]:border-b-transparent'} `}>
                    <p className=' font-semibold'>Profile</p>
                    <FontAwesomeIcon icon={faUser} className=' text-[12px]' />
                  </div>
                  <div onClick={() => setCurrentTap(1)} className={`flex flex-row gap-x-2 px-5 items-center cursor-pointer text-gray-500 hover:text-green-600 border-b-2 border-green-600  ${currentTap == 1 ? 'text-green-600' : '[&:not(:hover)]:border-b-transparent'} `}>
                    <p className=' font-semibold'>Security</p>
                    <FontAwesomeIcon icon={faLock} className=' text-[12px]' />
                  </div>
                  <div onClick={() => setCurrentTap(2)} className={`flex flex-row gap-x-2 px-5 items-center cursor-pointer text-gray-500 hover:text-green-600 border-b-2 border-green-600  ${currentTap == 2 ? 'text-green-600' : '[&:not(:hover)]:border-b-transparent'} `}>
                    <p className=' font-semibold'>Preferences</p>
                    <FontAwesomeIcon icon={faGear} className=' text-[12px]' />
                  </div>
                </nav>
              </div>
              <div>
                <div className={`${currentTap == 0 ? '' : ' hidden'}`}>
                  <SeniorSettingNormalInfor />
                </div>
                <div className={`${currentTap == 1 ? '' : ' hidden'}`}>
                  <SeniorChangePassword />
                </div>
                <div className={`${currentTap == 2 ? '' : ' hidden'}`}>
                  <SeniorSettingPreferences />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
