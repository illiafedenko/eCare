import React, { useRef, useState, useEffect } from 'react'
import dummyData from '../../dummydata';

export default function HorizontalMouseDraggableCardList() {

  const draggableRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const [totalLength, setTotalLength] = useState(0);
  const [viewLength, setViewLength] = useState(0);
  const [dragging, setDragging] = useState(false)

  window.onresize = function () {
    try {
      setTotalLength(getComputedStyle(document.getElementById("slider_list")).width.slice(0, -2));
      setViewLength(getComputedStyle(document.getElementById("slider_area")).width.slice(0, -2));
    }
    catch {
    }
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
    setInitialPosition({
      x: event.clientX - position.x,
    });
    setDragging(false);
  };

  const handleMouseMove = (event) => {
    setDragging(true);
    event.preventDefault();
    event.stopPropagation();
    if (!isDragging) return;
    if (viewLength - totalLength >= 0) {
      setPosition({
        x: 0,
      });
      return;
    }
    else {
      const delta = Math.max(Math.min(event.clientX - initialPosition.x, 0), viewLength - totalLength);
      setPosition({
        x: delta,
      });
      return;
    }

  };

  const handleMouseUp = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsDragging(false);
  };



  useEffect(() => {
    setTotalLength(getComputedStyle(document.getElementById("slider_list")).width.slice(0, -2));
    setViewLength(getComputedStyle(document.getElementById("slider_area")).width.slice(0, -2));
  }, [])

  const handleAgendaClick = (e, id) => {
    if (dragging) return;
    e.stopPropagation();
    console.log(id);
  }

  return (
    <div
      ref={draggableRef}
      id="slider_list"
      className="absolute cursor-pointer flex flex-row gap-x-3 overflow-hidden"
      style={{ left: position.x }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {
        dummyData.seniors.map((item, i) => {
          return (
            <div onClick={(e) => handleAgendaClick(e, i)} key={i} className=' select-none  overflow-hidden min-w-[350px] w-[350px] h-24 border-[1px] px-4 flex flex-row items-center justify-between bg-white border-gray-100 rounded-[24px]'>
              <div className=' flex flex-row justify-start items-center gap-3'>
                <img className=' pointer-events-none w-[60px] h-[60px] object-cover rounded-full' src={item.avatar}></img>
                <div className=' flex flex-col text-left'>
                  <p className=' text-[20px] line-clamp-1 font-raleway'>{item.name}</p>
                  <p className=' text-[12px] font-poppins font-bold text-green-600'>Care giver</p>
                </div>
              </div>
              <p className=' text-[12px] font-raleway font-bold'>2’30 hours left</p>
            </div>
          )
        })
      }
    </div>
  )
}