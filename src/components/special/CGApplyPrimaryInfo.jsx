import React, { useState, useEffect } from 'react'
import NormalInput from '../general/NormalInput'
import useAuthStore from '../../utils/authStore';

export default function CGApplyPrimaryInfo(props) {

  const setCaregiverPrimaryInfo = useAuthStore((state) => state.setCaregiverPrimaryInfo);

  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    birthday: "",
    gender: "man",
    password: "",
  });
  useEffect(() => {
  }, [input])

  const [valid, setValid] = useState({
    firstname: true,
    lastname: true,
    email: true,
    phonenumber: true,
    birthday: true,
    password: true,
  })

  const handleNextButtonClick = () => {
    if (validateAll()) {
      setCaregiverPrimaryInfo(input);
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
    if (validate("firstname") & validate("lastname") & validate("email") & validate("password") & validate("phonenumber") & validate("birthday")) {
      return true;
    }
    else {
      return false;
    }
  }

  const validate = (name, value = input[name]) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    const dateRegex = /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-(19|20)\d{2}$/;
    switch (name) {
      case "firstname":
        var isValid = value == "" ? false : true;
        setValid((prev) => ({ ...prev, [name]: isValid }));
        return isValid;
        break;

      case "lastname":
        var isValid = value == "" ? false : true;
        setValid((prev) => ({ ...prev, [name]: isValid }));
        return isValid;
        break;

      case "email":
        var isValid = !value.match(emailRegex) ? false : true;
        setValid((prev) => ({ ...prev, [name]: isValid }));
        return isValid;
        break;

      case "password":
        var isValid = value.length < 8 ? false : true;
        setValid((prev) => ({ ...prev, [name]: isValid }));
        return isValid;
        break;

      case "phonenumber":
        var isValid = !value.match(phoneRegex) ? false : true;
        setValid((prev) => ({ ...prev, [name]: isValid }));
        return isValid;
        break;

      case "birthday":
        var isValid = !value.match(dateRegex) ? false : true;
        setValid((prev) => ({ ...prev, [name]: isValid }));
        return isValid;
        break;


      default:
        break;
    }
  }



  return (
    <div className=' w-full flex flex-col gap-y-4'>
      <p className=' font-poppins text-[24px] '>Personal Information</p>
      <div className=' flex flex-col gap-5 sm:gap-3 sm:flex-row'>
        <div className=' w-full sm:w-1/2 '>
          <p className='mb-2 text-left text-gray-500 font-poppins' >First Name <span className=' text-red-600'>*</span></p>
          <NormalInput onChange={(e) => handleInputChanged(e)} type="text" name="firstname" placeholder="First Name" invalid={valid.firstname ? false : true} required />
        </div>
        <div className=' w-full sm:w-1/2 '>
          <p className='mb-2 text-left text-gray-500 font-poppins' >Last Name <span className=' text-red-600'>*</span></p>
          <NormalInput onChange={(e) => handleInputChanged(e)} type="text" name="lastname" placeholder="Last Name" invalid={valid.lastname ? false : true} required />
        </div>
      </div>
      <div className=' w-full'>
        <p className='mb-2 text-left text-gray-500 font-poppins' >Email <span className=' text-red-600'>*</span></p>
        <NormalInput onChange={(e) => handleInputChanged(e)} type="text" name="email" placeholder="Email" required invalid={valid.email ? false : true} />
      </div>
      <div className=' w-full'>
        <p className='mb-2 text-left text-gray-500 font-poppins' >Password <span className=' text-red-600'>*</span></p>
        <NormalInput onChange={(e) => handleInputChanged(e)} type="password" name="password" placeholder="More than 8 characters" required invalid={valid.password ? false : true} />
      </div>
      <div className=' w-full'>
        <p className='mb-2 text-left text-gray-500 font-poppins' >Phone Number <span className=' text-red-600'>*</span></p>
        <NormalInput onChange={(e) => handleInputChanged(e)} type="tel" name="phonenumber" placeholder="312-620-9297" invalid={valid.phonenumber ? false : true} required />
      </div>
      <div className=' w-full'>
        <p className='mb-2 text-left text-gray-500 font-poppins' >Date of Birth <span className=' text-red-600'>*</span></p>
        <NormalInput onChange={(e) => handleInputChanged(e)} type="text" name="birthday" placeholder="MM-DD-YYYY" invalid={valid.birthday ? false : true} required />
      </div>
      <div className=' w-full'>
        <p className='mb-2 text-left text-gray-500 font-poppins' >Gender <span className=' text-red-600'>*</span></p>
        <div className="flex gap-10">
          <div className="inline-flex items-center">
            <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="html">
              <input name="gender" type="radio"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-green-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-400 checked:before:bg-gray-900 hover:before:opacity-10"
                id="html" onClick={(e) => setInput((prev) => ({ ...prev, gender: "man" }))} checked={input.gender == "man" ? true : false} />
              <span
                className="absolute text-green-400 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </span>
            </label>
            <label className="mt-px font-light text-gray-700 font-poppins cursor-pointer select-none" htmlFor="html">
              Man
            </label>
          </div>
          <div className="inline-flex items-center">
            <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="react">
              <input name="gender" type="radio"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-green-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-400 checked:before:bg-gray-900 hover:before:opacity-10"
                id="react" onClick={(e) => setInput((prev) => ({ ...prev, gender: "woman" }))} checked={input.gender == "woman" ? true : false} />
              <span
                className="absolute text-green-400 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </span>
            </label>
            <label className="mt-px font-light text-gray-700 font-poppins cursor-pointer select-none" htmlFor="react">
              Woman
            </label>
          </div>
        </div>
      </div>
      <div className=' my-[40px] w-full flex flex-row justify-between'>
        <div className=' w-[100px] h-[30px] text-white bg-gray-400 rounded-[8px] cursor-pointer flex flex-row items-center justify-center '><p className=' text-[16px] font-poppins font-bold select-none'>Previous</p></div>
        <div onClick={() => handleNextButtonClick()} className=' w-[100px] h-[30px] text-white bg-green-500 rounded-[8px] cursor-pointer flex flex-row items-center justify-center '><p className=' text-[16px] font-poppins font-bold select-none'>Next</p></div>
      </div>
    </div>
  )
}
