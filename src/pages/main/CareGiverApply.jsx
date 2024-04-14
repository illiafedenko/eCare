import React, { useState, useEffect } from 'react';
import imageSrc from '../../assets/images/register_image.png';
import logoSrc from '../../assets/images/logo.png';
import NormalInput from '../../components/general/NormalInput';
import GradientButton from '../../components/general/GradientButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faBook, faCheck, faContactCard, faLocation, faLocationPin, faPerson, faUser } from '@fortawesome/free-solid-svg-icons';
import IconStepper from '../../components/general/IconStepper';
// import { Stepper, Step, Button } from "@material-tailwind/react";
// import { Button } from "@material-tailwind/react";

export default function CareGiverApply() {

  const [activeStep, setActiveStep] = useState(0);
  const [isFirstStep, setIsFirstStep] = useState(true);
  const [isLastStep, setIsLastStep] = useState(false);

  const handleNext = () => {
    if (activeStep < Math.ceil(document.getElementById("stepper").children.length / 2)) {
      setActiveStep(activeStep + 1);
    }
  };
  const handlePrev = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };
  useEffect(() => {
    setIsFirstStep(activeStep == 0 ? true : false);
    setIsLastStep(activeStep == Math.ceil(document.getElementById("stepper").children.length / 2) ? true : false);
  }, [activeStep])




  return (
    <div className=" relative py-[26px] px-[50px] h-screen w-full">
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-[17px] h-[calc(100vh-52px)]'>
        {/* <div className=" flex flex-col lg:flex-row min-h-full "> */}
        <div className='w-full my-0 lg:pl-0'>
          <div className='w-full p-0 m-0 h-full min-h-[500px] aspect-video relative '>
            <img className="img-fluid rounded-2xl xl:rounded-tl-[20px] xl:rounded-bl-[20px] xl:rounded-tr-[200px] xl:rounded-br-[200px] h-full object-cover w-full" src={imageSrc} alt="register" />
            <img className=' absolute top-5 left-10 ' src={logoSrc} />
          </div>
        </div>
        <div className=" w-full  pt-3 lg:px-[48px] lg:py-0 ">
          <IconStepper currentStep={activeStep}>
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon icon={faContactCard} />
            <FontAwesomeIcon icon={faLocationPin} />
            <FontAwesomeIcon icon={faBook} />
            <FontAwesomeIcon icon={faAddressCard} />
          </IconStepper>
          <div className=' mt-[100px]'>
            {
              
            }
          </div>
          <div className=' mt-[100px] w-full flex flex-row justify-between'>
            <div onClick={handlePrev} className={` w-[100px] h-[30px] text-white ${isFirstStep ? 'bg-gray-400' : 'bg-green-500'} rounded-[8px] cursor-pointer flex flex-row items-center justify-center `}><p className=' text-[16px] font-poppins font-bold select-none'>Previous</p></div>
            <div onClick={handleNext} className={` w-[100px] h-[30px] text-white ${isLastStep ? 'bg-gray-400' : 'bg-green-500'} rounded-[8px] cursor-pointer flex flex-row items-center justify-center `}><p className=' text-[16px] font-poppins font-bold select-none'>Next</p></div>
          </div>
        </div>
      </div>

    </div >
  )
}
