import React from 'react'
import TimelineComponent from './TimelineComponent'
import dummyData from '../../dummydata'

export default function HistoryTimeline() {
  return (
    <div className=' w-full mt-[120px]'>
      <p className=' text-[48px] font-poppins font-bold text-left leading-none'>History of the home</p>

      <div className="w-full mt-[40px]">
        <div className=" w-full">

          <TimelineComponent date={dummyData.historyData[0].date} title={dummyData.historyData[0].title} description={dummyData.historyData[0].description} />
          <TimelineComponent date={dummyData.historyData[1].date} title={dummyData.historyData[1].title} description={dummyData.historyData[1].description} />
          <TimelineComponent date={dummyData.historyData[2].date} title={dummyData.historyData[2].title} description={dummyData.historyData[2].description} />
          <TimelineComponent date={dummyData.historyData[3].date} title={dummyData.historyData[3].title} description={dummyData.historyData[3].description} />
          <div className="relative pl-8 sm:pl-32 py-6 group">
            {/* <!-- Purple label --> */}
            {/* <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">The origin</div> */}
            {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
            <div
              className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:box-content after:border-green-6000 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
