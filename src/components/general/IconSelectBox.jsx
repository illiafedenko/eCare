import React from 'react'
import dummyData from '../../dummydata'
import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faLocationPin, faLocationPinLock } from '@fortawesome/free-solid-svg-icons'

export default function IconSelectBox() {

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <Select className=' focus:outline-none focus:border-none' options={options} />
    // <div className=' h-[60px] w-[200px] px-2 bg-gray-100 border-[1px] border-gray-200 rounded-[10px] flex flex-row items-center'>
    //   <FontAwesomeIcon className=' w-6 h-6' icon={faLocationPin} />
    //   <div className=' flex-grow'>
    //     <select
    //       type="text"
    //       name="carType"
    //       id="carType"
    //       v-model="carType"
    //       defaultValue="all"
    //       placeholder="Select City"
    //       className=" w-full h-[58px] px-2 bg-gray-100 outline-none border-none"
    //     >
    //       <option className="text-gray-400" value="all" disabled hidden >City</option>
    //       {
    //         dummyData.cityList.map((item, i) => (
    //           <option className=' bg-green-200' key={i} value={item}>{item}</option>
    //         ))
    //       }
    //     </select>
    //   </div>
    // </div>

  )
}
