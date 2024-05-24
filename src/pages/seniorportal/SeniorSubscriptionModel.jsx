import React, { useState, useEffect } from 'react'
import { faEdit, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getDatabase, ref, remove, onValue, push, set } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51N8SXtCMs7Z45UINXDbYf0BKSDz4vA9JgDiIIpv3LUz649H7oI4nTQlrZVSTQX3hen9VNXCE2BKBj99QqAmI93ey00gHVm1ZUI');

export default function SeniorSubscriptionModel({ level, id, name, period, hourly, hours }) {

  const navigate = useNavigate();
  const db = getDatabase();

  const [showModal, setShowModal] = useState(false);

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

  const getMyPlanList = async () => {
    getAuth().onAuthStateChanged(async (user) => {
      setMyID(user.uid);
      try {
        onValue(ref(db, 'subscriptions/' + user.uid), (snapshot) => {
          if (snapshot.val() != null) {
            var temp = [];
            snapshot.forEach((item) => {
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

  const judgeLater = (expireDate) => {
    var dateArray = expireDate.split('-');
    var todayArray = formatDate(new Date()).date.split('-');
    var newDateStr = dateArray[2] + dateArray[0] + dateArray[1];
    var newTodayStr = todayArray[2] + todayArray[0] + todayArray[1];
    return newDateStr >= newTodayStr;
  }

  useEffect(() => {
    if (myPlanList.length == 0) {
      setFirstDate(new Date());
    }
    else {
      var expireDay = myPlanList[myPlanList.length - 1].end;
      var expireDate = new Date(expireDay);
      expireDate.setDate(expireDate.getDate() + 1);
      if (judgeLater(formatDate(expireDate).date) == true) {
        setFirstDate(expireDate);
      }
      else {
        setFirstDate(new Date());
      }
    }
  }, [myPlanList])


  useEffect(() => {
  }, [planList])


  function formatDate(date) {
    const optionsDay = { weekday: 'short' };
    const optionsDate = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return {
      day: date.toLocaleDateString('en-US', optionsDay),
      date: date.toLocaleDateString('en-US', optionsDate).replace(/\//g, '-')
    };
  }

  function sameDayNextMonth(date) {
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    let nextMonthDate = new Date(year, month + 1, day);

    // Check if the month rolled over to yet another month (this happens if the day doesn't exist in the next month)
    if (nextMonthDate.getMonth() !== (month + 1) % 12) {
      // Set the date to the last day of the next month
      nextMonthDate = new Date(year, month + 2, 0); // 0 sets it to the last day of the previous month
    }

    return nextMonthDate;
  }

  const onPurchase = () => {
    var resultDate = new Date(firstDate);
    var nextMonth = sameDayNextMonth(firstDate);
    if (period == 'w') {
      resultDate.setDate(resultDate.getDate() + 6);
      setLastDate(resultDate);
    } else {
      setLastDate(nextMonth);
    }
    setShowModal(true);
  }

  const onPay = () => {
    setShowModal(false);
    redirectToCheckout();
    // const newSubscription = push(ref(db, 'subscriptions/' + myID));
    // set(newSubscription, {
    //   start: formatDate(firstDate).date,
    //   end: formatDate(lastDate).date,
    //   limit: hours,
    //   used: 0,
    //   name: name,
    //   period: period,
    //   hourly: hourly
    // });
  }



  const redirectToCheckout = async () => {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{
        price: 'price_1PHg6oCMs7Z45UINhYyFHTBa',
        quantity: 1
      }],
      mode: 'payment',
      successUrl: 'https://docs.stripe.com/',
      cancelUrl: 'https://docs.stripe.com/',
    });

    if (error) {
      console.log(error);
    }
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
              <p className=' w-16 font-bold text-left'>Period:</p> <p className=' font-raleway'>{level == 0 ? '-' : period == "w" ? "Weekly" : "Monthly"}</p>
            </div>
            <div className=' w-full flex flex-row gap-x-3 justify-start font-poppins'>
              <p className=' w-16 font-bold text-left'>Hourly:</p> <p className=' font-raleway'>${hourly}</p>
            </div>
            <div className=' w-full flex flex-row gap-x-3 justify-start font-poppins'>
              <p className=' w-16 font-bold text-left'>Hours:</p> <p className=' font-raleway'>{level == 0 ? '-' : hours + ' hours'}</p>
            </div>
          </div>
        </div>
        <div className=' w-full flex flex-row justify-end gap-x-5'>
          {
            level > 0 ?
              <div onClick={() => onPurchase()} className=' px-2 py-1 bg-green-600 hover:bg-green-700 cursor-pointer rounded-md font-poppins font-semibold text-white'>Purchase</div>
              :
              <></>
          }
        </div>
      </div>
      {showModal ? (
        <>
          <div className="flex justify-center items-center w-full overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[calc(75vw+40px)] md:w-[calc(60vw+40px)] xl:w-[calc(50vw+40px)] 2xl:w-[calc(40vw+40px)] my-6 opacity-100">
              <div className="px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] xl:px-[100px] border-0 rounded-lg shadow-lg relative flex flex-col w-full py-[80px] bg-white outline-none focus:outline-none">
                <p className=' font-poppins text-[24px] font-bold '>Please confirm the plan!</p>
                <div className=' my-10 font-poppins flex flex-col gap-y-1 font-semibold text-gray-600'>
                  <div className=' w-full flex flex-row'>
                    <p className=' w-24 text-left'>Start date:</p>
                    <p>{formatDate(firstDate).date}</p>
                  </div>
                  <div className=' w-full flex flex-row'>
                    <p className=' w-24 text-left'>End date:</p>
                    <p>{formatDate(lastDate).date}</p>
                  </div>
                  <div className=' w-full flex flex-row'>
                    <p className=' w-24 text-left'>Hours limit:</p>
                    <p>{hours} hours</p>
                  </div>
                  <div className=' w-full flex flex-row items-end'>
                    <p className=' w-24 text-left'>Total price:</p>
                    <p className=' text-green-700 text-[20px]'>${hours * hourly}</p>
                  </div>
                </div>
                <div className=' w-full flex flex-row justify-between'>
                  <p onClick={() => { setShowModal(false); }} className=' w-20 h-8 flex flex-row justify-center items-center bg-red-500 hover:bg-red-600 rounded-md text-white cursor-pointer'>Cancel</p>
                  <p onClick={() => { onPay(); }} className=' w-20 h-8 flex flex-row justify-center items-center bg-green-600 hover:bg-green-700 rounded-md text-white cursor-pointer'>Purchase</p>
                </div>
              </div>
            </div>
          </div>
          <div className=' w-full h-full absolute left-0 top-0 z-40 bg-gray-900 backdrop-blur-50 blur-50 opacity-50'></div>
        </>
      ) : null}
    </div>
  )
}
