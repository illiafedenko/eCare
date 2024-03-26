import React from 'react'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import AdminHome from '../pages/adminportal/AdminHome';
import AdminUsers from '../pages/adminportal/AdminUsers';

export default function AdminRouter() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<AdminHome />} />
        <Route exact path="/users" element={<AdminUsers />} />
      </Routes>
    </div>
  )
}
