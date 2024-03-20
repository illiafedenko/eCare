import React, { useState, useEffect } from 'react'
import Header from '../components/general/Header'
import Footer from '../components/general/Footer'
import MiniGradientButton from '../components/general/MiniGradientButton'
import mainImage from '../assets/images/home_image2.png';
import IconSelectBox from '../components/general/IconSelectBox';
import dummyData from '../dummydata';
import CareGiverBookCard from '../components/special/CareGiverBookCard';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faArrowRightLong, faBagShopping, faLocationPin, faSearch, faTransgenderAlt } from '@fortawesome/free-solid-svg-icons';

export default function CareGivers() {

  const cities = [];
  const genders = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];
  const professions = [
    { value: "Professor", label: "Professor" },
    { value: "Doctor", label: "Doctor" },
    { value: "Nurse", label: "Nurse" },
  ];

  useEffect(() => {
    dummyData.cityList.map((city, i) => {
      cities.push({
        value: city, label: city
      })
    })
    for (let i = 0; i < document.getElementsByClassName("select__control").length; i++) {
      document.getElementsByClassName("select__control")[i].style.height = "60px";
    }
    for (let i = 0; i < document.getElementsByClassName("select__value-container").length; i++) {
      document.getElementsByClassName("select__control")[i].style.paddingLeft = "24px";
    }
    for (let i = 0; i < document.getElementsByClassName("select__value-container").length; i++) {
      document.getElementsByClassName("select__indicator-separator")[i].classList.add("hidden");
    }

  }, [])

  return (
    <div className=' w-full h-full flex-col'>
      <Header current="caregivers" />
      {/* Image */}
      <div className=' w-full aspect-w-16 aspect-h-9 relative'>
        <img src={mainImage} className=' w-full h-full object-cover' ></img>
        <div className=' absolute left-0 top-0 w-full h-full flex flex-col justify-center'>
          <div className=' pl-[40px] md:pl-[50px] lg:pl-[100px] 2xl:w-3/5 w-4/5 w my-auto  flex flex-col gap-2 sm:gap-5'>
            <p className=' text-white font-bold text-[32px] sm:text-[40px] md:text-[60px] lg:text-[80px] leading-none text-left'>Find The Right Care Giver</p>
            <p className=' text-white text-[12px] sm:text-[18px] text-left'>Lorem ipsum dolor sit amet consectetur. Mattis aenean quis cursus consectetur tortor facilisis vulputate.</p>
            <div className=' flex flex-row justify-start'><div className=' w-[100px] h-[32px] sm:w-[130px] sm:h-[50px] text-[12px] sm:text-[16px]'><MiniGradientButton text="Apply now" /></div></div>
          </div>
        </div>
      </div>

      <div className=' w-full flex flex-col px-[40px] md:px-[50px] lg:px-[100px]'>
        {/* Filters */}
        <div className=' mt-[120px] flex flex-col'>
          <p className=' text-[48px] font-poppins font-bold'>Care Givers</p>
          <p className=' text-[24px] font-raleway font-bold py-[24px] pl-[24px] text-left'>Filter</p>
          <div className=' px-[24px]  w-full flex flex-col xl:flex-row gap-x-[48px] gap-y-[24px] justify-between'>
            <div className=' flex flex-col sm:flex-row gap-x-[24px] gap-y-[24px]'>
              <div className=' w-[230px] h-[60px] relative'>
                <Select
                  className="basic-single text-left w-full outline-none h-full text-[18px]"
                  classNamePrefix="select"
                  defaultValue={cities[0]}
                  isDisabled={false}
                  isLoading={false}
                  isClearable={true}
                  isRtl={false}
                  isSearchable={true}
                  name="city"
                  placeholder="City"
                  options={cities}
                />
                <div className=' absolute w-[36px] h-full flex flex-col items-center justify-center left-0 top-0'>
                  <FontAwesomeIcon className=' w-4 h-4 text-gray-500' icon={faLocationPin} />
                </div>
              </div>
              <div className=' w-[230px] h-[60px] relative'>
                <Select
                  className="basic-single text-left w-full outline-none h-full text-[18px]"
                  classNamePrefix="select"
                  defaultValue={cities[0]}
                  isDisabled={false}
                  isLoading={false}
                  isClearable={true}
                  isRtl={false}
                  isSearchable={true}
                  name="gender"
                  placeholder="Gender"
                  options={genders}
                />
                <div className=' absolute w-[36px] h-full flex flex-col items-center justify-center left-0 top-0'>
                  <FontAwesomeIcon className=' w-4 h-4 text-gray-500' icon={faTransgenderAlt} />
                </div>
              </div>
              <div className=' w-[230px] h-[60px] relative'>
                <Select
                  className="basic-single text-left w-full outline-none h-full text-[18px]"
                  classNamePrefix="select"
                  defaultValue={cities[0]}
                  isDisabled={false}
                  isLoading={false}
                  isClearable={true}
                  isRtl={false}
                  isSearchable={true}
                  name="profession"
                  placeholder="Profession"
                  options={professions}
                />
                <div className=' absolute w-[36px] h-full flex flex-col items-center justify-center left-0 top-0'>
                  <FontAwesomeIcon className=' w-4 h-4 text-gray-500' icon={faBagShopping} />
                </div>
              </div>
            </div>
            <div className=' flex flex-grow max-w-[500px] h-[60px] relative'>
              <input
                className=' w-full text-[18px] px-4 h-full border-[1px] border-gray-300 focus:border-blue-500 outline-none rounded-[4px]'
                placeholder="Search"
                name="search"
              />
              <div className=' absolute w-[36px] h-full flex flex-col items-center justify-center right-0 top-0'>
                <FontAwesomeIcon className=' w-4 h-4 text-gray-500' icon={faSearch} />
              </div>
            </div>
          </div>
        </div>



        <div className=' w-full mt-[120px] grid md:grid-cols-2 xl:grid-cols-3 justify-center gap-x-[24px] gap-y-[48px]'>
          {
            dummyData.careGivers.map((careGiver, i) => {
              return (
                <CareGiverBookCard key={i} id={i} careGiver={careGiver} />
              )
            })
          }
        </div>

        <div className=' w-full h-[80px] mt-[80px] flex flex-row items-center justify-between border-t-[1px] border-gray-200'>
          <p className=' text-[16px] font-poppins font-bold text-gray-600'>1-10 of 60</p>
          <div className=' flex flex-row gap-x-[12px]'>
            <div className=' w-[60px] h-[60px] rounded-full flex flex-row items-center justify-center border-[1px] border-gray-200 hover:cursor-pointer'>
              <FontAwesomeIcon className=' w-6 h-6 text-gray-500' icon={faArrowLeftLong} />
            </div>
            <div className=' w-[60px] h-[60px] rounded-full flex flex-row items-center justify-center border-[1px] bg-gray-100 border-gray-200 hover:cursor-pointer'>
              <FontAwesomeIcon className=' w-6 h-6 text-gray-500' icon={faArrowRightLong} />
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}
