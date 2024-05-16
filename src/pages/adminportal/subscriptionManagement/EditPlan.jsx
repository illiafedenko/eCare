import React, { useState, useEffect } from 'react'
import SettingInput from '../../../components/general/SettingInput'
import { Avatar } from "@files-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, push, set, onValue } from 'firebase/database';
import { useParams } from 'react-router';

export default function EditPlan() {

  const planID = useParams().planID;
  console.log(planID);

  const [input, setInput] = useState(null);

  const [valid, setValid] = useState({
    name: true,
    hourly: true,
    hours: true,
  })

  const db = getDatabase();
  useEffect(() => {
    console.log(input);
  }, [input])

  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState("");
  const [toastState, setToastState] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(planID);
    getCurrentData();
  }, [])

  const getCurrentData = async () => {
    onValue(ref(db, 'subscriptionPlans/' + planID), (snapshot) => {
      console.log(snapshot.val());
      if (snapshot != null) {
        console.log({
          name: snapshot.val().name,
          hourly: snapshot.val().hourly,
          period: snapshot.val().period,
          hours: snapshot.val().hours,
        })
        setInput({
          name: snapshot.val().name,
          hourly: snapshot.val().hourly,
          period: snapshot.val().period,
          hours: snapshot.val().hours,
        })
      }
    })
  }

  const handleInputChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
    validate(e.target.name, e.target.value);
  }

  const handleSave = () => {
    if (validateAll()) {
      setLoading(true);
      set(ref(db, 'subscriptionPlans/' + planID), {
        no: new Date().getTime(),
        name: input.name,
        period: input.period,
        hourly: input.hourly,
        hours: input.hours
      })
      setLoading(false);
      setToastText("Uploaded successfully");
      setToastState(true);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }
  }

  const validateAll = () => {
    if (validate("name") & validate("hourly") & validate("hours")) {
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

      case "name":
        var isValid = value = "" ? false : true;
        setValid((prev) => ({ ...prev, [name]: isValid }));
        return isValid;
        break;

      case "hourly":
        var isValid = !Number.isFinite(Number(value)) || value == "" ? false : true;
        setValid((prev) => ({ ...prev, [name]: isValid }));
        return isValid;
        break;

      case "hours":
        var isValid = !Number.isInteger(Number(value)) || value == "" || Number(value) <= 0 ? false : true;
        setValid((prev) => ({ ...prev, [name]: isValid }));
        return isValid;
        break;

      default:
        break;
    }
  }



  return (
    planID != undefined && input != undefined ?
      <div className='flex-grow flex flex-col gap-y-5'>
        <div className=' w-full grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
          <SettingInput onChange={(e) => handleInputChange(e)} label="Plan Name" type="text" name="name" placeholder="ex: Silver, Gold..." value={input.name} invalid={valid.name ? false : true} required />
          <div className=' w-full'>
            <p className='mb-1 text-left  font-raleway' >Period</p>
            <select name="period"
              className="appearance-none rounded-[4px] w-full py-3 px-3 border-gray-300 focus:border-blue-500 border-[2px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              value={input.period}
              onChange={(e) => handleInputChange(e)}
            >
              <option value='w'>Weekly</option>
              <option value='m'>Monthly</option>
            </select>
          </div>
          <SettingInput onChange={(e) => handleInputChange(e)} label="Hourly" type="text" name="hourly" placeholder="Your Email" value={input.hourly} invalid={valid.hourly ? false : true} required />
          <SettingInput onChange={(e) => handleInputChange(e)} label="Hours" type="text" name="hours" placeholder="xxxxx" value={input.hours} invalid={valid.hours ? false : true} required />
        </div>
        <div className=' w-full flex flex-col items-center mt-[20px]'>
          <button onClick={() => handleSave()} className=' w-1/2 min-w-[200px] max-w-[300px] h-[48px] text-[20px] leading-none font-poppins font-light text-white bg-green-500 hover:bg-green-600 border-none outline-none focus:outline-none '>Save</button>
        </div>
        <div id='loading' className={`fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-gray-700 bg-opacity-40 ${!loading ? 'invisible' : ''}`}>
          <div className="bg-white border py-2 px-5 rounded-lg flex items-center flex-col">
            <div className="loader-dots block relative w-20 h-5 mt-2">
              <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
              <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
              <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
              <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-gray-500 text-xs font-medium mt-2 text-center">
              Saving...
            </div>
          </div>
        </div>
        {
          showToast ?
            <div className={`fixed bottom-0 right-0 mb-4 mr-4 ${toastState ? `bg-green-500` : `bg-red-500`} text-white py-2 px-4 rounded`}>
              {toastText}
            </div>
            :
            <></>
        }
      </div>
      :
      <></>
  )
}


