import React from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import * as Icon from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function DynamicTextArea() {

  const handleChange = (e) => {
    // console.log(e.target.value);
  }

  return (
    <div className=' w-full flex flex-col mb-4 px-5 pt-5 pb-3 bg-white justify-start rounded-[20px] gap-y-2'>
      <TextareaAutosize className=' resize-none outline-none text-[14px]' maxRows={3} minRows={3} onChange={(e) => handleChange(e)} />
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
