import React from 'react'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import SeniorHome from '../pages/seniorportal/SeniorHome';
import SeniorProfile from '../pages/seniorportal/SeniorProfile';
import SeniorNotificatioins from '../pages/seniorportal/SeniorNotificatioins';
import SeniorSetting from '../pages/seniorportal/SeniorSetting';
import SeniorLogout from '../pages/seniorportal/SeniorLogout';
import SeniorSchedule from '../pages/seniorportal/SeniorSchedule';

export default function SeniorRouter() {
  return (
    <div>
      <Routes>
        {/* <Route exact path="/all" element={<CGMeetAll />} /> */}
        <Route exact path="/" element={<SeniorHome />} />
        <Route exact path="/profile" element={<SeniorProfile />} />
        <Route exact path="/notification" element={<SeniorNotificatioins />} />
        <Route exact path="/setting" element={<SeniorSetting />} />
        <Route exact path="/logout" element={<SeniorLogout />} />
        <Route exact path="/schedule" element={<SeniorSchedule />} />
      </Routes>
    </div>
  )
}
