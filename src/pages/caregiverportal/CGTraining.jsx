import React, { useState, useEffect } from 'react'
import SideBar from '../../components/special/SideBar';
import CGPortalNavBar from '../../components/special/CGPortalNavBar';
import dummyData from '../../dummydata';
import { getDatabase, onValue, ref, remove, set } from 'firebase/database'
import { getStorage, ref as storageRef, deleteObject } from 'firebase/storage';
import { getAuth } from 'firebase/auth';


export default function CGTraining() {

  const handleSidebarShow = () => {
    document.getElementById("left_sidebar").classList.toggle("hidden");
    document.getElementById("blur_board").classList.toggle("hidden");
  }

  const [courseList, setCourseList] = useState();
  const [currentContactID, setCurrentContactID] = useState();
  const [opponentInfo, setOpponentInfo] = useState();
  const [userTrainingList, setUserTrainingList] = useState([]);


  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState("");
  const [toastState, setToastState] = useState(true);
  const db = getDatabase();
  const storage = getStorage();

  useEffect(() => {
    getCourseData();
    getTrainingList();
  }, [])


  const getCourseData = () => {
    onValue(ref(db, 'courses'), (snapshot) => {
      var temp = [];
      snapshot.forEach((item) => {
        temp.push({
          id: item.key,
          title: item.val().title,
          src: item.val().course,
          timestamp: item.val().timestamp,
        })
      })
      setCourseList([...temp]);
    })
  }

  useEffect(() => {
  }, [courseList])

  const getTrainingList = async () => {
    try {
      getAuth().onAuthStateChanged(async (user) => {
        onValue(ref(db, `trainLists/${user.uid}`), (snapshot) => {
          if (snapshot.val() == null) {
            setUserTrainingList([]);
          }
          else {
            let temp = [];
            for (let prop in snapshot.val()) {

              if (snapshot.val().hasOwnProperty(prop)) {  // Check to make sure the property is not from the prototype chain
                if (snapshot.val()[prop] == true) {
                  temp.push(prop);
                }
              }
            }
            setUserTrainingList([...temp]);
          }
        })
      })
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    console.log(userTrainingList);
  }, [userTrainingList])


  return (
    <div className=" w-full h-screen flex flex-row relative ">
      <SideBar portalname="cgportal" menu={dummyData.CGMenu} current="training" />
      <div onClick={handleSidebarShow} id="blur_board" className=' w-full h-screen absolute hidden left-0 top-0 backdrop-blur-[1px] z-[5]'></div>
      <div className=' flex-grow h-full flex flex-col'>
        <CGPortalNavBar current="Training" name="John Doe" />
        <div className=' w-full h-full overflow-y-scroll bg-gray-100 py-[48px] pl-[32px] pr-[16px]'>
          <div className=' w-full bg-white rounded-[20px] px-[20px] md:px-[40px] lg:px-[60px] pt-[48px] pb-[100px]'>
            <p className=' text-[20px] font-poppins font-bold text-left'>My courses</p>
            <div className=' h-14'></div>
            <div className=' w-full h-full grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-6'>
              {
                courseList != null ?
                  courseList.map((item, i) => {
                    return userTrainingList.indexOf(item.id) >= 0 ?
                      <div key={i} className=' w-full flex flex-col gap-y-2 rounded-lg'>
                        <video className=' w-full  aspect-4/3 bg-gray-700 rounded-lg' controls>
                          <source
                            src={`${item.src}`}
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                        <div className=' w-full flex flex-row justify-between px-2'>
                          <p data-tooltip-target="tooltip-default" className=' text-[16px] font-poppins text-left line-clamp-1'>{item.title}</p>
                        </div>
                      </div>
                      :
                      <></>
                  })
                  :
                  <></>
              }
              {
                showToast ?
                  <div className={`fixed bottom-0 right-0 mb-4 mr-4 ${toastState ? `bg-green-500` : `bg-red-500`} text-white py-2 px-4 rounded`}>
                    {toastText}
                  </div>
                  :
                  <></>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
