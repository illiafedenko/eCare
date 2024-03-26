import React from 'react'
import readCheckedIcon from '../../assets/images/doublecheck.png';
import * as Icon from 'react-bootstrap-icons';

export default function SentMessage(props) {
  return (
    <div className=' w-full flex flex-row justify-end gap-x-3'>
      <div className=' w-[240px] sm:w-[350px] flex flex-col gap-y-2 '>
        <p className=' px-5 py-5 text-left text-[14px] bg-green-600 text-white rounded-[20px] rounded-br-none '>
          Absolutely. More users access websites from mobile devices. Design for mobile-first, ensuring that the site looks and functions well on smaller screens.
        </p>
        <div className=' w-full h-5 flex flex-row gap-x-1 justify-end items-center'>
          <img className=' w-4 h-2' src={readCheckedIcon} />
          <p className=' text-[12px] text-gray-500 font-poppins'>10:52 AM</p>
        </div>
      </div>
      <div className=' w-9 py-5 flex flex-col justify-end'>
        <img className=' w-full aspect-square rounded-full object-cover ' src={props.avatar} />
      </div>
    </div>
  )
}