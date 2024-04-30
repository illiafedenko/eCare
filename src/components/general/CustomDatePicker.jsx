import React, { useState, useEffect } from 'react'
import DatePicker from 'react-multi-date-picker';
import Datepicker from 'react-tailwindcss-datepicker';

export default function CustomDatePicker(props) {

  useEffect(() => {
    document.getElementById("datepicker").getElementsByTagName("input")[0].style.border = "none";
    document.getElementById("datepicker").getElementsByTagName("input")[0].style.outline = "1px solid #aaaaaa";
    document.getElementById("datepicker").getElementsByTagName("input")[0].style.fontFamily = "poppins";
    document.getElementById("datepicker").getElementsByTagName("input")[0].classList.remove('focused:ring-0');

    const datepickerInput = document.getElementById('datepicker').getElementsByTagName('input')[0];

    datepickerInput.addEventListener('focus', () => {
      document.getElementById("datepicker").getElementsByTagName("input")[0].style.outline = "none";
      document.getElementById("datepicker").getElementsByTagName("input")[0].style.border = "none";
    });

    datepickerInput.addEventListener('blur', () => {
      document.getElementById("datepicker").getElementsByTagName("input")[0].style.outline = "1px solid #aaaaaa";
      document.getElementById("datepicker").getElementsByTagName("input")[0].style.border = "none";
    });

  }, [])



  return (
    <div id="datepicker" className=''>
      <Datepicker
        multiple
        value={props.value}
        onChange={props.onChange}
        minDate={new Date()}
        primaryColor='green'
      />
    </div>
  )
}
