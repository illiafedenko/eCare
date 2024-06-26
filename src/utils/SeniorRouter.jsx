import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import SeniorHome from '../pages/seniorportal/SeniorHome';
import SeniorProfile from '../pages/seniorportal/SeniorProfile';
import SeniorNotificatioins from '../pages/seniorportal/SeniorNotificatioins';
import SeniorSetting from '../pages/seniorportal/SeniorSetting';
import SeniorLogout from '../pages/seniorportal/SeniorLogout';
import SeniorSchedule from '../pages/seniorportal/SeniorSchedule';
import SeniorChat from '../pages/seniorportal/SeniorChat';

export default function SeniorRouter() {
  useEffect(() => {
  }, [])

  return (
    <div>
      {
        localStorage.getItem("userType") == "senior" ?
          <Routes>
            {/* <Route exact path="/all" element={<CGMeetAll />} /> */}
            <Route exact path="/" element={<SeniorHome />} />
            <Route exact path="/subscription" element={<SeniorProfile />} />
            <Route exact path="/notification" element={<SeniorNotificatioins />} />
            <Route exact path="/setting" element={<SeniorSetting />} />
            <Route exact path="/logout" element={<SeniorLogout />} />
            <Route exact path="/schedule" element={<SeniorSchedule />} />
            <Route exact path="/schedule/self" element={<SeniorSchedule />} />
            <Route exact path="/schedule/help" element={<SeniorSchedule />} />
            <Route exact path="/chat" element={<SeniorChat />} />
            <Route exact path="/chat/:opponentID" element={<SeniorChat />} />
          </Routes>
          :
          <>Access is forbiddend</>
      }
    </div>
  )
}
