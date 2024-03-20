import React, { useState, useEffect } from 'react';
import LargeInput from '../general/LargeInput';
import { Dropdown } from 'primereact/dropdown';
import dummyData from '../../dummydata';
import LargeSelect from '../general/LargeSelect';
import DatePicker, { DateObject } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import { useStateManager } from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomRadioButton from '../general/CustomRadioButton';
import { faMailBulk, faMailForward, faMailReply, faMailReplyAll, faPhone, faUserDoctor, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import useMainStore from '../../utils/mainStore';

export default function BookComponent() {

  const cities = [];
  const dates = [];
  const availabilities = [];
  const budgets = [];

  const isPhone = useMainStore((state) => state.preferPhone);
  const isEmail = useMainStore((state) => state.preferEmail);
  const setContactMethod = useMainStore((state) => state.setContactMethod);

  const handleChange = (e) => {

  }

  useEffect(() => {
    dummyData.cityList.map((city, i) => {
      cities.push({
        value: city, label: city
      })
    })
    dummyData.dateList.map((date, i) => {
      dates.push({
        value: date, label: date
      })
    })
    dummyData.availabilities.map((ava, i) => {
      availabilities.push({
        value: ava, label: ava
      })
    })
    dummyData.budgetList.map((budget, i) => {
      budgets.push({
        value: budget, label: budget
      })
    })
    console.log(cities);
    console.log(availabilities);
  }, [])

  const setMethod = (method) => {
    console.log(method);
    if(method == "phone") setContactMethod(true);
    if(method == "email") setContactMethod(false);
  }



  return (
    <>
      <div className=' w-full grid grid-cols-1 lg:grid-cols-2 gap-x-[48px] gap-y-[32px]'>
        <div className=' w-full grid grid-cols-2 gap-x-[48px] gap-y-[32px]'>
          <LargeInput label="First Name" name="firstname" placeholder="Enter First Name" onChang={handleChange} required />
          <LargeInput label="Last Name" name="lastname" placeholder="Enter Last Name" onChang={handleChange} required />
        </div>
        <div className=' w-full grid grid-cols-2 gap-x-[48px] gap-y-[32px]'>
          <LargeInput label="Email" name="email" placeholder="Enter your Email" onChang={handleChange} required />
          <LargeInput label="Phone" name="phonenumber" placeholder="Enter Phone Number" onChang={handleChange} required />
        </div>
        <div className=' w-full grid grid-cols-2 gap-x-[48px] gap-y-[32px]'>
          <LargeSelect placeholder="Select City" label={"Select City"} options={cities} />
          <LargeSelect placeholder="Select Time" label={"Select Time"} options={dates} />
        </div>
        <div className=' w-full grid grid-cols-2 gap-x-[48px] gap-y-[32px]'>
          <LargeSelect placeholder="Select availability" label={"Availability"} options={availabilities} />
          <LargeSelect placeholder="Select budget" label={"Budget"} options={budgets} />
        </div>
        <div className=' w-full grid grid-cols-1 gap-x-[48px] gap-y-[32px]'>
          <LargeSelect placeholder="Select budget" label={"Budget"} options={budgets} />
        </div>
        <div className=' w-full flex flex-col items-start gap-[16px]'>
          <p className=' w-full text-[20px] text-left font-poppins font-bold'>Prefered Contact Method</p>
          <div className=' w-full  grid grid-cols-2 gap-x-[24px] gap-y-[32px] '>
            {/* phone number */}
            <div className=' w-full h-[60px] relative'>
              <input
                className=' w-full text-[18px] px-8 h-full border-[1px] border-gray-300 focus:border-blue-500 outline-none rounded-[4px]'
                placeholder="Enter Your Phone"
                name="phonenumber"
                disabled = {!isPhone}
              // onChange={props.onChange}
              // required={props.required}
              />
              <div className=' h-full absolute px-2 left-0 top-0 flex flex-row items-center'>
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className=' h-full absolute px-2 right-0 top-0 flex flex-row items-center'>
                <CustomRadioButton label="phone" onClick={setMethod} value={isPhone} />
              </div>
            </div>
            {/* email */}
            <div className=' w-full h-[60px] relative'>
              <input
                className=' w-full text-[18px] px-8 h-full border-[1px] border-gray-300 focus:border-blue-500 outline-none rounded-[4px]'
                placeholder="Enter Your Email"
                name="email"
                disabled = {!isEmail}
              // onChange={props.onChange}
              // required={props.required}
              />
              <div className=' h-full absolute px-2 left-0 top-0 flex flex-row items-center'>
                <FontAwesomeIcon icon={faMailBulk} />
              </div>
              <div className=' h-full absolute px-2 right-0 top-0 flex flex-row items-center'>
                <CustomRadioButton label="email" onClick={setMethod} value={isEmail} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' w-full flex mt-[48px] flex-col items-start gap-[16px]'>
        <p className=' w-full text-[20px] text-left font-poppins font-bold'>Message</p>
        <div className=' w-full aspect-wide min-h-[150px] max-h-[250px]'>
          <textarea className=' w-full h-full text-gray-700 font-poppins px-3 py-3 outline-none border-[1px] border-gray-300 rounded-[4px]' />
        </div>
      </div>
      <div className=' w-full mt-[32px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-x-2 gap-y-4'>
        <div className=' flex flex-row items-center justify-start gap-x-2'>
          <input id="default-checkbox" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded " />
          <label className="ms-2 text-sm text-gray-500 font-poppins font-medium dark:text-gray-300">I agree with <a href='#' className='text-gray-500 underline'>Terms of Use</a> and <a href='#' className='text-gray-500 underline'>Privacy Policy</a></label>
        </div>
        <div>
          <button className="text-white w-full h-full font-poppins bg-green-700  border-none outline-none focus:border-none focus:outline-none rounded-2" >Book</button>
        </div>
      </div>
    </>
  )
}
