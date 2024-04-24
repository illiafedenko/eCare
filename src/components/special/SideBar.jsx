import React, { useState, useEffect } from 'react'
import logoImage from '../../assets/images/logo.png';
import avatar from '../../assets/images/caregiver6.png'
import dashboardIcon from '../../assets/images/dashboardicon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router'
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, onValue } from 'firebase/database';
import maleSeniorImage from '../../assets/images/unknown_senior_m.png';
import femaleSeniorImage from '../../assets/images/unknown_senior_f.png';
import unknownCaregiverImage from '../../assets/images/unknown_image_caregiver.png';

export default function SideBar(props) {

  const navigate = useNavigate();

  const [current, setCurrent] = useState(props.current);

  const [sidebarVisible, setSidebarVisible] = useState(false)

  const [userName, setUserName] = useState();
  const [gender, setGender] = useState();
  const [imgURL, setImgURL] = useState();

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
                setGender(data.gender);
                if (data.avatar != null && data.avatar != "") {
                  setImgURL(data.avatar);
                }
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

    document.getElementById(current).classList.add("text-green-600");
    document.getElementById(current).classList.add("bg-green-50");
    document.getElementById(current + "2").classList.add("text-green-600");
    document.getElementById(current + "2").classList.add("bg-green-50");
  }, [])

  const handleSidebarShow = () => {
    document.getElementById("left_sidebar").classList.toggle("hidden");
    document.getElementById("blur_board").classList.toggle("hidden");
  }

  const handleNavigate = (id) => {
    if (id == "home") id = "";
    const path = "/" + props.portalname + "/" + id;
    navigate(path);
  }

  const gotoMainHomePage = () => {
    const path = "/";
    navigate(path);
  }

  return (
    <>
      <aside className='w-[350px] min-w-[350px] h-screen xl:flex flex-col hidden px-5 border-r-[1px] border-gray-100 transition-transform -translate-x-full xl:translate-x-0'>
        <div className=' w-full h-[100px] flex flex-row items-center'>
          <img onClick={() => gotoMainHomePage()} className=' pl-[20px] cursor-pointer' src={logoImage} />
        </div>
        <div className=' w-full h-[calc(100vh-100px)] py-5 flex flex-col justify-between'>
          <div className=' w-full flex flex-col'>
            <div className=' w-full h-24 border-[1px] px-4 flex flex-row items-center bg-gray-50 justify-start gap-[20px] border-gray-100 rounded-[24px]'>
              {
                imgURL == "" || imgURL == undefined ?
                  gender == "man" ?
                    <img className=' w-[60px] h-[60px] object-cover rounded-[12px]' src={localStorage.getItem("userType") == "senior" ? maleSeniorImage : unknownCaregiverImage}></img>
                    :
                    <img className=' w-[60px] h-[60px] object-cover rounded-[12px]' src={localStorage.getItem("userType") == "senior" ? femaleSeniorImage : unknownCaregiverImage}></img>
                  :
                  <img className=' w-[60px] h-[60px] object-cover rounded-[12px]' src={`${imgURL}`}></img>
              }
              <div className=' flex flex-col text-left'>
                <p className=' text-[24px] font-raleway font-bold'>{userName}</p>
                <p className=' text-[14px] font-poppins font-bold text-green-600'>{localStorage.getItem("userType") == "senior" ? 'Senior' : 'Caregiver'}</p>
              </div>
            </div>
            <div className=' mt-[20px] w-full flex flex-col gap-y-1'>
              {
                props.menu.map((item, i) => {
                  if (item.badge == null) {
                    return (
                      <div key={i} onClick={() => handleNavigate(item.id)} id={item.id} className=' w-full h-[50px] px-4 flex flex-row gap-4  items-center justify-start rounded-[8px] hover:cursor-pointer'>
                        <FontAwesomeIcon className='w-5' icon={item.icon} />
                        <p className=' text-[16px] font-poppins'>{item.title}</p>
                      </div>
                    )
                  }
                  else {
                    return (
                      <div key={i} onClick={() => handleNavigate(item.id)} id={item.id} className=' w-full h-[50px] px-4 flex flex-row gap-1 items-center justify-between rounded-[8px] hover:bg-green-50 hover:cursor-pointer'>
                        <div className=' flex flex-row gap-4 items-center'>
                          <FontAwesomeIcon className='w-5' icon={item.icon} />
                          <p className=' text-[16px] font-poppins'>{item.title}</p>
                        </div>
                        <p className=' bg-red-500 text-[12px] text-center font-poppins font-bold text-white rounded-full px-2'>{item.badge}</p>
                      </div>
                    )
                  }
                })
              }
            </div>
          </div>
          <div className=' w-full flex flex-col'>
            <div onClick={() => handleNavigate("setting")} id="setting" className=' w-full h-[50px] px-4 flex flex-row gap-4 items-center justify-start rounded-[8px] hover:bg-green-50 hover:cursor-pointer'>
              <FontAwesomeIcon className='' icon={faGear} />
              <p className=' text-[16px] font-poppins'>Setting</p>
            </div>
            <div onClick={() => handleNavigate("logout")} id="logout" className=' w-full h-[50px] px-4 flex flex-row gap-4 items-center justify-start rounded-[8px] hover:bg-green-50 hover:cursor-pointer'>
              <FontAwesomeIcon className='' icon={faSignOut} />
              <p className=' text-[16px] font-poppins'>Log out</p>
            </div>
          </div>
        </div>
      </aside>

      <aside id="left_sidebar" className='w-[350px] min-w-[350px] absolute left-0 top-0 h-screen hidden bg-white z-10 px-5 border-r-[1px] border-gray-100'>
        <div className=' w-full h-[100px] flex flex-row items-center justify-between'>
          <img className=' pl-[20px]' src={logoImage} />
          <FontAwesomeIcon onClick={handleSidebarShow} className=' text-gray-400 hover:cursor-pointer' icon={faClose} />
        </div>
        <div className=' w-full h-[calc(100vh-100px)] py-5 flex flex-col justify-between'>
          <div className=' w-full flex flex-col'>
            <div className=' w-full h-24 border-[1px] px-4 flex flex-row items-center bg-gray-50 justify-start gap-[20px] border-gray-100 rounded-[24px]'>
              <img className=' w-[60px] h-[60px] object-cover rounded-[12px]' src={avatar}></img>
              <div className=' flex flex-col text-left'>
                <p className=' text-[24px] font-raleway'>John Doe</p>
                <p className=' text-[14px] font-poppins font-bold text-green-600'>Care giver</p>
              </div>
            </div>
            <div className=' mt-[20px] w-full flex flex-col gap-y-1'>
              {
                props.menu.map((item, i) => {
                  if (item.badge == null) {
                    return (
                      <div key={i} onClick={() => handleNavigate(item.id)} id={item.id + "2"} className=' w-full h-[50px] px-4 flex flex-row gap-4  items-center justify-start rounded-[8px] hover:cursor-pointer'>
                        <FontAwesomeIcon className='w-5' icon={item.icon} />
                        <p className=' text-[16px] font-poppins'>{item.title}</p>
                      </div>
                    )
                  }
                  else {
                    return (
                      <div key={i} onClick={() => handleNavigate(item.id)} id={item.id + "2"} className=' w-full h-[50px] px-4 flex flex-row gap-1 items-center justify-between rounded-[8px] hover:bg-green-50 hover:cursor-pointer'>
                        <div className=' flex flex-row gap-4 items-center'>
                          <FontAwesomeIcon className='w-5' icon={item.icon} />
                          <p className=' text-[16px] font-poppins'>{item.title}</p>
                        </div>
                        <p className=' bg-red-500 text-[12px] text-center font-poppins font-bold text-white rounded-full px-2'>{item.badge}</p>
                      </div>
                    )
                  }
                })
              }
            </div>
          </div>
          <div className=' w-full flex flex-col'>
            <div onClick={() => handleNavigate("setting")} id="setting2" className=' w-full h-[50px] px-4 flex flex-row gap-4 items-center justify-start rounded-[8px] hover:bg-green-50 hover:cursor-pointer'>
              <FontAwesomeIcon className='' icon={faGear} />
              <p className=' text-[16px] font-poppins'>Setting</p>
            </div>
            <div onClick={() => handleNavigate("logout")} id="logout2" className=' w-full h-[50px] px-4 flex flex-row gap-4 items-center justify-start rounded-[8px] hover:bg-green-50 hover:cursor-pointer'>
              <FontAwesomeIcon className='' icon={faSignOut} />
              <p className=' text-[16px] font-poppins'>Log out</p>
            </div>
          </div>
        </div>
      </aside>

    </>



  )
}
