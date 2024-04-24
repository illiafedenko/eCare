import React, { useState, useEffect } from 'react'
import GradientButton from '../../components/general/GradientButton'
import NormalInput from '../../components/general/NormalInput'
import dummyData from '../../dummydata';
import { getDatabase, ref, set, update } from 'firebase/database';
import { useNavigate } from 'react-router'
import useAuthStore from '../../utils/authStore';

export default function MoreInfo() {

  const uid = useAuthStore(localStorage.getItem("userID"));
  const navigate = useNavigate();

  const [input, setInput] = useState({
    phonenumber: "",
    birthday: "",
    gender: "man",
    street: "",
    city: "",
    state: "AL",
    zipcode: "",
  });
  useEffect(() => {
  }, [input])

  const [valid, setValid] = useState({
    phonenumber: true,
    birthday: true,
    street: true,
    city: true,
    zipcode: true,
  })

  const handleInputChanged = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
    validate(e.target.name, e.target.value);
  }

  const handleContinue = () => {
    if (validateAll()) {
      console.log(uid);
      // const db = getDatabase();
      const dbref = ref(getDatabase());
      const updates = {};
      updates[`seniors/${uid}/phonenumber`] = input.phonenumber;
      updates[`seniors/${uid}/birthday`] = input.birthday;
      updates[`seniors/${uid}/gender`] = input.gender;
      updates[`seniors/${uid}/street`] = input.street;
      updates[`seniors/${uid}/city`] = input.city;
      updates[`seniors/${uid}/state`] = input.state;
      updates[`seniors/${uid}/zipcode`] = input.zipcode;
      update(dbref, updates);
      const path = "/";
      navigate(path);
    }
    // props.handleNext();
  }

  const validateAll = () => {
    if (validate("phonenumber") & validate("birthday") & validate("street") & validate("city") & validate("zipcode")) {
      return true;
    }
    else {
      return false;
    }
  }

  const validate = (name, value = input[name]) => {
    const zipcodeRegex = /^\d{5}$/;
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    const dateRegex = /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-(19|20)\d{2}$/;
    switch (name) {

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
    <div className=' relative w-screen flex items-center justify-center'>
      <div className=' relative  w-screen flex items-center justify-center'>
        <div className='  w-3/4 md:w-3/5 xl:w-1/2 2xl:w-2/5 relative flex flex-col justify-around px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] xl:px-[100px] border-[2px] min-w-[300px] border-green-600 rounded-[36px] pt-[40px] pb-[40px] my-20'>
          <div className='font-poppins py-0 px-5 z-[20]'>
            <p className=' text-[32px] '>Additional Infomation</p>
          </div>
          <div className='z-20 flex flex-col gap-y-3 my-5'>
            <div className=' flex flex-col gap-5 sm:gap-3 sm:flex-row'>
              <div className=' w-full sm:w-1/2 '>
                <p className='mb-2 text-left text-gray-500 font-poppins' >Phone Number <span className=' text-red-600'>*</span></p>
                <NormalInput onChange={(e) => handleInputChanged(e)} type="tel" name="phonenumber" placeholder="312-620-9297" invalid={valid.phonenumber ? false : true} required />
              </div>
              <div className=' w-full sm:w-1/2 '>
                <p className='mb-2 text-left text-gray-500 font-poppins' >Date of Birth <span className=' text-red-600'>*</span></p>
                <NormalInput onChange={(e) => handleInputChanged(e)} type="text" name="birthday" placeholder="MM-DD-YYYY" invalid={valid.birthday ? false : true} required />
              </div>
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
          </div>
          <div className='py-0 z-[20]'>
            <GradientButton onClick={handleContinue} text="Continue" />
          </div>
          <div className=' absolute right-[-15px] sm:right-[-45px] top-[30px] w-[160px] h-[160px] bg-green-600 rounded-full z-[5]'></div>
          <div className='absolute right-0 top-0 rounded-[36px] w-full h-full z-[10] backdrop-blur-[128px]'>
          </div>
        </div>
      </div>
    </div>
  )
}
