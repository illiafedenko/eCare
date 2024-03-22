import React, { useState, useRef } from 'react'
import SideBar from '../../components/special/SideBar';
import CGPortalNavBar from '../../components/special/CGPortalNavBar';
import dummyData from '../../dummydata';
import AvatarMiniButtonUpload from '../../components/general/AvatarMiniButtonUpload';
import SettingInput from '../../components/general/SettingInput';

export default function SeniorSetting() {

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
          <div className=' w-full bg-white rounded-[20px] px-[10px] sm:px-[20px] md:px-[40px] lg:px-[60px] pt-[48px] pb-[100px]'>
            <div className=' w-full flex flex-col md:flex-row gap-x-8 gap-y-5'>
              <AvatarMiniButtonUpload />
              <div className='flex-grow flex-none flex-col'>
                <div className=' w-full grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
                  <div className=' flex flex-col gap-4'>
                    <SettingInput label="Your Name" type="text" name="fullname" placeholder="Your Name" value="John Doe" disabled required />
                    <SettingInput label="Email" type="email" name="email" placeholder="Your Email" value="charlenereed@gmail.com" disabled required />
                    <SettingInput label="Date of Birth" type="date" name="birthday" placeholder="Your Birthday" value="1990-07-01" disabled required />
                    <SettingInput label="Permanent Address" type="text" name="address" placeholder="Your Address" value="San Jose, California, USA" disabled required />
                    <SettingInput label="Postal Code" type="text" name="postalcode" placeholder="Postal code" value="45962" disabled required />
                  </div>
                  <div className=' flex flex-col gap-4'>
                    <SettingInput label="User Name" type="text" name="username" placeholder="User name" required />
                    <SettingInput label="Password" type="password" name="password" placeholder="Your Password" required />
                    <SettingInput label="Present Address" type="text" name="paddress" placeholder="Present Address" required />
                    <SettingInput label="City" type="text" name="city" placeholder="Your City" required />
                    <SettingInput label="Country" type="text" name="country" placeholder="Your Country" required />
                  </div>
                </div>
                <div className=' w-full flex flex-col items-center mt-[120px]'>
                  <button className=' w-1/2 min-w-[300px] h-[48px] text-[20px] leading-none font-poppins font-light text-white bg-green-600'>Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
