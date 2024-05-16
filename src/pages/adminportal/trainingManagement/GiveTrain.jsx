import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { getDatabase, onValue, ref, remove, set } from 'firebase/database'
import { getStorage, ref as storageRef, deleteObject } from 'firebase/storage';
import React, { useState, useEffect } from 'react'
import { useStateManager } from 'react-select';

export default function GiveTrain() {

  const [courseList, setCourseList] = useState();
  const [allUser, setAllUser] = useState([])
  const [searchList, setSearchList] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [currentContactID, setCurrentContactID] = useState();
  const [opponentInfo, setOpponentInfo] = useState();
  const [userTrainingList, setUserTrainingList] = useState([]);


  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState("");
  const [toastState, setToastState] = useState(true);
  const db = getDatabase();
  const storage = getStorage();

  useEffect(() => {
    getCourseData();
    getData();
  }, [])

  const getCourseData = () => {
    onValue(ref(db, 'courses'), (snapshot) => {
      var temp = [];
      snapshot.forEach((item) => {
        temp.push({
          id: item.key,
          title: item.val().title,
          src: item.val().course,
          timestamp: item.val().timestamp,
        })
      })
      console.log(temp);
      setCourseList([...temp]);
    })
  }

  useEffect(() => {
    console.log(courseList);
  }, [courseList])

  const onSelectCourse = (e, id) => {
    console.log(e.target.checked, id);
    let val = e.target.checked;
    set(ref(db, `trainLists/${currentContactID}/${id}`), val);
  }


  const getData = async () => {
    try {
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
    } catch (error) {

    }
  }

  useEffect(() => {
    console.log(searchList);
  }, [searchList])


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
      getTrainingList();
    }
  }, [opponentInfo])

  const getTrainingList = async () => {
    try {
      onValue(ref(db, `trainLists/${currentContactID}`), (snapshot) => {
        console.log(snapshot.val());
        if (snapshot.val() == null) {
          setUserTrainingList([]);
        }
        else {
          let temp = [];
          for (let prop in snapshot.val()) {

            if (snapshot.val().hasOwnProperty(prop)) {  // Check to make sure the property is not from the prototype chain
              if (snapshot.val()[prop] == true) {
                temp.push(prop);
              }
            }
          }
          console.log(temp);
          setUserTrainingList([...temp]);
        }
      })
    } catch (error) {
      console.log(error.message);
    }
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
  }, [currentContactID])


  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  }

  const handleSelectContactUser = (id) => {
    setCurrentContactID(id);
  }



  return (
    <div className=' w-full flex flex-col gap-y-14'>
      <div className=' w-full grid lg:grid-cols-2 grid-cols-1 gap-x-5 gap-y-5'>
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
        <div className=' w-full flex flex-row justify-start items-center gap-x-5'>
          {
            opponentInfo != null ?
              <>
                <img src={`${opponentInfo.avatar}`} className=' w-10 h-10 rounded-full' />
                <p className=' flex-grow text-gray-700 text-left font-poppins font-semibold line-clamp-1'>{opponentInfo.name}</p>
              </>
              :
              <></>
          }
        </div>
      </div>
      <div className=' w-full h-full grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-6'>
        {
          courseList != null && currentContactID ?
            courseList.map((item, i) => {
              return <div key={i} className=' w-full flex flex-col gap-y-2 rounded-lg'>
                <video className=' w-full  aspect-4/3 bg-gray-700 rounded-lg' controls>
                  <source
                    src={`${item.src}`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className=' w-full flex flex-row justify-between px-2'>
                  <p data-tooltip-target="tooltip-default" className=' text-[16px] font-poppins text-left line-clamp-1'>{item.title}</p>
                  <input onChange={(e) => onSelectCourse(e, item.id)} type='checkbox' className=' accent-green-600' checked={userTrainingList.indexOf(item.id) >= 0 ? true : false} />
                </div>
              </div>
            })
            :
            <></>
        }
        {
          showToast ?
            <div className={`fixed bottom-0 right-0 mb-4 mr-4 ${toastState ? `bg-green-500` : `bg-red-500`} text-white py-2 px-4 rounded`}>
              {toastText}
            </div>
            :
            <></>
        }
      </div>
    </div>
  )
}
