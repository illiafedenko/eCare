import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'
import { showAlert } from 'tailwind-toastify';
import useAuthStore from '../../utils/authStore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from 'firebase/database';
import { useNavigate } from 'react-router'

export default function CGApplyConditions(props) {

  const caregiverPrimaryInfo = useAuthStore((state) => state.caregiverPrimaryInfo);
  const caregiverAddressInfo = useAuthStore((state) => state.caregiverAddressInfo);
  const caregiverEducationInfo = useAuthStore((state) => state.caregiverEducationInfo);
  const caregiverWorkHistoryInfo = useAuthStore((state) => state.caregiverWorkHistoryInfo);
  const caregiverMoreInfo = useAuthStore((state) => state.caregiverMoreInfo);

  const [agree, setAgree] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleNextButtonClick = () => {
    if (agree) {
      console.log(caregiverPrimaryInfo, caregiverAddressInfo, caregiverEducationInfo, caregiverWorkHistoryInfo, caregiverMoreInfo);
      setLoading(true);
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, caregiverPrimaryInfo.email, caregiverPrimaryInfo.password)
        .then((userCredential) => {
          const user = userCredential.user;
          const db = getDatabase();
          set(ref(db, 'caregivers/' + user.uid), {
            firstname: caregiverPrimaryInfo.firstname,
            lastname: caregiverPrimaryInfo.lastname,
            fullname: caregiverPrimaryInfo.firstname + " " + caregiverPrimaryInfo.lastname,
            email: caregiverPrimaryInfo.email,
            phonenumber: caregiverPrimaryInfo.phonenumber,
            birthday: caregiverPrimaryInfo.birthday,
            gender: caregiverPrimaryInfo.gender,
            street: caregiverAddressInfo.street,
            city: caregiverAddressInfo.city,
            state: caregiverAddressInfo.state,
            zipcode: caregiverAddressInfo.zipcode,
            school: caregiverEducationInfo.school,
            degree: caregiverEducationInfo.degree,
            graduationYear: caregiverEducationInfo.graduationYear,
            workingStatus: caregiverWorkHistoryInfo.workingStatus,
            driverlicense: caregiverWorkHistoryInfo.driverlicense,
            hourInWeek: caregiverWorkHistoryInfo.hourInWeek,
            prefermorning: caregiverWorkHistoryInfo.prefermorning,
            preferafternoon: caregiverWorkHistoryInfo.preferafternoon,
            preferevening: caregiverWorkHistoryInfo.preferevening,
            preferweekend: caregiverWorkHistoryInfo.preferweekend,
            vaccinated: caregiverWorkHistoryInfo.vaccinated,
            coverletter: caregiverMoreInfo.coverletter,
          });
          setLoading(false);
          const path = "/signin";
          navigate(path);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          setLoading(false);
        })

    } else {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  }
  const handlePrevButtonClick = () => {
    props.handlePrev();
  }

  const handleCheck = (e) => {
    setAgree(!agree);
  }

  return (
    <div className=' w-full flex flex-col gap-y-4'>
      <p className=' font-poppins text-[24px] '>Screening and Application Fee</p>

      <div className=' w-full'>
        <p className='mb-2 text-left text-gray-500 font-poppins' >Ecare requires all Nabors to provide criminal background screening and DMV records. This screening is performed after the application is reviewed, your interview is completed and a provisional offer is made. At that time you’ll need to provide consent for the screening, and pay a $40 fee to cover the costs. You cannot become a Nabor without this step.</p>
        <div className=' w-full max-h-[250px] mt-[40px] font-poppins overflow-y-scroll border-[1px] px-2 py-2'>
          <p className=' w-full text-left text-[20px] py-2'>ECARE SERVICE PROVIDER AGREEMENT</p>
          <p className=' text-left'>
            We only seek Nabors who share our vision to bring JOY to the lives of seniors and their families. While we have very rigorous standards for our independent contractors, we also believe that the diversity of backgrounds and experiences of our Nabors further strengthens the community.
            We only seek Nabors who share our vision to bring JOY to the lives of seniors and their families. While we have very rigorous standards for our independent contractors, we also believe that the diversity of backgrounds and experiences of our Nabors further strengthens the community.
            We only seek Nabors who share our vision to bring JOY to the lives of seniors and their families. While we have very rigorous standards for our independent contractors, we also believe that the diversity of backgrounds and experiences of our Nabors further strengthens the community.
            We only seek Nabors who share our vision to bring JOY to the lives of seniors and their families. While we have very rigorous standards for our independent contractors, we also believe that the diversity of backgrounds and experiences of our Nabors further strengthens the community.
          </p>
        </div>
        <div className="flex items-center my-4">
          <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded accent-green-600" onChange={(e) => handleCheck(e)} checked={agree ? true : false} />
          <label className="ms-2 text-sm text-gray-500 font-poppins font-medium dark:text-gray-300">Accept terms and conditions</label>

        </div>
        <p className=' text-left font-poppins'>
          By checking the above box, I acknowledge I have read and agree to the conditions of the Service Provider Agreement.
        </p>
      </div>
      <div className=' my-[40px] w-full flex flex-row justify-between'>
        <div onClick={() => handlePrevButtonClick()} className=' w-[100px] h-[30px] text-white bg-green-500 rounded-[8px] cursor-pointer flex flex-row items-center justify-center '><p className=' text-[16px] font-poppins font-bold select-none'>Previous</p></div>
        <div onClick={() => handleNextButtonClick()} className=' w-[100px] h-[30px] text-white bg-green-500 rounded-[8px] cursor-pointer flex flex-row items-center justify-center gap-x-1 '><p className=' text-[16px] font-poppins font-bold select-none'>Submit</p> <span className=' text-[12px]'><FontAwesomeIcon icon={faPaperPlane} /></span></div>
      </div>
      {
        showToast ?
          <div className="fixed bottom-0 right-0 mb-4 mr-4 bg-red-400 text-white py-2 px-4 rounded">
            You must accept the terms and conditions
          </div>
          :
          <></>
      }
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
    </div>
  )
}
