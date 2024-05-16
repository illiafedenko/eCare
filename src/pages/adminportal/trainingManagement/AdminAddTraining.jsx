import React, { useState, useEffect } from 'react'
import SettingInput from '../../../components/general/SettingInput'
import image from '../../../assets/images/register_image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUpload, faCloudUploadAlt, faUpload } from '@fortawesome/free-solid-svg-icons';
import { Player } from 'video-react';
import ReactPlayer from 'react-player'
import { getDatabase, onValue, push, ref, set } from 'firebase/database';
import { getStorage, ref as storeRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage';


export default function AdminAddTraining() {

  const [videoSrc, setVideoSrc] = useState("");
  const [videoHeight, setVideoHeight] = useState(396);
  const [title, setTitle] = useState("");
  const [validTitle, setValidTitle] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState("");
  const [toastState, setToastState] = useState(true);
  const [uploadFile, setUploadFile] = useState();
  const [loading, setLoading] = useState(false);
  const [percent, setPercent] = useState(0);

  const db = getDatabase();
  const storage = getStorage();

  const handleUpload = (e) => {
    var file = e.target.files[0];
    setUploadFile(file);
    var reader = new FileReader();
    var url = URL.createObjectURL(file);
    setVideoSrc(url);
    console.log(url);
  }

  useEffect(() => {
  }, [uploadFile])


  const callFileUploader = () => {
    document.getElementById("fileUploader").click();
  }

  const onResize = () => {
    if (window.innerWidth < 640) {
      setVideoHeight(156);
    } else if (window.innerWidth < 768) {
      setVideoHeight(276);
    } else {
      setVideoHeight(396);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', onResize);
  }, [])



  const Upload = () => {
    setLoading(true);
    const timestamp = new Date().getTime();
    const storageRef = storeRef(storage, `updates/courses/${timestamp}`);
    const uploadTask = uploadBytesResumable(storageRef, uploadFile);
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPercent(progress);
      },
      (error) => {
        console.log(error);
        setLoading(false);
        setToastText("An error occured! Please retry...");
        setToastState(false);
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 5000);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const newCourseRef = push(ref(db, 'courses'));
          set(newCourseRef, {
            title: title,
            course: downloadURL,
            timestamp: timestamp
          });
          setVideoSrc("");
          setTitle("");
          setLoading(false);
          setToastText("Uploaded successfully");
          setToastState(true);
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
          }, 5000);
        });
      }
    );
  }

  const onUploadButtonClick = () => {
    if (title != "" && videoSrc != "") {
      Upload();
    }
    else {
      if (title == "") {
        console.log(123);
        setValidTitle(false);
      }
      setToastText("Please fill the information correctly");
      setToastState(false);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }
  }


  const onLoaded = () => {
    console.log("Loaded");
    document.getElementsByClassName("video-react-control-bar")[0].style.display = "none";
    document.getElementsByClassName("video-react-button")[0].style.display = "none";
    console.log(document.getElementsByClassName("video-react-control-bar")[0].style.display);
  }

  const onChangeCourseName = (e) => {
    if (e.target.value == "") {
      setValidTitle(false);
    } else {
      setValidTitle(true);
    }
    setTitle(e.target.value);
  }

  return (
    <div onLoad={() => onLoaded()} className=' w-full flex flex-col gap-y-6'>
      <div className=' w-full flex flex-row'>
        <div className=' w-full sm:w-[500px]'>
          <SettingInput onChange={(e) => onChangeCourseName(e)} label="Course Name" value={title} type="text" name="coursename" placeholder="Course Name" invalid={!validTitle} />
        </div>
      </div>
      <div className='w-full flex flex-col gap-1'>
        <p className=' w-full text-[16px] text-left font-raleway'>Select Course</p>
        <div className=' w-full h-[160px] sm:h-[280px] md:h-[400px] relative border-dashed border-[2px] border-gray-300'>
          <img src={image} className=' w-full h-full object-cover opacity-5' />
          <div className=' w-full h-full absolute top-0 left-0 flex flex-row justify-center items-center bg-gray-800'>
            <Player playsInline src={videoSrc} fluid={false} height={videoHeight} />
            {/* <video class="h-full w-full rounded-lg" controls>
              <source
                src={`${videoSrc}`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video> */}
          </div>
          <div className=' absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-y-2'>
            <div onClick={() => callFileUploader()} className=' w-14 h-14 bg-green-100 opacity-70 rounded-full flex flex-row items-center justify-center cursor-pointer'>
              <FontAwesomeIcon icon={faCloudUpload} className=' text-green-600' />
            </div>
            <p onClick={() => callFileUploader()} className=' font-poppins text-[12px] font-bold text-green-500 cursor-pointer hover:text-green-600'>Click to Upload</p>
            <input id='fileUploader' type='file' accept=".mp4,.avi, .wav" onChange={(e) => handleUpload(e)} className=' hidden' />
            <p className=' font-poppins text-[12px] font-bold text-gray-600'>mp4, wav</p>
          </div>
        </div>
      </div>
      <div className=' w-full flex flex-row justify-center items-center'>
        <div onClick={() => onUploadButtonClick()} className=' w-[200px] h-[52px] flex flex-row justify-center items-center bg-green-600 hover:bg-green-700 rounded-lg cursor-pointer'><p className=' text-white text-[20px] font-poppins select-none '>Upload</p></div>
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
            {Math.floor(percent)}% uploaded
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
  )
}
