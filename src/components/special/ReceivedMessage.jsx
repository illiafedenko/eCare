import React from 'react'
import readCheckedIcon from '../../assets/images/doublecheck.png';
import * as Icon from 'react-bootstrap-icons';

export default function ReceivedMessage(props) {

  const getTime = (millisecondsSinceEpoch) => {
    const date = new Date(millisecondsSinceEpoch);
    const formattedDate = `${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}-${date.getFullYear()}`
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const amOrPm = date.getHours() < 12 ? 'AM' : 'PM';
    const formattedTime = `${hours}:${minutes} ${amOrPm}`;

    const formattedDateTime = `${formattedDate} ${formattedTime}`;
    return formattedDateTime
  }

  return (
    <div className=' w-full flex flex-row justify-start gap-x-3'>
      <div className=' w-9 py-5 flex flex-col justify-end'>
        <img className=' w-full aspect-square rounded-full object-cover ' src={`${props.avatar}`} />
      </div>
      <div className=' w-[240px] sm:w-[350px] flex flex-col gap-y-2 '>
        <p className=' px-5 py-5 text-left text-[14px] bg-white rounded-[20px] rounded-bl-none whitespace-break-spaces '>
          {
            props.message.replace("&#10;", "\n")
          }
        </p>
        <div className=' w-full h-5 flex flex-row gap-x-1 justify-start items-center'>
          <p className=' text-[12px] text-gray-500 font-poppins'>{getTime(props.sentAt)}</p>
        </div>
      </div>
    </div>
  )
}
