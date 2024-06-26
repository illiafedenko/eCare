import React, { useState, useRef } from 'react'
import SideBar from '../../components/special/SideBar';
import CGPortalNavBar from '../../components/special/CGPortalNavBar';
import dummyData from '../../dummydata';
import logoutImage from '../../assets/images/logout.png';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router';

export default function CGLogout() {

  const navigate = useNavigate();

  const handleSidebarShow = () => {
    document.getElementById("left_sidebar").classList.toggle("hidden");
    document.getElementById("blur_board").classList.toggle("hidden");
  }

  const onLogOut = () => {
    getAuth().signOut().then(() => {
      const path = "/signin";
      navigate(path);
    })
  }


  return (
    <div className=" w-full h-screen flex flex-row relative ">
      <SideBar portalname="cgportal" menu={dummyData.CGMenu} current="logout" />
      <div onClick={handleSidebarShow} id="blur_board" className=' w-full h-screen absolute hidden left-0 top-0 backdrop-blur-[1px] z-[5]'></div>
      <div className=' flex-grow h-full flex flex-col'>
        <CGPortalNavBar current="Log out" name="John Doe" />
        <div className=' w-full h-full overflow-y-scroll bg-gray-100 py-[48px] pl-[32px] pr-[16px]'>
          <div className=' w-full h-full bg-white rounded-[20px] px-[10px] sm:px-[20px] md:px-[40px] lg:px-[60px] pt-[48px] pb-[100px]'>
            <div className=' w-full h-full flex flex-col justify-center items-center gap-[80px]'>
              <img src={logoutImage}></img>
              <div className=' flex flex-col gap-2'>
                <p className=' text-[24px] md:text-[40px] font-raleway leading-none'>Are you sure you want to logout?</p>
                <p className=' text-[12px] md:text-[20px] font-raleway leading-none'>You will need to sign in again if you logout.</p>
              </div>
              <div onClick={() => onLogOut()} className=' flex flex-row items-center justify-center w-1/2 min-w-[280px] h-[48px] text-[20px] leading-none font-poppins font-light text-white bg-green-600 hover:bg-green-700 border-none outline-none hover:border-none hover:outline-none rounded-lg cursor-pointer'>
                <p className=' select-none'>Log out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
