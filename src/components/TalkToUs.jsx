import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import wink from '../assets/wink.png';

const QuoteArrow = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.8 10.8L11.44 22.16" stroke="#FCFCFC" strokeWidth="1.89" strokeMiterlimit="10"/>
    <path d="M23.47 19.49V10.14L14.11 10.14" stroke="#FCFCFC" strokeWidth="1.89" strokeMiterlimit="10"/>
  </svg>
);

export default function TalkToUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Contact form submitted:', formData);
    alert('Câu nói: ' + formData.message);
  };

  return (
    <div className="min-h-screen bg-[#EBFBEA] flex flex-col">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-[43px] py-[23px] h-[107px] bg-gradient-to-r from-[rgba(252,247,213,0.8)] to-[rgba(171,227,134,0.8)] backdrop-blur-[10px] relative">
        <div className="flex items-center gap-[13px]">
          <img
            src={logo}
            alt="SouLeaf logo"
            className="w-[30px] h-[29px] rounded-[93px] border border-[#34A853] object-cover"
          />
          <span className="text-[rgba(0,0,0,0.75)] text-[24px] font-medium tracking-[-1.2px]">SouLeaf</span>
        </div>

        <div className="flex items-center gap-[71px]">
          <Link to="/" className="text-[#020202] text-[15px] font-medium tracking-[-0.75px] no-underline">Trang nhà</Link>
          <Link to="/aboutus" className="text-[#020202] text-[15px] font-medium tracking-[-0.75px] no-underline">Vê chúng tôi</Link>
          <Link to="/contact" className="text-[#020202] text-[15px] font-medium tracking-[-0.75px] underline">Liên hê vói chúng tôi</Link>
        </div>

        <div className="flex items-center gap-[37px] bg-[rgba(239,239,239,0.9)] rounded-[30px] px-[9px] py-[8px] pl-[40px] h-[60px] backdrop-blur-[10px]">
          <Link to="/login" className="text-[#1E1E1E] text-[15px] font-medium tracking-[-0.75px] cursor-pointer bg-transparent border-none">Dang nhap</Link>
          <Link to="/register" className="flex items-center justify-center w-[102px] h-[43px] px-[20px] py-[12px] rounded-[30px] bg-[rgba(252,252,252,0.9)] text-[#1E1E1E] text-[15px] font-medium tracking-[-0.75px] cursor-pointer border-none backdrop-blur-[10px]">Dang ky</Link>
        </div>
      </nav>

      {/* MAIN CONTACT SECTION */}
      <main className="flex justify-center items-center px-[22px] py-[45px] flex-1 min-h-[calc(100vh-107px)]">
        <section className="flex items-center gap-[33px] px-[22px] rounded-[40px] border-[2.21px] border-[rgba(2,2,2,0.05)] bg-[#6FA77B] backdrop-blur-[210px] max-w-[1396px] w-full relative">
          {/* LEFT: Form */}
          <div className="flex flex-col gap-[30px] px-[44px] flex-shrink-0">
            <header className="flex flex-col gap-[9px]">
              <h1 className="text-white text-[48px] font-medium tracking-[-2.4px] max-w-[471px]">LIÊN HỆ HỖ TRỢ!</h1>
              <p className="text-white text-[15px] font-light tracking-[-0.15px] opacity-80 max-w-[459px] leading-[1.5]">
                Chúng tôi ở đây để lắng nghe và hỗ trợ. Hãy liên hệ nếu bạn có bất kỳ câu hỏi, góp ý nào hoặc cần giúp đỡ. Hành trình chăm sóc sức khỏe tinh thần của bạn rất quan trọng, và chúng tôi luôn sẵn sàng đồng hành chỉ qua một tin nhắn.
              </p>
            </header>

            <form onSubmit={handleSubmit} className="flex flex-col gap-[13px] w-full">
              <div className="flex gap-[13px]">
                <input
                  id="first-name"
                  className="flex-1 px-[22px] py-[17px] rounded-[13px] border-[1.1px] border-[rgba(2,2,2,0.05)] bg-[rgba(255,255,255,0.15)] backdrop-blur-[17.5px] text-white text-[15px] font-light tracking-[-0.75px] outline-none transition-colors placeholder:text-[rgba(255,255,255,0.7)] focus:bg-[rgba(255,255,255,0.25)]"
                  type="text"
                  placeholder="Tên"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  required
                  aria-required="true"
                />
                
                <input
                  id="last-name"
                  className="flex-1 px-[22px] py-[17px] rounded-[13px] border-[1.1px] border-[rgba(2,2,2,0.05)] bg-[rgba(255,255,255,0.15)] backdrop-blur-[17.5px] text-white text-[15px] font-light tracking-[-0.75px] outline-none transition-colors placeholder:text-[rgba(255,255,255,0.7)] focus:bg-[rgba(255,255,255,0.25)]"
                  type="text"
                  placeholder="Hô"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  required
                  aria-required="true"
                />
              </div>
              
              <input
                id="email"
                className="w-full px-[22px] py-[17px] rounded-[13px] border-[1.1px] border-[rgba(2,2,2,0.05)] bg-[rgba(255,255,255,0.15)] backdrop-blur-[17.5px] text-white text-[15px] font-light tracking-[-0.75px] outline-none transition-colors placeholder:text-[rgba(255,255,255,0.7)] focus:bg-[rgba(255,255,255,0.25)]"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                aria-required="true"
              />
              
              <textarea
                id="message"
                className="w-full px-[22px] py-[17px] rounded-[13px] border-[1.1px] border-[rgba(2,2,2,0.05)] bg-[rgba(255,255,255,0.15)] backdrop-blur-[17.5px] text-white text-[15px] font-light tracking-[-0.75px] outline-none transition-colors placeholder:text-[rgba(255,255,255,0.7)] focus:bg-[rgba(255,255,255,0.25)] resize-none h-[120px]"
                placeholder="Lời nhắn"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                required
                aria-required="true"
                rows="5"
              />
              
              <button
                type="submit"
                className="flex items-center justify-center gap-[10px] px-[22px] py-[17px] rounded-[30px] bg-[rgba(255,255,255,0.25)] backdrop-blur-[17.5px] border-none text-white text-[15px] font-medium tracking-[-0.75px] cursor-pointer transition-colors w-full hover:bg-[rgba(255,255,255,0.35)]"
                aria-label="Gôi lôi nhân liên hê"
              >
                Gửi lời nhắn &rarr;
              </button>
            </form>
          </div>

          {/* RIGHT: Illustration */}
          <div className="relative flex-1 min-h-[570px]">
            <div className="w-full h-full rounded-[30px] overflow-hidden relative">
              <img
                src={wink}
                alt="SouLeaf mascot"
                className="w-full h-full block object-contain"
              />
            </div>

            {/* Dot decorations */}
            <div className="absolute top-[54px] left-[51px] grid grid-cols-2 gap-[28px]">
              <div className="w-[20px] h-[20px] rounded-full bg-[#FCFCFC]" />
              <div className="w-[20px] h-[20px] rounded-full bg-[#FCFCFC] opacity-75" />
              <div className="w-[20px] h-[20px] rounded-full bg-[#FCFCFC] opacity-50" />
              <div className="w-[20px] h-[20px] rounded-full bg-[#FCFCFC]" />
            </div>

            <div className="absolute bottom-[59px] right-[30px] grid grid-cols-2 gap-[28px]">
              <div className="w-[20px] h-[20px] rounded-full bg-[#FCFCFC]" />
              <div className="w-[20px] h-[20px] rounded-full bg-[#FCFCFC] opacity-75" />
              <div className="w-[20px] h-[20px] rounded-full bg-[#FCFCFC]" />
              <div className="w-[20px] h-[20px] rounded-full bg-[#FCFCFC] opacity-50" />
            </div>

            {/* Glass quote card */}
            <div className="absolute bottom-[43px] left-[52px] w-[239px] px-[28px] py-[20px] rounded-[35px] bg-gradient-to-br from-[rgba(143,224,126,0.85)] to-[rgba(92,159,105,0.85)] shadow-[0_4px_15px_rgba(0,0,0,0.1)] backdrop-blur-[10px]">
              <div className="absolute top-[16px] right-[24px]">
                <QuoteArrow />
              </div>
              <p className="text-white text-[15px] font-medium leading-[1.6] tracking-[-0.75px] max-w-[161px] pt-[12px]">
                Tiếng nói của bạn rất quan trọng, chúng tôi luôn sẵn sàng lắng nghe
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}