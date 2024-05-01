import { faEdit, faPlus, faPlusCircle, faSort, faSortAlphaAsc, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAuth } from 'firebase/auth';
import { getDatabase, limitToFirst, limitToLast, onValue, orderByChild, query, ref } from 'firebase/database';
import React, { useState, useEffect } from 'react'

export default function SeniorsTable() {

  const data = [
    { id: 1, name: 'John Doe', age: 27, email: "johndoe@gmail.com", role: "caregiver", createdDate: "2022-03-24" },
    { id: 2, name: 'Jane Doe', age: 28, email: "johndoe@gmail.com", role: "caregiver", createdDate: "2024-03-25" },
    { id: 3, name: 'John Doe', age: 25, email: "johndoe@gmail.com", role: "doctor", createdDate: "2024-03-22" },
    { id: 4, name: 'John Doe', age: 22, email: "johndoe@gmail.com", role: "nurse", createdDate: "2024-03-26" },
    { id: 5, name: 'Jane Doe', age: 35, email: "johndoe@gmail.com", role: "professor", createdDate: "2021-03-21" },
    { id: 6, name: 'John Doe', age: 30, email: "johndoe@gmail.com", role: "caregiver", createdDate: "2022-03-24" },
    { id: 7, name: 'John Doe', age: 40, email: "johndoe@gmail.com", role: "doctor", createdDate: "2024-03-24" },
    { id: 8, name: 'Jane Doe', age: 39, email: "johndoe@gmail.com", role: "nurse", createdDate: "2024-03-22" },
    { id: 9, name: 'John Doe', age: 41, email: "johndoe@gmail.com", role: "professor", createdDate: "2023-03-23" },
    { id: 10, name: 'John Doe', age: 43, email: "johndoe@gmail.com", role: "caregiver", createdDate: "2014-03-23" },
    { id: 11, name: 'Jane Doe', age: 33, email: "johndoe@gmail.com", role: "doctor", createdDate: "2021-03-22" },
    { id: 12, name: 'John Doe', age: 31, email: "johndoe@gmail.com", role: "nurse", createdDate: "2020-03-24" },
    { id: 13, name: 'John Doe', age: 30, email: "johndoe@gmail.com", role: "caregiver", createdDate: "2024-03-06" },
    { id: 14, name: 'Jane Doe', age: 29, email: "johndoe@gmail.com", role: "nurse", createdDate: "2022-03-21" },
    { id: 15, name: 'John Doe', age: 28, email: "johndoe@gmail.com", role: "caregiver", createdDate: "2014-03-22" },
    { id: 16, name: 'Jane Doe', age: 32, email: "johndoe@gmail.com", role: "professor", createdDate: "2004-03-24" },
    // Add more data objects as needed
  ];

  const [sortingField, setSortingField] = useState("fullname");
  const [sortingDirection, setSortingDirection] = useState(true);
  const [seniorList, setSeniorList] = useState([]);
  const [checkList, setCheckList] = useState({});
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
      var listQuery = query(ref(db, "caregivers"), orderByChild(sortingField));

      onValue(listQuery, (snapshot) => {
        let tmpAry = [];
        let checkAry = {};
        let i = 0;
        snapshot.forEach((item) => {
          i++;
          tmpAry.push({
            no: i,
            key: item.key,
            fullname: item.val().fullname,
            avatar: item.val().avatar,
            email: item.val().email,
            phonenumber: item.val().phonenumber,
            gender: item.val().gender,
            age: calculateAge(item.val().birthday),
          })
          checkAry[item.key] = false;
        })
        setCheckList(checkAry);
        setSeniorList([...tmpAry]);
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getSeniorsList();
  }, [])

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
    console.log(e.target.value, key);
    setCheckList((prev) => ({
      ...prev,
      [key]: !checkList[key],
    }))
  }

  useEffect(() => {
    console.log(checkList);
  }, [JSON.stringify(checkList)])

  useEffect(() => {
    if (!checkList) return;
    console.log(typeof checkList);
    console.log(Reflect.ownKeys(checkList));
    let tmpObj = {};
    // for (let props in checkList.keys()) {
    //   tmpObj[props] = checkAll;
    // }
    // setCheckList(...tmpObj);
  }, [checkAll])


  return (
    <div className=' flex flex-col gap-y-3'>
      {/* <div className=' flex flex-row justify-end'>
        <div className=' flex flex-row'><FontAwesomeIcon icon={faPlusCircle} /></div>
      </div> */}
      <div className=' border-2 rounded-[8px] font-poppins'>
        <table className=' w-full'>
          <tr>
            {/* <td>
            No
          </td> */}
            <td className=''><div className=' py-2 flex flex-row gap-x-2 justify-center items-center'><span><input type='checkbox' className=' accent-green-600' /></span></div></td>
            <td className=''><div className=' py-2 flex flex-row gap-x-2 justify-center items-center'><span>No</span></div></td>
            <td className=''><div className=' py-2 flex flex-row gap-x-2 justify-center items-center'></div></td>
            <td onClick={() => setSorting("fullname")} className=' cursor-pointer'><div className=' py-2 flex flex-row gap-x-2 justify-center items-center'><span>Name</span><FontAwesomeIcon className=' text-[12px]' icon={faSort} /></div></td>
            <td onClick={() => setSorting("age")} className=' cursor-pointer'><div className=' py-2 flex flex-row gap-x-2 justify-center items-center'><span>Age</span><FontAwesomeIcon className=' text-[12px]' icon={faSort} /></div></td>
            <td onClick={() => setSorting("gender")} className=' cursor-pointer'><div className=' py-2 md:flex flex-row gap-x-2 justify-center items-center hidden'><span>Gender</span><FontAwesomeIcon className=' text-[12px]' icon={faSort} /></div></td>
            <td onClick={() => setSorting("email")} className=' cursor-pointer'><div className=' py-2 xl:flex flex-row gap-x-2 justify-center items-center hidden'><span>Email</span><FontAwesomeIcon className=' text-[12px]' icon={faSort} /></div></td>
            <td onClick={() => setSorting("phonenumber")} className=' cursor-pointer'><div className=' py-2 lg:flex flex-row gap-x-2 justify-center items-center hidden'><span>PhoneNumber</span><FontAwesomeIcon className=' text-[12px]' icon={faSort} /></div></td>
            <td className=''><div className=' py-2 flex flex-row gap-x-2 justify-center items-center'><span></span></div></td>
          </tr>
          {
            sortingDirection ?
              seniorList.map((item, i) => {
                return <tr key={i} className=' border-t-2'>
                  <td className=' py-1 px-1'><input onClick={(e) => setCheck(e, item.key)} value={checkList[item.key]} type='checkbox' className=' accent-green-600' /></td>
                  <td className=''>{item.no}</td>
                  <td><div className=' flex flex-row gap-x-5 justify-center items-center'><img src={`${item.avatar}`} className=' w-4 h-4 rounded-full' /></div></td>
                  <td><div className=' flex flex-row gap-x-5 justify-center items-center'><span>{item.fullname}</span></div></td>
                  <td>{item.age}</td>
                  <td><span className=' md:block hidden'>{item.gender}</span></td>
                  <td><span className=' xl:block hidden'>{item.email}</span></td>
                  <td><span className=' lg:block hidden'>{item.phonenumber}</span></td>
                  <td><div className=' flex flex-row text-[12px] gap-x-3 justify-center items-center text-gray-500'><FontAwesomeIcon className=' hover:text-green-600 cursor-pointer' icon={faEdit} /><FontAwesomeIcon className='  hover:text-red-400 cursor-pointer' icon={faTrash} /></div></td>
                </tr>
              })
              :
              seniorList.reverse().map((item, i) => {
                return <tr key={i} className=' border-t-2'>
                  <td className=' py-1 px-1'><input type='checkbox' className=' accent-green-600' /></td>
                  <td className=''>{item.no}</td>
                  <td><div className=' flex flex-row gap-x-5 justify-center items-center'><img src={`${item.avatar}`} className=' w-4 h-4 rounded-full' /></div></td>
                  <td><div className=' flex flex-row gap-x-5 justify-center items-center'><span>{item.fullname}</span></div></td>
                  <td>{item.age}</td>
                  <td><span className=' md:block hidden'>{item.gender}</span></td>
                  <td><span className=' xl:block hidden'>{item.email}</span></td>
                  <td><span className=' lg:block hidden'>{item.phonenumber}</span></td>
                  <td><div className=' flex flex-row text-[12px] gap-x-3 justify-center items-center text-gray-500'><FontAwesomeIcon className=' hover:text-green-600 cursor-pointer' icon={faEdit} /><FontAwesomeIcon className='  hover:text-red-400 cursor-pointer' icon={faTrash} /></div></td>
                </tr>
              })
          }
        </table>
      </div >
    </div>
  )
}
