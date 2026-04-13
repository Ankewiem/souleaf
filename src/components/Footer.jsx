import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/bg.png';

const LeafIcon = () => (
  <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.7266 1.24031C22.6803 1.252 21.5903 1.54918 20.5878 2.09187C19.7907 2.52343 19.0539 3.12637 18.4453 3.87312C18.3692 3.79487 18.2842 3.72437 18.2128 3.6425C15.2371 0.225495 10.3716 0.943871 8.16594 3.72656C7.79656 4.03156 7.56056 4.49331 7.56056 5.00968C7.56056 5.92793 8.30431 6.67187 9.22263 6.67187C10.1408 6.67187 10.8867 5.92793 10.8867 5.00975C10.8867 4.38256 10.5381 3.83787 10.0253 3.55475C12.0128 2.11581 15.2068 1.96975 17.3319 4.41018C17.4707 4.56931 17.6151 4.72093 17.7656 4.86718C17.0606 6.11656 16.694 7.65343 16.8964 9.41593C16.1301 8.37281 14.9116 7.6655 13.4531 7.69718C12.6849 7.71406 11.8506 7.93512 10.9804 8.41993C7.20575 10.5223 8.65075 14.8893 1.39444 14.9003C4.34525 16.7113 7.34106 17.5059 9.95306 17.5156C9.04163 21.9737 12.0341 27.6552 19.1289 30.7656C15.6693 24.7486 20.2687 22.7326 21.9355 19.1366C25.7109 19.7341 28.5131 15.3921 30.3339 22.4804C32.0639 12.8535 24.9016 8.70612 20.4258 9.23431C19.5244 9.34075 18.7911 9.73225 18.242 10.3027C17.7641 8.39831 18.0061 6.82925 18.6522 5.59956C20.3591 6.84493 22.4906 7.448 24.2967 7.44143C25.4524 7.43706 26.4965 7.19743 27.2264 6.58206C27.9564 5.96643 28.2296 4.90143 27.8124 3.79487C27.2854 2.39718 26.0889 1.5675 24.7518 1.32412C24.4176 1.26325 24.0752 1.23618 23.7264 1.24012L23.7266 1.24031Z" fill="#439C5B"/>
  </svg>
)

const navLinks = ['Trang chủ', 'Về chúng tôi', 'Tài nguyên', 'Liên hệ']

export default function Footer() {
  return (
    <footer className="relative mt-8 overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bg})` }}>

      <div className="relative z-10 max-w-[1339px] mx-auto px-6 pt-12 pb-0">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between gap-10 pb-10">
          {/* Left: Brand + disclaimer */}
          <div className="flex flex-col gap-4 max-w-[471px]">
            <div className="flex items-center gap-3">
              <div className="w-[30px] h-[30px] rounded-full border border-[rgba(67,156,91,0.58)] shadow flex items-center justify-center bg-white overflow-hidden flex-shrink-0">
                <LeafIcon />
              </div>
              <span className="text-[rgba(0,0,0,0.75)] font-medium text-[24px] tracking-[-1.2px]">SouLeaf</span>
            </div>
            <p className="text-[rgba(0,0,0,0.75)] text-[15px] font-light italic leading-normal tracking-[-0.75px]">
              SouLeaf không thay thế cho các lời khuyên, chẩn đoán hoặc phương pháp điều trị y khoa chuyên nghiệp. Hãy luôn tìm kiếm lời khuyên từ các chuyên gia chăm sóc sức khỏe có chuyên môn.
            </p>
          </div>

          {/* Right: Nav Links */}
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={link === 'Trang chủ' ? '/' : link === 'Về chúng tôi' ? '/aboutus' : link === 'Liên hệ' ? '/contact' : '#'}
                className="text-[rgba(0,0,0,0.75)] font-medium text-[15px] leading-[20px] tracking-[-0.75px] hover:opacity-70 transition-opacity"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t border-[rgba(2,2,2,0.08)] py-4"
          style={{ backdropFilter: 'blur(17.5px)', background: 'rgba(2,2,2,0.01)' }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-[rgba(0,0,0,0.75)] text-[13px] font-light tracking-[-0.75px]">
              © SouLeaf - All Rights Reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="text-[rgba(0,0,0,0.75)] text-[13px] font-medium tracking-[-0.75px] underline hover:opacity-70 transition-opacity">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-[rgba(0,0,0,0.75)] text-[13px] font-medium tracking-[-0.75px] underline hover:opacity-70 transition-opacity">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
