import React from 'react'
import CareGIverInfo from './CareGIverInfo'
import dummyData from '../../dummydata'

export default function MeetCareGivers() {
  return (
    <div className='w-full mt-[120px]'>
      <p className=' text-[48px] font-poppins font-bold text-center leading-none'>Meet Our Care Givers</p>
      <div className=' mt-[60px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[24px] gap-y-[48px]'>
        <CareGIverInfo avatar={dummyData.careGivers[0].avatar} name={dummyData.careGivers[0].name} rold={dummyData.careGivers[0].role} description={dummyData.careGivers[0].description} />
        <CareGIverInfo avatar={dummyData.careGivers[1].avatar} name={dummyData.careGivers[1].name} rold={dummyData.careGivers[1].role} description={dummyData.careGivers[1].description} />
        <CareGIverInfo avatar={dummyData.careGivers[2].avatar} name={dummyData.careGivers[2].name} rold={dummyData.careGivers[2].role} description={dummyData.careGivers[2].description} />
        <CareGIverInfo avatar={dummyData.careGivers[3].avatar} name={dummyData.careGivers[3].name} rold={dummyData.careGivers[3].role} description={dummyData.careGivers[3].description} />
        <CareGIverInfo avatar={dummyData.careGivers[4].avatar} name={dummyData.careGivers[4].name} rold={dummyData.careGivers[4].role} description={dummyData.careGivers[4].description} />
        <CareGIverInfo avatar={dummyData.careGivers[5].avatar} name={dummyData.careGivers[5].name} rold={dummyData.careGivers[5].role} description={dummyData.careGivers[5].description} />
        <CareGIverInfo avatar={dummyData.careGivers[6].avatar} name={dummyData.careGivers[6].name} rold={dummyData.careGivers[6].role} description={dummyData.careGivers[6].description} />
        <CareGIverInfo avatar={dummyData.careGivers[7].avatar} name={dummyData.careGivers[7].name} rold={dummyData.careGivers[7].role} description={dummyData.careGivers[7].description} />
      </div>
    </div>
  )
}
