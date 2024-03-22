import React, { useState, useEffect } from 'react'
import logoImage from '../../assets/images/logo.png';
import avatar from '../../assets/images/caregiver6.png'
import dashboardIcon from '../../assets/images/dashboardicon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faDatabase, faMeteor, faTh, faThLarge, faThermometer4, faSearch } from '@fortawesome/free-solid-svg-icons';
import SideBar from '../../components/special/SideBar';
import dummyData from '../../dummydata';
import HorizontalMouseDraggableCardList from '../../components/special/HorizontalMouseDraggableCardList';
import SeniorInfoViewCard from '../../components/special/SeniorInfoViewCard';
import CGPortalNavBar from '../../components/special/CGPortalNavBar';
import CareGiverInfoViewCard from '../../components/special/CareGiverInfoViewCard';

export default function SeniorHome() {

  const handleSidebarShow = () => {
    document.getElementById("left_sidebar").classList.toggle("hidden");
    document.getElementById("blur_board").classList.toggle("hidden");
  }

  return (
    <div className=" w-full h-screen flex flex-row relative ">
      <SideBar portalname="sportal" menu={dummyData.SMenu} current="home" />
      <div onClick={handleSidebarShow} id="blur_board" className=' w-full h-screen absolute hidden left-0 top-0 backdrop-blur-[1px] z-[5]'></div>
      <div className=' flex-grow h-full flex flex-col'>
        <CGPortalNavBar current="Home" name="John Doe" />
        <div className=' w-full h-full relative overflow-x-hidden bg-gray-100 pt-[48px] pl-[32px] pr-[8px]'>
          <p className=' text-[24px] pb-4 font-poppins font-bold text-left'>Your Agenda</p>
          <div id="slider_area" className=' w-full h-[96px] relative overflow-hidden'>
            <HorizontalMouseDraggableCardList />
          </div>
          <p className=' text-[24px] mt-[48px] font-poppins font-bold text-left'>Your Seniors</p>
          <div className=' w-full mt-[80px] grid sm:grid-cols-2 lg:grid-cols-3 justify-center gap-x-[24px] gap-y-[48px]'>
            {
              dummyData.careGivers.map((careGiver, i) => {
                return (
                  <div key={i} className=' w-full flex flex-col items-center'>
                    <CareGiverInfoViewCard id={i} careGiver={careGiver} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
