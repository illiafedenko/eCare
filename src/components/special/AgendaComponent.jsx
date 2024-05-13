import { getDatabase, onValue, ref } from 'firebase/database';
import React, { useState, useEffect } from 'react'

export default function AgendaComponent({ id, userType, date, time, hours }) {

  const db = getDatabase();
  const [userData, setuserData] = useState({
    name: "",
    avatar: ""
  });

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    try {
      var temp = {
        name: "",
        avatar: ""
      };
      onValue(ref(db, "users/" + id), (snapshot) => {
        console.log(snapshot.val());
        temp.name = snapshot.val().fullname;
        temp.avatar = snapshot.val().avatar;
        setuserData(temp);
      })
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    console.log(userData);
  }, [userData])


  return (
    <>
      <div className=' flex flex-row justify-start items-center gap-3'>
        {
          userData.avatar != null ?
            <img className=' pointer-events-none w-[60px] h-[60px] object-cover rounded-full' src={`${userData.avatar}`}></img>
            :
            <div className=' pointer-events-none w-[60px] h-[60px] object-cover rounded-full'></div>
        }
        <div className=' flex flex-col text-left'>
          <p className=' text-[20px] line-clamp-1 font-raleway'>{userData.name}</p>
          <p className=' text-[12px] font-poppins font-bold text-green-600'>{userType}</p>
        </div>
      </div>
      <div className=' text-right'>
        <p className=' text-[12px] font-raleway font-bold'>{date + " " + time}</p>
        <p className=' text-[12px] font-raleway font-bold'>{hours} hours</p>
      </div>
    </>
  )
}
