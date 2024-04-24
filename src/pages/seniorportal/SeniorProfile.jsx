import React, { useState, useEffect } from 'react'
import SideBar from '../../components/special/SideBar';
import CGPortalNavBar from '../../components/special/CGPortalNavBar';
import NotificationCard from '../../components/special/NotificationCard';
import dummyData from '../../dummydata';
import CareGIverInfo from '../../components/special/CareGIverInfo';
import { faBagShopping, faLocationPin, faMedal, faStar, faTransgenderAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, onValue } from 'firebase/database';

export default function SeniorProfile() {

  const [userName, setUserName] = useState();
  const [city, setCity] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
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
            }
            onValue(user, (snapshot) => {
              const data = snapshot.val();
              if (data != null) {
                setUserName(data.fullname);
                setCity(data.city);
                setAge(calculateAge(data.birthday));
                setGender(data.gender);
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

  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthdateParts = birthdate.split('-');
    const birthYear = parseInt(birthdateParts[2], 10);
    let age = today.getFullYear() - birthYear;
    console.log(age);
    return age;
  }

  const handleSidebarShow = () => {
    document.getElementById("left_sidebar").classList.toggle("hidden");
    document.getElementById("blur_board").classList.toggle("hidden");
  }


  return (
    <div className=" w-full h-screen flex flex-row relative ">
      <SideBar portalname="sportal" menu={dummyData.SMenu} current="profile" />
      <div onClick={handleSidebarShow} id="blur_board" className=' w-full h-screen absolute hidden left-0 top-0 backdrop-blur-[1px] z-[5]'></div>
      <div className=' flex-grow h-full flex flex-col'>
        <CGPortalNavBar current="My Profile" name="John Doe" />
        <div className=' w-full h-full overflow-y-scroll bg-gray-100 py-[48px] pl-[32px] pr-[16px]'>
          <div className=' w-full bg-white rounded-[20px] px-[30px] md:px-[40px] lg:px-[60px] pt-[48px] pb-[100px]'>
            <div className=' w-full  flex flex-col lg:flex-row gap-x-10'>
              <div className=' w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] rounded-[25px] flex-none'>
                <img className=' w-full h-full object-cover rounded-[25px]' src={dummyData.seniors[0].avatar}></img>
              </div>
              <div className=' py-5 px-3 flex flex-grow-1 flex-col gap-y-[20px]'>
                <div className=' w-full flex flex-col sm:flex-row gap-y-[20px] justify-between'>
                  <div className=' flex flex-col items-start'>
                    <div className=' flex flex-row items-center gap-8'>
                      <p className=' text-[24px] 2xl:text-[36px] text-left line-clamp-1 leading-none font-poppins font-bold'>{userName}</p>
                      {/* <div className=' w-[24px] h-[24px] min-w-[24px] min-h-[24px] flex flex-row items-center justify-center bg-gradient-to-br from-green-600 to-green-300 rounded-[8px]'>
                        <FontAwesomeIcon className=' w-4 h-4 text-white' icon={faStar} />
                      </div> */}
                    </div>
                    <p className=' text-[16px] text-green-600 font-poppins font-bold'>Senior</p>
                  </div>
                  <div className=' flex flex-row items-center sm:items-start md:flex-row md:items-center gap-x-1 gap-y-[8px]'>
                    <div className=" text-[12px] h-[30px] flex flex-row justify-center items-center gap-2 rounded-full bg-gray-200 px-2 font-bold">
                      <FontAwesomeIcon className=' text-green-600 font-poppins font-bold' icon={faLocationPin} />
                      <p className=' text-[12px] font-poppins font-bold'>{city}</p>
                    </div>
                    <div className=" text-[12px] h-[30px] flex flex-row justify-center items-center gap-2 rounded-full bg-gray-200 px-2 font-bold">
                      <FontAwesomeIcon className=' text-green-600 font-poppins font-bold' icon={faMedal} />
                      <p className=' text-[12px] font-poppins font-bold'>{age}</p>
                    </div>
                    <div className=" text-[12px] h-[30px] flex flex-row justify-center items-center gap-2 rounded-full bg-gray-200 px-2 font-bold">
                      <FontAwesomeIcon className=' text-green-600 font-poppins font-bold' icon={faTransgenderAlt} />
                      <p className=' text-[12px] font-poppins font-bold'>{gender}</p>
                    </div>
                    {/* <div className=" text-[12px] h-[30px] flex flex-row justify-center items-center gap-2 rounded-full bg-gray-200 px-2 font-bold">
                      <p className=" text-[12px] text-green-600 font-poppins font-bold">Available</p>
                    </div> */}

                  </div>
                </div>
                <div className=' w-full '>
                  <p className=' w-full text-[18px] font-raleway text-gray-600 text-left'>
                    {dummyData.seniors[0].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
