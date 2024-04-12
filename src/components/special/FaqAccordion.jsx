import React from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function FaqAccordion(props) {

  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      {
        props.data.map((item, i) => {
          return <Accordion key={i} open={open === i + 1}>
            <AccordionHeader className='focus:outline-none border-t-0 border-r-0 border-l-0 border-b-[2px] rounded-none border-gray-200 hover:border-gray-200  text-gray-600 focus:border-gray-200  hover:text-green-600' onClick={() => handleOpen(i + 1)}>
              <p className=' text-[20px] font-poppins font-normal'>
                {item.question}
              </p>
            </AccordionHeader>
            <AccordionBody>
              <p className=' text-[16px] text-left px-5 font-poppins'>
                {item.answer}
              </p>
            </AccordionBody>
          </Accordion>
        })
      }
    </>
  )
}
