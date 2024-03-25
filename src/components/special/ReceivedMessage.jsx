import React from 'react'
import readCheckedIcon from '../../assets/images/doublecheck.png';
import * as Icon from 'react-bootstrap-icons';

export default function ReceivedMessage(props) {
  return (
    <div className=' w-full flex flex-row justify-start gap-x-3'>
      <div className=' w-9 py-5 flex flex-col justify-end'>
        <img className=' w-full aspect-square rounded-full object-cover ' src={props.avatar} />
      </div>
      <div className=' w-[360px] flex flex-col gap-y-2 '>
        <p className=' px-5 py-5 text-left text-[14px] bg-white rounded-[20px] rounded-bl-none '>
          That makes sense. How about mobile responsiveness? It's a must nowadays, right?
        </p>
        <div className=' w-full h-5 flex flex-row gap-x-1 justify-start items-center'>
          <p className=' text-[12px] text-gray-500 font-poppins'>10:52 AM</p>
        </div>
      </div>
    </div>
  )
}
