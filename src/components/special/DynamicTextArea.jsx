import React, { useState, useEffect } from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import * as Icon from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, onValue, set, update, push, equalTo } from 'firebase/database';

export default function DynamicTextArea(props) {

  const [senderID, setSenderID] = useState();
  const [receiverID, setReceiverID] = useState();
  const [message, setMessage] = useState('');

  const db = getDatabase();

  useEffect(() => {
    setSenderID(props.senderID);
    setReceiverID(props.receiverID);
  }, [props])

  const getCaret = (el) => {
    if (el.selectionStart) {
      return el.selectionStart;
    } else if (document.selection) {
      el.focus();
      var r = document.selection.createRange();
      if (r == null) {
        return 0;
      }
      var re = el.createTextRange(), rc = re.duplicate();
      re.moveToBookmark(r.getBookmark());
      rc.setEndPoint('EndToStart', re);
      return rc.text.length;
    }
    return 0;
  }

  const handleKeyUp = (e) => {
    const keycode = e.which || e.keyCode;
    if (keycode == 13) {
      var content = e.target.value;
      var caret = getCaret(e.target);
      if (e.shiftKey) {
        setMessage(content.substring(0, caret - 1) + "\n" + content.substring(caret, content.length));
        e.stopPropagation();
      } else {
        // setMessage(content.substring(0, caret - 1) + content.substring(caret, content.length));
        const newMessageRef = push(ref(db, 'messageLists'));
        set(newMessageRef, {
          senderID: senderID,
          receiverID: receiverID,
          message: message,
          isRead: false,
          sentAt: Date.now(),
        });
        setMessage('');
      }
    }
  }

  const handleKeyDown = (e) => {
    // const keycode = e.which || e.keyCode;
    // if (keycode == 13) {
    //   var content = e.target.value;
    //   var caret = getCaret(e.target);
    //   if (e.shiftKey) {
    //     e.stopPropagation();
    //   } else {
    //     // setMessage(content.substring(0, caret - 1) + content.substring(caret, content.length));
    //     console.log(message);
    //     setMessage('');
    //   }
    // }
  }

  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  return (
    <div onKeyUp={(e) => handleKeyUp(e)} onKeyDown={(e) => handleKeyDown(e)} className=' w-full flex flex-col mb-4 px-5 pt-5 pb-3 bg-white justify-start rounded-[20px] gap-y-2'>
      <TextareaAutosize className=' resize-none outline-none text-[14px]' maxRows={3} minRows={3} onChange={(e) => handleChange(e)} value={message} />
      <div className=' px-6'>
        <div className='border-b-[2px] border-b-gray-200'></div>
      </div>
      <div className=' w-full px-8 flex flex-row justify-between item-center'>
        <div className=' flex flex-row gap-3 py-1'>
          <Icon.CameraVideo className='  text-gray-500 cursor-pointer hover:text-green-700' />
          <Icon.Mic className=' text-gray-500 cursor-pointer hover:text-green-700' />
          <div className='border-r-[1px] border-b-gray-200'></div>
          <Icon.EmojiSmile className=' text-gray-500 cursor-pointer hover:text-green-700' />
          <Icon.Paperclip className=' text-gray-500 cursor-pointer hover:text-green-700' />
          <Icon.Clipboard className=' text-gray-500 cursor-pointer hover:text-green-700' />
          <div className='border-r-[1px] border-b-gray-200'></div>
          <FontAwesomeIcon icon={faEllipsisV} className=' text-gray-500 cursor-pointer hover:text-green-700' />
        </div>
        <FontAwesomeIcon icon={faPaperPlane} className=' text-green-600 cursor-pointer hover:text-green-700' />
      </div>
    </div>
  )
}
