import React, { useState, useEffect } from 'react'
import logoImage from '../../assets/images/logo.png';
import avatar from '../../assets/images/caregiver6.png'
import dashboardIcon from '../../assets/images/dashboardicon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faDatabase, faMeteor, faTh, faThLarge, faThermometer4, faSearch } from '@fortawesome/free-solid-svg-icons';
import SideBar from '../../components/special/SideBar';
import dummyData from '../../dummydata';
import CGPortalNavBar from '../../components/special/CGPortalNavBar';
import addUserImage from '../../assets/images/adduser.png';
import CustomTable from '../../components/general/CustomTable';

export default function AdminUsers() {

  const handleSidebarShow = () => {
    document.getElementById("left_sidebar").classList.toggle("hidden");
    document.getElementById("blur_board").classList.toggle("hidden");
  }

  return (
    <div className=" w-full h-screen flex flex-row relative ">
      <SideBar portalname="aportal" menu={dummyData.AMenu} current="users" />
      <div onClick={handleSidebarShow} id="blur_board" className=' w-full h-screen absolute hidden left-0 top-0 backdrop-blur-[1px] z-[5]'></div>
      <div className=' flex-grow h-full flex flex-col'>
        <CGPortalNavBar current="Users" name="John Doe" />
        <div className=' w-full h-[calc(100vh-100px)] overflow-y-auto bg-gray-50 py-10 px-10'>
          <div className=' w-full flex flex-row gap-x-5'>
            <div className=' flex-grow bg-white rounded-[20px]'>
              <CustomTable />
            </div>
            <div className=' flex w-[320px] h-[280px] flex-col items-center gap-y-5 py-8 bg-white cursor-pointer rounded-[20px] border-[2px] border-gray-200'>
              <img className=' w-[131px] h-[94px]' src={addUserImage} />
              <p className=' text-[24px] leading-none font-poppins'>Add User</p>
              <p className=' text-[16px] leading-none font-poppins'>Click here to add a user</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
