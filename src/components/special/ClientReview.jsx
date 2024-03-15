import React from 'react';
import lquote from '../../assets/images/lquote.png';
import rquote from '../../assets/images/rquote.png';

export default function ClientReview(props) {
  return (
    <div className=' w-full flex flex-col gap-[40px] items-center px-1 '>
      <div className=' w-full flex flex-row gap-2 justify-between '>
        <div className=' w-[28px] h-[20px]'>
          <img src={lquote} className=' w-[28px] h-[20px]'></img>
        </div>
        <div className=' items-center w-4/5'>
          <p className=' h-[96px] w-full text-[16px] font-poppins text-center line-clamp-4'>
            {props.review}
          </p>
        </div>
        <div className=' w-[28px] flex flex-row items-end'>
          <img src={rquote}></img>
        </div>
      </div>
      <div className=' h-[60px] flex flex-row gap-[16px] items-center'>
        <div className=' w-[60px] h-[60px] rounded-full'>
          <img src={props.avatar} className=' w-full h-full rounded-full object-cover'></img>
        </div>
        <div className=' flex flex-col gap-[4px]'>
          <p className=' font-poppins font-bold text-[16px]'>{props.name}</p>
          <p className=' font-poppins text-[16px]'>{props.address}</p>
        </div>
      </div>
    </div>
  )
}
