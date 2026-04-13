import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Steps from './components/Steps';
import About from './components/About';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Results from './components/Results';

// 1. IMPORT BỔ SUNG 4 TRANG TÀI KHOẢN TẠI ĐÂY
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import AboutUs from './components/AboutUs';
import TalkToUs from './components/TalkToUs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FCFCFC]">
        <Navbar />
        <Routes>
          {/* Luồng Trang Chủ */}
          <Route path="/" element={
            <main className="pt-[75px] flex flex-col gap-16 md:gap-24">
              <Hero />
              <Steps />
              <About />
              <Testimonials />
              <CTA />
            </main>
          } />
          
          {/* Luồng Quiz & Kết quả */}
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Results />} />

          {/* 2. KHAI BÁO LỘ TRÌNH 4 TRANG TÀI KHOẢN TẠI ĐÂY */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<TalkToUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
