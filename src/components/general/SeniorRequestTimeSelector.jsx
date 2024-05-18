import { faArrowDown, faArrowDown19, faCheck, faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAuth } from 'firebase/auth';
import { getDatabase, onValue, ref } from 'firebase/database';
import React, { useState, useEffect } from 'react'

export default function SeniorRequestTimeSelector({ id, onChange, onCalc, day, date }) {

  const db = getDatabase();

  const options = [
    { text: "12Am - 01AM", value: 0 },
    { text: "01Am - 02AM", value: 1 },
    { text: "02Am - 03AM", value: 2 },
    { text: "03Am - 04AM", value: 3 },
    { text: "04Am - 05AM", value: 4 },
    { text: "05Am - 06AM", value: 5 },
    { text: "06Am - 07AM", value: 6 },
    { text: "07Am - 08AM", value: 7 },
    { text: "08Am - 09AM", value: 8 },
    { text: "09Am - 10AM", value: 9 },
    { text: "10Am - 11AM", value: 10 },
    { text: "11Am - 12AM", value: 11 },
    { text: "12PM - 01PM", value: 12 },
    { text: "01PM - 02PM", value: 13 },
    { text: "02PM - 03PM", value: 14 },
    { text: "03PM - 04PM", value: 15 },
    { text: "04PM - 05PM", value: 16 },
    { text: "05PM - 06PM", value: 17 },
    { text: "06PM - 07PM", value: 18 },
    { text: "07PM - 08PM", value: 19 },
    { text: "08PM - 09PM", value: 20 },
    { text: "09PM - 10PM", value: 21 },
    { text: "10PM - 11PM", value: 22 },
    { text: "11PM - 12AM", value: 23 },
  ]

  const [selectedTimes, setSelectedTimes] = useState(JSON.stringify([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
  const [originTimes, setOriginTimes] = useState(JSON.stringify([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
  const [totalHours, setTotalHours] = useState(0);
  const [showDropDown, setShowDropDown] = useState(false);

  const [currentHour, setCurrentHour] = useState();

  useEffect(() => {
    setTotalHours(JSON.parse(selectedTimes).filter(element => element > 0).length);
    onChange(id, JSON.parse(selectedTimes));
  }, [selectedTimes])

  const onSelectTime = (idx) => {
    if (id == 0 && idx <= currentHour) return;
    if (JSON.parse(originTimes)[idx] > 0) return;
    var temp = JSON.parse(selectedTimes);
    var h = temp[idx] == 1 ? -1 : 1;
    if (day == "Sat" || day == "Sun") {
      onCalc({
        "id": id,
        "date": date,
        "type": 3,
        "sign": h
      });
    }
    else {
      if (idx >= 8 && idx < 16) {
        onCalc({
          "id": id,
          "date": date,
          "type": 1,
          "sign": h
        });
      }
      else {
        onCalc({
          "id": id,
          "date": date,
          "type": 2,
          "sign": h
        });
      }
    }
    temp[idx] = 1 - temp[idx];
    setSelectedTimes(JSON.stringify(temp));
  }

  const getCurrentHour = () => {
    const now = new Date();
    return now.getHours();
  }

  useEffect(() => {
    setCurrentHour(getCurrentHour());
    getHours();
  }, [])

  const getHours = async () => {
    try {
      getAuth().onAuthStateChanged(async (user) => {
        onValue(ref(db, "seniorRequests/" + user.uid + "/" + date), (snapshot) => {
          if (snapshot.val() != null) {
            setSelectedTimes(JSON.stringify(snapshot.val()));
            setOriginTimes(JSON.stringify(snapshot.val()));
          }
        })
      })
    } catch (error) {
      console.log(error.message)
    }
  }


  return (
    <button
      className=' w-full h-[40px]  relative border-[2px] border-gray-200 rounded-md outline-none hover:border-blue-500 focus:outline-none  focus:border-blue-500 '
      // onFocus={() => { setShowDropDown(true); }}
      onBlur={() => { setShowDropDown(false); }}
    // onClick={() => { setShowDropDown(!showDropDown); }}
    >
      <div className=' absolute top-0 left-0 w-full h-[40px]  z-10'
        onClick={() => { setShowDropDown(!showDropDown) }}
      ></div>
      <div className=' absolute left-0 top-0 w-full h-[40px] items-center justify-between px-2 flex flex-row'>
        <p className=' font-poppins text-gray-600'>{totalHours} hours selected</p>
        <FontAwesomeIcon className=' text-[12px] ' icon={faSort} />
      </div>
      <div className={`absolute w-full top-[41px] max-h-[200px] overflow-y-scroll shadow-lg left-0 z-20  ${showDropDown ? '' : 'hidden'}`}>
        {
          options.map((item, i) => {
            return <div onClick={(e) => { e.stopPropagation(); onSelectTime(i); }} key={i} className={`w-full h-[36px] px-4 flex flex-row items-center justify-between ${(id == 0 && i <= currentHour) || JSON.parse(originTimes)[i] > 0 ? 'bg-gray-200' : 'bg-gray-50 hover:bg-gray-100'}`}>
              <p className=' font-poppins text-gray-700'>{item.text}</p>
              <FontAwesomeIcon className={`text-[12px] text-green-600 ${JSON.parse(selectedTimes)[i] ? '' : 'hidden'}`} icon={faCheck} />
            </div>
          })
        }
      </div>
    </button>
  )
}
