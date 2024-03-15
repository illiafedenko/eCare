import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Signup from './pages/Signup.jsx'
import Signin from './pages/Signin.jsx';
import Test from './pages/Test.jsx';
import RecoverPassword from './pages/RecoverPassword.jsx';
import OTP from './pages/OTP.jsx';
import SetNewPassword from './pages/SetNewPassword.jsx';
import ChooseRole from './pages/ChooseRole.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutUs from './pages/AboutUs.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/test" element={<Test />} />
        <Route exact path="/recover_password" element={<RecoverPassword />} />
        <Route exact path="/otp" element={<OTP />} />
        <Route exact path="/set_new_password" element={<SetNewPassword />} />
        <Route exact path="/choose_role" element={<ChooseRole />} />
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
