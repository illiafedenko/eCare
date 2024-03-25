import React, { useState, useEffect } from 'react'

export default function AccordionComponent(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" w-full">
      <div className="rounded-md">
        <div className="flex justify-between items-center">
          <h3 className="text-[16px] font-poppins font-bold">{props.title} <span className=' text-[14px] font-light text-gray-400'>&#40; {props.semititle} &#41;</span></h3>
          <svg onClick={toggleAccordion} className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300 w-6 h-6 hover:cursor-pointer`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="green" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
        </div>
        <div className={`transition-all duration-300 ${isOpen ? 'h-auto opacity-100' : 'h-0 opacity-0 hidden'}`}>
          {props.children}
        </div>
      </div>
    </div>
  );
}
