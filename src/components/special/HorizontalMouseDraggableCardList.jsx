import React, { useRef, useState, useEffect } from 'react'
import dummyData from '../../dummydata';
import { getAuth } from 'firebase/auth';
import { getDatabase, query, onValue, ref } from 'firebase/database';
import AgendaComponent from './AgendaComponent';

export default function HorizontalMouseDraggableCardList() {

  const draggableRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const [totalLength, setTotalLength] = useState(0);
  const [viewLength, setViewLength] = useState(0);
  const [dragging, setDragging] = useState(false)
  //data
  const db = getDatabase();
  const today = new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }).replace(/\//g, '-');
  const [scheduleList, setScheduleList] = useState();
  const [caregiverList, setCaregiverList] = useState();

  window.onresize = function () {
    try {
      setTotalLength(getComputedStyle(document.getElementById("slider_list")).width.slice(0, -2));
      setViewLength(getComputedStyle(document.getElementById("slider_area")).width.slice(0, -2));
    }
    catch {
    }
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
    setInitialPosition({
      x: event.clientX - position.x,
    });
    setDragging(false);
  };

  const handleMouseMove = (event) => {
    setDragging(true);
    event.preventDefault();
    event.stopPropagation();
    if (!isDragging) return;
    if (viewLength - totalLength >= 0) {
      setPosition({
        x: 0,
      });
      return;
    }
    else {
      const delta = Math.max(Math.min(event.clientX - initialPosition.x, 0), viewLength - totalLength);
      setPosition({
        x: delta,
      });
      return;
    }

  };

  const handleMouseUp = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsDragging(false);
  };

  const handleAgendaClick = (e, id) => {
    if (dragging) return;
    e.stopPropagation();
    console.log(id);
  }

  const setGraphics = () => {
    setTotalLength(getComputedStyle(document.getElementById("slider_list")).width.slice(0, -2));
    setViewLength(getComputedStyle(document.getElementById("slider_area")).width.slice(0, -2));
  }

  useEffect(() => {
    setGraphics();
    getData();
  }, [])

  const getData = async () => {
    getAuth().onAuthStateChanged(async (user) => {
      try {
        console.log(user.uid);
        var listQuery = query(ref(db, "schedules"));
        onValue(ref(db, "schedules/"), (snapshot) => {
          let tmpAry = [];
          let i = 0;
          snapshot.forEach((item) => {
            let sID = item.key.split("-")[0];
            let cgID = item.key.split("-")[1];
            if (user.uid == sID) {
              for (let prop in item.val()) {
                if (judgeLater(prop)) {
                  i++;
                  if (item.val().hasOwnProperty(prop)) {  // Check to make sure the property is not from the prototype chain
                    tmpAry.push({
                      no: i,
                      key: item.key,
                      caregiver: cgID,
                      date: prop,
                      hours: item.val()[prop].filter(element => element === true).length,
                      time: getTimeString(item.val()[prop].indexOf(true)),
                    })
                  }
                }
              }
            }
          })
          // setCheckList(JSON.stringify(checkAry));
          console.log(tmpAry);
          setScheduleList(JSON.stringify(tmpAry));
        })
      } catch (error) {
        console.log(error.message);
      }
    })
  }

  useEffect(() => {
    console.log(scheduleList);
  }, [scheduleList])


  const judgeLater = (date) => {
    var dateArray = date.split('-');
    var todayArray = today.split('-');
    var newDateStr = dateArray[2] + dateArray[0] + dateArray[1];
    var newTodayStr = todayArray[2] + todayArray[0] + todayArray[1];
    return newDateStr >= newTodayStr;
  }

  const getTimeString = (t) => {
    if (t == 0) {
      return "12 AM";
    } else if (t < 12) {
      return `${t} AM`;
    } else {
      return `${t} PM`;
    }
  }

  return (
    <div
      ref={draggableRef}
      id="slider_list"
      className="absolute cursor-pointer flex flex-row gap-x-3 overflow-hidden"
      style={{ left: position.x }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {
        scheduleList != null ?
          JSON.parse(scheduleList).map((item, i) => {
            return (
              <div onClick={(e) => handleAgendaClick(e, i)} key={i} className=' select-none  overflow-hidden min-w-[350px] w-[350px] h-24 border-[1px] px-4 flex flex-row items-center justify-between bg-white border-gray-100 rounded-[12px]'>
                <AgendaComponent id={item.caregiver} userType={"Caregiver"} date={item.date} time={item.time} hours={item.hours} />
              </div>
            )
          })
          :
          <></>
      }
    </div>
  )
}
