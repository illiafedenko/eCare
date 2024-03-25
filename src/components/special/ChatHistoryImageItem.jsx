import React from 'react'


export default function ChatHistoryImageItem(props) {
  return (
    <div className=' relative w-full aspect-square hover:cursor-pointer'>
      <img className=' w-full h-full object-cover rounded-[20px]' src={props.image} />
      <div className=' absolute w-full h-full rounded-[20px] bg-gray-900 opacity-0 hover:opacity-50 left-0 top-0 z-10'></div>
    </div>
  )
}
