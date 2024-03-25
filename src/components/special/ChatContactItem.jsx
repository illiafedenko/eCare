import React from 'react'
import readCheckedIcon from '../../assets/images/doublecheck.png';

export default function ChatContactItem(props) {
  return (
    <>
      {props.selected ?
        <>
          <div className=' relative w-full h-[108px] px-6 py-6 flex flex-row gap-2 cursor-pointer bg-blue-50'>
            <div className=' h-full aspect-square flex-none'>
              <img src={props.avatar} className=' w-full h-full rounded-full object-cover' />
            </div>
            <div className=' flex flex-grow-0 flex-col text-left justify-between'>
              <p className=' text-[16px] line-clamp-1 font-poppins font-bold'>Cameron Williamson</p>
              <p className=' text-gray-800 text-[14px] h-[28px] line-clamp-2 leading-none'>Animations can enhance user engagement, but use them judiciously. Subtle animations for transitions or highlighting elements can make the site feel dynamic without overwhelming users.</p>
            </div>
            <div className=' flex flex-none flex-col justify-between items-end'>
              <p className=' text-gray-500 font-poppins text-[12px] font-bold'>20s</p>
              {
                props.unread == 0 ?
                  <img src={readCheckedIcon} /> :
                  <p className=' bg-red-600 text-white text-[12px] py-1 rounded-full aspect-square font-poppins'>{props.unread}</p>
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
          <div className=' w-full h-[108px] px-6 py-6 flex flex-row gap-2 cursor-pointer hover:bg-blue-50'>
            <div className=' h-full aspect-square flex-none'>
              <img src={props.avatar} className=' w-full h-full rounded-full object-cover' />
            </div>
            <div className=' flex flex-grow-0 flex-col text-left justify-between'>
              <p className=' text-[16px] line-clamp-1 font-poppins font-bold'>Cameron Williamson</p>
              <p className=' text-gray-800 text-[14px] h-[28px] line-clamp-2 leading-none'>Animations can enhance user engagement, but use them judiciously. Subtle animations for transitions or highlighting elements can make the site feel dynamic without overwhelming users.</p>
            </div>
            <div className=' flex flex-none flex-col justify-between items-end'>
              <p className=' text-gray-500 font-poppins text-[12px] font-bold'>20s</p>
              {
                props.unread == 0 ?
                  <img src={readCheckedIcon} /> :
                  <p className=' bg-red-600 text-white text-[12px] py-1 rounded-full aspect-square font-poppins'>{props.unread}</p>
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
