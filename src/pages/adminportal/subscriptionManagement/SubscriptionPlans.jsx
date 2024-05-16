import React, { useState, useEffect } from 'react'
import AdminSubscriptionModel from '../../../components/special/AdminSubscriptionModel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { getDatabase, onValue, ref } from 'firebase/database';
import { useNavigate } from 'react-router-dom';

export default function SubscriptionPlans() {

  const db = getDatabase();
  const navigate = useNavigate();
  const [planList, setPlanList] = useState([]);

  useEffect(() => {
    getPlanList();
  }, [])

  const getPlanList = async () => {
    onValue(ref(db, 'subscriptionPlans'), (snapshot) => {
      console.log((snapshot.val()));
      if (snapshot != null) {
        let temp = [];
        snapshot.forEach((item) => {
          temp.push({
            id: item.key,
            name: item.val().name,
            period: item.val().period,
            hourly: item.val().hourly,
            hours: item.val().hours,
          })
        })
        console.log(temp);
        setPlanList([...temp]);
      }
    })
  }

  const onAdd = () => {
    navigate('/aportal/subscription/add');
  }

  return (
    <div className=' w-full flex flex-col gap-y-5'>
      <div className=' w-full flex flex-row justify-end'>
        <div onClick={() => onAdd()} className=' flex flex-row gap-x-1 justify-center items-center py-1 px-3 rounded-md bg-green-600 hover:bg-green-700 cursor-pointer'>
          <FontAwesomeIcon icon={faPlus} className=' text-white' />
          <p className=' text-white font-poppins'>Add plans</p>
        </div>
      </div>
      <div className=' w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-8'>
        {
          planList.length >= 0 ?
            planList.map((item, i) => {
              return <AdminSubscriptionModel id={item.id} name={item.name} period={item.period} hourly={item.hourly} hours={item.hours} key={i} />
            })
            :
            <>No subscription plans</>
        }
      </div>
    </div>
  )
}
