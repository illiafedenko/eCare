import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import SideBar from '../../components/special/SideBar';
import dummyData from '../../dummydata';
import CGPortalNavBar from '../../components/special/CGPortalNavBar';
import { useNavigate } from 'react-router'
import { useParams } from 'react-router';
import AdminAddTraining from './trainingManagement/AdminAddTraining';
import CourseTable from './trainingManagement/CourseTable';
import GiveTrain from './trainingManagement/GiveTrain';
import SubscriptionPlans from './subscriptionManagement/SubscriptionPlans';
import AddPlan from './subscriptionManagement/AddPlan';
import EditPlan from './subscriptionManagement/EditPlan';

export default function AdminSubscription() {

  const navigate = useNavigate();

  const handleSidebarShow = () => {
    document.getElementById("left_sidebar").classList.toggle("hidden");
    document.getElementById("blur_board").classList.toggle("hidden");
  }

  useEffect(() => {

  }, [])



  return (
    <div className=" w-full h-screen flex flex-row relative ">
      <SideBar portalname="aportal" menu={dummyData.AMenu} current="subscription" />
      <div onClick={handleSidebarShow} id="blur_board" className=' w-full h-screen absolute hidden left-0 top-0 backdrop-blur-[1px] z-[5]'></div>
      <div className=' flex-grow h-full flex flex-col'>
        <CGPortalNavBar current="Subscription" name="John Doe" />
        <div className=' w-full h-[calc(100vh-100px)] overflow-y-auto bg-gray-50 py-10 px-10'>
          <div className=' w-full flex flex-col gap-x-5'>
            {/* tab  */}
            <div className=' flex-col flex gap-y-10 bg-white py-10 sm:px-10 px-5 border-gray-200 rounded-[20px]'>
              <div>
                <SubscriptionPlans />
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
