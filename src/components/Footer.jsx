import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/showroomInfo';
import { CATEGORIES } from '../data/categories';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121212] text-[#E5E5DF] pt-16 pb-12 border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[#262626]">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                <span className="font-display text-sm font-semibold text-white">A</span>
              </div>
              <span className="font-display text-xl tracking-[0.25em] font-semibold text-white">
                AQUARIUM
              </span>
            </div>
            <p className="text-xs text-[#999999] leading-relaxed max-w-sm font-light">
              Showroom trưng bày và bảo tồn các dòng sinh vật thủy sinh tinh tuyển. Tôn vinh vẻ đẹp tĩnh tại và kỳ quan thiên nhiên beneath the water.
            </p>
            <div className="pt-2 text-xs text-[#AAAAAA] space-y-1">
              <p className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Không gian mở đón tiếp khách tham quan mỗi ngày</span>
              </p>
            </div>
          </div>

          {/* Categories Col */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Danh Mục Tuyển Chọn
            </h4>
            <ul className="space-y-2 text-xs text-[#999999]">
              {CATEGORIES.slice(1, 7).map((c) => (
                <li key={c.id}>
                  <Link
                    to={`/collection?category=${c.id}`}
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{c.name}</span>
                    <span className="text-[10px] text-[#666] group-hover:text-[#C5A880] transition-colors">
                      {c.englishName}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Policies */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Khám Phá
            </h4>
            <ul className="space-y-2 text-xs text-[#999999]">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link to="/collection" className="hover:text-white transition-colors">
                  Toàn Bộ Bộ Sưu Tập
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Câu Chuyện & Quy Trình
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Địa Chỉ & Đặt Lịch
                </Link>
              </li>
            </ul>
          </div>

          {/* Showroom Contact details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Showroom Triển Lãm
            </h4>
            <div className="space-y-3 text-xs text-[#999999]">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#C5A880] mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{SHOWROOM_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-[#C5A880] flex-shrink-0" />
                <span>08:30 - 20:30 (Cả tuần)</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#C5A880] flex-shrink-0" />
                <a
                  href={`tel:${SHOWROOM_INFO.phone.replace(/\s+/g, '')}`}
                  className="hover:text-white text-[#C5A880] font-medium transition-colors"
                >
                  {SHOWROOM_INFO.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={SHOWROOM_INFO.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
              >
                <span>Nhắn tin qua Zalo</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#666666] space-y-4 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} {SHOWROOM_INFO.brandName} Ornamental Fish Gallery. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <span>Showroom phi thương mại điện tử trực tiếp — Tuyển chọn & tư vấn 1:1</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full border border-white/20 hover:border-white text-white/80 hover:text-white transition-all flex items-center space-x-1"
              aria-label="Về đầu trang"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
