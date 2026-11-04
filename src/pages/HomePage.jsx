import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, Sparkles, Shield, Compass, Heart, Eye } from 'lucide-react';
import FishCard from '../components/FishCard';
import { FISH_DATA } from '../data/fishData';
import { CATEGORIES } from '../data/categories';
import { SHOWROOM_INFO } from '../data/showroomInfo';

export default function HomePage({ onOpenContact }) {
  const [activeCategory, setActiveCategory] = useState('all');

  // Featured specimens for the top spotlight
  const featuredFish = FISH_DATA.filter((item) => item.featured).slice(0, 4);

  // Gallery fish filtered by category tab
  const galleryFish =
    activeCategory === 'all'
      ? FISH_DATA.slice(0, 9)
      : FISH_DATA.filter((item) => item.category === activeCategory);

  const scrollToGallery = () => {
    const el = document.getElementById('interactive-gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden bg-[#0C1211] text-[#F8F8F5]">
        {/* Background Visual / Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60 scale-105 transition-transform duration-1000 ease-out"
            poster="https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=1920&q=85"
          >
            <source src="/videos/betta.webm" type="video/webm" />
          </video>
          {/* Subtle Artistic Vignette & Dark Tint */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1211] via-[#0C1211]/40 to-black/60" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/20 bg-black/30 backdrop-blur-md mb-6 animate-fadeIn">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]"></span>
            <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#F8F8F5] font-light">
              Tuyển Tập Sinh Vật Thủy Sinh Độc Bản
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-[0.12em] text-[#F8F8F5] leading-tight drop-shadow-sm uppercase">
            THE ART OF
            <span className="block italic font-serif-body font-light tracking-widest text-[#E6E6DE] lowercase text-3xl sm:text-5xl md:text-6xl mt-1">
              aquarium
            </span>
          </h1>

          <p className="mt-6 text-xs sm:text-sm md:text-base text-[#D0D0CA] tracking-[0.2em] font-light max-w-xl leading-relaxed uppercase">
            Discover the beauty beneath the water.
          </p>

          <p className="mt-3 text-xs text-[#AAAAAA] max-w-md font-light hidden sm:block">
            Không gian triển lãm trực tuyến quy tụ những tuyệt tác cá cảnh thuần chủng, quý hiếm và tôn vinh nghệ thuật sống tĩnh tại.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/collection"
              className="px-8 py-3.5 bg-[#F8F8F5] text-[#171717] rounded-full text-xs font-semibold tracking-[0.25em] uppercase hover:bg-[#C5A880] hover:text-white transition-all duration-300 shadow-lg"
            >
              EXPLORE COLLECTION
            </Link>

            <button
              onClick={scrollToGallery}
              className="px-6 py-3.5 border border-white/30 text-white rounded-full text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Xem Triển Lãm</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </button>
          </div>
        </div>

        {/* Bottom subtle indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10 pointer-events-none">
          <div className="flex flex-col items-center space-y-1 text-white/50 text-[9px] tracking-[0.3em] uppercase font-light">
            <span>Cuộn để khám phá</span>
            <div className="w-[1px] h-6 bg-white/30 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* 2. CURATORIAL STATEMENT / PHILOSOPHY */}
      <section className="py-20 sm:py-28 px-6 bg-[#F8F8F5] text-center border-b border-[#E6E6DE]">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#888888] font-medium block">
            Triết Lý Tuyển Chọn • Curatorial Vision
          </span>
          <blockquote className="font-serif-body italic text-2xl sm:text-3xl md:text-4xl text-[#171717] leading-snug font-light">
            "Mỗi cá thể trong làn nước không chỉ là một sinh vật sống, mà là một chuyển động điêu khắc tự nhiên mang lại sự an yên và vượng khí cho không gian sống."
          </blockquote>
          <div className="w-12 h-[1px] bg-[#171717] mx-auto mt-6"></div>
          <p className="text-xs sm:text-sm text-[#555555] leading-relaxed max-w-xl mx-auto font-light">
            AQUARIUM tuyển chọn nghiêm ngặt từ những nguồn gen thuần túy tại Nhật Bản, Đức, Singapore và các nhánh sông Nam Mỹ, mang đến trải nghiệm thẩm mỹ đỉnh cao cho người mộ điệu.
          </p>
        </div>
      </section>

      {/* 3. FEATURED COLLECTION (Những loài cá nổi bật) */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#888888] font-semibold block mb-2">
              Bộ Sưu Tập Tiêu Biểu
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-normal text-[#171717] tracking-wider uppercase">
              Featured Specimens
            </h2>
          </div>
          <Link
            to="/collection"
            className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-[#171717] hover:text-[#0E2A28] transition-colors group"
          >
            <span>Xem Toàn Bộ Bộ Sưu Tập</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Featured items in clean grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuredFish.map((fish, index) => (
            <div key={fish.id} className="flex flex-col">
              <FishCard fish={fish} aspect="aspect-[3/4]" priority={index < 2} />
              <div className="mt-3 px-1">
                <p className="text-xs text-[#666666] line-clamp-2 leading-relaxed">
                  {fish.shortDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. INTERACTIVE FISH GALLERY (Bento/Masonry Asymmetrical Grid) */}
      <section
        id="interactive-gallery"
        className="py-20 sm:py-28 bg-[#F0F0EA] border-t border-b border-[#E6E6DE]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#888888] font-semibold block mb-2">
              Phòng Triển Lãm Tương Tác
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#171717] tracking-wide uppercase">
              Interactive Gallery
            </h2>
            <p className="text-xs sm:text-sm text-[#666666] mt-3 font-light">
              Rê chuột vào từng cá thể để quan sát vũ điệu bơi lội sống động và khám phá thông tin chi tiết.
            </p>
          </div>

          {/* Category Tabs for Gallery */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
            {CATEGORIES.slice(0, 8).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs px-4 py-2 rounded-full tracking-wider transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-[#171717] text-[#F8F8F5] shadow-sm font-medium'
                    : 'bg-white/80 text-[#555555] hover:bg-white hover:text-[#171717]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Asymmetric Bento Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {galleryFish.map((fish, idx) => {
              // Asymmetric aspect ratio variation for editorial rhythm
              const aspect = idx % 5 === 0 ? 'aspect-[4/5]' : idx % 3 === 0 ? 'aspect-[1/1]' : 'aspect-[4/5]';
              return (
                <div key={fish.id} className="transition-all duration-300">
                  <FishCard fish={fish} aspect={aspect} />
                </div>
              );
            })}
          </div>

          {/* Bottom Link to Full Gallery */}
          <div className="text-center mt-12">
            <Link
              to="/collection"
              className="inline-flex items-center space-x-3 px-8 py-3.5 bg-[#171717] text-[#F8F8F5] rounded-full text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#0E2A28] transition-all"
            >
              <span>Xem Toàn Bộ 9 Danh Mục Tuyển Chọn</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. QUALITY COMMITMENT / ABOUT TEASER */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#888888] font-semibold block mb-2">
            Chuẩn Mực Triển Lãm
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-normal text-[#171717] tracking-wider uppercase">
            Tuyển Chọn & Thuần Dưỡng
          </h2>
          <p className="text-xs sm:text-sm text-[#666666] mt-3 font-light">
            Không chỉ là buôn bán thông thường, chúng tôi xem việc chăm sóc cá cảnh như một môn nghệ thuật sống.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SHOWROOM_INFO.commitments.map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-white rounded-lg border border-[#E6E6DE] hover:border-[#171717] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="font-serif-body italic text-3xl text-[#C5A880] block mb-4">
                  0{idx + 1}
                </span>
                <h3 className="font-display text-base font-semibold text-[#171717] mb-2.5 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs text-[#666666] leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. SHOWROOM PRIVATE CONSULTATION BANNER */}
      <section className="py-20 bg-[#171717] text-[#F8F8F5] px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880] font-medium block">
            Trải Nghiệm Trực Tiếp Tại Không Gian Kính
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-light tracking-wide uppercase">
            Showroom Đón Tiếp Riêng Biệt
          </h2>
          <p className="text-xs sm:text-sm text-[#AAAAAA] leading-relaxed max-w-xl mx-auto font-light">
            Quý khách muốn ngắm nhìn trực tiếp các cá thể Masterpiece dưới ánh sáng quang phổ chuẩn và nhận tư vấn 1:1 từ chuyên gia sinh thái thủy sinh, vui lòng liên hệ trước với chúng tôi.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenContact}
              className="px-8 py-3.5 bg-[#F8F8F5] text-[#171717] rounded-full text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#C5A880] hover:text-white transition-all"
            >
              Đặt Lịch Hẹn / Liên Hệ Ngay
            </button>
            <a
              href={`tel:${SHOWROOM_INFO.phone.replace(/\s+/g, '')}`}
              className="px-8 py-3.5 border border-white/30 text-white rounded-full text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition-all"
            >
              Hotline: {SHOWROOM_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

