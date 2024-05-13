import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faDatabase, faMeteor, faTh, faThLarge, faThermometer4, faSearch } from '@fortawesome/free-solid-svg-icons';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, onValue } from 'firebase/database';


export default function CGPortalNavBar(props) {

  const [userName, setUserName] = useState();
  const db = getDatabase();

  useEffect(() => {
    const getUserName = async () => {
      try {
        getAuth().onAuthStateChanged(async (user) => {
          if (user) {
            const idTokenResult = await user.getIdTokenResult();
            var user;
            if (localStorage.getItem("userType") == "caregiver") {
              user = ref(db, 'caregivers/' + idTokenResult.claims.user_id);
            } else if (localStorage.getItem("userType") == "senior") {
              user = ref(db, 'seniors/' + idTokenResult.claims.user_id);
            } else if (localStorage.getItem("userType") == "admin") {
              user = ref(db, 'admins/' + idTokenResult.claims.user_id);
            }
            onValue(user, (snapshot) => {
              const data = snapshot.val();
              if (data != null) {
                setUserName(data.fullname);
              }
            });
          }
          else {
          }
        })
      } catch (error) {

      }
    }
    getUserName();
  }, [])


  const handleSidebarShow = () => {
    document.getElementById("left_sidebar").classList.toggle("hidden");
    document.getElementById("blur_board").classList.toggle("hidden");
  }

  return (
    <div className=' w-full h-[100px] min-h-[100px] px-[40px] border-b-[1px] flex flex-row justify-between items-center gap-x-[40px] border-gray-100'>
      <div className=' flex flex-row items-center gap-2'>
        <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar"
          type="button"
          onClick={handleSidebarShow}
          className="inline-flex items-center p-2 mr-2 text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span className="sr-only">Open sidebar</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
            </path>
          </svg>
        </button>
        <div className=' h-[50px] mr-2 xl:hidden border-r-[1px] border-gray-100'></div>
        <p className=' text-[24px] hidden sm:block font-poppins font-semibold'>{props.current}</p>
      </div>
      {/* <div className=' hidden md:flex flex-grow max-w-[500px] h-[50px] relative'>
        <input
          className=' w-full text-[18px] px-4 h-full border-[1px] border-gray-300 bg-gray-50 focus:border-blue-500 outline-none rounded-[8px]'
          placeholder="Search for anything"
          name="search"
        />
        <div className=' absolute w-[36px] h-full flex flex-col items-center justify-center right-0 top-0'>
          <FontAwesomeIcon className=' w-4 h-4 text-gray-500' icon={faSearch} />
        </div>
      </div> */}
      <div className=' flex flex-col text-left text-[20px] font-poppins'>
        <p>Good morning 👋🏽,</p>
        <p className=' text-green-600 text-right'>{userName}</p>
      </div>
    </div>
  )
}
