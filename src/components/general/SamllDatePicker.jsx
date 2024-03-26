import React from 'react'
import { DatePicker } from 'rsuite';


export default function SamllDatePicker(props) {

  // useEffect(() => {
  //   // document.getElementsByClassName("select__control").style.height= "60px"
  //   for (let i = 0; i < document.getElementsByClassName("select__control").length; i++) {
  //     document.getElementsByClassName("select__control")[i].style.height = "48px";
  //     document.getElementsByClassName("select__control")[i].style.border = "1px solid #e2e2e2";
  //   }
  // }, [])

  return (
    <div className=' w-full flex flex-col items-start'>
      <span className=' font-poppins text-left'>{props.label}</span>
      <div className=' w-full h-[48px]'>
        <DatePicker />
      </div>
    </div>
  )
}
