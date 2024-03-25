import { faDownload, faFileText, faHandPaper, faNewspaper, faPaperPlane, faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import fileTextIcon from '../../assets/images/filetext.png';

export default function ChatHistoryFileItem(props) {
  return (
    <div className=' w-full py-2 flex flex-row justify-between items-center'>
      <div className=' flex flex-row justify-start items-center gap-x-1'>
        <img className=' w-6 h-6 object-cover' src={fileTextIcon} />
        <p className=' text-[16px] text-gray-500'>{props.filename}</p>
      </div>
      <FontAwesomeIcon className=' text-gray-500 hover:cursor-pointer' icon={faDownload} />
    </div>
  )
}
