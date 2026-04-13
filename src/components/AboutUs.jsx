import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import meo from '../assets/meo.png';
import catGrass from '../assets/cat-grass.jpg';
import mascot from '../assets/mascot.png';
import natureBg from '../assets/meo.png';
import footerBg from '../assets/footer-bg.png';

const ArrowIcon = () => (
  <svg viewBox="0 0 39 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[15px] h-[12px]">
    <path d="M26.3832 9.46218L13.2362 19.5394" stroke="#FCFCFC" strokeWidth="1.8909" strokeMiterlimit="10"/>
    <path d="M27.1523 17.1677V8.87242L16.3301 8.87242" stroke="#FCFCFC" strokeWidth="1.8909" strokeMiterlimit="10"/>
  </svg>
);

const LargeArrowIcon = () => (
  <svg viewBox="0 0 39 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[39px] h-[30px]">
    <path d="M26.3832 9.46218L13.2362 19.5394" stroke="#FCFCFC" strokeWidth="1.8909" strokeMiterlimit="10"/>
    <path d="M27.1523 17.1677V8.87242L16.3301 8.87242" stroke="#FCFCFC" strokeWidth="1.8909" strokeMiterlimit="10"/>
  </svg>
);

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#EBFBEA] pt-[75px]">
      {/* NAV is handled by the main Navbar component */}

      {/* PAGE CONTENT */}
      <main className="w-full max-w-[1440px] mx-auto px-[41px]">
        {/* ABOUT HEADER */}
        <header className="text-center py-[60px] pb-[24px]">
          <h1 className="text-[48px] font-bold tracking-[-2.4px] text-[#020202]">ABOUT US</h1>
          <p className="max-w-[466px] mx-auto mt-6 text-[#020202] text-[17px] font-normal leading-[1.6] tracking-[-0.5px] text-center">
            Chúng tôi là một nhóm sinh viên năm hai đầy nhiệt huyết thuộc ngành ArtTech của khoa Thiết kế truyền thông. Cùng chung một cam kết về sự đổi mới, chúng tôi đã tạo ra SouLeaf nhằm khai thác sức mạnh của Machine Learning trong việc giải quyết các vấn đề về sức khỏe tinh thần.
          </p>
        </header>

        {/* MISSION SECTION */}
        <section className="relative w-full mt-12 rounded-[30px] overflow-hidden">
          <div 
            className="w-full h-[420px] bg-cover bg-center bg-no-repeat rounded-[30px] block scale-x-[-1]"
            style={{ backgroundImage: `url(${meo})` }}
            aria-label="Cat lying on grass"
          />

          {/* top-left dots */}
          <div className="absolute top-[20px] left-[20px] flex flex-col gap-[10px]">
            <div className="flex gap-[10px]">
              <div className="w-[8px] h-[8px] rounded-full bg-[rgba(255,255,255,0.3)]" />
              <div className="w-[8px] h-[8px] rounded-full bg-[rgba(255,255,255,0.5)]" />
            </div>
            <div className="flex gap-[10px]">
              <div className="w-[8px] h-[8px] rounded-full bg-[rgba(255,255,255,0.3)]" />
            </div>
          </div>

          {/* bottom-right dots */}
          <div className="absolute bottom-[21px] right-[21px] flex gap-[10px]">
            <div className="w-[8px] h-[8px] rounded-full bg-[rgba(255,255,255,0.3)]" />
            <div className="w-[8px] h-[8px] rounded-full bg-[rgba(255,255,255,0.5)]" />
            <div className="w-[8px] h-[8px] rounded-full bg-[rgba(255,255,255,0.3)]" />
          </div>

          {/* mission text card */}
          <div className="absolute bottom-[15px] left-[15px] w-[35%] rounded-[24px] bg-[rgba(255,255,255,0.1)] backdrop-blur-[30px] border border-[rgba(255,255,255,0.3)] border-[0.5px] p-[35px]">
            <div className="absolute top-[8px] right-[8px] opacity-80">
              <ArrowIcon />
            </div>
            <p className="text-white text-[15px] font-bold uppercase tracking-[-0.75px] mb-[18px]">SỨ MỆNH CỦA CHÚNG TÔI</p>
            <p className="text-white text-[15px] font-light leading-[1.6] tracking-[-0.75px]">
              Chúng tôi cung cấp nền tảng AI an toàn và dễ tiếp cận, giúp bạn thấu hiểu sức khỏe tinh thần của chính mình. Với các bài đánh giá khách quan, không phán xét, MindInsight mang đến những phân tích chuẩn xác và giải pháp cá nhân hóa, đồng hành cùng bạn trên hành trình cải thiện bản thân mỗi ngày.
            </p>
          </div>
        </section>

        {/* VISION SECTION */}
        <section className="flex items-end gap-0 relative min-h-[444px] mt-12">
          <img
            src={mascot}
            alt="SouLeaf mascot"
            className="w-[493px] flex-shrink-0 object-contain relative z-[2]"
          />

          <div className="flex-1 relative min-h-[367px]">
            <img
              src={footerBg}
              alt="Nature background"
              className="w-full h-[367px] object-cover rounded-[30px] block"
            />

            <div className="absolute bottom-[32px] right-[32px] w-[440px] rounded-[30px] bg-[rgba(2,2,2,0.15)] backdrop-blur-[17.5px] p-[30px]">
              <div className="absolute top-[14px] right-[14px]">
                <LargeArrowIcon />
              </div>
              <p className="text-[#FCFCFC] text-[15px] font-light leading-[1.6] tracking-[-0.75px] mt-9">
                Tại SouLeaf, chúng tôi ứng dụng công nghệ để tạo ra một nền tảng an toàn, dễ sử dụng và dành cho tất cả mọi người. Sự phát triển của bạn là mục tiêu của chúng tôi. Hãy cùng nhau xây dựng một thế giới nơi sức khỏe tinh thần luôn được ưu tiên, bởi vì thấu hiểu bản thân là bước đầu tiên để khai phá tiềm năng thực sự của bạn.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}