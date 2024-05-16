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
import { useNavigate } from 'react-router'
import SeniorsTable from '../../components/special/SeniorsTable';
import CareGiverTable from '../../components/special/CareGiverTable';
import OfficeManagement from './usermanagement/OfficeManagement';
import { useParams } from 'react-router';
import HumanResources from './usermanagement/HumanResources';
import SchedulesTable from './scheduleManagement/SchedulesTable';
import RequestTable from './scheduleManagement/RequestTable';
import { set } from 'firebase/database';
import AdminAddTraining from './trainingManagement/AdminAddTraining';
import CourseTable from './trainingManagement/CourseTable';
import GiveTrain from './trainingManagement/GiveTrain';

export default function AdminTraining() {

  const navigate = useNavigate();

  const [currentTap, setCurrentTap] = useState();
  const tabID = useParams().id;

  const handleSidebarShow = () => {
    document.getElementById("left_sidebar").classList.toggle("hidden");
    document.getElementById("blur_board").classList.toggle("hidden");
  }

  const handleAddUser = () => {
    // console.log(123);
    // navigate("/aportal/training/add/");
  }

  useEffect(() => {
    if (tabID == undefined) {
      setCurrentTap(0);
      navigate("/aportal/training/0");
    }
    else
      setCurrentTap(tabID);
  }, [])

  const setTap = (id) => {
    // console.log(id);
    setCurrentTap(id);
    navigate('/aportal/training/' + id);
  }


  return (
    <div className=" w-full h-screen flex flex-row relative ">
      <SideBar portalname="aportal" menu={dummyData.AMenu} current="training" />
      <div onClick={handleSidebarShow} id="blur_board" className=' w-full h-screen absolute hidden left-0 top-0 backdrop-blur-[1px] z-[5]'></div>
      <div className=' flex-grow h-full flex flex-col'>
        <CGPortalNavBar current="Training" name="John Doe" />
        <div className=' w-full h-[calc(100vh-100px)] overflow-y-auto bg-gray-50 py-10 px-10'>
          <div className=' w-full flex flex-col gap-x-5'>
            {/* tab  */}
            <div className=' flex-col flex gap-y-10 bg-white py-10 sm:px-10 px-5  border-[1px] border-gray-200 rounded-[12px]'>
              <div className=" sm:border-b  border-gray-200 dark:border-neutral-700 mx-2">
                <nav className="flex sm:flex-row flex-col sm:space-x-1 space-y-3 sm:space-y-0 text-left leading-none" aria-label="Tabs" role="tablist">
                  <div onClick={() => setTap(0)} className={`flex flex-row gap-x-2 px-5 items-center cursor-pointer text-gray-500 hover:text-green-600 sm:border-b-2 [&:not(:sm)]:border-l-2 border-green-600  ${currentTap == 0 ? 'text-green-600' : '[&:not(:hover)]:border-transparent '} `}>
                    <p className=' font-semibold'>Courses</p>
                    {/* <FontAwesomeIcon icon={faFilm} className=' text-[12px]' /> */}
                  </div>
                  <div onClick={() => setTap(1)} className={`flex flex-row gap-x-2 px-5 items-center cursor-pointer text-gray-500 hover:text-green-600 sm:border-b-2 [&:not(:sm)]:border-l-2 border-green-600  ${currentTap == 1 ? 'text-green-600' : '[&:not(:hover)]:border-transparent '} `}>
                    <p className=' font-semibold'>Upload</p>
                    {/* <FontAwesomeIcon icon={faUser} className=' text-[12px]' /> */}
                  </div>
                  <div onClick={() => setTap(2)} className={`flex flex-row gap-x-2 px-5 items-center cursor-pointer text-gray-500 hover:text-green-600 sm:border-b-2 [&:not(:sm)]:border-l-2 border-green-600  ${currentTap == 2 ? 'text-green-600' : '[&:not(:hover)]:border-transparent '} `}>
                    <p className=' font-semibold'>Train</p>
                    {/* <FontAwesomeIcon icon={faUser} className=' text-[12px]' /> */}
                  </div>
                </nav>
              </div>
              <div>
                <div className={`${currentTap == 0 ? '' : ' hidden '}`}>
                  <CourseTable />
                </div>
                <div className={`${currentTap == 1 ? '' : ' hidden '}`}>
                  <AdminAddTraining />
                </div>
                <div className={`${currentTap == 2 ? '' : ' hidden '}`}>
                  <GiveTrain />
                </div>
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
