import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import authBg from '../assets/auth-bg.png';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password recovery logic here
    console.log('Password recovery attempt for:', email);
    alert(`Liên kết khôi phục đã được gửi đến: ${email}`);
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
            src="../assets/cuoi.png"
            alt="SouLeaf logo"
            className="w-[30px] h-[30px] rounded-full border border-[#247D3C]"
          />
          <span className="text-white font-medium text-[24px] tracking-[-0.05em]">SouLeaf</span>
        </div>
      </div>

      {/* Right Panel - Forgot Password Form */}
      <div className="w-full md:w-1/2 md:flex-none bg-[#FCFCFC] flex items-center justify-center px-6 py-12 md:py-0 overflow-y-auto">
        <div className="w-full max-w-[358px] flex flex-col gap-[25px]">
          {/* Heading */}
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[40px] font-medium leading-[1.2] tracking-[-2px] text-[#020202]">
              Quên mật khẩu
            </h1>
            <p className="text-[15px] font-light leading-[20px] tracking-[-0.75px] text-[#020202]">
              Nhập email liên kết với tài khoản của bạn, chúng tôi sẽ gửi cho bạn liên kết để đặt lại mật khẩu.
            </p>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[45px] border border-[rgba(2,2,2,0.5)] rounded-[5px] px-4 text-[15px] font-light text-[#020202] bg-transparent focus:border-[#9FDFB0] focus:outline-none transition-colors duration-200"
                autoComplete="email"
                required
              />
            </div>
          </form>

          {/* Send Recovery Link button */}
          <button 
            onClick={handleSubmit}
            className="w-full h-[45px] bg-[#9FDFB0] rounded-[5px] flex items-center justify-center text-[15px] font-medium tracking-[-0.05em] text-white cursor-pointer border-none transition-opacity duration-200 hover:opacity-[0.88]"
          >
            Gửi liên kết khôi phục
          </button>

          {/* Alternative: Direct reset password link */}
          <p className="text-[15px] font-light tracking-[-0.75px] text-[#020202] text-center">
            Đã nhận được liên kết?&nbsp;
            <Link to="/reset-password" className="text-[#81C784] font-medium underline tracking-[-0.05em] hover:no-underline">
              Đặt lại mật khẩu
            </Link>
          </p>

          {/* Back to login prompt */}
          <p className="text-[15px] font-light tracking-[-0.75px] text-[#020202] text-left">
            <Link to="/login" className="text-[#81C784] font-medium underline tracking-[-0.05em] hover:no-underline">
              Quay lại đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}