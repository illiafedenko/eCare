import React, { useState, useEffect } from 'react'
import logoImage from '../../assets/images/logo.png';
import avatar from '../../assets/images/caregiver6.png'
import dashboardIcon from '../../assets/images/dashboardicon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faDatabase, faMeteor, faTh, faThLarge, faThermometer4, faSearch } from '@fortawesome/free-solid-svg-icons';
import SideBar from '../../components/special/SideBar';
import dummyData from '../../dummydata';
import CGPortalNavBar from '../../components/special/CGPortalNavBar';
import { useNavigate } from 'react-router'
import AvatarUpload from '../../components/general/AvatarUpload';
import NormalInput from '../../components/general/NormalInput';
import Select from 'react-select';
import SmallSelect from '../../components/general/SmallSelect';
import SmallInput from '../../components/general/SmallInput';
import SamllDatePicker from '../../components/general/SamllDatePicker';

export default function AdminAddUser() {

  const navigate = useNavigate();
  const availabilities = [];

  dummyData.availabilities.map((ava, i) => {
    availabilities.push({
      value: ava, label: ava
    })
  })

  const handleSidebarShow = () => {
    document.getElementById("left_sidebar").classList.toggle("hidden");
    document.getElementById("blur_board").classList.toggle("hidden");
  }

  const handleGoToUsers = () => {
    navigate("/aportal/users");
  }

  return (
    <div className=" w-full h-screen flex flex-row relative ">
      <SideBar portalname="aportal" menu={dummyData.AMenu} current="users" />
      <div onClick={handleSidebarShow} id="blur_board" className=' w-full h-screen absolute hidden left-0 top-0 backdrop-blur-[1px] z-[5]'></div>
      <div className=' flex-grow h-full flex flex-col'>
        <CGPortalNavBar current="Users" name="John Doe" />
        <div className=' w-full h-[calc(100vh-100px)] overflow-y-auto bg-gray-50 py-10 px-10'>
          <div className=' w-full flex flex-col gap-y-6'>
            <div className=' flex flex-row w-[180px] justify-around items-center px-4 py-2 bg-white border-[1px] border-gray-200 rounded-[12px]'>
              <span onClick={() => handleGoToUsers()} className=' text-[16px] font-poppins cursor-pointer hover:text-green-500'>Users</span>
              <span className=' text-[16px] font-poppins'>&#62;</span>
              <span className=' text-[16px] font-poppins text-green-600 cursor-pointer'>Add user</span>
            </div>
            <div className=' w-full px-8 py-10 sm:px-12 sm:py-16 bg-white border-[1px] border-gray-200 rounded-[12px]'>
              <div className=' flex flex-col md:flex-row gap-x-8 gap-y-8'>
                <div className=' flex flex-col gap-y-2'>
                  <p className=' font-poppins text-[12px] text-left'>Profile Picture</p>
                  <AvatarUpload />
                </div>
                <div className=' flex md:flex-grow'>
                  <div className=' w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6'>
                    <div className=' w-full flex flex-col items-start'>
                      <span className=' font-poppins text-left'>Name</span>
                      <NormalInput name="fullname" placeholder="Full Name" type="text" required />
                    </div>
                    <div className=' w-full flex flex-col items-start'>
                      <span className=' font-poppins text-left'>Email Address</span>
                      <NormalInput name="eamil" placeholder="Email" type="email" required />
                    </div>
                    <div className=' w-full flex flex-col items-start'>
                      <span className=' font-poppins text-left'>Role</span>
                      <NormalInput name="role" placeholder="Role" type="text" required />
                    </div>
                    <div className=' w-full flex flex-col items-start'>
                      <span className=' font-poppins text-left'>Password</span>
                      <NormalInput name="password" placeholder="Password" type="password" required />
                    </div>
                    <div className=' w-full flex flex-col items-start'>
                      <span className=' font-poppins text-left'>Phone Number</span>
                      <NormalInput name="phonenumber" placeholder="Phone Number" type="text" required />
                    </div>
                    <SmallInput label="Address" placeholder="Address" />
                    <div className=' w-full flex flex-col items-start'>
                      <span className=' font-poppins text-left'>Date of Birth</span>
                      <NormalInput name="birthday" placeholder={new Date()} type="date" required />
                    </div>
                    <SmallSelect label="Status" options={availabilities} placeholder="status" />
                  </div>
                </div>
              </div>
              <div className=' mt-[100px] w-full flex flex-col items-center'>
                <button className=' w-[240px] bg-green-700 text-white font-poppins'>Add User</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
