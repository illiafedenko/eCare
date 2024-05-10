import React, { useState, } from 'react';
import imageSrc from '../../assets/images/CGM3.png';
import logoSrc from '../../assets/images/logo.png';
import NormalInput from '../../components/general/NormalInput';
import GradientButton from '../../components/general/GradientButton';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../utils/authStore';


export default function ManagementSignIn() {

  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  //auth info
  const setUid = useAuthStore((state) => state.setUid);
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const setUserType = useAuthStore((state) => state.setUserType);
  //database
  const db = getDatabase();
  //progress and toast
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState("Input Email and Password correctly...");
  //navigation
  const navigate = useNavigate();

  const handleSubmitEvent = (e) => {
    if (validationAll() == false) return;
    setLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, input.email, input.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUid(user.uid);
        setAccessToken(user.accessToken)
        localStorage.setItem("token", user.accessToken);
        localStorage.setItem("userID", user.uid);
        setLoading(false);
        setToastText("You are not allowed yet. Please wait until admin allow you...");
        handleNextPage(user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
        setLoading(false);
        setToastText("Input Email and Password correctly...");
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      })
  };

  const handleNextPage = (uid) => {
    // console.log(uid);
    onValue(ref(db, 'users/' + uid), (snapshot) => {
      let data = snapshot.val();
      if (data == null) {
        getAuth().currentUser.delete().then(() => {
          return;
        });
      }
      else {
        var user = ref(db, 'officeManagers/' + uid);
        onValue(user, (snapshot) => {
          let data = snapshot.val();
          if (data != null) {
            if (data.permitted == false) {
              getAuth().signOut().then(() => {
                setShowToast(true);
                setTimeout(() => {
                  setShowToast(false);
                }, 3000);
              })
              return;
            }
            else {
              setUserType("om");
              localStorage.setItem("userType", "om");
              const path = '/omportal';
              navigate(path);
              return;
            }
          }
        });
        user = ref(db, 'humanResources/' + uid);
        onValue(user, (snapshot) => {
          const data = snapshot.val();
          if (data != null) {
            console.log(data);
            if (data.permitted == false) {
              getAuth().signOut().then(() => {
                setShowToast(true);
                setTimeout(() => {
                  setShowToast(false);
                }, 3000);
              })
              return;
            }
            else {
              setUserType("hr");
              localStorage.setItem("userType", "hr");
              const path = '/hrportal';
              navigate(path);
              return;
            }
          }
        });
        user = ref(db, 'admins/' + uid);
        onValue(user, (snapshot) => {
          const data = snapshot.val();
          if (data != null) {
            setUserType("admin");
            localStorage.setItem("userType", "admin");
            const path = '/aportal';
            navigate(path);
            return;
          }
        });
      }
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validation(e.target);
  };

  const validationAll = () => {
    var em = document.getElementsByName("email")[0];
    var ps = document.getElementsByName("password")[0];
    if (validation(em) & validation(ps)) {
      return true;
    }
    else {
      return false;
    }
  }

  const validation = (target) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const { name, value } = target;
    switch (name) {
      case "email":
        if (value.match(emailRegex)) {
          target.classList.remove('border-red-300');
          return true;
        }
        else {
          target.classList.add('border-red-300');
          return false;
        }
        break;

      case "password":
        if (value.length > 8) {
          target.classList.remove('border-red-300');
          return true;
        }
        else {
          target.classList.add('border-red-300');
          return false;
        }
        break;

      default:
        break;
    }
  }

  return (
    <div className=" py-[26px] px-[50px] h-screen w-full">
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-[17px] h-[calc(100vh-52px)]'>
        <div className='w-full my-0 lg:pl-0'>
          <div className='w-full p-0 m-0 h-full min-h-[500px] aspect-video relative '>
            <img className="img-fluid rounded-2xl xl:rounded-tl-[20px] xl:rounded-bl-[20px] xl:rounded-tr-[200px] xl:rounded-br-[200px] h-full object-cover w-full" src={imageSrc} alt="register" />
            <img className=' absolute top-5 left-10 ' src={logoSrc} />
          </div>
        </div>
        <div className=" w-full  pt-3 lg:px-[48px] lg:py-0 ">
          <p className='my-2 text-left text-gray-900 text-3xl font-poppins font-bold' >Login to your account</p>
          <p className='mt-0 text-left text-gray-500 font-poppins' >Enter your credentials to login</p>

          <div className='mt-10 mb-4 w-full'>
            <p className='mb-2 text-left text-gray-500 font-poppins' >Email</p>
            <NormalInput placeholder="Your Email" type="email" onChange={handleChange} name="email" required />
          </div>
          <div className='mt-4 mb-2 w-full'>
            <p className='mb-2 text-left text-gray-500 font-poppins' >Password</p>
            <NormalInput placeholder="Your Password" type="password" name="password" onChange={handleChange} required />
          </div>
          <div className='mb-4 w-full'>
            <p className='text-left'><a href='#' className='mb-2 text-left text-gray-900 font-bold text-[12px] font-poppins' >Forgot password?</a></p>
          </div>
          <div className="flex items-center mt-6 mb-4">
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded " />
            <label className="ms-2 text-sm text-gray-500 font-poppins font-medium dark:text-gray-300">Remember me</label>
          </div>
          <div className='my-8 w-full'>
            <GradientButton text="Login" onClick={handleSubmitEvent} />
          </div>
          <div className='my-8 w-full'>
            <p className=' text-center text-gray-500 font-poppins'>Don't have an account?, <span><a href='./signup' className=' text-green-500'>Register</a></span></p>
            {/* <p className=' text-center text-gray-500 py-3' style={{ fontFamily: 'poppins', fontSize: '16px' }}>Or</p> */}
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
          <div className="fixed bottom-0 right-0 mb-4 mr-4 bg-red-400 text-white py-2 px-4 rounded">
            {toastText}
          </div>
          :
          <></>
      }
    </div>
  )
}
