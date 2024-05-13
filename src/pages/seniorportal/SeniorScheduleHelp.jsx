

import React, { useState, useEffect } from 'react'
import DateTimeComponent from '../../components/special/DateTimeComponent'
import dummyData from '../../dummydata'
import Datepicker from 'react-tailwindcss-datepicker';
import CustomDatePicker from '../../components/general/CustomDatePicker';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, onValue, set, update, push, equalTo } from 'firebase/database';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faDatabase, faMeteor, faTh, faThLarge, faThermometer4, faSearch, faEllipsisH, faPhoneVolume, faVideoCamera, faCheckDouble, faClose, faChevronDown, faArrowLeftLong, faContactBook, faContactCard } from '@fortawesome/free-solid-svg-icons';
import SeniorScheduleMultiTimeSelector from '../../components/general/SeniorScheduleMultiTimeSelector';
import MultiTimeSelect from '../../components/general/MultiTimeSelect';
import SeniorRequestTimeSelector from '../../components/general/SeniorRequestTimeSelector';

export default function SeniorScheduleHelp() {

  const handleSidebarShow = () => {
    document.getElementById("left_sidebar").classList.toggle("hidden");
    document.getElementById("blur_board").classList.toggle("hidden");
  }

  const db = getDatabase();

  const [times, setTimes] = useState();
  const [week, setWeek] = useState([]);
  const [weekHours, setWeekHours] = useState(JSON.stringify([[], [], [], [], [], [], [], [], [], [], [], [], [], []]));
  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState("");
  const [toastState, setToastState] = useState(true);
  const [weekdayHours, setWeekdayHours] = useState(0);
  const [afterDayHours, setAfterDayHours] = useState(0);
  const [weekendDayHours, setWeekendDayHours] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);



  function formatDate(date) {
    const optionsDay = { weekday: 'short' };
    const optionsDate = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return {
      "day": date.toLocaleDateString('en-US', optionsDay),
      "date": date.toLocaleDateString('en-US', optionsDate).replace(/\//g, '-')
    };
  }

  function getDatesThroughNextWeekend() {
    const today = new Date();
    let date = new Date(today);
    const dates = [];

    // Move to the end of the next weekend
    // If today is Sunday, move to the next Sunday
    if (date.getDay() === 0) {
      date.setDate(date.getDate() + 7); // Next Sunday
    } else {
      date.setDate(date.getDate() + (7 - date.getDay() + 1)); // Next Sunday
    }

    // Now go one more week to include the full next weekend
    date.setDate(date.getDate() + 6);

    // Collect dates from today to the end of the next weekend
    for (let d = new Date(today); d <= date; d.setDate(d.getDate() + 1)) {
      dates.push(formatDate(new Date(d))); // Use a new Date object to avoid mutation
    }

    return dates;
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
    setWeek(getDatesThroughNextWeekend());
  }, [])

  useEffect(() => {
    console.log(week);
    if (week.length > 0) {
      getAvailabilities();
    }
  }, [week])

  const onSave = () => {
    for (let i = 0; i < week.length; i++) {
      if (JSON.parse(weekHours)[i] == null || JSON.parse(weekHours)[i].filter(element => element > 0).length == 0) {
        continue;
      }
      for (let j = 0; j < 24; j++) {
        set(ref(db, `seniorRequests/${localStorage.getItem("userID")}/${week[i].date}/${j}`), JSON.parse(weekHours)[i][j] != null ? JSON.parse(weekHours)[i][j] : 0);
      }
    }
    setToastText("Changes are saved exactly!");
    setToastState(true);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  }

  const getAvailabilities = async () => {
    try {
      getAuth().onAuthStateChanged(async (user) => {
        onValue(ref(db, "seniorRequests/" + user.uid), (snapshot) => {
          let temp = JSON.parse(weekHours);
          for (let i = 0; i < week.length; i++) {
            let day = week[i].date.toString();
            if (snapshot.val()[day] != null) {
              temp[i] = snapshot.val()[day];
            } else {
              temp[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            }
          }
          setWeekHours(JSON.stringify(temp));
        })
      })
    } catch (error) {
      console.log(error.message);
    }
  }

  const onCalculator = (data) => {
    switch (data.type) {
      case 1:
        setWeekdayHours(weekdayHours + data.sign);
        setTotalPrice(totalPrice + data.sign * 27.5);
        break;

      case 2:
        setAfterDayHours(afterDayHours + data.sign);
        setTotalPrice(totalPrice + data.sign * 29);
        break;

      case 3:
        setWeekendDayHours(weekendDayHours + data.sign);
        setTotalPrice(totalPrice + data.sign * 29);
        break;

      default:
        break;
    }
  }


  return (
    <div className=' mt-[40px]'>
      <div className=' w-full flex flex-col text-left gap-y-10'>
        {/* main part */}
        <p className=' text-[24px] font-poppins font-bold'>Set date and time</p>
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
                    <SeniorRequestTimeSelector id={i} onChange={onHandleSelectTimes} onCalc={onCalculator} day={week[i].day} date={week[i].date} />
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
                        return <div key={i} className={`h-full ${item == 1 ? 'bg-green-300' : item == 2 ? 'bg-blue-300' : ''}`}></div>
                      })
                    }
                  </div>
                </div>
              </div>
            })
          }
        </div>
        <div className=' font-poppins font-semi'>
          <p className=' text-[20px]'>Bill</p>
          <div className=' flex flex-row'><p className=' w-24'>Weekday:</p><div className=' w-52 grid grid-cols-3 gap-x-1 text-right'><p>{weekdayHours}hrs</p><p>$27.5/hr</p><p>${weekdayHours * 27.5}</p></div></div>
          <div className=' flex flex-row'><p className=' w-24'>After Hour:</p><div className=' w-52 grid grid-cols-3 gap-x-1 text-right'><p>{afterDayHours}hrs</p><p>$29/hr</p><p>${afterDayHours * 29}</p></div></div>
          <div className=' flex flex-row'><p className=' w-24'>Weekend:</p><div className=' w-52 grid grid-cols-3 gap-x-1 text-right'><p>{weekendDayHours}hrs</p><p>$29/hr</p><p>${weekendDayHours * 29}</p></div></div>
          <div className=' flex flex-row'><p className=' w-24'>Total:</p><div><p className=' w-52 text-right'>${totalPrice}</p></div></div>
        </div>
        <div className=' w-full flex flex-row justify-end'>
          <div onClick={() => onSave()} className=' w-[120px] h-[40px] rounded-md flex flex-row justify-center items-center font-poppins cursor-pointer bg-green-600 hover:bg-green-700 text-white gap-x-2'>
            <span className=' '>Save</span>
          </div>
        </div>
      </div>
      {
        showToast ?
          <div className={`fixed bottom-0 right-0 mb-4 mr-4 ${toastState ? `bg-green-500` : `bg-red-500`} text-white py-2 px-4 rounded`}>
            {toastText}
          </div>
          :
          <></>
      }
    </div>
  )
}
