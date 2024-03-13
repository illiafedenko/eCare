import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Signup from './pages/Signup.jsx'
import Signin from './pages/Signin.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
