import React, { useState, useEffect } from 'react'
import SideBar from '../../components/special/SideBar';
import CGPortalNavBar from '../../components/special/CGPortalNavBar';
import dummyData from '../../dummydata';
import { getDatabase, onValue, ref } from 'firebase/database';
import SeniorSubscriptionModel from './SeniorSubscriptionModel';

export default function SeniorProfile() {

  const db = getDatabase();
  const [planList, setPlanList] = useState([]);

  useEffect(() => {
    getPlanList();
  }, [])

  const getPlanList = async () => {
    onValue(ref(db, 'subscriptionPlans'), (snapshot) => {
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
        setPlanList([...temp]);
      }
    })
  }

  useEffect(() => {
    console.log(planList);
    console.log(formatDate(new Date()));
  }, [planList])


  function formatDate(date) {
    const optionsDay = { weekday: 'short' };
    const optionsDate = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return {
      day: date.toLocaleDateString('en-US', optionsDay),
      date: date.toLocaleDateString('en-US', optionsDate).replace(/\//g, '-')
    };
  }


  const handleSidebarShow = () => {
    document.getElementById("left_sidebar").classList.toggle("hidden");
    document.getElementById("blur_board").classList.toggle("hidden");
  }

  return (
    <div className=" w-full h-screen flex flex-row relative ">
      <SideBar portalname="sportal" menu={dummyData.SMenu} current="subscription" />
      <div onClick={handleSidebarShow} id="blur_board" className=' w-full h-screen absolute hidden left-0 top-0 backdrop-blur-[1px] z-[5]'></div>
      <div className=' flex-grow h-full flex flex-col'>
        <CGPortalNavBar current="My Subscription" name="John Doe" />
        <div className=' w-full h-full overflow-y-scroll bg-gray-100 py-[48px] pl-[32px] pr-[16px]'>
          <div className=' w-full bg-white px-[40px] py-[40px] rounded-[24px]'>
            <p className=' text-[20px] text-gray-600 pb-4 font-poppins font-bold text-left'>Your Current Plans</p>
          </div>
          <div className=' h-10'></div>
          <div className=' w-full bg-white px-[40px] py-[40px] rounded-[24px]'>
            <p className=' text-[20px] text-gray-600 pb-4 font-poppins font-bold text-left'>Subscription Plans</p>
            <div className=' w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-8'>
              {
                planList.length >= 0 ?
                  planList.map((item, i) => {
                    return <SeniorSubscriptionModel id={item.id} name={item.name} period={item.period} hourly={item.hourly} hours={item.hours} key={i} />
                  })
                  :
                  <>No subscription plans</>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
