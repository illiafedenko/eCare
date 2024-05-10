import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faDatabase, faMeteor, faTh, faThLarge, faThermometer4, faSearch, faEllipsisH, faPhoneVolume, faVideoCamera, faCheckDouble, faClose, faChevronDown, faArrowLeftLong, faContactBook, faContactCard } from '@fortawesome/free-solid-svg-icons';
import SideBar from '../../components/special/SideBar';
import dummyData from '../../dummydata';
import CGPortalNavBar from '../../components/special/CGPortalNavBar';
import ChatContactItem from '../../components/special/ChatContactItem';
import AccordionComponent from '../../components/special/AccordionComponent';
import ChatHistoryFileItem from '../../components/special/ChatHistoryFileItem';
import ChatHistoryImageItem from '../../components/special/ChatHistoryImageItem';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, onValue, set, update, push, equalTo } from 'firebase/database';
import ChatBody from '../../components/special/ChatBody';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { avatar } from '@material-tailwind/react';

export default function CGChat() {

  const { opponentID } = useParams();
  const navigate = useNavigate();

  const [chatHistoryVisible, setChatHistoryVisible] = useState(false);
  const [chatContactVisible, setChatContactVisible] = useState(true);

  const db = getDatabase();
  const [allUser, setAllUser] = useState([])
  const [searchList, setSearchList] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [myID, setMyID] = useState();
  const [myContactList, setMyContactList] = useState([])
  const [currentContactID, setCurrentContactID] = useState();
  const [opponentInfo, setOpponentInfo] = useState();

  useEffect(() => {

    getData();
    // console.log(123);
  }, [])

  const getData = async () => {
    try {
      getAuth().onAuthStateChanged(async (user) => {
        if (user) {
          const userType = localStorage.getItem("userType");
          const myuserID = user.uid;
          setMyID(myuserID);
          var users;
          if (userType == "senior") {
            users = ref(db, "caregivers");
          }
          else if (userType == "caregiver") {
            users = ref(db, "seniors");
          }
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

          //get contact list
          const contactListRef = ref(db, 'contactLists');
          var tempContactList = [];
          onValue(contactListRef, (snapshot) => {
            snapshot.forEach((item) => {
              if (item.val().userID1 == myuserID) {
                tempContactList.push(item.val().userID2);
              }
            })
            setMyContactList(tempContactList);
            if (!currentContactID)
              setCurrentContactID(opponentID != undefined ? opponentID : tempContactList[0]);
          })
        }
      })
    } catch (error) {

    }

  }

  const getOpponentInfo = async (id) => {
    var opponentRef = ref(db, "users/" + id);
    onValue(opponentRef, (snapshot) => {
      // console.log(snapshot.val());
      setOpponentInfo({
        name: snapshot.val().fullname,
        avatar: snapshot.val().avatar,
        userType: snapshot.val().userType
      });
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
    // console.log('mycontactlist______________:', myContactList);
  }, [JSON.stringify(myContactList)])

  useEffect(() => {
    // console.log('mycurrentID______________:', currentContactID);
    getOpponentInfo(currentContactID);
  }, [currentContactID])


  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  }

  const handleSelectContactUser = (id) => {
    const contactListRef = ref(db, 'contactLists');
    var b1 = false;
    var b2 = false;
    onValue(contactListRef, (snapshot) => {
      const list = snapshot;
      list.forEach((item) => {
        if (item.val().userID1 == myID && item.val().userID2 == id) {
          b1 = true;
        }
        if (item.val().userID1 == id && item.val().userID2 == myID) {
          b2 = true;
        }
      })
    })

    setCurrentContactID(id);
    if (!b1) {
      const newContactListRef1 = push(contactListRef);
      set(newContactListRef1, {
        userID1: myID,
        userID2: id,
      });
      var temp = myContactList;
      temp.push(id);
      setMyContactList(temp);
    }
    if (!b2) {
      const newContactListRef2 = push(contactListRef);
      set(newContactListRef2, {
        userID1: id,
        userID2: myID,
      });
    }

  }

  const handleSidebarShow = () => {
    document.getElementById("left_sidebar").classList.toggle("hidden");
    document.getElementById("blur_board").classList.toggle("hidden");
  }

  const handleCloseChatInfo = () => {
    setChatHistoryVisible(false);
  }

  const handleShowChatInfo = () => {
    setChatHistoryVisible(true);
  }

  const handleCloseContactList = () => {
    // if (window.innerWidth < 840) setChatContactVisible(false);
    setChatContactVisible(false);
  }

  const handleShowContactList = () => {
    setChatContactVisible(true);
  }

  window.onresize = function () {
    if (window.innerWidth < 1024) handleCloseContactList();
    else handleShowContactList();
    if (window.innerWidth < 1536) handleCloseChatInfo();
    else handleShowChatInfo();
  }

  return (
    <div className=" w-full h-screen min-h-screen max-h-screen overflow-y-hidden flex flex-row relative ">
      <SideBar portalname="cgportal" menu={dummyData.CGMenu} current="chat" />
      <div onClick={handleSidebarShow} id="blur_board" className=' w-full h-screen absolute hidden left-0 top-0 backdrop-blur-[1px] z-[5]'></div>
      <div className=' flex-grow h-full flex flex-col'>
        <CGPortalNavBar current="Chat" name="John Doe" />
        <div className='  w-full h-[calc(100vh-100px)] flex flex-row'>
          {/* chat left contact list */}
          <div className={` w-[350px] min-w-[350px] h-full flex-none flex-col ${!chatContactVisible ? 'hidden' : ''}  absolute left-0 z-[5] lg:relative bg-white border-r-[1px] `}>
            <div className=' w-full h-[80px] px-[24px] gap-5 flex flex-row items-center justify-between'>
              <FontAwesomeIcon onClick={() => handleCloseContactList()} className=' text-[20px] text-gray-500 cursor-pointer' icon={faArrowLeftLong} />
              <div className=' flex flex-grow h-[48px] relative'>
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
                <div className={`absolute w-full bg-gray-100 top-[60px] max-h-[300px] overflow-y-scroll z-50 shadow-lg ${showSearchDropdown ? '' : 'hidden'}`}>
                  {
                    searchList.map((item, i) => {
                      return <div key={i} onMouseDown={() => handleSelectContactUser(item.id)} className=' w-full h-[60px] flex flex-row gap-x-4 items-center px-2 cursor-pointer hover:bg-slate-50'>
                        <img src={`${item.avatar}`} className=' w-[40px] h-[40px] rounded-full object-cover' />
                        <p className=' text-[16px] font-poppins font-bold line-clamp-1 text-left'>{item.name}</p>
                      </div>
                    })
                  }
                </div>
              </div>
            </div>
            <div className=' w-full h-[calc(100vh-180px)] flex-col dynamic-scroll overflow-y-auto'>
              {
                Array.from(new Set(myContactList)).map((item, i) => {
                  return <div key={i}><ChatContactItem onClick={() => { setCurrentContactID(item); navigate('/sportal/chat/' + item); }} userID={item} selected={item == currentContactID ? true : false} /></div>
                })
              }
            </div>
          </div>
          <div className=' flex flex-grow h-[calc(100vh-100px)] flex-col'>
            {/* Chat header */}
            <div className=' w-full h-[80px] flex flex-row items-center justify-between px-8 py-[10px] border-[1px] border-t-0 border-gray-100'>
              <div className=' h-full flex flex-row gap-x-3'>
                <div onClick={handleShowContactList} className={` h-full aspect-square border-[1px] mr-2 border-gray-100 hover:bg-gray-100 ${chatContactVisible ? 'hidden' : 'flex'}  flex-row items-center justify-center rounded-full hover:cursor-pointer`}>
                  <FontAwesomeIcon className=' text-[20px] text-gray-600 pt-[2px]' icon={faContactCard} />
                </div>
                <div className=' h-full aspect-square cursor-pointer' onClick={() => handleShowChatInfo()}>
                  {
                    opponentInfo ?
                      <img className=' w-full h-full object-cover rounded-full' src={`${opponentInfo.avatar}`}></img>
                      :
                      <></>
                  }
                </div>
                <div className=' h-full text-left flex flex-col leading-none gap-y-1 items-start justify-center'>
                  <p className=' text-[20px] line-clamp-1 font-poppins font-semibold'>{opponentInfo ? opponentInfo.name : ""}</p>
                  <div className=' flex flex-row gap-1 items-center justify-start'>
                    {/* <div className=' w-2 h-2 rounded-full bg-green-600'></div> */}
                    <p className=' text-[16px] line-clamp-1 font-poppins text-gray-600'>{opponentInfo ? opponentInfo.userType : ""}</p>
                  </div>
                </div>
              </div>
              <div className=' h-[48px] flex flex-row gap-3'>
                <div className=' h-full aspect-square border-[1px] border-gray-100 hover:bg-gray-100 hidden sm:flex flex-row items-center justify-center rounded-full hover:cursor-pointer'>
                  <FontAwesomeIcon className=' text-[20px] text-green-600 pt-[2px]' icon={faPhoneVolume} />
                </div>
                <div className=' h-full aspect-square border-[1px] border-gray-100 hover:bg-gray-100 hidden sm:flex flex-row items-center justify-center rounded-full hover:cursor-pointer'>
                  <FontAwesomeIcon className=' text-[20px] text-green-600 pt-[2px]' icon={faVideoCamera} />
                </div>
                <div className=' h-full aspect-square border-[1px] border-gray-100 hover:bg-gray-100 flex flex-row items-center justify-center rounded-full hover:cursor-pointer'>
                  <FontAwesomeIcon className=' text-[20px] text-gray-600 pt-[2px]' icon={faEllipsisH} />
                </div>
              </div>
            </div>
            {/* chat body */}
            <div className=' w-full h-[calc(100vh-180px)] '>
              <ChatBody senderID={myID} receiverID={currentContactID} />
            </div>
          </div>
          {/* chat infomation */}
          <div className={`w-[350px] min-w-[350px] h-[calc(100vh-100px)] absolute right-0 2xl:relative bg-white border-l-[1px] ${!chatHistoryVisible ? 'hidden' : ''} flex-none flex-col`}>
            <div className=' w-full h-[80px] px-[24px] flex flex-row items-center justify-end'>
              <div onClick={() => handleCloseChatInfo()} className=' min-w-[36px] h-[36px] rounded-full border-[1px] border-gray-200 flex flex-row items-center justify-center hover:cursor-pointer'>
                <FontAwesomeIcon className=' text-gray-500 text-[16px] font-extralight' icon={faClose} />
              </div>
            </div>
            <div className=' w-full h-[calc(100vh-180px)] dynamic-scroll overflow-auto px-6 py-3 flex flex-col justify-start'>
              <div className=' w-full flex flex-col items-center gap-2'>
                <img className=' w-[120px] h-[120px] object-cover rounded-full border-[5px] border-green-700' src={opponentInfo ? opponentInfo.avatar : ''} />
                <p className=' text-[24px] font-semibold leading-none font-poppins text-center'>{opponentInfo ? opponentInfo.name : ''}</p>
                <p className=' text-[16px] font-poppins leading-none'>{opponentInfo ? opponentInfo.userType : ''}</p>
              </div>
              <div className=' w-full bg-gray-700 my-6 border-t-[1px] border-gray-200'></div>
              <div className=' w-full flex flex-row justify-between items-center'>
                <p className=' text-[16px] font-poppins font-bold'>Notifications</p>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 rounded-full focus:outline-none focus:border-none peer dark:bg-gray-700 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                </label>
              </div>
              <div className=' w-full bg-gray-700 my-6 border-t-[1px] border-gray-200'></div>
              <AccordionComponent title="Recent Files" semititle="3 files">
                <div className=' w-full pt-5 flex flex-col'>
                  <ChatHistoryFileItem filename="Ecare.pdf" />
                  <ChatHistoryFileItem filename="Landing page.pdf" />
                  <ChatHistoryFileItem filename="Frontend.pdf" />
                  <ChatHistoryFileItem filename="Backend.pdf" />
                </div>
              </AccordionComponent>
              <div className=' w-full bg-gray-700 my-6 border-t-[1px] border-gray-200'></div>
              <AccordionComponent title="Recent Images" semititle="7 images">
                <div className=' w-full pt-5 grid grid-cols-3 gap-x-3 gap-y-3'>
                  <ChatHistoryImageItem image={dummyData.chatImageList[0]} />
                  <ChatHistoryImageItem image={dummyData.chatImageList[1]} />
                  <ChatHistoryImageItem image={dummyData.chatImageList[2]} />
                  <ChatHistoryImageItem image={dummyData.chatImageList[3]} />
                  <ChatHistoryImageItem image={dummyData.chatImageList[4]} />
                  <ChatHistoryImageItem image={dummyData.chatImageList[5]} />
                  <ChatHistoryImageItem image={dummyData.chatImageList[0]} />
                </div>
              </AccordionComponent>
              <div className=' w-full bg-gray-700 my-6 border-t-[1px] border-gray-200'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
