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

export default function SeniorScheduleSelf() {


  const { opponentID } = useParams();
  const navigate = useNavigate();


  const handleSidebarShow = () => {
    document.getElementById("left_sidebar").classList.toggle("hidden");
    document.getElementById("blur_board").classList.toggle("hidden");
  }

  const db = getDatabase();
  const [allUser, setAllUser] = useState([])
  const [searchList, setSearchList] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [myID, setMyID] = useState();
  const [currentContactID, setCurrentContactID] = useState();
  const [opponentInfo, setOpponentInfo] = useState();
  const [dates, setDates] = useState();
  const [cgAvailabilities, setCgAvailabilities] = useState(JSON.stringify([]));
  const [mySchedules, setMySchedules] = useState(JSON.stringify([]));
  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState("");
  const [toastState, setToastState] = useState(true);
  const [currentHour, setCurrentHour] = useState();
  const [weekdayHours, setWeekdayHours] = useState(0);
  const [afterDayHours, setAfterDayHours] = useState(0);
  const [weekendDayHours, setWeekendDayHours] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  function formatDate(date) {
    const optionsDay = { weekday: 'short' };
    const optionsDate = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return {
      day: date.toLocaleDateString('en-US', optionsDay),
      date: date.toLocaleDateString('en-US', optionsDate).replace(/\//g, '-')
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

  const getCurrentHour = () => {
    const now = new Date();
    return now.getHours();
  }

  useEffect(() => {
    setDates(getDatesThroughNextWeekend());
    getData();
    setCurrentHour(getCurrentHour());
  }, [])

  useEffect(() => {
    if (dates == undefined) return;
    if (dates.length > 0) {
      getMySchedules();
    }
  }, [dates])

  const getData = async () => {
    try {
      getAuth().onAuthStateChanged(async (user) => {
        if (user) {
          const userType = localStorage.getItem("userType");
          const myuserID = user.uid;
          setMyID(myuserID);
          var users = ref(db, "caregivers");
          let userList = [];
          onValue(users, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
              const childKey = childSnapshot.key;
              const childData = childSnapshot.val();
              userList.push({
                id: childKey,
                name: childData.fullname,
                avatar: childData.avatar,
              });
            });
            setAllUser(userList);
            setSearchList(userList);
          });

        }
      })
    } catch (error) {

    }
  }

  const getMySchedules = async () => {
    var temp = JSON.parse(mySchedules);
    onValue(ref(db, 'schedules/' + myID + '-' + currentContactID), (snapshot) => {
      if (snapshot.val() != null) {
        for (let i = 0; i < dates.length; i++) {
          let day = dates[i].date.toString();
          if (snapshot.val()[day] != null)
            temp[i] = snapshot.val()[day];
          else {
            temp[i] = [
              false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
            ];
          }
        }
        const str = JSON.stringify(temp);
        setMySchedules(null);
        setMySchedules(str);
      }
    });
  }

  const getOpponentInfo = async (id) => {
    var opponentRef = ref(db, "users/" + id);
    onValue(opponentRef, (snapshot) => {
      if (snapshot.val() != null) {
        setOpponentInfo({
          name: snapshot.val().fullname,
          avatar: snapshot.val().avatar,
          userType: snapshot.val().userType
        })
      }
    })
  }

  useEffect(() => {
    if (currentContactID) {
      getCareGiverAvailabilities(currentContactID);
    }
  }, [opponentInfo])


  const getCareGiverAvailabilities = async (id) => {
    var temp = JSON.parse(cgAvailabilities);
    onValue(ref(db, 'cgAvailabilities/' + id), (snapshot) => {
      var cgas = snapshot.val();
      for (let i = 0; i < dates.length; i++) {
        let d = dates[i].date;
        temp[i] = cgas[d];
      }
      setCgAvailabilities(JSON.stringify(temp));
    })

  }

  useEffect(() => {
    if (allUser.length == 0) return;
    var tempList = [];
    allUser.map((item) => {
      if (item.name.startsWith(searchValue)) {
        tempList.push(item)
      }
    })
    setSearchList(tempList);
  }, [searchValue])

  useEffect(() => {
    getOpponentInfo(currentContactID);
    getMySchedules();
  }, [currentContactID])


  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  }

  const handleSelectContactUser = (id) => {
    setCurrentContactID(id);
  }

  const onHandleSelectTimes = (id, value) => {
    var temp = JSON.parse(mySchedules);
    temp[id] = value;
    setMySchedules(JSON.stringify(temp));
  }

  useEffect(() => {
  }, [mySchedules])

  const onSave = () => {
    for (let i = 0; i < dates.length; i++) {
      if (JSON.parse(mySchedules)[i] == null) {
        continue;
      }
      else {
        for (let j = 0; j < 24; j++) {
          set(ref(db, `schedules/${myID}-${currentContactID}/${dates[i].date}/${j}`), JSON.parse(mySchedules)[i][j] != null ? JSON.parse(mySchedules)[i][j] : false);
        }
      }
    }
    setToastText("Changes are saved exactly!");
    setToastState(true);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  }

  const onCalculator = (data) => {
    console.log(data);
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
        <p className=' text-[24px] font-poppins font-bold'>Select Caregiver</p>
        <div className=' flex flex-col gap-y-2'>
          <p className=' text-[16px]  font-poppins'>Care giver name</p>
          <div className=' flex flex-grow w-[300px] h-[48px] relative'>
            <input
              className=' w-full text-[18px] font-poppins text-gray-600 pl-5 pr-8 h-full border-[2px] border-gray-300 bg-gray-50 focus:border-blue-500 outline-none rounded-full'
              placeholder="Search for chats..."
              name="search"
              value={searchValue}
              onChange={(e) => handleSearchInputChange(e)}
              onFocus={() => setShowSearchDropdown(true)}
              onBlur={() => setShowSearchDropdown(false)}
            />
            <div className=' absolute w-[36px] h-full flex flex-col items-center justify-center right-1 top-0 cursor-pointer'>
              <FontAwesomeIcon className=' w-4 h-4 text-gray-500 hover:text-green-600' icon={faSearch} />
            </div>
            <div className={`absolute w-full bg-gray-100 top-[60px] z-50 shadow-lg ${showSearchDropdown ? '' : 'hidden'}`}>
              {
                searchList.map((item, i) => {
                  return <div key={i} onMouseDown={() => handleSelectContactUser(item.id)} className=' w-full h-[60px] flex flex-row gap-x-4 items-center px-2 cursor-pointer hover:bg-slate-50'>
                    <img src={`${item.avatar}`} className=' w-[40px] h-[40px] rounded-full' />
                    <p className=' text-[16px] font-poppins font-bold line-clamp-1 text-left'>{item.name}</p>
                  </div>
                })
              }
            </div>
          </div>
        </div>
        {
          opponentInfo ?
            <>
              <div className=' w-full flex flex-row gap-x-5 items-center'>
                <img src={opponentInfo.avatar} className=' w-[60px] h-[60px] object-cover border-[2px] border-gray-50 rounded-md' />
                <p className=' font-poppins'>{opponentInfo.name}</p>
              </div>
              <div className=' flex flex-col gap-y-10'>
                {
                  dates.map((item, i) => {
                    return <div key={i} className=' w-full flex md:flex-row flex-col md:items-center items-start justify-start gap-x-5 gap-y-3'>
                      <div className=' flex sm:flex-row flex-col sm:items-center items-start justify-start gap-y-2'>
                        <div className=' w-[160px] flex flex-row text-[16px] text-left font-poppins'>
                          <p className=' w-[50px]'>{item.day}</p>
                          <p>{item.date}</p>
                        </div>
                        <div className=' w-[200px]'>
                          <SeniorScheduleMultiTimeSelector id={i} onChange={onHandleSelectTimes} onCalc={onCalculator} day={dates[i].day} date={dates[i].date} sID={myID} cgID={currentContactID} />
                        </div>
                      </div>
                      <div className=' flex-grow w-full '>
                        <div className=' w-full flex flex-row justify-between text-gray-600 font-poppins text-[12px] font-semibold'>
                          <p>0AM</p>
                          <p>12PM</p>
                          <p>12AM</p>
                        </div>
                        <div className=' flex flex-col gap-y-1'>

                          <div className=' w-full grid grid-cols-24 h-[6px] bg-gray-100'>
                            {
                              JSON.parse(cgAvailabilities)[i] != null ?
                                JSON.parse(cgAvailabilities)[i].map((item, j) => {
                                  return i == 0
                                    ? j <= currentHour ?
                                      <div key={j} className={`h-full ${item ? 'bg-gray-300' : ''}`}></div>
                                      :
                                      <div key={j} className={`h-full ${item ? 'bg-green-300' : ''}`}></div>
                                    :
                                    <div key={j} className={`h-full ${item ? 'bg-green-300' : ''}`}></div>
                                })
                                : <></>
                            }
                          </div>
                          <div className=' w-full grid grid-cols-24 h-[6px] bg-gray-100'>
                            {
                              JSON.parse(mySchedules)[i] != null ?
                                JSON.parse(mySchedules)[i].map((item, j) => {
                                  return <div key={j} className={`h-full ${item ? 'bg-blue-300' : ''}`}></div>
                                })
                                :
                                <></>
                            }
                          </div>
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
            </>
            :
            <></>
        }
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
