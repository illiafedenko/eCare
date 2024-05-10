import React, { useState, useEffect } from 'react'
import SideBar from '../../components/special/SideBar';
import CGPortalNavBar from '../../components/special/CGPortalNavBar';
import NotificationCard from '../../components/special/NotificationCard';
import dummyData from '../../dummydata';
import CareGIverInfo from '../../components/special/CareGIverInfo';
import { faBagShopping, faLocationPin, faSave, faStar, faTransgenderAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Select from "react-tailwindcss-select";
import MultiTimeSelect from '../../components/general/MultiTimeSelect';
import { getAuth } from 'firebase/auth';
import { getDatabase, onValue, ref, set } from 'firebase/database';

const options = [
  { value: "fox", label: "🦊 Fox" },
  { value: "Butterfly", label: "🦋 Butterfly" },
  { value: "Honeybee", label: "🐝 Honeybee" }
];

export default function CGProfile() {

  const [times, setTimes] = useState();
  const [week, setWeek] = useState([]);
  const [weekHours, setWeekHours] = useState(JSON.stringify([[], [], [], [], [], [], []]));

  const db = getDatabase();

  const handleSidebarShow = () => {
    document.getElementById("left_sidebar").classList.toggle("hidden");
    document.getElementById("blur_board").classList.toggle("hidden");
  }

  useEffect(() => {
  }, [JSON.stringify(times)])

  useEffect(() => {
  }, [weekHours])

  const onHandleSelectTimes = (id, value) => {
    var temp = JSON.parse(weekHours);
    temp[id] = value;
    setWeekHours(JSON.stringify(temp));
  }

  useEffect(() => {
    setWeek(getNextWeekDates());
  }, [])

  useEffect(() => {
    if (week.length > 0) {
      getAvailabilities();
    }
  }, [week])

  const onSave = () => {
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 24; j++) {
        set(ref(db, `cgAvailabilities/${localStorage.getItem("userID")}/${week[i].date}/${j}`), JSON.parse(weekHours)[i][j] != null ? JSON.parse(weekHours)[i][j] : false);
      }
    }
  }

  const getAvailabilities = async () => {
    try {
      getAuth().onAuthStateChanged(async (user) => {
        onValue(ref(db, "cgAvailabilities/" + user.uid), (snapshot) => {
          let temp = JSON.parse(weekHours);
          for (let i = 0; i < 7; i++) {
            let day = week[i].date.toString();
            temp[i] = snapshot.val()[week[i].date.toString()];
          }
          setWeekHours(JSON.stringify(temp));
        })
      })
    } catch (error) {
      console.log(error.message);
    }
  }

  const getNextWeekDates = () => {
    const today = new Date();
    const todayDayOfWeek = today.getDay();

    // Calculate days to next Monday (1 is Monday in getDay())
    const daysUntilNextMonday = todayDayOfWeek === 0 ? 1 : 8 - todayDayOfWeek;

    const nextMonday = new Date(today);
    nextMonday.setDate(today.getDate() + daysUntilNextMonday);

    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const nextDate = new Date(nextMonday);
      nextDate.setDate(nextMonday.getDate() + i);

      // Formatting the date
      const dayName = nextDate.toLocaleDateString('en-US', { weekday: 'short' }); // 'Mon', 'Tue', etc.
      const formattedDate = nextDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }); // 'mm/dd/yyyy'
      weekDates.push({
        "day": dayName,
        "date": formattedDate.toString().replace(/\//g, '-')
      });
    }
    return weekDates;
  }

  return (
    <div className=" w-full h-screen flex flex-row relative ">
      <SideBar portalname="cgportal" menu={dummyData.CGMenu} current="profile" />
      <div onClick={handleSidebarShow} id="blur_board" className=' w-full h-screen absolute hidden left-0 top-0 backdrop-blur-[1px] z-[5]'></div>
      <div className=' flex-grow h-full flex flex-col'>
        <CGPortalNavBar current="My Profile" name="John Doe" />
        <div className=' w-full h-full overflow-y-scroll bg-gray-100 py-[48px] pl-[32px] pr-[16px]'>
          <div className=' w-full bg-white rounded-[20px] px-[20px] md:px-[40px] lg:px-[60px] py-[48px]'>
            <div className=' w-full  flex flex-col gap-y-10'>
              {/* main part */}
              <p className=' text-gray-600 font-poppins text-[24px] font-semibold'>Set the availabilites for the next week</p>
              <div className=' flex flex-col gap-y-10'>
                {
                  week.map((item, i) => {
                    return <div key={i} className=' w-full flex md:flex-row flex-col md:items-center items-start justify-start gap-x-5 gap-y-3'>
                      <div className=' flex sm:flex-row flex-col sm:items-center items-start justify-start gap-y-2'>
                        <div className=' w-[160px] flex flex-row text-[16px] text-left font-poppins'>
                          <p className=' w-[50px]'>{item.day}</p>
                          <p>{item.date}</p>
                        </div>
                        <div className=' w-[200px]'>
                          <MultiTimeSelect id={i} onChange={onHandleSelectTimes} date={week[i].date} />
                        </div>
                      </div>
                      <div className=' flex-grow w-full '>
                        <div className=' w-full flex flex-row justify-between text-gray-600 font-poppins text-[12px] font-semibold'>
                          <p>0AM</p>
                          <p>12PM</p>
                          <p>12AM</p>
                        </div>
                        <div className=' w-full grid grid-cols-24 h-[6px] bg-gray-100'>
                          {
                            JSON.parse(weekHours)[i].map((item, i) => {
                              return <div key={i} className={`h-full ${item ? 'bg-green-300' : ''}`}></div>
                            })
                          }
                        </div>
                      </div>
                    </div>
                  })
                }
              </div>
              <div className=' w-full flex flex-row justify-end'>
                <div onClick={() => onSave()} className=' w-[120px] h-[40px] rounded-md flex flex-row justify-center items-center font-poppins cursor-pointer bg-green-600 hover:bg-green-700 text-white gap-x-2'>
                  <span className=' '>Save</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

