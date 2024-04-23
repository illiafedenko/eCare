import React, { useState, useEffect } from 'react'
import { getAuth, updatePassword } from 'firebase/auth';
import { getDatabase, ref, onValue, update } from 'firebase/database';

export default function SeniorSettingPreferences() {

  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [pet, setPet] = useState();

  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const db = getDatabase();
  const [uid, setUid] = useState();

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        getAuth().onAuthStateChanged(async (user) => {
          if (user) {
            const idTokenResult = await user.getIdTokenResult();
            setUid(idTokenResult.claims.user_id);
            var user = ref(db, 'users/' + idTokenResult.claims.user_id);
            onValue(user, (snapshot) => {
              const data = snapshot.val();
              if (data != null) {
                setAge(data.preferedAge);
                setGender(data.preferedGender);
                setPet(data.havePet);
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
    switch (e.target.name) {
      case "gender":
        setGender(e.target.value);
        break;
      case "age":
        setAge(e.target.value);
        break;
      case "pet":
        setPet(e.target.value);
        break;
      default:
        break;
    }
  }

  const handleSave = () => {
    console.log(gender, age, pet);
    setLoading(true);
    const user = getAuth();

    const dbref = ref(getDatabase());
    const updates = {};
    updates[`users/${uid}/preferedAge`] = age;
    updates[`users/${uid}/preferedGender`] = gender;
    updates[`users/${uid}/havePet`] = pet;
    update(dbref, updates);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
    setLoading(false);
  }

  return (
    <div className=' w-full flex flex-col gap-y-5'>
      <p className=' text-[24px] font-poppins font-semibold'>Preferences</p>
      <div className=' w-full grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
        <div className=' w-full'>
          <p className='mb-1 text-left  font-raleway' >Gender</p>
          <select name="gender"
            className="appearance-none rounded-[4px] w-full py-3 px-3 border-gray-300 focus:border-blue-500 border-[2px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            value={gender}
            onChange={(e) => handleInputChange(e)}
          >
            <option value="both">Both</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className=' w-full'>
          <p className='mb-1 text-left  font-raleway' >Age</p>
          <select name="age"
            className="appearance-none rounded-[4px] w-full py-3 px-3 border-gray-300 focus:border-blue-500 border-[2px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            value={age}
            onChange={(e) => handleInputChange(e)}
          >
            <option value="all">All</option>
            <option value="20">~30</option>
            <option value="30">31~40</option>
            <option value="40">41~50</option>
            <option value="50">51~</option>
          </select>
        </div>
        <div className=' w-full'>
          <p className='mb-1 text-left  font-raleway' >Do you have a pet?</p>
          <select name="pet"
            className="appearance-none rounded-[4px] w-full py-3 px-3 border-gray-300 focus:border-blue-500 border-[2px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            value={pet}
            onChange={(e) => handleInputChange(e)}
          >
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
        </div>
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
