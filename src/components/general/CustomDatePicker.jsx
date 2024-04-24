import React, { useState, useEffect } from 'react'
import DatePicker from 'react-multi-date-picker';
import Datepicker from 'react-tailwindcss-datepicker';

export default function CustomDatePicker(props) {

  useEffect(() => {
    document.getElementById("datepicker").getElementsByTagName("input")[0].style.outline = "none";
    document.getElementById("datepicker").getElementsByTagName("input")[0].style.border = "2px solid #aaaaaa";
    document.getElementById("datepicker").getElementsByTagName("input")[0].style.fontFamily = "poppins";
  }, [])



  return (
    <div id="datepicker">
      <Datepicker multiple value={props.value} onChange={props.onChange} />
    </div>
  )
}
