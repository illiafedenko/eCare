

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
  const [basicHourly, setBasicHourly] = useState([0, 0, 0]);
  const [myCurrentPlanList, setMyCurrentPlanList] = useState([]);
  const [myCurrentPlanIDList, setMyCurrentPlanIDList] = useState([]);
  const [usedHoursList, setUsedHoursList] = useState([]);
  const [myAddedSchedules, setMyAddedSchedules] = useState(JSON.stringify([]));



  function formatDate(date) {
    const optionsDay = { weekday: 'short' };
    const optionsDate = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return {
      "day": date.toLocaleDateString('en-US', optionsDay),
      "date": date.toLocaleDateString('en-US', optionsDate).replace(/\//g, '-')
    };
  }


  const judgeLater = (expireDate) => {
    var dateArray = expireDate.split('-');
    var todayArray = formatDate(new Date()).date.split('-');
    var newDateStr = dateArray[2] + dateArray[0] + dateArray[1];
    var newTodayStr = todayArray[2] + todayArray[0] + todayArray[1];
    return newDateStr >= newTodayStr;
  }

  const getMyCurrentPlans = async () => {
    // setMyAddedSchedules(JSON.stringify([]));
    getAuth().onAuthStateChanged(async (user) => {
      try {
        onValue(ref(db, 'subscriptions/' + user.uid), (snapshot) => {
          var temp = [];
          var uha = [];
          var idAry = [];
          snapshot.forEach((item) => {
            if (judgeLater(item.val().end)) {
              temp.push(item.val());
              uha.push(item.val().used);
              idAry.push(item.key);
            }
          })
          setMyCurrentPlanIDList([...idAry]);
          setMyCurrentPlanList([...temp]);
          setUsedHoursList([...uha]);
        })
      } catch (error) {
        console.log(error.message);
      }
    })
  }

  useEffect(() => {
    console.log(myCurrentPlanList, myCurrentPlanIDList);
  }, [myCurrentPlanList])


  const getBasicHourly = async () => {
    try {
      onValue(ref(db, 'subscriptionPlans'), (snapshot) => {
        var temp = [];
        snapshot.forEach((item) => {
          temp.push(item.val());
        })
        var hourlyAry = [temp[0].hourly, temp[0].hourly1, temp[0].hourly2];
        setBasicHourly([...hourlyAry]);
      })
    } catch (error) {
      console.log(error.message);
    }
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
    getBasicHourly();
    getMyCurrentPlans();
  }, [])

  useEffect(() => {
    if (week == undefined) return;
    if (week.length > 0) {
      getAvailabilities();
      var temp = [];
      for (let i = 0; i < week.length; i++) {
        temp.push([0, 0, 0])
      }
      setMyAddedSchedules(JSON.stringify(temp));
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
    for (let i = 0; i < myCurrentPlanIDList.length; i++) {
      set(ref(db, `subscriptions/${myID}/${myCurrentPlanIDList[i]}/used`), usedHoursList[i]);
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
    console.log(data);
    var temp = JSON.parse(myAddedSchedules);
    console.log(temp);
    temp[data.id][data.type - 1] += 1 * data.sign;
    // console.log("temp:", temp);
    setMyAddedSchedules(JSON.stringify(temp));
  }

  useEffect(() => {
    console.log(myAddedSchedules);
    onCalcPrice();
  }, [myAddedSchedules])


  const onCalcPrice = () => {
    console.log(JSON.parse(myAddedSchedules));
    var temp = JSON.parse(myAddedSchedules);
    // console.log(temp);
    var calcArray = [];
    var basicArray = [0, 0, 0];
    for (let i = 0; i < myCurrentPlanList.length; i++) {
      calcArray.push({
        hourly: myCurrentPlanList[i].hourly,
        added: [0, 0, 0],
        used: myCurrentPlanList[i].used,
        limit: myCurrentPlanList[i].limit,
      })
    }
    for (let i = 0; i < temp.length; i++) {
      for (let j = 0; j < myCurrentPlanList.length; j++) {
        if (getInRange(week[i].date, { st: myCurrentPlanList[j].start, en: myCurrentPlanList[j].end })) {
          calcArray[j].added[0] += temp[i][0];
          calcArray[j].added[1] += temp[i][1];
          calcArray[j].added[2] += temp[i][2];
          temp[i] = [0, 0, 0];
        }
      }
    }
    for (let i = 0; i < temp.length; i++) {
      basicArray[0] += temp[i][0];
      basicArray[1] += temp[i][1];
      basicArray[2] += temp[i][2];
      temp[i] = [0, 0, 0];
    }
    var tempUHA = usedHoursList;
    for (let i = 0; i < calcArray.length; i++) {
      var limit = calcArray[i].limit;
      var cnt = calcArray[i].used;
      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < calcArray[i].added[j]; k++) {
          if (cnt < limit) {
            cnt++;
          } else {
            basicArray[j]++;
          }
        }
      }
      tempUHA[i] = cnt;
    }
    console.log("used-", tempUHA);
    setUsedHoursList([...tempUHA]);
    setWeekdayHours(basicArray[0]);
    setAfterDayHours(basicArray[1]);
    setWeekendDayHours(basicArray[2]);
    var tp = 0;
    for (let i = 0; i < 3; i++) {
      tp += basicArray[i] * basicHourly[i];
    }
    setTotalPrice(tp);
  }

  useEffect(() => {
    console.log("used;", usedHoursList);
  }, [usedHoursList])

  const getInRange = (d, { st, en }) => {
    var dayAry = d.split('-');
    var stAry = st.split('-');
    var enAry = en.split('-');

    var dayStr = dayAry[2] + dayAry[0] + dayAry[1];
    var stStr = stAry[2] + stAry[0] + stAry[1];
    var enStr = enAry[2] + enAry[0] + enAry[1];
    if (dayStr >= stStr && dayStr <= enStr) return true;
    else return false;
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
          <p className=' text-[20px]'>Bill <span className=' text-[12px]'>(Out of subscriptions)</span></p>
          <div className=' flex flex-row'><p className=' w-24'>Weekday:</p><div className=' w-52 grid grid-cols-3 gap-x-1 text-right'><p>{weekdayHours}hrs</p><p>${basicHourly[0]}/hr</p><p>${weekdayHours * basicHourly[0]}</p></div></div>
          <div className=' flex flex-row'><p className=' w-24'>After Hour:</p><div className=' w-52 grid grid-cols-3 gap-x-1 text-right'><p>{afterDayHours}hrs</p><p>${basicHourly[1]}/hr</p><p>${afterDayHours * basicHourly[1]}</p></div></div>
          <div className=' flex flex-row'><p className=' w-24'>Weekend:</p><div className=' w-52 grid grid-cols-3 gap-x-1 text-right'><p>{weekendDayHours}hrs</p><p>${basicHourly[2]}/hr</p><p>${weekendDayHours * basicHourly[2]}</p></div></div>
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
