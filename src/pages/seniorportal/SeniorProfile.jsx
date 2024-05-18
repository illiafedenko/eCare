import React, { useState, useEffect } from 'react'
import SideBar from '../../components/special/SideBar';
import CGPortalNavBar from '../../components/special/CGPortalNavBar';
import dummyData from '../../dummydata';
import { getDatabase, onValue, ref } from 'firebase/database';
import SeniorSubscriptionModel from './SeniorSubscriptionModel';
import { getAuth } from 'firebase/auth';

export default function SeniorProfile() {

  const db = getDatabase();
  const [myID, setMyID] = useState();
  const [planList, setPlanList] = useState([]);
  const [firstDate, setFirstDate] = useState();
  const [lastDate, setLastDate] = useState();
  const [myPlanList, setMyPlanList] = useState([]);


  useEffect(() => {
    getPlanList();
    getMyPlanList();
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

  function formatDate(date) {
    const optionsDay = { weekday: 'short' };
    const optionsDate = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return {
      day: date.toLocaleDateString('en-US', optionsDay),
      date: date.toLocaleDateString('en-US', optionsDate).replace(/\//g, '-')
    };
  }

  const judgeLater = (expireDate) => {
    var dateArray = expireDate.split('-');
    var todayArray = formatDate(new Date()).date.split('-');
    var newDateStr = dateArray[2] + dateArray[0] + dateArray[1];
    var newTodayStr = todayArray[2] + todayArray[0] + todayArray[1];
    console.log(newDateStr, newTodayStr);
    return newDateStr >= newTodayStr;
  }

  const getMyPlanList = async () => {
    getAuth().onAuthStateChanged(async (user) => {
      setMyID(user.uid);
      try {
        onValue(ref(db, 'subscriptions/' + user.uid), (snapshot) => {
          if (snapshot.val() != null) {
            var temp = [];
            snapshot.forEach((item) => {
              if (judgeLater(item.val().end))
                temp.push(item.val());
            })
            setMyPlanList([...temp]);
          }
        })

      } catch (error) {
        console.log(error.message);
      }
    })
  }


  useEffect(() => {
    console.log("myplanlist:", myPlanList);
  }, [myPlanList])


  useEffect(() => {
  }, [planList])




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
            <div className=' w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-8'>
              {
                myPlanList.length > 0 ?
                  myPlanList.map((item, i) => {
                    return <div key={i} className=' sm:w-full w-[300px] h-[220px] flex flex-col justify-between gap-y-5 py-6 px-5 rounded-xl border-[2px] border-gray-200 shadow-md '>
                      <div className='  flex flex-col gap-y-5'>
                        <div className=' w-full flex flex-row'>
                          <div className=' px-2 py-1 bg-green-200 rounded-md text-gray-700 font-poppins font-bold'>{item.name}</div>
                        </div>
                        <div className=' w-full flex flex-col'>
                          <div className=' w-full flex flex-row gap-x-3 justify-start font-poppins'>
                            <p className=' w-24 font-bold text-left'>Start at:</p> <p className=' font-raleway'>{item.start}</p>
                          </div>
                          <div className=' w-full flex flex-row gap-x-3 justify-start font-poppins'>
                            <p className=' w-24 font-bold text-left'>Expire at:</p> <p className=' font-raleway'>{item.end}</p>
                          </div>
                          <div className=' w-full flex flex-row gap-x-3 justify-start font-poppins'>
                            <p className=' w-24 font-bold text-left'>Hourly:</p> <p className=' font-raleway'>${item.hourly}</p>
                          </div>
                          <div className=' w-full flex flex-row gap-x-3 justify-start font-poppins'>
                            <p className=' w-24 font-bold text-left'>Total:</p> <p className=' font-raleway'>{item.limit} hours</p>
                          </div>
                          <div className=' w-full flex flex-row gap-x-3 justify-start font-poppins'>
                            <p className=' w-24 font-bold text-left'>Remaining:</p> <p className=' font-raleway'>{item.limit - item.used} hours</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  })
                  :
                  <></>
              }
            </div>
          </div>
          <div className=' h-10'></div>
          <div className=' w-full bg-white px-[40px] py-[40px] rounded-[24px]'>
            <p className=' text-[20px] text-gray-600 pb-4 font-poppins font-bold text-left'>Subscription Plans</p>
            <div className=' w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-8'>
              {
                planList.length >= 0 ?
                  planList.map((item, i) => {
                    return <SeniorSubscriptionModel level={i} id={item.id} name={item.name} period={item.period} hourly={item.hourly} hours={item.hours} key={i} />
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
