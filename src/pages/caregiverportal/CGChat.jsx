import React, { useState, useEffect } from 'react'
import logoImage from '../../assets/images/logo.png';
import avatar from '../../assets/images/caregiver6.png'
import dashboardIcon from '../../assets/images/dashboardicon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faDatabase, faMeteor, faTh, faThLarge, faThermometer4, faSearch, faEllipsisH, faPhoneVolume, faVideoCamera, faCheckDouble, faClose, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import SideBar from '../../components/special/SideBar';
import dummyData from '../../dummydata';
import HorizontalMouseDraggableCardList from '../../components/special/HorizontalMouseDraggableCardList';
import SeniorInfoViewCard from '../../components/special/SeniorInfoViewCard';
import CGPortalNavBar from '../../components/special/CGPortalNavBar';
import ChatContactItem from '../../components/special/ChatContactItem';
import AccordionComponent from '../../components/special/AccordionComponent';
import ChatHistoryFileItem from '../../components/special/ChatHistoryFileItem';
import ChatHistoryImageItem from '../../components/special/ChatHistoryImageItem';
import DynamicTextArea from '../../components/special/DynamicTextArea';
import SentMessage from '../../components/special/SentMessage';
import ReceivedMessage from '../../components/special/ReceivedMessage';

export default function CGChat() {

  const handleSidebarShow = () => {
    document.getElementById("left_sidebar").classList.toggle("hidden");
    document.getElementById("blur_board").classList.toggle("hidden");
  }

  return (
    <div className=" w-full h-screen min-h-screen max-h-screen flex flex-row relative ">
      <SideBar portalname="cgportal" menu={dummyData.CGMenu} current="chat" />
      <div onClick={handleSidebarShow} id="blur_board" className=' w-full h-screen absolute hidden left-0 top-0 backdrop-blur-[1px] z-[5]'></div>
      <div className=' flex-grow h-full flex flex-col'>
        <CGPortalNavBar current="Chat" name="John Doe" />
        <div className='  w-full h-[calc(100vh-100px)] flex flex-row'>
          {/* chat left contact list */}
          <div className=' w-[360px] min-w-[360px] h-full flex-none flex-col '>
            <div className=' w-full h-[80px] px-[24px] gap-5 flex flex-row items-center justify-between'>
              <div className=' flex flex-grow h-[48px] relative'>
                <input
                  className=' w-full text-[18px] font-poppins text-gray-600 pl-10 pr-6 h-full border-[1px] border-gray-300 bg-gray-50 focus:border-blue-500 outline-none rounded-full'
                  placeholder="Search for chats..."
                  name="search"
                />
                <div className=' absolute w-[36px] h-full flex flex-col items-center justify-center left-1 top-0'>
                  <FontAwesomeIcon className=' w-4 h-4 text-gray-500' icon={faSearch} />
                </div>
              </div>
              <FontAwesomeIcon className=' text-[20px] text-gray-500' icon={faEllipsisH} />
            </div>
            <div className=' w-full h-[calc(100vh-180px)] flex-col dynamic-scroll overflow-y-auto'>
              <ChatContactItem avatar={dummyData.seniors[0].avatar} unread={1} />
              <ChatContactItem avatar={dummyData.seniors[1].avatar} unread={0} selected />
              <ChatContactItem avatar={dummyData.seniors[0].avatar} unread={3} />
              <ChatContactItem avatar={dummyData.seniors[0].avatar} unread={0} />
              <ChatContactItem avatar={dummyData.seniors[0].avatar} unread={2} />
              <ChatContactItem avatar={dummyData.seniors[0].avatar} unread={0} />
              <ChatContactItem avatar={dummyData.seniors[0].avatar} unread={1} />
              <ChatContactItem avatar={dummyData.seniors[0].avatar} unread={0} />
            </div>
          </div>
          <div className=' flex flex-grow h-[calc(100vh-100px)] flex-col'>
            {/* Chat header */}
            <div className=' w-full h-[80px] flex flex-row items-center justify-between px-8 py-[10px] border-[1px] border-t-0 border-gray-100'>
              <div className=' h-full flex flex-row gap-x-3'>
                <div className=' h-full aspect-square'>
                  <img className=' w-full h-full object-cover rounded-full' src={dummyData.seniors[1].avatar}></img>
                </div>
                <div className=' h-full text-left flex flex-col leading-none gap-y-1 items-center justify-center'>
                  <p className=' text-[20px] line-clamp-1 font-poppins font-semibold'>{dummyData.seniors[1].name}</p>
                  <div className=' flex flex-row gap-1 items-center justify-start'>
                    <div className=' w-2 h-2 rounded-full bg-green-600'></div>
                    <p className=' text-[16px] line-clamp-1 font-poppins text-gray-600'>Active Now</p>
                  </div>
                </div>
              </div>
              <div className=' h-[48px] flex flex-row gap-3'>
                <div className=' h-full aspect-square border-[1px] border-gray-100 hover:bg-gray-100 flex flex-row items-center justify-center rounded-full hover:cursor-pointer'>
                  <FontAwesomeIcon className=' text-[20px] text-green-600 pt-[2px]' icon={faPhoneVolume} />
                </div>
                <div className=' h-full aspect-square border-[1px] border-gray-100 hover:bg-gray-100 flex flex-row items-center justify-center rounded-full hover:cursor-pointer'>
                  <FontAwesomeIcon className=' text-[20px] text-green-600 pt-[2px]' icon={faVideoCamera} />
                </div>
                <div className=' h-full aspect-square border-[1px] border-gray-100 hover:bg-gray-100 flex flex-row items-center justify-center rounded-full hover:cursor-pointer'>
                  <FontAwesomeIcon className=' text-[20px] text-gray-600 pt-[2px]' icon={faEllipsisH} />
                </div>
              </div>
            </div>
            {/* chat body */}
            <div className=' w-full h-[calc(100vh-180px)]  flex flex-col justify-end bg-gray-100 gap-y-3'>
              <div className=' w-full flex flex-col px-[40px] dynamic-scroll overflow-y-auto gap-y-5'>
                <ReceivedMessage avatar={dummyData.seniors[1].avatar} />
                <SentMessage avatar={dummyData.careGivers[0].avatar} />
                <ReceivedMessage avatar={dummyData.seniors[1].avatar} />
                <SentMessage avatar={dummyData.careGivers[0].avatar} />
                <ReceivedMessage avatar={dummyData.seniors[1].avatar} />
                <SentMessage avatar={dummyData.careGivers[0].avatar} />
              </div>
              <div className=' w-full px-[40px]'>
                <DynamicTextArea />
              </div>
            </div>
          </div>
          <div className=' w-[360px] min-w-[360px] h-[calc(100vh-100px)] flex-none flex-col'>
            <div className=' w-full h-[80px] px-[24px] flex flex-row items-center justify-end'>
              <div className=' min-w-[36px] h-[36px] rounded-full border-[1px] border-gray-200 flex flex-row items-center justify-center hover:cursor-pointer'>
                <FontAwesomeIcon className=' text-gray-500 text-[16px] font-extralight' icon={faClose} />
              </div>
            </div>
            <div className=' w-full h-[calc(100vh-180px)] dynamic-scroll overflow-auto px-6 py-3 flex flex-col justify-start'>
              <div className=' w-full flex flex-col items-center gap-2'>
                <img className=' w-[120px] h-[120px] object-cover rounded-full border-[5px] border-green-700' src={dummyData.seniors[0].avatar} />
                <p className=' text-[24px] font-semibold leading-none font-poppins text-center'>Jane Doe</p>
                <p className=' text-[16px] font-poppins leading-none'>@janedoe.ecare</p>
              </div>
              <div className=' w-full bg-gray-700 my-6 border-t-[1px] border-gray-200'></div>
              <div className=' w-full flex flex-row justify-between items-center'>
                <p className=' text-[16px] font-poppins font-bold'>Notifications</p>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 rounded-full focus:outline-none focus:border-none peer dark:bg-gray-700 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                </label>
              </div>
              <div className=' w-full bg-gray-700 my-6 border-t-[1px] border-gray-200'></div>
              <AccordionComponent title="Recent Files" semititle="3 files">
                <div className=' w-full pt-5 flex flex-col'>
                  <ChatHistoryFileItem filename="Ecare.pdf" />
                  <ChatHistoryFileItem filename="Landing page.pdf" />
                  <ChatHistoryFileItem filename="Frontend.pdf" />
                  <ChatHistoryFileItem filename="Backend.pdf" />
                </div>
              </AccordionComponent>
              <div className=' w-full bg-gray-700 my-6 border-t-[1px] border-gray-200'></div>
              <AccordionComponent title="Recent Images" semititle="7 images">
                <div className=' w-full pt-5 grid grid-cols-3 gap-x-3 gap-y-3'>
                  <ChatHistoryImageItem image={dummyData.chatImageList[0]} />
                  <ChatHistoryImageItem image={dummyData.chatImageList[1]} />
                  <ChatHistoryImageItem image={dummyData.chatImageList[2]} />
                  <ChatHistoryImageItem image={dummyData.chatImageList[3]} />
                  <ChatHistoryImageItem image={dummyData.chatImageList[4]} />
                  <ChatHistoryImageItem image={dummyData.chatImageList[5]} />
                  <ChatHistoryImageItem image={dummyData.chatImageList[0]} />
                </div>
              </AccordionComponent>
              <div className=' w-full bg-gray-700 my-6 border-t-[1px] border-gray-200'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
