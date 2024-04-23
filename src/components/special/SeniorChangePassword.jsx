import React, { useState, useEffect } from 'react'
import SettingInput from '../general/SettingInput'
import { getAuth, updatePassword } from 'firebase/auth';
import { getDatabase, ref, onValue, update } from 'firebase/database';

export default function SeniorChangePassword() {

  const [input, setInput] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const [valid, setValid] = useState({
    currentPassword: true,
    newPassword: true,
  });

  const [uid, setUid] = useState();
  const [correctPassword, setCorrectPassword] = useState();
  const db = getDatabase();

  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        getAuth().onAuthStateChanged(async (user) => {
          if (user) {
            const idTokenResult = await user.getIdTokenResult();
            setUid(idTokenResult.claims.user_id);
            var user;
            if (localStorage.getItem("userType") == "caregiver") {
              user = ref(db, 'caregivers/' + idTokenResult.claims.user_id);
            } else if (localStorage.getItem("userType") == "senior") {
              user = ref(db, 'users/' + idTokenResult.claims.user_id);
            }
            onValue(user, (snapshot) => {
              const data = snapshot.val();
              if (data != null) {
                setCorrectPassword(data.password);
              }
            });
          } else {
            console.log("user signed out!")
          }
        })
      } catch (error) {
        console.log(error)
      }
    }

    getUserInfo();
  }, [])

  const handleInputChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
    if (e.target.name == "newPassword") {
      validate(e.target.name, e.target.value);
    } else {
      setValid((prev) => ({
        ...prev,
        [e.target.name]: true,
      }))
    }
  }

  const handleSave = () => {
    if (validateAll()) {
      setLoading(true);
      const user = getAuth();

      updatePassword(user.currentUser, input.newPassword).then(() => {
        const dbref = ref(getDatabase());
        const updates = {};
        updates[`users/${uid}/password`] = input.newPassword;
        update(dbref, updates);
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
        setLoading(false);
      }).catch((error) => {
        console.log(error);
        setLoading(false);
      });


    }
  }

  const validateAll = () => {
    if (validate("newPassword") & validate("currentPassword")) {
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

      case "newPassword":
        var isValid = value.length < 8 ? false : true;
        setValid((prev) => ({ ...prev, [name]: isValid }));
        return isValid;
        break;

      case "currentPassword":
        var isValid = value == correctPassword ? true : false;
        setValid((prev) => ({ ...prev, [name]: isValid }));
        return isValid;
        break;

      default:
        break;
    }
  }

  return (
    <div className=' w-full flex flex-col gap-y-5'>
      <p className=' text-[24px] font-poppins font-semibold'>Change Password</p>
      <div className=' w-full grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
        <SettingInput onChange={(e) => handleInputChange(e)} label="Current Password" type="password" name="currentPassword" placeholder="Current Password" value={input.currentPassword} invalid={valid.currentPassword ? false : true} required />
        <SettingInput onChange={(e) => handleInputChange(e)} label="New Password" type="password" name="newPassword" placeholder="More than 8 characters" value={input.newPassword} invalid={valid.newPassword ? false : true} required />
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
            Just a seconds...
          </div>
        </div>
      </div>
      {
        showToast ?
          <div className="fixed bottom-0 right-0 mb-4 mr-4 bg-green-500 text-white py-2 px-4 rounded">
            Changes are saved exactly!
          </div>
          :
          <></>
      }
    </div>
  )
}
