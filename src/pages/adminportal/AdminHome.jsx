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
import { getDatabase, limitToFirst, limitToLast, onValue, orderByChild, query, ref } from 'firebase/database';
import SchedulesTableRow from './scheduleManagement/SchedulesTableRow';


export default function AdminHome() {

  const handleSidebarShow = () => {
    document.getElementById("left_sidebar").classList.toggle("hidden");
    document.getElementById("blur_board").classList.toggle("hidden");
  }

  const db = getDatabase();
  const today = new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }).replace(/\//g, '-');
  const [scheduleList, setScheduleList] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    try {
      var listQuery = query(ref(db, "schedules"));

      onValue(listQuery, (snapshot) => {
        let tmpAry = [];
        let i = 0;
        snapshot.forEach((item) => {
          let sID = item.key.split("-")[0];
          let cgID = item.key.split("-")[1];
          for (let prop in item.val()) {
            i++;
            if (item.val().hasOwnProperty(prop)) {  // Check to make sure the property is not from the prototype chain
              if (prop == today) {
                tmpAry.push({
                  no: i,
                  key: item.key,
                  senior: sID,
                  caregiver: cgID,
                  date: prop,
                  times: item.val()[prop],
                })
              }
            }
          }
        })
        // setCheckList(JSON.stringify(checkAry));
        setScheduleList([...tmpAry]);
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className=" w-full h-screen flex flex-row relative ">
      <SideBar portalname="aportal" menu={dummyData.AMenu} current="home" />
      <div onClick={handleSidebarShow} id="blur_board" className=' w-full h-screen absolute hidden left-0 top-0 backdrop-blur-[1px] z-[5]'></div>
      <div className=' flex-grow h-full flex flex-col'>
        <CGPortalNavBar current="Home" name="John Doe" />
        <div className=' w-full h-[calc(100vh-100px)] overflow-y-auto bg-gray-50 pt-[48px] px-[32px]'>
          <div className=' grid md:grid-cols-1 grid-cols-1 h-[500px] sm:gap-x-[40px] gap-y-[40px] '>
            <div className=' bg-white rounded-[40px] px-[40px] py-[40px] lg:min-h-[300px] max-h-[400px]'><LineChart /></div>
            <div className=' w-full flex flex-col gap-y-5 bg-white rounded-[40px] px-[40px] py-[40px]'>
              <p className=' text-left font-poppins text-gray-500 font-bold'>Schedules in Today</p>
              <div className=' w-full flex flex-col gap-y-3'>
                {
                  scheduleList.map((item, i) => {
                    return <SchedulesTableRow key={i} no={i} sID={item.senior} cgID={item.caregiver} date={item.date} hours={item.times} />;
                  })
                }
              </div>
            </div>
            <div className=' h-5'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
