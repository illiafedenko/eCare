import { faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getDatabase, onValue, ref, remove } from 'firebase/database'
import { getStorage, ref as storageRef, deleteObject } from 'firebase/storage';
import React, { useState, useEffect } from 'react'

export default function CourseTable() {

  const [courseList, setCourseList] = useState();
  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState("");
  const [toastState, setToastState] = useState(true);
  const db = getDatabase();
  const storage = getStorage();

  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    onValue(ref(db, 'courses'), (snapshot) => {
      var temp = [];
      snapshot.forEach((item) => {
        temp.push({
          id: item.key,
          title: item.val().title,
          src: item.val().course,
          timestamp: item.val().timestamp,
        })
      })
      console.log(temp);
      setCourseList([...temp]);
    })
  }

  useEffect(() => {
    console.log(courseList);
  }, [courseList])

  const onDelete = (id, timestamp) => {
    console.log(id);
    const courseRef = storageRef(storage, `updates/courses/${timestamp}`);
    // Delete the file
    deleteObject(courseRef).then(() => {
      remove(ref(db, 'courses/' + id));
      setToastText("Deleted successfully...");
      setToastState(true);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }).catch((error) => {
      console.log(error.message);
      setToastText("An error occured, please retry");
      setToastState(false);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    });
  }


  return (
    <div className=' w-full h-full grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-6'>
      {
        courseList != null ?
          courseList.map((item, i) => {
            return <div key={i} className=' w-full flex flex-col gap-y-2 rounded-lg'>
              <video className=' w-full  aspect-4/3 bg-gray-700 rounded-lg' controls>
                <source
                  src={`${item.src}`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className=' w-full flex flex-row justify-between px-2'>
                <p data-tooltip-target="tooltip-default" className=' text-[16px] font-poppins text-left line-clamp-1'>{item.title}</p>
                <FontAwesomeIcon onClick={() => onDelete(item.id, item.timestamp)} icon={faTrashAlt} className=' text-gray-500 hover:text-red-400 cursor-pointer' />
              </div>
            </div>
          })
          :
          <></>
      }
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
