import React from 'react'
import Header from '../components/general/Header';
import WideImage from '../components/special/WideImage';
import mainImage from '../assets/images/service_main.png';
import Footer from '../components/general/Footer';
import ServicePart from '../components/special/ServicePart';
import DietarySerivceCard from '../components/special/DietarySerivceCard';
import dummyData from '../dummydata';
import SocialActivityCard from '../components/special/SocialActivityCard';


export default function ServicesPage() {
  return (
    <div className=' flex flex-col w-full '>
      <Header current="services" />
      <WideImage image={mainImage} text="About Us" />
      <div className=' w-full flex flex-col px-[40px] md:px-[50px] lg:px-[100px]'>

        {
          dummyData.servicesData.map((service, i) => {
            return (
              <ServicePart key={i} serviceName={service.name} brief={service.description} details={service.details} offers={service.offers} />
            )
          })
        }

        {/* diet service */}
        <div className=' mt-[120px]'>
          <p className=' text-center text-[48px] font-poppins font-bold'>Dietary Services</p>
          <div className=' mt-[60px] grid grid-cols-2 lg:grid-cols-3 gap-x-[24px] gap-y-[48px]'>
            {
              dummyData.dietData.map((diet, i) => {
                return (
                  <DietarySerivceCard key={i} name={diet.name} image={diet.image} description={diet.description} />
                )
              })
            }
          </div>
        </div>

        {/* social activities */}
        <div className=' mt-[120px]'>
          <p className=' text-center text-[48px] font-poppins font-bold'>Recreational and Social Activities</p>
          <div className=' mt-[60px] grid grid-cols-2 gap-x-[24px] gap-y-[48px]'>
            {
              dummyData.socialActivitys.map((socialActivity, i) => {
                return (
                  <SocialActivityCard key={i} name={socialActivity.name} image={socialActivity.image} description={socialActivity.description} />
                )
              })
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
