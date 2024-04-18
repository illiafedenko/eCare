import React, { useState, useEffect } from 'react';
import NormalInput from '../general/NormalInput';
import useAuthStore from '../../utils/authStore';

export default function CGApplyEducation(props) {

  const setCaregiverEducationInfo = useAuthStore((state) => state.setCaregiverEducationInfo);

  const [input, setInput] = useState({
    school: "",
    degree: "",
    graduationYear: "",
  });
  useEffect(() => {
  }, [input])

  const [valid, setValid] = useState({
    school: true,
    degree: true,
    graduationYear: true,
  })


  const handleInputChanged = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
    validate(e.target.name, e.target.value);
  }

  const validateAll = () => {
    if (validate("school") & validate("degree") & validate("graduationYear")) {
      return true;
    }
    else {
      return false;
    }
  }

  const validate = (name, value = input[name]) => {
    const yearRegex = /^(19[5-9][0-9]|20[0-1][0-9]|202[0-4])$/;
    switch (name) {
      case "school":
        var isValid = value == "" ? false : true;
        setValid((prev) => ({ ...prev, [name]: isValid }));
        return isValid;
        break;

      case "degree":
        var isValid = value == "" ? false : true;
        setValid((prev) => ({ ...prev, [name]: isValid }));
        return isValid;
        break;

      case "graduationYear":
        var isValid = !value.match(yearRegex) ? false : true;
        setValid((prev) => ({ ...prev, [name]: isValid }));
        return isValid;
        break;

      default:
        break;
    }
  }

  const handleNextButtonClick = () => {
    if (validateAll()) {
      setCaregiverEducationInfo(input);
      props.handleNext();
    }
    // props.handleNext();
  }
  const handlePrevButtonClick = () => {
    props.handlePrev();
  }

  return (
    <div className=' w-full flex flex-col gap-y-4'>
      <p className=' font-poppins text-[24px] '>Highest Level of Education</p>

      <div className=' w-full'>
        <p className='mb-2 text-left text-gray-500 font-poppins' >School <span className=' text-red-600'>*</span></p>
        <NormalInput onChange={(e) => handleInputChanged(e)} type="text" name="school" placeholder="School" invalid={valid.school ? false : true} required />
      </div>
      <div className=' w-full'>
        <p className='mb-2 text-left text-gray-500 font-poppins' >Degree <span className=' text-red-600'>*</span></p>
        <NormalInput onChange={(e) => handleInputChanged(e)} type="text" name="degree" placeholder="Degree" invalid={valid.degree ? false : true} required />
      </div>

      <div className=' w-full'>
        <p className='mb-2 text-left text-gray-500 font-poppins' >Year <span className=' text-red-600'>*</span></p>
        <NormalInput onChange={(e) => handleInputChanged(e)} type="text" name="graduationYear" placeholder="1990" invalid={valid.graduationYear ? false : true} required />
      </div>

      <div className=' my-[40px] w-full flex flex-row justify-between'>
        <div onClick={() => handlePrevButtonClick()} className=' w-[100px] h-[30px] text-white bg-green-500 rounded-[8px] cursor-pointer flex flex-row items-center justify-center '><p className=' text-[16px] font-poppins font-bold select-none'>Previous</p></div>
        <div onClick={() => handleNextButtonClick()} className=' w-[100px] h-[30px] text-white bg-green-500 rounded-[8px] cursor-pointer flex flex-row items-center justify-center '><p className=' text-[16px] font-poppins font-bold select-none'>Next</p></div>
      </div>

    </div>
  )
}
