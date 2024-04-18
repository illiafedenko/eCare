import React, { useState, useEffect } from 'react';
import NormalInput from '../general/NormalInput';
import dummyData from '../../dummydata';
import useAuthStore from '../../utils/authStore';


export default function CGApplyAddress(props) {

  const setCaregiverAddressInfo = useAuthStore((state) => state.setCaregiverAddressInfo);

  const [input, setInput] = useState({
    street: "",
    city: "",
    state: "AL",
    zipcode: "",
  });
  useEffect(() => {
  }, [input])

  const [valid, setValid] = useState({
    street: true,
    city: true,
    zipcode: true,
  })

  const handleNextButtonClick = () => {
    if (validateAll()) {
      setCaregiverAddressInfo(input);
      props.handleNext();
    }
    // props.handleNext();
  }
  const handlePrevButtonClick = () => {
    props.handlePrev();
  }

  const handleInputChanged = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
    validate(e.target.name, e.target.value);
  }

  const validateAll = () => {
    if (validate("street") & validate("city") & validate("zipcode")) {
      return true;
    }
    else {
      return false;
    }
  }

  const validate = (name, value = input[name]) => {
    const zipcodeRegex = /^\d{5}$/;
    switch (name) {
      case "street":
        var isValid = value == "" ? false : true;
        setValid((prev) => ({ ...prev, [name]: isValid }));
        return isValid;
        break;

      case "city":
        var isValid = value == "" ? false : true;
        setValid((prev) => ({ ...prev, [name]: isValid }));
        return isValid;
        break;

      case "zipcode":
        var isValid = !value.match(zipcodeRegex) ? false : true;
        setValid((prev) => ({ ...prev, [name]: isValid }));
        return isValid;
        break;

      default:
        break;
    }
  }



  return (
    <div className=' w-full flex flex-col gap-y-4'>
      <p className=' font-poppins text-[24px] '>Address</p>

      <div className=' w-full'>
        <p className='mb-2 text-left text-gray-500 font-poppins' >Street Address <span className=' text-red-600'>*</span></p>
        <NormalInput onChange={(e) => handleInputChanged(e)} type="text" name="street" placeholder="Street Address" invalid={valid.street ? false : true} required />
      </div>
      <div className=' w-full'>
        <p className='mb-2 text-left text-gray-500 font-poppins' >City <span className=' text-red-600'>*</span></p>
        <NormalInput onChange={(e) => handleInputChanged(e)} type="tel" name="city" placeholder="City" invalid={valid.city ? false : true} required />
      </div>
      <div className=' w-full'>
        <p className='mb-2 text-left text-gray-500 font-poppins' >State <span className=' text-red-600'>*</span></p>
        <select onChange={(e) => handleInputChanged(e)} name="state" className="appearance-none rounded-[4px] w-full py-3 px-3 focus:border-blue-500 border-[1px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline ">
          {
            dummyData.USStateList.map((item, i) => {
              return <option value={item.abbr}>{item.stateName}</option>
            })
          }
        </select>
      </div>
      <div className=' w-full'>
        <p className='mb-2 text-left text-gray-500 font-poppins' >Zip Code<span className=' text-red-600'>*</span></p>
        <NormalInput onChange={(e) => handleInputChanged(e)} type="text" name="zipcode" placeholder="zip code" invalid={valid.zipcode ? false : true} required />
      </div>

      <div className=' my-[40px] w-full flex flex-row justify-between'>
        <div onClick={() => handlePrevButtonClick()} className=' w-[100px] h-[30px] text-white bg-green-500 rounded-[8px] cursor-pointer flex flex-row items-center justify-center '><p className=' text-[16px] font-poppins font-bold select-none'>Previous</p></div>
        <div onClick={() => handleNextButtonClick()} className=' w-[100px] h-[30px] text-white bg-green-500 rounded-[8px] cursor-pointer flex flex-row items-center justify-center '><p className=' text-[16px] font-poppins font-bold select-none'>Next</p></div>
      </div>
    </div>
  )
}
