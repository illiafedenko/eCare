import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import './index.css'
import Signup from './pages/auth/Signup.jsx'
import Signin from './pages/auth/Signin.jsx';
import Test from './pages/Test.jsx';
import RecoverPassword from './pages/auth/RecoverPassword.jsx';
import OTP from './pages/auth/OTP.jsx';
import SetNewPassword from './pages/auth/SetNewPassword.jsx';
import ChooseRole from './pages/auth/ChooseRole.jsx';
import HomePage from './pages/main/HomePage.jsx';
import AboutUs from './pages/main/AboutUs.jsx';
import ServicesPage from './pages/main/ServicesPage.jsx';
import PaymentPage from './pages/main/PaymentPage.jsx';
import CareGivers from './pages/main/CareGivers.jsx';
import CareGiverBookCard from './components/special/CareGiverBookCard.jsx';
import CareGiverBookPage from './pages/main/CareGiverBookPage.jsx';
import Senior from './pages/main/Senior.jsx';
import ApplyPage from './pages/main/ApplyPage.jsx';
import PaymentDetailPage from './pages/main/PaymentDetailPage.jsx';
import HowToMain from './pages/main/HowToMain.jsx';
import HowToSignUp from './pages/main/HowToSignUp.jsx';
import HowToMatch from './pages/main/HowToMatch.jsx';
import CareGiverPortalMain from './pages/main/CareGiverPortalMain.jsx';
import CareGiverRouter from './utils/CareGiverRouter.jsx';
import SeniorRouter from './utils/SeniorRouter.jsx';
import CGSetting from './pages/caregiverportal/CGSetting.jsx';
import CGLogout from './pages/caregiverportal/CGLogout.jsx';
import AdminRouter from './utils/AdminRouter.jsx';
import firebase from 'firebase/compat/app';
import firebaseConfig from './firebaseConfig';
import Faqs from './pages/main/Faqs.jsx';
import WhyBecomeCareGiver from './pages/main/WhyBecomeCareGiver.jsx';
import CareGiverApply from './pages/main/CareGiverApply.jsx';

firebase.initializeApp(firebaseConfig);

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
      <Route exact path="/faq" element={<Faqs />} />
      <Route exact path="/payment" element={<PaymentPage />} />
      <Route exact path="/caregivers" element={<CareGivers />} />
      <Route exact path="/whybecomecaregiver" element={<WhyBecomeCareGiver />} />
      <Route exact path="/caregiverapply" element={<CareGiverApply />} />
      <Route exact path="/caregiver/:id" element={<CareGiverBookPage />} />
      <Route exact path="/apply" element={<ApplyPage />} />
      <Route exact path="/senior/:id" element={<Senior />} />
      <Route exact path="/payment_detail" element={<PaymentDetailPage />} />
      <Route exact path="/howto" element={<HowToMain />} />
      <Route exact path="/howto/signup" element={<HowToSignUp />} />
      <Route exact path="/howto/match" element={<HowToMatch />} />
      <Route exact path="/cgportal/*" element={<CareGiverRouter />} />
      <Route exact path="/sportal/*" element={<SeniorRouter />} />
      <Route exact path="/aportal/*" element={<AdminRouter />} />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>,
)
