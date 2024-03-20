import React from 'react'
import Header from '../components/general/Header'
import Footer from '../components/general/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import dummyData from '../dummydata'

export default function PaymentDetailPage() {
  return (
    <div className=' w-full h-full flex-col'>
      <Header current="payment" />

      <div className=' w-full flex flex-col px-[40px] md:px-[50px] lg:px-[100px]'>
        <div className=' w-full mt-[60px] grid grid-cols-1 xl:grid-cols-2 gap-y-[60px]'>
          <div className=' w-full xl:pr-[60px] h-[600px]'>
            <div className=' w-full h-full px-[40px] py-[40px] border-[1px] border-gray-100 rounded-[20px] bg-gray-50'>
              <p className=' text-[20px] text-left font-raleway font-bold'>Confirm payment</p>
              <div className=' w-full pt-[72px]'></div>
            </div>
          </div>
          <div className=' w-full flex flex-col gap-y-[20px]'>
            <p className=' w-full text-[20px] text-left font-poppins'>Your payment summary</p>
            <div className=' w-full px-[40px]  pt-[32px] pb-[100px] flex flex-col sm:flex-row justify-between gap-y-[32px] border-[2px] rounded-[8px] border-green-600 bg-gradient-to-br from-green-700 to-green-300'>
              <div className=' flex flex-col sm:max-w-[400px] flex-grow gap-[20px]'>
                <div className=' bg-yellow-400 w-[80px] rounded-[6px] px-3 mb-2'>
                  Popular
                </div>
                <div className=' w-full flex flex-col'>
                  {
                    dummyData.serviceOffers.map((service, i) => {
                      if (!service.current) {
                        return (
                          <div key={i} className=' w-full flex flex-row items-center gap-[8px]'>
                            <FontAwesomeIcon className=' text-white' icon={faCheckCircle} />
                            <div className=' text-left w-full flex flex-row justify-between items-center gap-2'>
                              <p className=' text-[14px] text-white h-[24px] line-clamp-1'>{service.name}</p>
                              <span className=" text-[12px] h-[20px]  min-w-[90px] inline-flex items-center rounded-md bg-green-200 px-2 font-medium text-green-700">Coming soon</span>
                            </div>
                          </div>
                        )
                      }
                      else {
                        return (
                          <div key={i} className=' w-full flex flex-row items-center gap-[8px]'>
                            <FontAwesomeIcon className=' text-white' icon={faCheckCircle} />
                            <div className=' text-left w-full flex flex-row justify-between items-center gap-2'>
                              <p className=' text-[14px] text-white h-[24px] line-clamp-1'>{service.name}</p>
                              <span className=" text-[12px] h-[20px]  min-w-[90px] "></span>
                            </div>
                          </div>
                        )
                      }
                    })
                  }
                </div>
              </div>
              <div className=' sm:min-w-[170px] sm:max-w-[200px]  flex flex-row sm:flex-col w-full items-center  sm:items-end '>
                <p className=' w-[100px]font-raleway text-[16px] font-semibold py-[6px] px-[12px] bg-gray-100 rounded-[6px] uppercase'>Premium</p>
                <p className=' w-full text-[60px] text-white font-raleway font-extrabold text-right'>$1290</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
