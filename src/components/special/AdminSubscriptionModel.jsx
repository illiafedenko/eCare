import { faEdit, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getDatabase, ref, remove } from 'firebase/database';
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminSubscriptionModel({ id, name, period, hourly, hours }) {

  const navigate = useNavigate();
  const db = getDatabase();

  const onEditPlan = () => {
    navigate('/aportal/subscription/edit/' + id);
  }

  const onDeletPlan = () => {
    remove(ref(db, 'subscriptionPlans/' + id));
  }

  return (
    <div className=' flex flex-row justify-center'>
      <div className=' sm:w-full w-[300px] h-[250px] flex flex-col justify-between gap-y-5 py-6 px-5 rounded-xl border-[2px] border-gray-200 shadow-md '>
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
          <FontAwesomeIcon onClick={() => onEditPlan()} icon={faEdit} className=' text-[20px] text-yellow-400 hover:text-yellow-500 cursor-pointer' />
          <FontAwesomeIcon onClick={() => onDeletPlan()} icon={faTrashAlt} className=' text-[20px] text-red-400 hover:text-red-500 cursor-pointer' />
        </div>
      </div>
    </div>
  )
}
