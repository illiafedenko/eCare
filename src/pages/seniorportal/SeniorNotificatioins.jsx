import React from 'react'
import SideBar from '../../components/special/SideBar';
import CGPortalNavBar from '../../components/special/CGPortalNavBar';
import NotificationCard from '../../components/special/NotificationCard';
import dummyData from '../../dummydata';

export default function SeniorNotificatioins() {

  const handleSidebarShow = () => {
    document.getElementById("left_sidebar").classList.toggle("hidden");
    document.getElementById("blur_board").classList.toggle("hidden");
  }

  return (
    <div className=" w-full h-screen flex flex-row relative ">
    <SideBar portalname="sportal" menu={dummyData.SMenu} current="notification" />
    <div onClick={handleSidebarShow} id="blur_board" className=' w-full h-screen absolute hidden left-0 top-0 backdrop-blur-[1px] z-[5]'></div>
    <div className=' flex-grow h-full flex flex-col'>
      <CGPortalNavBar current="Notifications" name="John Doe" />
      <div className=' w-full h-full overflow-y-scroll bg-gray-100 py-[48px] pl-[32px] pr-[16px]'>
        <p className=' text-[24px] font-poppins font-bold text-left'>New notifications</p>
        <div className=' w-full mt-[24px] flex flex-col gap-y-2'>
          <NotificationCard avatar={dummyData.seniors[1].avatar} name="Jone Doe" event="Sent you a message" date="2 days ago" />
          <NotificationCard avatar={dummyData.seniors[1].avatar} name="Jone Doe" event="Sent you a message" date="2 days ago" />
          <NotificationCard avatar={dummyData.seniors[1].avatar} name="Jone Doe" event="Sent you a message" date="2 days ago" />
        </div>
        <p className=' text-[24px] mt-[36px] font-poppins font-bold text-left'>New notifications</p>
        <div className=' w-full mt-[24px] flex flex-col gap-y-2'>
          <NotificationCard avatar={dummyData.seniors[1].avatar} name="Jone Doe" event="Sent you a message" date="2 days ago" />
          <NotificationCard avatar={dummyData.seniors[1].avatar} name="Jone Doe" event="Sent you a message" date="2 days ago" />
          <NotificationCard avatar={dummyData.seniors[1].avatar} name="Jone Doe" event="Sent you a message" date="2 days ago" />
          <NotificationCard avatar={dummyData.seniors[1].avatar} name="Jone Doe" event="Sent you a message" date="2 days ago" />
        </div>
      </div>
    </div>
  </div>
  )
}
