import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import authBg from '../assets/CƯỜI.png';

export default function ResetPassword() {
  const [formData, setFormData] = useState({
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
    // Handle password reset logic here
    if (formData.password !== formData.confirmPassword) {
      alert('Mật khẩu không khớp!');
      return;
    }
    console.log('Password reset attempt:', formData);
    alert('Mật khẩu đã được đặt lại thành công!');
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
            src="../assets/CƯỜI.png"
            alt="SouLeaf logo"
            className="w-[30px] h-[30px] rounded-full border border-[#247D3C]"
          />
          <span className="text-white font-medium text-[24px] tracking-[-0.05em]">SouLeaf</span>
        </div>
      </div>

      {/* Right Panel - Reset Password Form */}
      <div className="w-full md:w-1/2 md:flex-none bg-[#FCFCFC] flex items-center justify-center px-6 py-12 md:py-0 overflow-y-auto">
        <div className="w-full max-w-[358px] flex flex-col gap-[25px]">
          {/* Heading */}
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[40px] font-medium leading-[1.2] tracking-[-2px] text-[#020202]">
              Đặt lại mật khẩu
            </h1>
            <p className="text-[15px] font-light leading-[20px] tracking-[-0.75px] text-[#020202]">
              Nhập mật khẩu mới
            </p>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
            {/* New Password */}
            <div className="flex flex-col gap-[5px]">
              <label htmlFor="password" className="text-[15px] font-light leading-[20px] tracking-[-0.75px] text-[#020202]">
                Mật khẩu mới
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
              <label htmlFor="confirmPassword" className="text-[15px] font-light leading-[20px] tracking-[-0.75px] text-[#020202]">
                Xác nhận mật khẩu
              </label>
              <input 
                id="confirmPassword" 
                type="password" 
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                className="w-full h-[45px] border border-[rgba(2,2,2,0.5)] rounded-[5px] px-4 text-[15px] font-light text-[#020202] bg-transparent focus:border-[#9FDFB0] focus:outline-none transition-colors duration-200"
                autoComplete="new-password"
                required
              />
            </div>
          </form>

          {/* Reset Password button */}
          <button 
            onClick={handleSubmit}
            className="w-full h-[45px] bg-[#9FDFB0] rounded-[5px] flex items-center justify-center text-[15px] font-medium tracking-[-0.05em] text-white cursor-pointer border-none transition-opacity duration-200 hover:opacity-[0.88]"
          >
            Đặt lại mật khẩu
          </button>
        </div>
      </div>
    </div>
  );
}