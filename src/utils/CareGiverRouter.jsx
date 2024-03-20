import React from 'react'
import CareGiverPortalMain from '../pages/CareGiverPortalMain'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

export default function CareGiverRouter() {
  return (
    <div>
      <Routes>
        <Route exact path="/all" element={<CareGiverPortalMain />} />
      </Routes>
    </div>
  )
}
