import React, { useState, useEffect } from 'react'
import useAuthStore from '../../utils/authStore';

export default function CGApplyMore(props) {

  const setCaregiverMoreInfo = useAuthStore((state) => state.setCaregiverMoreInfo);

  const [input, setInput] = useState({
    coverletter: "",
  });
  useEffect(() => {
  }, [input])

  const [valid, setValid] = useState({
    coverletter: true,
  })

  const handleInputChanged = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
    validate(e.target.name, e.target.value);
  }

  const validateAll = () => {
    if (validate("coverletter")) {
      return true;
    }
    else {
      return false;
    }
  }

  const validate = (name, value = input[name]) => {
    switch (name) {
      case "coverletter":
        var isValid = value == "" ? false : true;
        setValid((prev) => ({ ...prev, [name]: isValid }));
        return isValid;
        break;
      default:
        break;
    }
  }

  const handleNextButtonClick = () => {
    if (validateAll()) {
      setCaregiverMoreInfo(input);
      props.handleNext();
    }
    // props.handleNext();
  }
  const handlePrevButtonClick = () => {
    props.handlePrev();
  }


  return (
    <div className=' w-full flex flex-col gap-y-4'>
      <p className=' font-poppins text-[24px] '>More About You</p>

      <div className=' w-full'>
        <p className='mb-2 text-left text-gray-500 font-poppins' >Please tell us why you would like to work for Ecare! <span className=' text-red-600'>*</span></p>
        <textarea onChange={(e) => handleInputChanged(e)} name='coverletter' className={`text-[12px] w-full h-full text-gray-700 font-poppins px-3 py-3 outline-none border-[2px] rounded-[4px] ${valid.coverletter ? ' border-gray-300' : 'border-red-500'}`} />
      </div>
      <div className=' my-[40px] w-full flex flex-row justify-between'>
        <div onClick={() => handlePrevButtonClick()} className=' w-[100px] h-[30px] text-white bg-green-500 rounded-[8px] cursor-pointer flex flex-row items-center justify-center '><p className=' text-[16px] font-poppins font-bold select-none'>Previous</p></div>
        <div onClick={() => handleNextButtonClick()} className=' w-[100px] h-[30px] text-white bg-green-500 rounded-[8px] cursor-pointer flex flex-row items-center justify-center '><p className=' text-[16px] font-poppins font-bold select-none'>Next</p></div>
      </div>
    </div>
  )
}
