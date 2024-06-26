import { faEdit, faPlus, faPlusCircle, faSort, faSortAlphaAsc, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAuth } from 'firebase/auth';
import { getDatabase, limitToFirst, limitToLast, onValue, orderByChild, query, ref } from 'firebase/database';
import React, { useState, useEffect } from 'react'
import SchedulesTableRow from './SchedulesTableRow';
import RequestTableRow from './RequestTableRow';

export default function RequestTable() {

  const [sortingField, setSortingField] = useState("fullname");
  const [sortingDirection, setSortingDirection] = useState(true);
  const [scheduleList, setScheduleList] = useState([]);
  const [checkList, setCheckList] = useState();
  const [checkAll, setCheckAll] = useState(false);


  const db = getDatabase();

  const calculateAge = (birthday) => {
    const [birthMonth, birthDay, birthYear] = birthday.split('-');

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();

    let age = currentYear - parseInt(birthYear);

    if (currentMonth < parseInt(birthMonth) || (currentMonth === parseInt(birthMonth) && currentDay < parseInt(birthDay))) {
      age--;
    }

    return age;
  }

  const getSeniorsList = async () => {
    try {
      var listQuery = query(ref(db, "seniorRequests"));

      onValue(listQuery, (snapshot) => {
        let tmpAry = [];
        let checkAry = {};
        let i = 0;
        snapshot.forEach((item) => {
          console.log("item:", item.key, item.val());
          let sID = item.key.split("-")[0];
          for (let prop in item.val()) {
            i++;
            if (item.val().hasOwnProperty(prop)) {  // Check to make sure the property is not from the prototype chain
              console.log(`Key: ${prop}, Value: ${item.val()[prop]}`);
              tmpAry.push({
                no: i,
                key: item.key,
                senior: sID,
                date: prop,
                times: item.val()[prop],
              })
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

  useEffect(() => {

    getSeniorsList();
  }, [])

  useEffect(() => {
    console.log(scheduleList);
  }, [scheduleList])


  useEffect(() => {
    getSeniorsList();
  }, [sortingField])

  const setSorting = (str) => {
    if (str == sortingField) {
      setSortingDirection(!sortingDirection);
    } else {
      setSortingDirection(true);
    }
    setSortingField(str);
  }

  useEffect(() => {
    getSeniorsList();
  }, [sortingDirection])

  const setCheck = (e, key) => {
    var temp = JSON.parse(checkList);
    temp[key] = !temp[key];
    setCheckList(JSON.stringify(temp));
    // setCheckList((prev) => ({
    //   ...prev,
    //   [key]: !checkList[key],
    // }))
  }

  useEffect(() => {
    if (!checkList) return;
    console.log(JSON.parse(checkList));
  }, [checkList])

  useEffect(() => {
    if (!checkList) return;
    var temp = JSON.parse(checkList);
    for (let i = 0; i < Reflect.ownKeys(temp).length; i++) {
      let prop = Reflect.ownKeys(temp)[i];
      temp[prop] = checkAll;
    }
    setCheckList(JSON.stringify(temp));
  }, [checkAll])


  return (
    <div className=' flex flex-col gap-y-3'>
      {
        scheduleList.map((item, i) => {
          return <RequestTableRow key={i} no={i} sID={item.senior} date={item.date} hours={item.times} />;
        })
      }
    </div>
  )
}

