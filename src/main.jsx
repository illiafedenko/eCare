import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
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
import ServicesPage from './pages/ServicesPage.jsx';
import PaymentPage from './pages/PaymentPage.jsx';
import CareGivers from './pages/CareGivers.jsx';
import CareGiverBookCard from './components/special/CareGiverBookCard.jsx';
import CareGiverBookPage from './pages/CareGiverBookPage.jsx';
import Senior from './pages/Senior.jsx';
import ApplyPage from './pages/ApplyPage.jsx';
import PaymentDetailPage from './pages/PaymentDetailPage.jsx';
import HowToMain from './pages/HowToMain.jsx';
import HowToSignUp from './pages/HowToSignUp.jsx';
import HowToMatch from './pages/HowToMatch.jsx';
import CareGiverPortalMain from './pages/CareGiverPortalMain.jsx';
import CareGiverRouter from './utils/CareGiverRouter.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
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
      <Route exact path="/services" element={<ServicesPage />} />
      <Route exact path="/payment" element={<PaymentPage />} />
      <Route exact path="/caregivers" element={<CareGivers />} />
      <Route exact path="/caregiver/:id" element={<CareGiverBookPage />} />
      <Route exact path="/apply" element={<ApplyPage />} />
      <Route exact path="/senior/:id" element={<Senior />} />
      <Route exact path="/payment_detail" element={<PaymentDetailPage />} />
      <Route exact path="/howto" element={<HowToMain />} />
      <Route exact path="/howto/signup" element={<HowToSignUp />} />
      <Route exact path="/howto/match" element={<HowToMatch />} />
      <Route exact path="/cgportal/*" element={<CareGiverRouter />} />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>,
)
