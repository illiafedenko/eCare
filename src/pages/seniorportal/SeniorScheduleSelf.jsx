import React, { useState, useEffect } from 'react'
import DateTimeComponent from '../../components/special/DateTimeComponent'
import dummyData from '../../dummydata'
import Datepicker from 'react-tailwindcss-datepicker';
import CustomDatePicker from '../../components/general/CustomDatePicker';

export default function SeniorScheduleSelf() {

  const handleSidebarShow = () => {
    document.getElementById("left_sidebar").classList.toggle("hidden");
    document.getElementById("blur_board").classList.toggle("hidden");
  }


  const [showMore, setShowMore] = useState(false);
  const [showLength, setShowLength] = useState(Math.min(dummyData.availableDateTimeList.length, 4));

  const handleShowMore = () => {
    if (showMore) {
      setShowLength(Math.min(dummyData.availableDateTimeList.length, 4));
    }
    else {
      setShowLength(dummyData.availableDateTimeList.length)
    }
    setShowMore(!showMore)
  }

  //date picker
  const [value, setValue] = useState(new Date());

  const handleValueChange = newValue => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <div className=' mt-[40px]'>
      <div className=' w-full flex flex-col text-left'>
        <p className=' text-[24px] font-poppins font-bold'>Select Caregiver</p>
        <p className=' text-[20px] mt-[40px] mb-[10px] font-raleway'>Care giver name<span className=' text-green-600'>*</span></p>
        <div className=' w-full sm:w-1/2 sm:pr-[24px]'>
          <div className=' w-full'>
            <input
              className=' w-full text-[18px] font-poppins px-4 h-[60px] border-[1px] border-gray-300 focus:border-blue-500 outline-none rounded-full'
              placeholder="Eg: John Will"
              name="caregivername"
              required
            />
          </div>
        </div>
      </div>

      <div className=' w-full flex flex-col text-left mt-[120px]'>
        <p className=' text-[24px] font-poppins font-bold'>Request a date</p>

        <div className=' grid grid-cols-1 sm:grid-cols-2 gap-x-[48px] gap-y-[24px]  mt-[40px]'>

          <div className=' w-full'>
            <p className=' text-[20px] mb-[10px] font-raleway'>Appointment Date<span className=' text-green-600'>*</span></p>
            <input
              className=' w-full h-[60px] text-[18px] font-poppins px-4 border-[1px] border-gray-300 focus:border-blue-500 outline-none rounded-full'
              placeholder="Type here"
              name="caregivername"
              required
            />
          </div>
          <div className=' w-full'>
            <p className=' text-[20px] mb-[10px] font-raleway'>Hour<span className=' text-green-600'>*</span></p>
            <input
              className=' w-full h-[60px] text-[18px] font-poppins px-4 border-[1px] border-gray-300 focus:border-blue-500 outline-none rounded-full'
              placeholder="Eg: 8:00am-9:00pm"
              name="caregivername"
              required
            />
          </div>
          <CustomDatePicker value={value} onChange={handleValueChange} />
        </div>
      </div>

      <div className=' w-full flex flex-col text-left mt-[48px]'>
        <p className=' text-[24px] font-poppins font-bold'>Available Date and time</p>
        <div className=' grid grid-cols-1 sm:grid-cols-2 gap-x-[48px] gap-y-[6px]  mt-[40px]'>
          {
            dummyData.availableDateTimeList.slice(0, showLength).map((item, i) => {
              return (
                <DateTimeComponent key={i} id={i} date={item.date} time={item.time} selected={false} />
              )
            })
          }
        </div>
      </div>
      <div className=' w-full mt-[32px] flex flex-col items-center ' onClick={handleShowMore}>
        <p className='text-[24px] text-green-600 font-poppins hover:cursor-pointer text-center'>{!showMore ? "Load More" : "Show Less"}</p>
      </div>
      <div className=' w-full mt-[48px] flex flex-col items-center '>
        <div className=' w-1/2 h-[60px]'>
          <button className=' w-full h-full rounded-full bg-green-700 font-raleway text-white text-[24px] leading-none text-center'>Submit</button>
        </div>
      </div>
    </div>
  )
}
