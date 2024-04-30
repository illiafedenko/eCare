import React from 'react'
import CareGiverPortalMain from '../pages/main/CareGiverPortalMain'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import CGMeetAll from '../pages/caregiverportal/CGMeetAll';
import CGHome from '../pages/caregiverportal/CGHome'
import CGNotifications from '../pages/caregiverportal/CGNotifications';
import CGProfile from '../pages/caregiverportal/CGProfile';
import CGSchedule from '../pages/caregiverportal/CGSchedule';
import CGTraining from '../pages/caregiverportal/CGTraining';
import CGSetting from '../pages/caregiverportal/CGSetting';
import CGLogout from '../pages/caregiverportal/CGLogout';
import CGChat from '../pages/caregiverportal/CGChat';

export default function CareGiverRouter() {
  return (
    <div>
      {
        localStorage.getItem("userType") == "caregiver" ?
          <Routes>
            <Route exact path="/all" element={<CGMeetAll />} />
            <Route exact path="/" element={<CGHome />} />
            <Route exact path="/notification" element={<CGNotifications />} />
            <Route exact path="/profile" element={<CGProfile />} />
            <Route exact path="/chat/:opponentID" element={<CGChat />} />
            <Route exact path="/chat" element={<CGChat />} />
            <Route exact path="/schedule" element={<CGSchedule />} />
            <Route exact path="/training" element={<CGTraining />} />
            <Route exact path="/setting" element={<CGSetting />} />
            <Route exact path="/logout" element={<CGLogout />} />
          </Routes>
          :
          <>Access is forbidden</>
      }
    </div>
  )
}
