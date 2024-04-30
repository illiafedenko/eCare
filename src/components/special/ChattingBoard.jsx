import React, { useState, useEffect, useRef } from 'react'
import dummyData from '../../dummydata'
import ReceivedMessage from './ReceivedMessage'
import SentMessage from './SentMessage'
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, onValue, set, update, push, equalTo, query, orderByChild, limitToFirst } from 'firebase/database';
import useChatStore from '../../utils/chatStore';

export default function ChattingBoard(props) {

  const db = getDatabase();

  const [senderID, setSenderID] = useState();
  const [receiverID, setReceiverID] = useState();
  const [messageList, setMessageList] = useState([]);
  const [senderAvatar, setSenderAvatar] = useState();
  const [receiverAvatar, setReceiverAvatar] = useState();
  const [readArray, setSetReadArray] = useState({});

  const setReadySend = useChatStore((state) => state.setReadySend);
  const sendingMessage = useChatStore((state) => state.sendingMessage);


  const [reload, setReload] = useState(false);

  const getChatHistory = async () => {
    try {
      var chatHistoryQuery = query(ref(db, "messageLists"), orderByChild("sentAt"), limitToFirst(100));
      var strMsgAry = [];
      onValue(chatHistoryQuery, (snapshot) => {

        snapshot.forEach((item) => {
          if ((item.val().senderID == props.senderID && item.val().receiverID == props.receiverID) || (item.val().senderID == props.receiverID && item.val().receiverID == props.senderID)) {
            strMsgAry.push(JSON.stringify({
              key: item.key,
              sender: item.val().senderID,
              receiver: item.val().receiverID,
              message: item.val().message,
              sentAt: item.val().sentAt,
              isSent: item.val().senderID == props.senderID,
            }));
            setSetReadArray((prev) => ({
              ...prev,
              [item.key]: item.val().isRead,
            }))
          }
        })
        // console.log("array:", new Set(tmpMsgAry.sort((a, b) => a.sentAt - b.sentAt)));
        setMessageList([...new Set(strMsgAry)]);
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
  }, [])

  useEffect(() => {
    const dbref = ref(getDatabase());
    const updates = {};
    messageList.forEach((item) => {
      if (JSON.parse(item).sender != props.senderID) {
        updates[`messageLists/${JSON.parse(item).key}/isRead`] = true;
      }
    });
    update(dbref, updates);
  }, [JSON.stringify(messageList)])

  useEffect(() => {
    if (props.readySend) {
      // console.log("send:", sendingMessage);
      setReadySend(false);
    }
  }, [props.readySend])


  const addMessage = (msg) => {
    console.log("add:", msg);
  }

  useEffect(() => {
    if (props.senderID && props.receiverID) {
      setSenderID(props.senderID);
      setReceiverID(props.receiverID);
      const senderRef = ref(db, 'users/' + props.senderID);
      const receiverRef = ref(db, 'users/' + props.receiverID);
      onValue(senderRef, (snapshot) => {
        setSenderAvatar(snapshot.val().avatar);
      })
      onValue(receiverRef, (snapshot) => {
        setReceiverAvatar(snapshot.val().avatar);
      })
      getChatHistory();
    }
  }, [props])



  return (
    <div id="chatting_board" className=' w-full h-full overflow-auto px-[40px] max-w-[800px] flex flex-col-reverse gap-y-5'>
      {
        messageList.reverse().map((item, i) => {
          return JSON.parse(item).isSent ?
            <SentMessage key={i} message={JSON.parse(item).message} avatar={senderAvatar} sentAt={JSON.parse(item).sentAt} isRead={readArray[JSON.parse(item).key]} />
            :
            <ReceivedMessage key={i} message={`${JSON.parse(item).message}`} avatar={receiverAvatar} sentAt={JSON.parse(item).sentAt} />
        })
      }
    </div>
  )
}
