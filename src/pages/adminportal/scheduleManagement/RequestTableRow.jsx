import { faDrawPolygon, faHandPointDown, faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getDatabase, onValue, ref, set } from 'firebase/database';
import React, { useState, useEffect } from 'react'

export default function RequestTableRow({ sID, date, hours }) {

  const db = getDatabase();
  const [senior, setSenior] = useState();
  const [caregiver, setCaregiver] = useState(null);
  const [caregiverList, setCaregiverList] = useState(null);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    console.log(date, hours);
    getData();
    getCaregivers();
  }, [])

  const getData = async () => {
    try {
      onValue(ref(db, "seniors/" + sID), (snapshot) => {
        setSenior({
          name: snapshot.val().fullname,
          avatar: snapshot.val().avatar,
        })
      });
    } catch (error) {
      console.log(error.message)
    }
  }

  const getCaregivers = async () => {
    try {
      onValue(ref(db, "caregivers"), (snapshot) => {
        var temp = [];
        snapshot.forEach((item) => {
          temp.push({
            id: item.key,
            avatar: item.val().avatar,
            name: item.val().fullname
          })
        })
        setCaregiverList(JSON.stringify(temp));
      });
    } catch (error) {
      console.log(error.message)
    }
  }

  const onChooseCaregiver = (idx) => {
    setShowList(false);
    setCaregiver(JSON.stringify(JSON.parse(caregiverList)[idx]));
  }

  const onSave = () => {
    if (caregiver == null) return;
    console.log("hours", hours);

    for (let i = 0; i < 24; i++) {
      set(ref(db, `schedules/${sID}-${JSON.parse(caregiver).id}-0/${date}/${i}`), hours[i] ? true : false);
      if (hours[i]) {
        set(ref(db, `cgAvailabilities/${JSON.parse(caregiver).id}/${date}/${i}`), 2);
        set(ref(db, `seniorRequests/${sID}/${date}/${i}`), 2);
      }
    }
    /**/
  }

  return (
    <>
      {
        hours.filter(element => element == 1).length > 0 ?
          < div className=' w-full sm:px-10 px-5 py-3 font-poppins bg-slate-50 shadow-sm flex flex-col items-center gap-y-2 rounded-lg border-[2px] border-gray-100' >
            <div className=' w-full flex flex-row items-center justify-between'>
              <p className=' w-full text-left'>{date}</p>
              <div onClick={onSave} className={`w-[72px] h-[24px] items-center justify-center flex flex-col rounded-md cursor-pointer ${caregiver ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-300'} `}>
                <p className=' font-poppins text-white text-[12px]'>Save</p>
              </div>
            </div>
            <div className=' w-full flex lg:flex-row flex-col gap-x-10'>
              <div className=' flex sm:flex-row flex-col gap-y-2 gap-x-10'>
                <div className=' flex flex-row gap-x-2 items-center'>
                  {
                    senior != null ?
                      <img src={`${senior.avatar}`} className=' w-10 h-10 rounded-full object-cover' />
                      :
                      <div className=' w-6 h-6 rounded-full bg-gray-200'></div>
                  }
                  {
                    senior != null ?
                      <p className=' font-poppins w-32 text-left line-clamp-1'>{senior.name}</p>
                      :
                      <p></p>
                  }
                </div>
                <div className=' w-[180px] h-[44px] relative flex flex-row items-center gap-x-2 border-[2px] px-[1px] py-[1px] rounded-md border-gray-200 hover:cursor-pointer hover:border-blue-500 focus:border-blue-500'>
                  {
                    caregiver == null ?
                      <div className=' w-full h-full flex flex-row items-center gap-x-2' onClick={() => { setShowList(!showList); }}>
                        <div className=' w-9 h-9 rounded-full  bg-gray-300'></div>
                        <p className=' flex-grow text-left font-poppins text-[12px] text-gray-400 line-clamp-1'>Select Caregiver</p>
                        <FontAwesomeIcon icon={faSort} className=' text-gray-500 text-[12px] pr-1' />
                      </div>
                      :
                      <div className=' w-full h-full flex flex-row items-center gap-x-2' onClick={() => { setShowList(!showList); }}>
                        <img src={`${JSON.parse(caregiver).avatar}`} className=' w-9 h-9 rounded-full object-cover'></img>
                        <p className=' flex-grow text-left font-poppins text-gray-600 line-clamp-1'>{JSON.parse(caregiver).name}</p>
                        <FontAwesomeIcon icon={faSort} className=' text-gray-500 text-[12px] pr-1 hidden' />
                      </div>
                  }
                  <div className=' absolute top-11 left-0 w-full px-[1px] z-20 bg-gray-50 shadow-sm'>
                    {
                      caregiverList != null && showList ?
                        JSON.parse(caregiverList).map((item, i) => {
                          return <div key={i} onClick={() => onChooseCaregiver(i)} className=' w-full h-full flex flex-row items-center gap-x-2 hover:bg-gray-200'>
                            <img src={`${item.avatar}`} className=' w-9 h-9 rounded-full object-cover' />
                            <p className=' flex-grow text-left font-poppins text-[12px] text-gray-400 line-clamp-1'>{item.name}</p>
                            <FontAwesomeIcon icon={faSort} className=' text-gray-500 text-[12px] pr-1 hidden' />
                          </div>
                        })
                        :
                        <></>
                    }
                  </div>
                </div>
              </div>
              <div className=' flex-grow'>
                <div className=' w-full flex flex-row justify-between text-gray-600 font-poppins text-[12px] font-semibold'>
                  <p>0AM</p>
                  <p>12PM</p>
                  <p>12AM</p>
                </div>
                <div className=' w-full grid grid-cols-24 h-[6px] bg-gray-100 border-l-[1px] border-gray-300'>
                  {
                    hours.map((item, j) => {
                      return <div key={j} className={`h-full ${item ? 'bg-blue-300' : ''} border-r-[1px] border-gray-300`}></div>
                    })
                  }
                </div>
              </div>
            </div>
          </div >
          :
          <></>
      }
    </>

  )
}
