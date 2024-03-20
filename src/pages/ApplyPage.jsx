import React from 'react'
import Header from '../components/general/Header'
import Footer from '../components/general/Footer'
import { useParams } from 'react-router'
import dummyData from '../dummydata'
import { faBagShopping, faLocationPin, faStar, faTransgenderAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BookComponent from '../components/special/BookComponent'
import WideImage from '../components/special/WideImage'
import mainImage from '../assets/images/payment_main.png';

export default function ApplyPage() {
  return (
    <div className=' w-full h-full flex-col'>
      <Header current="caregivers" />
      
      <WideImage image={mainImage} text={"Apply"} />

      <div className=' w-full flex flex-col px-[40px] md:px-[50px] lg:px-[100px]'>

        {/* Care Giver Info */}

        <div className=' w-full mt-[120px]'>
          <p className=' w-full text-center text-[48px] font-poppins font-bold'>Book</p>
          <div className=' w-full mt-[60px]'>
            <BookComponent />
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}
