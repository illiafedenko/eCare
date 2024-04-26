import React, { useRef } from 'react'
import ChattingBoard from './ChattingBoard'
import DynamicTextArea from './DynamicTextArea'
import useChatStore from '../../utils/chatStore';

export default function ChatBody(props) {

  const readySend = useChatStore((state) => state.readySend);
  const setReadySend = useChatStore((state) => state.setReadySend);
  const setSendingMessage = useChatStore((state) => state.setSendingMessage);

  const handleSendMessage = (msg) => {
    // console.log(msg);
    // setSendingMessage(msg);
    setReadySend(true);
  }

  return (
    <div className=' w-full h-full flex flex-col items-center justify-end bg-gray-100 gap-y-3'>
      <div className=' w-full pt-3 dynamic-scroll flex flex-col items-center overflow-y-auto'>
        <ChattingBoard readySend={readySend} senderID={props.senderID} receiverID={props.receiverID} />
      </div>
      <div className=' w-full max-w-[800px] px-[40px]'>
        <DynamicTextArea onSend={handleSendMessage} senderID={props.senderID} receiverID={props.receiverID} />
      </div>
    </div>
  )
}
