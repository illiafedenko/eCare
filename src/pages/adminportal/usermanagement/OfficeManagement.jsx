

import { faEdit, faPlus, faPlusCircle, faSort, faSortAlphaAsc, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAuth } from 'firebase/auth';
import { getDatabase, limitToFirst, limitToLast, onValue, orderByChild, query, ref } from 'firebase/database';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function OfficeManagement() {

  const [sortingField, setSortingField] = useState("fullname");
  const [sortingDirection, setSortingDirection] = useState(true);
  const [officeManagerList, setOfficeManagerList] = useState([]);
  const [checkList, setCheckList] = useState();
  const [checkAll, setCheckAll] = useState(false);

  const navigate = useNavigate();


  const db = getDatabase();

  const getOfficeManagersList = async () => {
    try {
      var listQuery = query(ref(db, "officeManagers"), orderByChild(sortingField));

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
          })
          checkAry[item.key] = false;
        })
        setCheckList(JSON.stringify(checkAry));
        setOfficeManagerList([...tmpAry]);
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getOfficeManagersList();
  }, [])

  useEffect(() => {
    getOfficeManagersList();
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
    getOfficeManagersList();
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
    console.log(checkList);
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

  const addUser = () => {
    navigate('add');
  }

  return (
    <div className=' flex flex-col gap-y-3'>
      {/* <div className=' flex flex-row justify-end'>
        <div className=' flex flex-row'><FontAwesomeIcon icon={faPlusCircle} /></div>
      </div> */}
      <div className=' flex flex-row justify-end'>
        <div
          onClick={() => addUser()}
          className=' flex flex-row gap-x-3 items-center font-poppins text-gray-600 hover:text-green-600 cursor-pointer border-[2px] rounded-md px-3 py-1 bg-gray-50 border-gray-300 hover:border-gray-400 hover:bg-gray-200 '
        >
          <FontAwesomeIcon icon={faPlus} />
          <p className=' font-semibold'>Add</p>
        </div>
      </div>
      <div className=' border-2 rounded-[8px] font-poppins'>
        <table className=' w-full'>
          <thead>
            <tr>
              <td className=''><div className=' py-2 flex flex-row gap-x-2 justify-center items-center'><span><input onChange={(e) => setCheckAll(!checkAll)} type='checkbox' className=' accent-green-600' checked={checkAll} /></span></div></td>
              <td className=''><div className=' py-2 flex flex-row gap-x-2 justify-center items-center'><span>No</span></div></td>
              <td className=''><div className=' py-2 flex flex-row gap-x-2 justify-center items-center'></div></td>
              <td onClick={() => setSorting("fullname")} className=' cursor-pointer'><div className=' py-2 flex flex-row gap-x-2 justify-center items-center'><span>Name</span><FontAwesomeIcon className=' text-[12px]' icon={faSort} /></div></td>
              {/* <td onClick={() => setSorting("age")} className=' cursor-pointer'><div className=' py-2 flex flex-row gap-x-2 justify-center items-center'><span>Age</span><FontAwesomeIcon className=' text-[12px]' icon={faSort} /></div></td>
              <td onClick={() => setSorting("gender")} className=' cursor-pointer'><div className=' py-2 md:flex flex-row gap-x-2 justify-center items-center hidden'><span>Gender</span><FontAwesomeIcon className=' text-[12px]' icon={faSort} /></div></td> */}
              <td onClick={() => setSorting("email")} className=' cursor-pointer'><div className=' py-2 xl:flex flex-row gap-x-2 justify-center items-center hidden'><span>Email</span><FontAwesomeIcon className=' text-[12px]' icon={faSort} /></div></td>
              <td className=''><div className=' py-2 flex flex-row gap-x-2 justify-center items-center'><span></span></div></td>
            </tr>
          </thead>

          <tbody>
            {
              sortingDirection ?
                officeManagerList.map((item, i) => {
                  return <tr key={i} className=' border-t-2'>
                    <td className=' py-1 px-1'><input onChange={(e) => setCheck(e, item.key)} checked={JSON.parse(checkList)[item.key]} type='checkbox' className=' accent-green-600' /></td>
                    <td className=''>{item.no}</td>
                    <td><div className=' flex flex-row gap-x-5 justify-center items-center'><img src={`${item.avatar}`} className=' w-6 h-6 rounded-full' /></div></td>
                    <td><div className=' flex flex-row gap-x-5 justify-center items-center'><span>{item.fullname}</span></div></td>
                    {/* <td>{item.age}</td>
                    <td><span className=' md:block hidden'>{item.gender}</span></td> */}
                    <td><span className=' xl:block hidden'>{item.email}</span></td>
                    <td><span className=' lg:block hidden'>{item.phonenumber}</span></td>
                    <td><div className=' flex flex-row text-[12px] gap-x-3 justify-center items-center text-gray-500'><FontAwesomeIcon className=' hover:text-green-600 cursor-pointer' icon={faEdit} /><FontAwesomeIcon className='  hover:text-red-400 cursor-pointer' icon={faTrash} /></div></td>
                  </tr>
                })
                :
                officeManagerList.reverse().map((item, i) => {
                  return <tr key={i} className=' border-t-2'>
                    <td className=' py-1 px-1'><input onChange={(e) => setCheck(e, item.key)} checked={JSON.parse(checkList)[item.key]} type='checkbox' className=' accent-green-600' /></td>
                    <td className=''>{item.no}</td>
                    <td><div className=' flex flex-row gap-x-5 justify-center items-center'><img src={`${item.avatar}`} className=' w-6 h-6 rounded-full' /></div></td>
                    <td><div className=' flex flex-row gap-x-5 justify-center items-center'><span>{item.fullname}</span></div></td>
                    <td>{item.age}</td>
                    <td><span className=' md:block hidden'>{item.gender}</span></td>
                    <td><span className=' xl:block hidden'>{item.email}</span></td>
                    <td><div className=' flex flex-row text-[12px] gap-x-3 justify-center items-center text-gray-500'><FontAwesomeIcon className=' hover:text-green-600 cursor-pointer' icon={faEdit} /><FontAwesomeIcon className='  hover:text-red-400 cursor-pointer' icon={faTrash} /></div></td>
                  </tr>
                })
            }
          </tbody>
        </table>
      </div >
      {
        officeManagerList.length == 0 ?
          <p className=' text-[20px] font-poppins'>There is no office manager</p>
          :
          <></>
      }
    </div>
  )
}
