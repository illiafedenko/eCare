import React from 'react'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import AdminHome from '../pages/adminportal/AdminHome';
import AdminUsers from '../pages/adminportal/AdminUsers';
import AdminAddUser from '../pages/adminportal/AdminAddUser';
import AdminSetting from '../pages/adminportal/AdminSetting';
import AdminLogOut from '../pages/adminportal/AdminLogOut';

export default function AdminRouter() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<AdminHome />} />
        <Route exact path="/users" element={<AdminUsers />} />
        <Route exact path="/users/:id" element={<AdminUsers />} />
        <Route exact path="/users/:id/add" element={<AdminAddUser />} />
        <Route exact path="/setting" element={<AdminSetting />} />
        <Route exact path="/logout" element={<AdminLogOut />} />
      </Routes>
    </div>
  )
}
