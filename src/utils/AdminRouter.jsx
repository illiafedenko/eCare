import React from 'react'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import AdminHome from '../pages/adminportal/AdminHome';
import AdminUsers from '../pages/adminportal/AdminUsers';
import AdminAddUser from '../pages/adminportal/AdminAddUser';
import AdminSetting from '../pages/adminportal/AdminSetting';
import AdminLogOut from '../pages/adminportal/AdminLogOut';
import AdminSchedule from '../pages/adminportal/AdminSchedule';
import AdminTraining from '../pages/adminportal/AdminTraining';
import AdminSubscription from '../pages/adminportal/AdminSubscription';
import AdminAddSubscription from '../pages/adminportal/AdminAddSubscription';
import AdminEditSubscription from '../pages/adminportal/AdminEditSubscription';

export default function AdminRouter() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<AdminHome />} />
        <Route exact path="/users" element={<AdminUsers />} />
        <Route exact path="/users/:id" element={<AdminUsers />} />
        <Route exact path="/users/:id/add" element={<AdminAddUser />} />
        <Route exact path="/schedule" element={<AdminSchedule />} />
        <Route exact path="/schedule/:id" element={<AdminSchedule />} />
        <Route exact path="/training" element={<AdminTraining />} />
        <Route exact path="/training/:id" element={<AdminTraining />} />
        <Route exact path="/subscription" element={<AdminSubscription />} />
        <Route exact path="/subscription/add" element={<AdminAddSubscription />} />
        <Route exact path="/subscription/edit/:planID" element={<AdminEditSubscription />} />
        <Route exact path="/setting" element={<AdminSetting />} />
        <Route exact path="/logout" element={<AdminLogOut />} />
      </Routes>
    </div>
  )
}
