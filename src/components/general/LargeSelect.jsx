import React from 'react'
import Select from 'react-select';
import { useState, useEffect } from 'react';

export default function LargeSelect(props) {

  useEffect(() => {
    // document.getElementsByClassName("select__control").style.height= "60px"
    for(let i = 0; i < document.getElementsByClassName("select__control").length; i ++) {
      document.getElementsByClassName("select__control")[i].style.height= "60px";
    }
  }, [])
  

  return (
    <div className=' w-full flex flex-col items-start gap-[16px]'>
      <p className=' w-full text-[20px] text-left font-poppins font-bold'>{props.label}</p>
      <div className=' w-full h-[60px]'>
        <Select
          className="basic-single text-left w-full outline-none h-full text-[18px]"
          classNamePrefix="select"
          defaultValue={props.options[0]}
          isDisabled={false}
          isLoading={false}
          isClearable={true}
          isRtl={false}
          isSearchable={true}
          name="color"
          placeholder ={props.placeholder}
          options={props.options}
        />
      </div>
    </div>
  )
}
