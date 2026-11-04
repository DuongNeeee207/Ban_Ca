import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Phone, Compass, ArrowUpRight } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/showroomInfo';

export default function Navbar({ onOpenSearch, onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'TRANG CHỦ', path: '/' },
    { label: 'BỘ SƯU TẬP', path: '/collection' },
    { label: 'CÂU CHUYỆN', path: '/about' },
    { label: 'LIÊN HỆ', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F8F8F5]/90 backdrop-blur-md border-b border-[#E6E6DE] py-3.5 shadow-[0_4px_24px_rgba(0,0,0,0.03)]'
            : 'bg-transparent py-5 lg:py-7 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="group flex items-center space-x-3 transition-transform duration-300 hover:opacity-90"
            >
              <div className="w-9 h-9 border border-[#171717] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#171717] group-hover:text-[#F8F8F5]">
                <span className="font-display text-sm font-semibold tracking-widest">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg tracking-[0.25em] font-semibold text-[#171717] leading-none">
                  AQUARIUM
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#666666] mt-1 font-light">
                  Ornamental Gallery
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
              {navLinks.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative text-xs tracking-[0.2em] font-medium transition-colors duration-300 py-1 ${
                      isActive ? 'text-[#0E2A28] font-semibold' : 'text-[#444444] hover:text-[#171717]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#0E2A28]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Icons & Direct Hotline */}
            <div className="flex items-center space-x-3 sm:space-x-5">
              {/* Search button */}
              <button
                onClick={onOpenSearch}
                aria-label="Tìm kiếm cá cảnh"
                className="p-2 text-[#222222] hover:text-[#0E2A28] transition-colors rounded-full hover:bg-black/5"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Consultation / Contact trigger */}
              <button
                onClick={onOpenContact}
                className="hidden sm:inline-flex items-center space-x-2 text-xs tracking-wider uppercase px-4 py-2 border border-[#171717] text-[#171717] rounded-full hover:bg-[#171717] hover:text-[#F8F8F5] transition-all duration-300"
              >
                <Phone className="w-3 h-3" />
                <span>Tư Vấn Trực Tiếp</span>
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menu"
                className="md:hidden p-2 text-[#171717] hover:text-[#0E2A28] focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#F8F8F5] pt-24 px-6 pb-8 md:hidden flex flex-col justify-between animate-fadeIn">
          <div className="flex flex-col space-y-6 pt-4">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#888888] pb-2 border-b border-[#E6E6DE]">
              Mục lục triển lãm
            </span>
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-xl font-display tracking-widest flex items-center justify-between ${
                    isActive ? 'text-[#0E2A28] font-semibold' : 'text-[#333333]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#888888]" />
                </Link>
              );
            })}
          </div>

          <div className="pt-8 border-t border-[#E6E6DE] flex flex-col space-y-4">
            <div className="text-xs text-[#666666]">
              <p className="font-medium text-[#171717]">Showroom Cá Cảnh Triển Lãm</p>
              <p className="mt-1">Hotline: {SHOWROOM_INFO.phoneDisplay}</p>
              <p>Mở cửa: 08:30 - 20:30 hàng ngày</p>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 bg-[#171717] text-[#F8F8F5] text-xs uppercase tracking-widest rounded-full hover:bg-[#0E2A28] transition-colors"
            >
              Liên Hệ Đặt Lịch Xem Cá
            </button>
          </div>
        </div>
      )}
    </>
  );
}

