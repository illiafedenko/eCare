import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Header from '../components/general/Header';
import Footer from '../components/general/Footer';
import dummyData from '../dummydata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faLocationPin, faMedal, faStar, faTransgenderAlt } from '@fortawesome/free-solid-svg-icons';

export default function Senior() {

  const { id } = useParams();

  return (
    <div className=' w-full h-full flex-col'>
      <Header current="caregivers" />
      <div className=' w-full flex flex-col px-[40px] md:px-[50px] lg:px-[100px]'>
        <div className=' w-full mt-[50px] flex flex-col sm:flex-row gap-x-10'>
          <div className=' w-[250px] h-[250px] rounded-[25px] flex-none'>
            <img className=' w-full h-full object-cover rounded-[25px]' src={dummyData.seniors[id].avatar}></img>
          </div>
          <div className=' py-5 px-3 flex flex-grow-1 flex-col gap-y-[20px]'>
            <div className=' w-full flex flex-col xl:flex-row gap-y-[20px] justify-between'>
              <div className=' flex flex-col items-start'>
                <div className=' flex flex-row items-center gap-8'>
                  <p className=' text-[36px] md:text-[48px] leading-none font-poppins font-bold'>{dummyData.seniors[id].name}</p>
                  <div className=' w-[24px] h-[24px] flex flex-row items-center justify-center bg-gradient-to-br from-green-600 to-green-300 rounded-[8px]'>
                    <FontAwesomeIcon className=' w-4 h-4 text-white' icon={faStar} />
                  </div>
                </div>
                <p className=' text-[20px] text-green-600 font-poppins font-bold'>Senior</p>
              </div>
              <div className=' flex flex-row items-center sm:flex-col sm:items-start md:flex-row md:items-center gap-x-[8px] gap-y-[8px]'>
                <div className=" text-[12px] h-[30px] flex flex-row justify-center items-center gap-2 rounded-full bg-gray-200 px-2 font-bold">
                  <FontAwesomeIcon className=' text-green-600 font-poppins font-bold' icon={faLocationPin} />
                  <p className=' text-[12px] font-poppins font-bold'>{dummyData.seniors[id].location}</p>
                </div>
                <div className=" text-[12px] h-[30px] flex flex-row justify-center items-center gap-2 rounded-full bg-gray-200 px-2 font-bold">
                  <FontAwesomeIcon className=' text-green-600 font-poppins font-bold' icon={faTransgenderAlt} />
                  <p className=' text-[12px] font-poppins font-bold'>{dummyData.seniors[id].gender}</p>
                </div>
                <div className=" text-[12px] h-[30px] flex flex-row justify-center items-center gap-2 rounded-full bg-gray-200 px-2 font-bold">
                  <FontAwesomeIcon className=' text-green-600 font-poppins font-bold' icon={faMedal} />
                  <p className=' text-[12px] font-poppins font-bold'>{dummyData.seniors[id].age}</p>
                </div>
                <div className=" text-[12px] h-[30px] flex flex-row justify-center items-center gap-2 rounded-full bg-gray-200 px-2 font-bold">
                  <p className=" text-[12px] text-green-600 font-poppins font-bold">Available</p>
                </div>

              </div>
            </div>
            <div className=' w-full '>
              <p className=' w-full text-[18px] font-raleway text-gray-600 text-left'>
                {dummyData.seniors[id].description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
