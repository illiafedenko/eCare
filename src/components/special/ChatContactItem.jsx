import React, { useEffect, useState } from 'react'
import readCheckedIcon from '../../assets/images/doublecheck.png';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, onValue, set, update, push, query, orderByChild, equalTo, limitToLast } from 'firebase/database';
import { avatar } from '@material-tailwind/react';

export default function ChatContactItem(props) {

  const [unreadMessage, setUnreadMessage] = useState(0)

  const db = getDatabase();

  const [userInfo, setUserInfo] = useState({
    avatar: '',
    username: '',
    usertype: ''
  })
  const [lastMessage, setLastMessage] = useState();
  const [lastTimeStamp, setLastTimeStamp] = useState();

  const getTime = (millisecondsSinceEpoch) => {
    const date = new Date(millisecondsSinceEpoch);
    const formattedDate = `${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const amOrPm = date.getHours() < 12 ? 'AM' : 'PM';
    const formattedTime = `${hours}:${minutes} ${amOrPm}`;

    const formattedDateTime = `${formattedDate} ${formattedTime}`;
    return formattedDateTime
  }

  const getUserInfo = async () => {
    try {
      var user = ref(db, "users/" + props.userID);
      onValue(user, (snapshot) => {
        setUserInfo({
          avatar: snapshot.val().avatar,
          username: snapshot.val().fullname,
          usertype: snapshot.val().userType,
        });
      })
    } catch (error) {
      console.log(error)
    }
  }

  const getUnreadMessage = async () => {
    try {
      getAuth().onAuthStateChanged(async (user) => {
        if (user) {
          const unreadChatQuery = query(ref(db, "messageLists"), orderByChild('isRead'), equalTo(false));
          onValue(unreadChatQuery, (snapshot) => {
            var cnt = 0;
            snapshot.forEach((item) => {
              if (item.val().senderID == props.userID && item.val().receiverID == user.uid) {
                cnt++;
              }
            })
            setUnreadMessage(cnt);
          })
        }
      })
    } catch (error) {

    }
  }

  const getLastMessage = async () => {
    try {
      getAuth().onAuthStateChanged(async (user) => {
        if (user) {
          const unreadChatQuery = query(ref(db, "messageLists"), orderByChild('sentAt'));
          onValue(unreadChatQuery, (snapshot) => {
            snapshot.forEach(item => {
              if ((item.val().senderID == props.userID && item.val().receiverID == user.uid) || (item.val().senderID == user.uid && item.val().receiverID == props.userID)) {
                setLastMessage(item.val().message);
                setLastTimeStamp(item.val().sentAt);
              }
            })
          })
        }
      })
    } catch (error) {

    }
  }

  useEffect(() => {

    getUserInfo();
    getUnreadMessage();
    getLastMessage();

  }, [])

  return (
    <>
      {props.selected ?
        <>
          <div onClick={props.onClick} className=' relative w-full h-[96px] px-6 py-6 flex flex-row justify-between gap-2 cursor-pointer bg-blue-50'>
            <div className=' flex flex-row gap-x-3 h-full'>
              <div className=' h-full aspect-square flex-none'>
                <img src={`${userInfo.avatar}`} className=' w-full h-full rounded-full object-cover' />
              </div>
              <div className=' flex flex-grow-0 flex-col h-full gap-y-1 text-left justify-between'>
                <p className=' text-[16px] line-clamp-1 font-poppins font-bold'>{userInfo.username}</p>
                <p className=' text-gray-800 text-[14px] line-clamp-1 leading-none whitespace-break-spaces '>{lastMessage ? lastMessage.replace("&#10;", "\n") : ''}</p>
              </div>
            </div>
            <div className=' flex flex-none flex-col text-right justify-between items-end'>
              <p className=' text-gray-500 font-poppins text-[12px] font-bold'>{lastTimeStamp ? getTime(lastTimeStamp) : ''}</p>
              {
                unreadMessage == 0 ?
                  // <img src={readCheckedIcon} />
                  <></>
                  :
                  <p className=' bg-red-600 text-white text-[12px] py-0 rounded-full aspect-square font-poppins'>{unreadMessage ? unreadMessage : ''}</p>
              }
            </div>
            <div className=' w-1 h-full absolute left-0 top-0 bg-green-600'></div>
          </div>
          <div className=' px-6'>
            <div className='border-b-[1px] border-b-gray-200'></div>
          </div>
        </>
        :
        <>
          <div onClick={props.onClick} className=' w-full h-[96px] px-6 py-6 flex flex-row justify-between gap-2 cursor-pointer hover:bg-blue-50'>
            <div className=' flex flex-row gap-x-3 h-full'>
              <div className=' h-full aspect-square flex-none'>
                <img src={`${userInfo.avatar}`} className=' w-full h-full rounded-full object-cover' />
              </div>
              <div className=' flex flex-grow-0 flex-col h-full gap-y-1 text-left justify-between'>
                <p className=' text-[16px] line-clamp-1 font-poppins font-bold'>{userInfo.username}</p>
                <p className=' text-gray-800 text-[14px] line-clamp-1 leading-none whitespace-break-spaces '>{lastMessage ? lastMessage.replace("&#10;", "\n") : ''}</p>
              </div>
            </div>
            <div className=' flex flex-none flex-col justify-between items-end'>
              <p className=' text-gray-500 font-poppins text-[12px] font-bold'>{lastTimeStamp ? getTime(lastTimeStamp) : ''}</p>
              {
                unreadMessage == 0 ?
                  // <img src={readCheckedIcon} />
                  <></>
                  :
                  <p className=' bg-red-600 text-white text-[12px] py-0 rounded-full aspect-square font-poppins'>{unreadMessage}</p>
              }
            </div>
          </div>
          <div className=' px-6'>
            <div className='border-b-[1px] border-b-gray-200'></div>
          </div>
        </>
      }
    </>
  )
}
