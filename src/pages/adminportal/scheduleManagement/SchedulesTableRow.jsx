import { getDatabase, onValue, ref } from 'firebase/database';
import React, { useState, useEffect } from 'react'

export default function SchedulesTableRow({ sID, cgID, date, hours }) {

  const db = getDatabase();
  const [senior, setSenior] = useState();
  const [caregiver, setCaregiver] = useState();

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    try {
      onValue(ref(db, "seniors/" + sID), (snapshot) => {
        setSenior({
          name: snapshot.val().fullname,
          avatar: snapshot.val().avatar,
        })
      });
      onValue(ref(db, "caregivers/" + cgID), (snapshot) => {
        setCaregiver({
          name: snapshot.val().fullname,
          avatar: snapshot.val().avatar,
        })
      });
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className=' w-full sm:px-10 px-5 py-3 font-poppins bg-slate-50 shadow-sm flex flex-col items-center gap-y-2 rounded-lg border-[2px] border-gray-100'>
      <p className=' w-full text-left'>{date}</p>
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
          <div className=' flex flex-row gap-x-2 items-center '>
            {
              caregiver != null ?
                <img src={`${caregiver.avatar}`} className=' w-10 h-10 rounded-full object-cover' />
                :
                <div className=' w-6 h-6 rounded-full bg-gray-200'></div>
            }
            {
              caregiver != null ?
                <p className=' font-poppins w-32 text-left line-clamp-1'>{caregiver.name}</p>
                :
                <p></p>
            }
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
    </div>
  )
}
