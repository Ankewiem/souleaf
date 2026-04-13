import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const LeafIcon = () => (
  <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.7266 1.24031C22.6803 1.252 21.5903 1.54918 20.5878 2.09187C19.7907 2.52343 19.0539 3.12637 18.4453 3.87312C18.3692 3.79487 18.2842 3.72437 18.2128 3.6425C15.2371 0.225495 10.3716 0.943871 8.16594 3.72656C7.79656 4.03156 7.56056 4.49331 7.56056 5.00968C7.56056 5.92793 8.30431 6.67187 9.22263 6.67187C10.1408 6.67187 10.8867 5.92793 10.8867 5.00975C10.8867 4.38256 10.5381 3.83787 10.0253 3.55475C12.0128 2.11581 15.2068 1.96975 17.3319 4.41018C17.4707 4.56931 17.6151 4.72093 17.7656 4.86718C17.0606 6.11656 16.694 7.65343 16.8964 9.41593C16.1301 8.37281 14.9116 7.6655 13.4531 7.69718C12.6849 7.71406 11.8506 7.93512 10.9804 8.41993C7.20575 10.5223 8.65075 14.8893 1.39444 14.9003C4.34525 16.7113 7.34106 17.5059 9.95306 17.5156C9.04163 21.9737 12.0341 27.6552 19.1289 30.7656C15.6693 24.7486 20.2687 22.7326 21.9355 19.1366C25.7109 19.7341 28.5131 15.3921 30.3339 22.4804C32.0639 12.8535 24.9016 8.70612 20.4258 9.23431C19.5244 9.34075 18.7911 9.73225 18.242 10.3027C17.7641 8.39831 18.0061 6.82925 18.6522 5.59956C20.3591 6.84493 22.4906 7.448 24.2967 7.44143C25.4524 7.43706 26.4965 7.19743 27.2264 6.58206C27.9564 5.96643 28.2296 4.90143 27.8124 3.79487C27.2854 2.39718 26.0889 1.5675 24.7518 1.32412C24.4176 1.26325 24.0752 1.23618 23.7264 1.24012L23.7266 1.24031Z" fill="#1D5C2E"/>
  </svg>
)

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [userEmail, setUserEmail] = useState(sessionStorage.getItem('userEmail'))

  useEffect(() => {
    const handleAuthChange = () => {
      setUserEmail(sessionStorage.getItem('userEmail'))
    }
    
    window.addEventListener('authChange', handleAuthChange)
    
    return () => {
      window.removeEventListener('authChange', handleAuthChange)
    }
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FCFCFC]/90 backdrop-blur-sm border-b border-[rgba(2,2,2,0.06)]">
      <div className="max-w-[1355px] mx-auto px-6 h-[75px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border border-[rgba(67,156,91,0.58)] shadow-sm flex items-center justify-center bg-white overflow-hidden">
            <LeafIcon />
          </div>
          <span className="font-medium text-xl tracking-[-1px] text-[#020202]">SouLeaf</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          <Link to="/" className="nav-link">Trang chủ</Link>
          <Link to="/aboutus" className="nav-link">Về chúng tôi</Link>
          <Link to="/contact" className="nav-link">Liên hệ với chúng tôi</Link>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {userEmail ? (
            <>
              <span className="text-[#020202] font-normal text-base underline decoration-[#020202] tracking-[-0.75px] hover:opacity-70 transition-opacity">
                Welcome, {userEmail}
              </span>
              <button 
                onClick={() => {
                  sessionStorage.removeItem('userEmail')
                  setUserEmail(null)
                  window.dispatchEvent(new Event('authChange'))
                }}
                className="text-[#020202] font-normal text-base underline decoration-[#020202] tracking-[-0.75px] hover:opacity-70 transition-opacity ml-3"
              >
                Đăng xuất
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="px-5 py-2 rounded-full border border-[rgba(2,2,2,0.25)] text-[#020202] font-medium text-sm tracking-[-0.75px] hover:bg-gray-50 transition-colors">
                Đăng nhập
              </Link>
              <Link to="/register" className="px-5 py-2 rounded-full bg-[#247D3C] text-white font-medium text-sm tracking-[-0.75px] hover:opacity-90 transition-opacity">
                Đăng ký
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-[#020202]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FCFCFC] border-t border-[rgba(2,2,2,0.08)] px-6 py-6 flex flex-col gap-5">
          <Link to="/" className="nav-link text-base" onClick={() => setMobileOpen(false)}>Trang chủ</Link>
          <Link to="/aboutus" className="nav-link text-base" onClick={() => setMobileOpen(false)}>Về chúng tôi</Link>
          <Link to="/contact" className="nav-link text-base" onClick={() => setMobileOpen(false)}>Liên hệ với chúng tôi</Link>
          <div className="flex gap-3 pt-2">
            {userEmail ? (
              <>
                <span className="flex-1 py-2 text-[#020202] font-medium text-sm">
                  Welcome, {userEmail}
                </span>
                <button 
                  onClick={() => {
                    sessionStorage.removeItem('userEmail')
                    setUserEmail(null)
                    window.dispatchEvent(new Event('authChange'))
                    setMobileOpen(false)
                  }}
                  className="flex-1 py-2 text-[#020202] font-medium text-sm"
                >
                  Đăng xuất
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="flex-1 py-2 rounded-full border border-[rgba(2,2,2,0.25)] text-[#020202] font-medium text-sm" onClick={() => setMobileOpen(false)}>
                  Đăng nhập
                </Link>
                <Link to="/register" className="flex-1 py-2 rounded-full bg-[#247D3C] text-white font-medium text-sm" onClick={() => setMobileOpen(false)}>
                  Đăng ký
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
