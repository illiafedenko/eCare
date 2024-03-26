import React from 'react'
import Select from 'react-select';
import { useState, useEffect } from 'react';

export default function SmallSelect(props) {

  useEffect(() => {
    // document.getElementsByClassName("select__control").style.height= "60px"
    for (let i = 0; i < document.getElementsByClassName("select__control").length; i++) {
      document.getElementsByClassName("select__control")[i].style.height = "48px";
      document.getElementsByClassName("select__control")[i].style.border = "1px solid #e2e2e2";
    }
  }, [])

  return (
    <div className=' w-full flex flex-col items-start'>
      <span className=' font-poppins text-left'>{props.label}</span>
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
          placeholder={props.placeholder}
          options={props.options}
        />
      </div>
    </div>
  )
}
