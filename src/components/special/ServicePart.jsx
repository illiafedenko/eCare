import React from 'react'

export default function ServicePart(props) {
  return (
    <div className=' mt-[120px] flex flex-row gap-[40px]'>
      <div className=' w-2/3'>
        <div className=' text-left'>
          <p className=' text-[48px] mb-[20px] font-poppins font-bold'>{props.serviceName}</p>
          <p className=' text-[18px] text-gray-600 font-poppins'>{props.brief}</p>
        </div>
        <div className=' text-left mt-[40px]'>
          <p className=' text-[32px]  mb-[20px] font-poppins font-bold'>Service Details</p>
          <p className=' text-[18px] text-gray-600 font-poppins'>{props.details}</p>
        </div>
      </div>
      <div className=' w-1/3 text-left flex flex-row items-center'>
        <div>
          <p className=' text-[32px] mb-[24px] font-poppins font-semibold'>
            Service Offerings
          </p>
          {
            props.offers.map((offer, i) => (
              <p key={i} className=' text-[18px] font-poppins'>{offer}</p>
            ))
          }
        </div>
      </div>
    </div>
  )
}
