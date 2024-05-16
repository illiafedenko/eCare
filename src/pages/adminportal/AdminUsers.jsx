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

export default function AdminUsers() {

  const navigate = useNavigate();

  const [currentTap, setCurrentTap] = useState(0);
  const userCategory = useParams().id;

  const handleSidebarShow = () => {
    document.getElementById("left_sidebar").classList.toggle("hidden");
    document.getElementById("blur_board").classList.toggle("hidden");
  }

  const handleAddUser = () => {
    console.log(123);
    navigate("/aportal/users/add/");
  }

  useEffect(() => {
    if (userCategory == undefined) {
      navigate('/aportal/users/0');
    } else {
      setCurrentTap(userCategory);
    }
  }, [])

  const setTap = (id) => {
    navigate('/aportal/users/' + id);
    setCurrentTap(id);
  }


  return (
    <div className=" w-full h-screen flex flex-row relative ">
      <SideBar portalname="aportal" menu={dummyData.AMenu} current="users" />
      <div onClick={handleSidebarShow} id="blur_board" className=' w-full h-screen absolute hidden left-0 top-0 backdrop-blur-[1px] z-[5]'></div>
      <div className=' flex-grow h-full flex flex-col'>
        <CGPortalNavBar current="Users" name="John Doe" />
        <div className=' w-full h-[calc(100vh-100px)] overflow-y-auto bg-gray-50 py-10 px-10'>
          <div className=' w-full flex flex-col gap-x-5'>
            {/* tab  */}
            <div className=' flex-col flex gap-y-10 bg-white py-10 sm:px-10 px-5 border-gray-200 rounded-[20px]'>
              <div className=" sm:border-b  border-gray-200 dark:border-neutral-700 mx-2">
                <nav className="flex sm:flex-row flex-col sm:space-x-1 space-y-3 sm:space-y-0 text-left leading-none" aria-label="Tabs" role="tablist">
                  <div onClick={() => setTap(0)} className={`flex flex-row gap-x-2 px-5 items-center cursor-pointer text-gray-500 hover:text-green-600 sm:border-b-2 [&:not(:sm)]:border-l-2 border-green-600  ${currentTap == 0 ? 'text-green-600' : '[&:not(:hover)]:border-transparent '} `}>
                    <p className=' font-semibold'>Senior</p>
                    {/* <FontAwesomeIcon icon={faUser} className=' text-[12px]' /> */}
                  </div>
                  <div onClick={() => setTap(1)} className={`flex flex-row gap-x-2 px-5 items-center cursor-pointer text-gray-500 hover:text-green-600 sm:border-b-2 [&:not(:sm)]:border-l-2 border-green-600  ${currentTap == 1 ? 'text-green-600' : '[&:not(:hover)]:border-transparent '} `}>
                    <p className=' font-semibold'>CareGiver</p>
                    {/* <FontAwesomeIcon icon={faUser} className=' text-[12px]' /> */}
                  </div>
                  <div onClick={() => setTap(2)} className={`flex flex-row gap-x-2 px-5 items-center cursor-pointer text-gray-500 hover:text-green-600 sm:border-b-2 [&:not(:sm)]:border-l-2 border-green-600  ${currentTap == 2 ? 'text-green-600' : '[&:not(:hover)]:border-transparent'} `}>
                    <p className=' font-semibold'>Office Manager</p>
                  </div>
                  <div onClick={() => setTap(3)} className={`flex flex-row gap-x-2 px-5 items-center cursor-pointer text-gray-500 hover:text-green-600 sm:border-b-2 [&:not(:sm)]:border-l-2 border-green-600  ${currentTap == 3 ? 'text-green-600' : '[&:not(:hover)]:border-transparent'} `}>
                    <p className=' font-semibold'>Human Resources</p>
                  </div>
                </nav>
              </div>
              <div>
                <div className={`${currentTap == 0 ? '' : ' hidden '}`}>
                  <SeniorsTable />
                </div>
                <div className={`${currentTap == 1 ? '' : ' hidden '}`}>
                  <CareGiverTable />
                </div>
                <div className={`${currentTap == 2 ? '' : ' hidden '}`}>
                  <OfficeManagement />
                </div>
                <div className={`${currentTap == 3 ? '' : ' hidden '}`}>
                  <HumanResources />
                </div>
              </div>
              <div>
              </div>
            </div>
            {/* <div onClick={() => handleAddUser()} className=' flex w-[320px] h-[280px] flex-col items-center gap-y-5 py-8 bg-white cursor-pointer rounded-[20px] border-[2px] border-gray-200'>
              <img className=' w-[131px] h-[94px]' src={addUserImage} />
              <p className=' text-[24px] leading-none font-poppins'>Add User</p>
              <p className=' text-[16px] leading-none font-poppins'>Click here to add a user</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
