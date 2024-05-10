import React, { useState, useEffect } from 'react'
import logoImage from '../../assets/images/logo.png';
import avatar from '../../assets/images/caregiver6.png'
import dashboardIcon from '../../assets/images/dashboardicon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faDatabase, faMeteor, faTh, faThLarge, faThermometer4, faSearch } from '@fortawesome/free-solid-svg-icons';
import SideBar from '../../components/special/SideBar';
import dummyData from '../../dummydata';
import CGPortalNavBar from '../../components/special/CGPortalNavBar';
import { Line } from 'react-chartjs-2';
import BarChart from '../../components/special/BarChart';
import LineChart from '../../components/special/LineChart';
import RadarChart from '../../components/special/RadarChart';

const state = {
  labels: ['January', 'February', 'March',
    'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default function AdminHome() {

  const state = {
    labels: ['January', 'February', 'March',
      'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
  }

  const handleSidebarShow = () => {
    document.getElementById("left_sidebar").classList.toggle("hidden");
    document.getElementById("blur_board").classList.toggle("hidden");
  }

  return (
    <div className=" w-full h-screen flex flex-row relative ">
      <SideBar portalname="aportal" menu={dummyData.AMenu} current="home" />
      <div onClick={handleSidebarShow} id="blur_board" className=' w-full h-screen absolute hidden left-0 top-0 backdrop-blur-[1px] z-[5]'></div>
      <div className=' flex-grow h-full flex flex-col'>
        <CGPortalNavBar current="Home" name="John Doe" />
        <div className=' w-full h-[calc(100vh-100px)] overflow-y-auto bg-gray-50 pt-[48px] px-[32px]'>
          <div className=' grid md:grid-cols-2 grid-cols-1 h-[500px] sm:gap-x-[40px] gap-y-[40px]'>
            <div className=' bg-white rounded-[40px] px-[40px] py-[40px] lg:min-h-[400px]'><LineChart /></div>
            <div className=' bg-white rounded-[40px] px-[40px] py-[40px] lg:min-h-[400px]'><RadarChart /></div>
          </div>
        </div>
      </div>
    </div>
  )
}
