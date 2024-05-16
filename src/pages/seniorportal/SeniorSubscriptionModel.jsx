import React, { useState, useEffect } from 'react'
import { faEdit, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getDatabase, ref, remove } from 'firebase/database';
import { useNavigate } from 'react-router-dom'

export default function SeniorSubscriptionModel({ id, name, period, hourly, hours }) {

  const navigate = useNavigate();
  const db = getDatabase();

  const [showModal, setShowModal] = useState(false);

  const onPurchase = () => {
    console.log(id);
    setShowModal(true);
  }

  return (
    <div className=' flex flex-row justify-center'>
      <div className=' sm:w-full w-[300px] h-[220px] flex flex-col justify-between gap-y-5 py-6 px-5 rounded-xl border-[2px] border-gray-200 shadow-md '>
        <div className='  flex flex-col gap-y-5'>
          <div className=' w-full flex flex-row'>
            <div className=' px-2 py-1 bg-green-200 rounded-md text-gray-700 font-poppins font-bold'>{name}</div>
          </div>
          <div className=' w-full flex flex-col'>
            <div className=' w-full flex flex-row gap-x-3 justify-start font-poppins'>
              <p className=' w-16 font-bold text-left'>Hourly:</p> <p className=' font-raleway'>{period == "w" ? "Weekly" : "Monthly"}</p>
            </div>
            <div className=' w-full flex flex-row gap-x-3 justify-start font-poppins'>
              <p className=' w-16 font-bold text-left'>Period:</p> <p className=' font-raleway'>${hourly}</p>
            </div>
            <div className=' w-full flex flex-row gap-x-3 justify-start font-poppins'>
              <p className=' w-16 font-bold text-left'>Hours:</p> <p className=' font-raleway'>{hours}hours</p>
            </div>
          </div>
        </div>
        <div className=' w-full flex flex-row justify-end gap-x-5'>
          <div onClick={() => onPurchase()} className=' px-2 py-1 bg-green-600 hover:bg-green-700 cursor-pointer rounded-md font-poppins font-semibold text-white'>Purchase</div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="flex justify-center items-center w-full overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[calc(75vw+40px)] md:w-[calc(60vw+40px)] xl:w-[calc(50vw+40px)] 2xl:w-[calc(40vw+40px)] my-6 opacity-100">
              <div className="px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] xl:px-[100px] border-0 rounded-lg shadow-lg relative flex flex-col w-full py-[80px] bg-white outline-none focus:outline-none">
                <p className=' font-poppins text-[24px] font-bold '>Please confirm the plan!</p>

              </div>
            </div>
          </div>
          <div className=' w-full h-full absolute left-0 top-0 z-40 bg-gray-900 backdrop-blur-50 blur-50 opacity-50'></div>
        </>
      ) : null}
    </div>
  )
}
