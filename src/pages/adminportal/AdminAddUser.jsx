import React, { useState, useEffect } from 'react'
import logoImage from '../../assets/images/logo.png';
import avatar from '../../assets/images/caregiver6.png'
import dashboardIcon from '../../assets/images/dashboardicon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faDatabase, faMeteor, faTh, faThLarge, faThermometer4, faSearch } from '@fortawesome/free-solid-svg-icons';
import SideBar from '../../components/special/SideBar';
import dummyData from '../../dummydata';
import CGPortalNavBar from '../../components/special/CGPortalNavBar';
import { useNavigate } from 'react-router'
import AvatarUpload from '../../components/general/AvatarUpload';
import NormalInput from '../../components/general/NormalInput';
import Select from 'react-select';
import SmallSelect from '../../components/general/SmallSelect';
import SmallInput from '../../components/general/SmallInput';
import SamllDatePicker from '../../components/general/SamllDatePicker';
import { useParams } from 'react-router';
import HR_image from '../../assets/images/HR_rough.png';
import OM_image from '../../assets/images/OM_rough.png';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import NormalInputPromo from '../../components/general/NormalInputPromo';

export default function AdminAddUser() {

  const navigate = useNavigate();
  const userCategory = useParams().id;

  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const [valid, setValid] = useState({
    firstname: true,
    lastname: true,
    email: true,
  })
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastState, setToastState] = useState(true);

  useEffect(() => {
  }, [])

  const handleInputChanged = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
    validate(e.target.name, e.target.value);
  }

  const validateAll = () => {
    if (validate("firstname") & validate("lastname") & validate("email")) {
      return true;
    }
    else {
      return false;
    }
  }

  const validate = (name, value = input[name]) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    switch (name) {
      case "firstname":
        var isValid = value == "" ? false : true;
        setValid((prev) => ({ ...prev, [name]: isValid }));
        return isValid;

      case "lastname":
        var isValid = value == "" ? false : true;
        setValid((prev) => ({ ...prev, [name]: isValid }));
        return isValid;

      case "email":
        var isValid = !value.match(emailRegex) ? false : true;
        setValid((prev) => ({ ...prev, [name]: isValid }));
        return isValid;
      default:
        break;
    }
  }

  const addUser = () => {
    if (validateAll() == false) return;
    setLoading(true);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, input.email, "123456789")
      .then((userCredential) => {
        const user = userCredential.user;
        const db = getDatabase();
        set(ref(db, userCategory == 2 ? 'officeManagers/' + user.uid : 'humanResources/' + user.uid), {
          firstname: input.firstname,
          lastname: input.lastname,
          fullname: input.firstname + " " + input.lastname,
          email: input.email,
          password: "123456789",
          avatar: userCategory == 2 ?
            'https://firebasestorage.googleapis.com/v0/b/ecare-health-solutions.appspot.com/o/updates%2Favatars%2FOM_rough.png?alt=media&token=a84352f6-8045-4276-a68e-ea30dd99d73b'
            :
            'https://firebasestorage.googleapis.com/v0/b/ecare-health-solutions.appspot.com/o/updates%2Favatars%2FHR_rough.png?alt=media&token=5daaf415-1403-4b99-905c-1484d3fd901b'
        })
        set(ref(db, 'users/' + user.uid), {
          fullname: input.firstname + " " + input.lastname,
          userType: userCategory == 2 ? "om" : "hr",
          avatar: userCategory == 2 ?
            'https://firebasestorage.googleapis.com/v0/b/ecare-health-solutions.appspot.com/o/updates%2Favatars%2FOM_rough.png?alt=media&token=a84352f6-8045-4276-a68e-ea30dd99d73b'
            :
            'https://firebasestorage.googleapis.com/v0/b/ecare-health-solutions.appspot.com/o/updates%2Favatars%2FHR_rough.png?alt=media&token=5daaf415-1403-4b99-905c-1484d3fd901b'
        });

        setLoading(false);
        setInput({
          firstname: "",
          lastname: "",
          email: "",
        });

        setToastMessage("Added successfully");
        setToastState(true);
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);

        setLoading(false);

        setToastMessage(errorMessage);
        setToastState(false);
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      })
  }

  const handleSidebarShow = () => {
    document.getElementById("left_sidebar").classList.toggle("hidden");
    document.getElementById("blur_board").classList.toggle("hidden");
  }

  return (
    <div className=" w-full h-screen flex flex-row relative ">
      <SideBar portalname="aportal" menu={dummyData.AMenu} current="users" />
      <div onClick={handleSidebarShow} id="blur_board" className=' w-full h-screen absolute hidden left-0 top-0 backdrop-blur-[1px] z-[5]'></div>
      <div className=' flex-grow h-full flex flex-col'>
        <CGPortalNavBar current="Users" name="John Doe" />
        <div className=' w-full h-[calc(100vh-100px)] overflow-y-auto bg-gray-50 py-10 px-10'>
          <div className=' w-full flex flex-col gap-y-6' >
            <div className=' w-full px-8 py-10 sm:px-12 sm:py-16 bg-white border-[1px] border-gray-200 rounded-[12px]'>
              <div className=' flex flex-col md:flex-row gap-x-8 gap-y-8'>
                <div className=' flex flex-col gap-y-2'>
                  <p className=' font-poppins text-[12px] text-left'>
                    {
                      userCategory == 3 ? 'Add Human Resources' : 'Add Office Manager'
                    }
                  </p>
                  <img src={userCategory == 2 ? OM_image : HR_image} className=' w-[200px] h-[200px]' alt="" />
                </div>
                <div className=' flex md:flex-grow'>
                  <div className=' w-full'>
                    <div className=' w-full grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6'>
                      <div className=' w-full flex flex-col items-start'>
                        <span className=' font-poppins text-left'>First name</span>
                        <NormalInputPromo onChange={(e) => handleInputChanged(e)} value={input.firstname} name="firstname" placeholder="First name" type="text" invalid={valid.firstname ? false : true} required />
                      </div>
                      <div className=' w-full flex flex-col items-start'>
                        <span className=' font-poppins text-left'>Last name</span>
                        <NormalInputPromo onChange={(e) => handleInputChanged(e)} value={input.lastname} name="lastname" placeholder="Last name" type="text" invalid={valid.lastname ? false : true} required />
                      </div>
                      <div className=' w-full flex flex-col items-start'>
                        <span className=' font-poppins text-left'>Email</span>
                        <NormalInputPromo onChange={(e) => handleInputChanged(e)} value={input.email} name="email" placeholder="Email" type="email" invalid={valid.email ? false : true} required />
                      </div>
                      <div className=' w-full flex flex-col items-start'>
                        <span className=' font-poppins text-left'>Role</span>
                        <NormalInput name="password" placeholder={userCategory == 3 ? 'Human Resources' : 'Office Manager'} type="text" required disabled />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className=' text-center text-[12px] mt-[20px] font-poppins text-gray-500'>Defualt password is 123456789</p>
              <div className=' mt-[40px] w-full flex flex-col items-center'>
                <button onClick={() => addUser()} className=' w-[240px] bg-green-500 outline-none border-none hover:bg-green-600 text-white font-poppins focus:outline-none'>Add User</button>
              </div>
            </div>
          </div>
        </div>
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
          <div className={`fixed bottom-0 right-0 mb-4 mr-4 ${toastState ? "bg-green-400" : "bg-red-400"} text-white py-2 px-4 rounded`}>
            {toastMessage}
          </div>
          :
          <></>
      }
    </div>
  )
}
