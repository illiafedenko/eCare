import React from 'react'

export default function TimelineComponent(props) {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      {/* <!-- Purple label --> */}
      {/* <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">The origin</div> */}
      {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
      <div
        className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-green-600 after:border-4 after:box-content after:border-green-6000 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
        <p
          className=" text-[32px] font-poppins sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center font-semibold uppercase w-20 h-6 mb-3 sm:mb-0">
            {props.date}
          </p>
        <div className="text-[32px] text-left leading-none font-poppins translate-y-0.5 inline-flex items-center justify-center font-semibold h-6 mb-3">{props.title}</div>
      </div>
      {/* <!-- Content --> */}
      <div className=" text-[18px] text-gray-500 font-poppins text-left">{props.description}</div>
    </div>
  )
}
