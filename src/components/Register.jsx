import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authBg from '../assets/auth-bg.png';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Handle registration logic here
    if (formData.password !== formData.confirmPassword) {
      alert('Mật khẩu không khớp!');
      return;
    }
    
    // Capture email value from form
    const emailValue = formData.email;
    
    // Save to session storage
    sessionStorage.setItem('userEmail', emailValue);
    
    // Dispatch custom event for Navbar
    window.dispatchEvent(new Event('authChange'));
    
    // Redirect to Home page
    navigate('/');
  };

  return (
    <div className="h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Left Panel - Hero/Illustration */}
      <div className="w-full md:w-1/2 md:flex-none min-h-[220px] md:h-full relative">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${authBg})` }}
        />
        
        {/* SouLeaf brand overlay */}
        <div className="absolute left-[93px] top-[50px] flex items-center gap-[13px]">
          <img
            src="../assets/logo.png"
            alt="SouLeaf logo"
            className="w-[30px] h-[30px] rounded-full border border-[#247D3C]"
          />
          <span className="text-white font-medium text-[24px] tracking-[-0.05em]">SouLeaf</span>
        </div>
      </div>

      {/* Right Panel - Register Form */}
      <div className="w-full md:w-1/2 md:flex-none bg-[#FCFCFC] flex items-center justify-center px-6 py-12 md:py-0 overflow-y-auto">
        <div className="w-full max-w-[358px] flex flex-col gap-[25px]">
          {/* Heading */}
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[40px] font-medium leading-[1.2] tracking-[-2px] text-[#020202]">
              Tạo tài khoản
            </h1>
            <p className="text-[15px] font-light leading-[20px] tracking-[-0.75px] text-[#020202]">
              Vui lòng nhập thông tin của bạn
            </p>
          </div>

          {/* Google sign-in */}
          <button className="w-full h-[45px] border border-[rgba(2,2,2,0.5)] rounded-[5px] flex items-center justify-center gap-[10px] text-[15px] font-light tracking-[-0.05em] text-[#020202] bg-transparent hover:bg-[rgba(159,223,176,0.08)] transition-colors duration-200">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M19.9308 10.2281C19.9317 9.54675 19.8722 8.86646 19.7531 8.19492H10.02V12.0462H15.5947C15.3642 13.2891 14.6195 14.3869 13.5333 15.085V17.5849H16.8604C18.8085 15.8447 19.9308 13.2712 19.9308 10.2281Z" fill="#4285F4"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M10.0201 20C12.8054 20 15.1504 19.1138 16.8605 17.5862L13.5335 15.0862C12.6075 15.6945 11.4149 16.0417 10.0201 16.0417C7.32817 16.0417 5.04324 14.2835 4.22624 11.914H0.79880V14.4903C2.55067 17.868 6.11868 19.9997 10.0201 20Z" fill="#34A853"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M4.22609 11.9142C3.79407 10.6727 3.79407 9.32801 4.22609 8.08648V5.51016H0.798648C-0.666636 8.33523 -0.666636 11.6654 0.798648 14.4905L4.22609 11.9142Z" fill="#FBBC04"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M10.0201 3.95896C11.492 3.93552 12.9141 4.47441 13.9794 5.45891L16.9251 2.60479C15.0572 0.904998 12.5825 -0.0282534 10.0201 0.000651949C6.11867 0.000808194 2.55067 2.13261 0.79880 5.51016L4.22624 8.08648C5.04324 5.71718 7.32817 3.95896 10.0201 3.95896Z" fill="#9FDFB0"/>
            </svg>
            Đăng ký với Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-[14px]">
            <div className="flex-1 h-[0.5px] bg-[#020202]" />
            <span className="text-[15px] font-light tracking-[-0.75px] text-[#020202]">Hoặc</span>
            <div className="flex-1 h-[0.5px] bg-[#020202]" />
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
            {/* Email */}
            <div className="flex flex-col gap-[5px]">
              <label htmlFor="email" className="text-[15px] font-light leading-[20px] tracking-[-0.75px] text-[#020202]">
                Địa chỉ email
              </label>
              <input 
                id="email" 
                type="email" 
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full h-[45px] border border-[rgba(2,2,2,0.5)] rounded-[5px] px-4 text-[15px] font-light text-[#020202] bg-transparent focus:border-[#9FDFB0] focus:outline-none transition-colors duration-200"
                autoComplete="email"
                required
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-[5px]">
              <label htmlFor="password" className="text-[15px] font-light leading-[20px] tracking-[-0.75px] text-[#020202]">
                Mát khâu
              </label>
              <input 
                id="password" 
                type="password" 
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="w-full h-[45px] border border-[rgba(2,2,2,0.5)] rounded-[5px] px-4 text-[15px] font-light text-[#020202] bg-transparent focus:border-[#9FDFB0] focus:outline-none transition-colors duration-200"
                autoComplete="new-password"
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-[5px]">
              <label htmlFor="confirm-password" className="text-[15px] font-light leading-[20px] tracking-[-0.75px] text-[#020202]">
                Xác nhận mật khẩu
              </label>
              <input 
                id="confirm-password" 
                type="password" 
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                className="w-full h-[45px] border border-[rgba(2,2,2,0.5)] rounded-[5px] px-4 text-[15px] font-light text-[#020202] bg-transparent focus:border-[#9FDFB0] focus:outline-none transition-colors duration-200"
                autoComplete="new-password"
                required
              />
            </div>
          </form>

          {/* Register button */}
          <button 
            onClick={handleSubmit}
            className="w-full h-[45px] bg-[#9FDFB0] rounded-[5px] flex items-center justify-center text-[15px] font-medium tracking-[-0.05em] text-white cursor-pointer border-none transition-opacity duration-200 hover:opacity-[0.88]"
          >
            Đăng ký
          </button>

          {/* Login prompt */}
          <p className="text-[15px] font-light tracking-[-0.75px] text-[#020202] text-center">
            Đã có tài khoản?&nbsp;
            <Link to="/login" className="text-[15px] font-medium text-[#9FDFB0] underline tracking-[-0.05em] hover:no-underline">
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}