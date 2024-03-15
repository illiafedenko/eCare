import React, {useState, useEffect} from 'react'

export default function RatioDiv(props) {

  useEffect(() => {
    const width = getComputedStyle(document.getElementById("ratiodiv")).width.toString().slice(0, -2) / 1;
    console.log(width * props.ratio + "px");
    document.getElementById("ratiodiv").style.height = width * props.ratio + "px";
  }, [])
  

  return (
    <div id="ratiodiv" className=' bg-gray-400' >
      {props.children}
    </div>
  );
}
