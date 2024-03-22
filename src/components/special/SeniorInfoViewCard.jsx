import React from 'react'
import { faBagShopping, faGenderless, faLocationPin, faMedal, faStar, faStarAndCrescent, faStarHalf, faStarHalfAlt, faStarHalfStroke, faStarOfDavid, faStarOfLife, faTransgender, faTransgenderAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MiniGradientButton from '../general/MiniGradientButton'
import { useNavigate } from 'react-router'

export default function SeniorInfoViewCard(props) {

  const navigate = useNavigate();

  const handleNavigate = (id) => {
    const path = "/senior/" + id;
    console.log(path);
    navigate(path);
  }

  return (
    <div className=' w-full rounded-[8px] min-w-[240px] max-w-[320px] border-[2px] border-gray-200'>
      <div className=' w-full aspect-4/3'>
        <img className=' w-full h-full object-cover rounded-t-[8px]' src={props.senior.avatar} />
        <div className=' py-5 px-3 w-full flex flex-col gap-4'>
          <div className=' w-full flex flex-row justify-between'>
            <div className=' flex flex-col items-start'>
              <div className=' flex flex-row items-center gap-1'>
                <p className=' text-[24px] font-poppins font-bold'>{props.senior.name}</p>
                <div className=' w-[20px] h-[20px] flex flex-row items-center justify-center bg-gradient-to-br from-green-600 to-green-300 rounded-[8px]'>
                  <FontAwesomeIcon className=' w-3 h-3 text-white' icon={faStar} />
                </div>
              </div>
              <p className=' text-[16px] text-green-600 font-poppins font-bold'>Care Give</p>
            </div>
            <div className=' flex flex-col items-end py-2'>
              <p className=" text-[12px] h-[20px] text-center min-w-[90px] rounded-full bg-gray-200 px-2 font-medium text-green-600">Mon-Fri</p>
            </div>
          </div>
          <div className=' w-full grid grid-cols-3 gap-2'>
            <div className=" text-[12px] h-[30px] flex flex-row justify-center items-center gap-2 rounded-full bg-gray-200 px-2 font-bold">
              <FontAwesomeIcon className=' text-green-600 font-poppins font-bold' icon={faLocationPin} />
              <p className=' text-[12px] font-poppins font-bold'>{props.senior.location}</p>
            </div>
            <div className=" text-[12px] h-[30px] flex flex-row justify-center items-center gap-2 rounded-full bg-gray-200 px-2 font-bold">
              <FontAwesomeIcon className=' text-green-600 font-poppins font-bold' icon={faMedal} />
              <p className=' text-[12px] font-poppins font-bold'>{props.senior.age}</p>
            </div>
            <div className=" text-[12px] h-[30px] flex flex-row justify-center items-center gap-2 rounded-full bg-gray-200 px-2 font-bold">
              <FontAwesomeIcon className=' text-green-600 font-poppins font-bold' icon={faTransgenderAlt} />
              <p className=' text-[12px] font-poppins font-bold'>{props.senior.gender}</p>
            </div>
          </div>
          <div className=' w-full h-[50px] '>
            <button className="text-white w-full h-full font-poppins bg-gradient-to-br from-green-600 to-green-400 hover:from-green-600 hover:to-green-300 border-none outline-none focus:border-none focus:outline-none rounded-2" onClick={() => handleNavigate(props.id)} >View</button>
          </div>
        </div>
      </div>
    </div>
  )
}
