import React, { useState, useEffect } from 'react'
import AvatarMiniButtonUpload from '../general/AvatarMiniButtonUpload';
import SettingInput from '../general/SettingInput';
import dummyData from '../../dummydata';
import penImage from '../../assets/images/pen.png';
import { Avatar } from "@files-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, onValue, update } from 'firebase/database';
import { getStorage, ref as storeRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage';


export default function SeniorSettingNormalInfor() {

  const [input, setInput] = useState({
    street: "",
    city: "",
    state: "",
    zipcode: "",
    phonenumber: "",
  });
  const [avatarURL, setAvatarURL] = useState();
  const [imageSource, setImageSource] = useState("broken/url");
  const [imageSource2, setImageSource2] = useState(undefined);
  const [showRemoveBtn, setShowRemoveBtn] = useState(false);

  const [valid, setValid] = useState({
    street: true,
    city: true,
    zipcode: true,
    phonenumber: true,
  })

  const db = getDatabase();
  const storage = getStorage();
  const [storageRef, setStorageRef] = useState();
  const [uid, setUid] = useState();
  useEffect(() => {
  }, [uid])

  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        getAuth().onAuthStateChanged(async (user) => {
          if (user) {
            const idTokenResult = await user.getIdTokenResult();
            setUid(idTokenResult.claims.user_id);
            var user = ref(db, 'seniors/' + idTokenResult.claims.user_id);
            onValue(user, (snapshot) => {
              const data = snapshot.val();
              if (data != null) {
                setInput({
                  street: data.street,
                  city: data.city,
                  state: data.state,
                  zipcode: data.zipcode,
                  phonenumber: data.phonenumber,
                });
                setAvatarURL(data.avatar);
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

  const isLoaded = () => {
    document.getElementsByClassName("fui-avatar-image")[0].style.width = "100%"
    document.getElementsByClassName("fui-avatar-image")[0].style.height = "100%"
    document.getElementsByClassName("fui-avatar-image")[0].style.objectFit = "cover"
  }

  const setNewImage = (img) => {

    setStorageRef(storeRef(storage, `updates/avatars/${uid}/${img.name}`));
    setImageSource2(img);

    setShowRemoveBtn(true);
  }

  const handleCancelImage = () => {
    setImageSource2(undefined);
    setShowRemoveBtn(false);
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
      const dbref = ref(getDatabase());
      const updates = {};
      updates[`seniors/${uid}/phonenumber`] = input.phonenumber;
      updates[`seniors/${uid}/street`] = input.street;
      updates[`seniors/${uid}/city`] = input.city;
      updates[`seniors/${uid}/state`] = input.state;
      updates[`seniors/${uid}/zipcode`] = input.zipcode;

      // avatar upload
      const uploadTask = uploadBytesResumable(storageRef, imageSource2);
      uploadTask.on('state_changed',
        (snapshot) => {
        },
        (error) => {
          console.log(error);
          setLoading(false);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            updates[`seniors/${uid}/avatar`] = downloadURL;
            updates[`users/${uid}/avatar`] = downloadURL;
            update(dbref, updates);
            setShowToast(true);
            setTimeout(() => {
              setShowToast(false);
            }, 3000);
            setShowRemoveBtn(false);
            setLoading(false);
          });
        }
      );
    }
  }

  const validateAll = () => {
    if (validate("phonenumber") & validate("street") & validate("city") & validate("zipcode")) {
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
    <div className=' w-full flex flex-col gap-y-5'>
      <p className=' text-[24px] font-poppins font-semibold'>Normal Information</p>
      <div className=' w-full  flex flex-col gap-x-8 gap-y-5'>
        {/* avatar upload */}
        <div className=' w-full flex flex-row justify-center items-center'>
          <div onLoad={isLoaded} className=' w-[200px] h-[200px] relative '>
            {
              imageSource2 == undefined ?
                <Avatar
                  src={`${avatarURL}`}
                  style={{ objectFit: "cover" }}
                  onChange={(imgSource) => setImageSource2(imgSource)}
                  variant="circle"
                  accept=".png, .jpg"
                  readOnly
                  alt="Avatar2"
                  changeLabel={""}
                  emptyLabel={"Upload an avatar"}
                  loadingLabel={""}
                />
                :
                <Avatar
                  src={imageSource2}
                  style={{ objectFit: "cover" }}
                  onError={() => setImageSource2(fallBackImage)}
                  onChange={(imgSource) => setImageSource2(imgSource)}
                  variant="circle"
                  accept=".png, .jpg"
                  readOnly
                  alt="Avatar2"
                  changeLabel={""}
                  emptyLabel={"Upload an avatar"}
                  loadingLabel={""}
                />
            }
            <div className=' w-[32px] h-[32px] absolute left-[160px] top-[160px]'>
              <Avatar
                style={{ width: "30px", height: "30px" }}
                src={penImage}
                onError={() => setImageSource2(penImage)}
                onChange={(imgSource) => setNewImage(imgSource)}
                variant="circle"
                accept=".png, .jpg"
                alt="Avatar2"
                changeLabel={""}
                emptyLabel={""}
                loadingLabel={""}
              />
            </div>
            {
              showRemoveBtn ?
                <div onClick={() => handleCancelImage()} className=' w-[32px] h-[32px] flex flex-row items-center justify-center absolute left-[160px] top-[14px] text-gray-200 bg-gray-400 rounded-full cursor-pointer hover:bg-gray-500 hover:text-white'>
                  <FontAwesomeIcon className=' ' icon={faClose} />
                </div>
                :
                <></>
            }
          </div>
        </div>
        {/* Avatar Change end */}
        <div className='flex-grow flex-col'>
          <div className=' w-full grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
            <SettingInput onChange={(e) => handleInputChange(e)} label="Street" type="text" name="street" placeholder="Your Name" value={input.street} invalid={valid.street ? false : true} required />
            <SettingInput onChange={(e) => handleInputChange(e)} label="City" type="text" name="city" placeholder="Your Email" value={input.city} invalid={valid.city ? false : true} required />
            <div className=' w-full'>
              <p className='mb-1 text-left  font-raleway' >State</p>
              <select name="state"
                className="appearance-none rounded-[4px] w-full py-3 px-3 border-gray-300 focus:border-blue-500 border-[2px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                value={input.state}
                onChange={(e) => handleInputChange(e)}
              >
                {
                  dummyData.USStateList.map((item, i) => {
                    return <option key={i} value={item.abbr}>{item.stateName}</option>
                  })
                }
              </select>
            </div>
            <SettingInput onChange={(e) => handleInputChange(e)} label="Zip Code" type="text" name="zipcode" placeholder="xxxxx" value={input.zipcode} invalid={valid.zipcode ? false : true} required />
            <SettingInput onChange={(e) => handleInputChange(e)} label="Phone Number" type="text" name="phonenumber" placeholder="xxx-xxx-xxxx" value={input.phonenumber} invalid={valid.phonenumber ? false : true} required />
          </div>

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
