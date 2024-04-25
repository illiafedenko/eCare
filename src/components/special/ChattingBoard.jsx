import React, { useState, useEffect } from 'react'
import dummyData from '../../dummydata'
import ReceivedMessage from './ReceivedMessage'
import SentMessage from './SentMessage'
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, onValue, set, update, push, equalTo } from 'firebase/database';

export default function ChattingBoard(props) {

  const db = getDatabase();

  const [senderID, setSenderID] = useState();
  const [receiverID, setReceiverID] = useState();
  const [messageList, setMessageList] = useState([])

  const getChatHistory = async () => {
    try {
      var chatHistoryRef = ref(db, "messageLists");
      var tmpMsgAry = [];
      onValue(chatHistoryRef, (snapshot) => {
        snapshot.forEach((item) => {
          if ((item.val().senderID == props.senderID && item.val().receiverID == props.receiverID) || (item.val().senderID == props.receiverID && item.val().receiverID == props.senderID)) {
            tmpMsgAry.push({
              sender: item.val().senderID,
              receiver: item.val().receiverID,
              sentAt: item.val().sentAt,
            })
          }

        })

        setMessageList(tmpMsgAry.sort((a, b) => a.sentAt - b.sentAt));
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // getChatHistory();
  }, [])

  useEffect(() => {
    console.log(messageList);
  }, [JSON.stringify(messageList)])

  useEffect(() => {
    if (props.senderID && props.receiverID) {
      console.log(props.senderID, props.receiverID);
      setSenderID(props.senderID);
      setReceiverID(props.receiverID);
      getChatHistory();
    }
  }, [props])


  return (
    <div className=' w-full max-w-[800px] flex flex-col gap-y-5'>
      <ReceivedMessage avatar={dummyData.seniors[1].avatar} />
      <SentMessage avatar={dummyData.careGivers[0].avatar} />
      <ReceivedMessage avatar={dummyData.seniors[1].avatar} />
      <SentMessage avatar={dummyData.careGivers[0].avatar} />
      <ReceivedMessage avatar={dummyData.seniors[1].avatar} />
      <SentMessage avatar={dummyData.careGivers[0].avatar} />
    </div>
  )
}
