import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ZoomIn,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Phone,
  Send,
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles,
  Info,
  Droplets,
  Thermometer,
  Box,
  MapPin,
  Share2,
  Check
} from 'lucide-react';
import FishCard from '../components/FishCard';
import LightBox from '../components/LightBox';
import { FISH_DATA } from '../data/fishData';
import { SHOWROOM_INFO } from '../data/showroomInfo';

export default function FishDetailPage({ onOpenContactWithFish }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const fish = FISH_DATA.find((item) => item.id === id);

  // States
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [mediaType, setMediaType] = useState('photo'); // 'photo' | 'video'
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const videoRef = useRef(null);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveMediaIndex(0);
    setMediaType('photo');
    setIsPlaying(false);
  }, [id]);

  if (!fish) {
    return (
      <div className="pt-32 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="font-display text-2xl text-[#171717]">Không tìm thấy tác phẩm cá cảnh này</h2>
        <p className="text-xs text-[#888888] mt-2">Cá thể có thể đã được sưu tập hoặc thay đổi danh mục.</p>
        <Link
          to="/collection"
          className="mt-6 px-6 py-2.5 bg-[#171717] text-white text-xs uppercase tracking-widest rounded-full"
        >
          Trở về Bộ Sưu Tập
        </Link>
      </div>
    );
  }

  // Related fish in same category
  const relatedFish = FISH_DATA.filter(
    (item) => item.id !== fish.id && (item.category === fish.category || item.featured)
  ).slice(0, 3);

  // Toggle Video Play/Pause
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  // Toggle Mute
  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Switch to video mode
  const handleSelectVideo = () => {
    setMediaType('video');
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }, 100);
  };

  // Switch to photo index
  const handleSelectPhoto = (idx) => {
    setMediaType('photo');
    setActiveMediaIndex(idx);
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: fish.name,
        text: fish.shortDesc,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const fishInquiryText = `Xin chào Aquarium Showroom, tôi quan tâm và muốn tư vấn cá thể: ${fish.name} (Mã: ${fish.id})`;
  const directZaloUrl = `${SHOWROOM_INFO.zaloUrl}?text=${encodeURIComponent(fishInquiryText)}`;

  return (
    <div className="pt-24 pb-24 min-h-screen bg-[#F8F8F5]">
      {/* Lightbox component */}
      <LightBox
        images={fish.gallery}
        currentIndex={activeMediaIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onSelectIndex={(idx) => setActiveMediaIndex(idx)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="py-4 flex items-center justify-between text-xs text-[#777777] border-b border-[#E6E6DE] mb-8">
          <div className="flex items-center space-x-2 truncate">
            <Link to="/" className="hover:text-[#171717] transition-colors">
              Trang Chủ
            </Link>
            <span>/</span>
            <Link to="/collection" className="hover:text-[#171717] transition-colors">
              Bộ Sưu Tập
            </Link>
            <span>/</span>
            <Link
              to={`/collection?category=${fish.category}`}
              className="hover:text-[#171717] transition-colors hidden sm:inline"
            >
              {fish.categoryName}
            </Link>
            <span className="hidden sm:inline">/</span>
            <span className="text-[#171717] font-medium truncate">{fish.name}</span>
          </div>

          <div className="flex items-center space-x-3 flex-shrink-0">
            <button
              onClick={handleShare}
              className="p-1.5 rounded-full hover:bg-black/5 text-[#666666] hover:text-[#171717] flex items-center space-x-1"
              title="Chia sẻ tác phẩm"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="text-[11px] hidden sm:inline">{copied ? 'Đã sao chép' : 'Chia sẻ'}</span>
            </button>
            <button
              onClick={() => navigate(-1)}
              className="flex items-center space-x-1 text-[#666666] hover:text-[#171717] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Quay lại</span>
            </button>
          </div>
        </nav>

        {/* Main Exhibition Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* LEFT: MASTER MEDIA GALLERY (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Primary Master Screen */}
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-sm overflow-hidden bg-[#121212] shadow-sm border border-[#E6E6DE]">
              {mediaType === 'photo' ? (
                /* High-Res Photo with Zoom trigger */
                <div className="relative w-full h-full group cursor-zoom-in" onClick={() => setIsLightboxOpen(true)}>
                  <img
                    src={fish.gallery[activeMediaIndex] || fish.primaryImage}
                    alt={fish.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

                  {/* Zoom indicator button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsLightboxOpen(true);
                    }}
                    className="absolute top-4 right-4 p-2.5 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-black/70 transition-all"
                    title="Phóng to ảnh"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>

                  <div className="absolute bottom-4 left-4 text-white text-[11px] bg-black/50 backdrop-blur-md px-3 py-1 rounded-full">
                    Góc nhìn {activeMediaIndex + 1} / {fish.gallery.length} • Nhấn để xem toàn màn hình
                  </div>
                </div>
              ) : (
                /* Realistic Video Player with sleek controls */
                <div className="relative w-full h-full bg-black flex items-center justify-center">
                  <video
                    ref={videoRef}
                    src={fish.video}
                    loop
                    playsInline
                    muted={isMuted}
                    className="w-full h-full object-cover"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />

                  {/* Custom Floating Video Controls */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-2.5 bg-black/60 backdrop-blur-md rounded-lg text-white text-xs">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={togglePlay}
                        className="p-1.5 hover:text-[#C5A880] transition-colors"
                        aria-label={isPlaying ? 'Tạm dừng' : 'Phát video'}
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={toggleMute}
                        className="p-1.5 hover:text-[#C5A880] transition-colors"
                        aria-label={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                      <span className="text-[11px] text-white/70">
                        {isPlaying ? 'Đang quay trực tiếp' : 'Tạm dừng'}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] tracking-wider uppercase text-[#C5A880] font-medium">
                        Real Motion Preview
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Filmstrip & Switcher: Photos + Video button */}
            <div className="flex items-center space-x-3 overflow-x-auto py-2 no-scrollbar">
              {fish.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectPhoto(idx)}
                  className={`relative flex-shrink-0 w-20 h-16 rounded overflow-hidden border-2 transition-all ${
                    mediaType === 'photo' && activeMediaIndex === idx
                      ? 'border-[#171717] scale-105'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}

              {/* Video Tab Thumbnail if video exists */}
              {fish.video && (
                <button
                  onClick={handleSelectVideo}
                  className={`relative flex-shrink-0 w-24 h-16 rounded overflow-hidden border-2 bg-[#121212] flex flex-col items-center justify-center transition-all ${
                    mediaType === 'video'
                      ? 'border-[#C5A880] scale-105 bg-[#0E2A28]'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <Play className="w-4 h-4 text-[#C5A880] mb-0.5" />
                  <span className="text-[9px] tracking-wider uppercase text-white font-medium">
                    Video Cá
                  </span>
                </button>
              )}
            </div>

            {/* Quality & Pedigree Notes */}
            <div className="p-4 bg-white rounded-lg border border-[#E6E6DE] text-xs text-[#666666] space-y-2 font-light">
              <div className="flex items-center space-x-2 text-[#171717] font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Quy chuẩn quay chụp tại Aquarium Showroom:</span>
              </div>
              <p>
                100% hình ảnh và video được ghi hình trực tiếp tại hệ thống bể kính Optical Clear thuộc showroom, dưới ánh sáng tiêu chuẩn quang phổ mặt trời, cam kết không can thiệp bộ lọc làm biến đổi màu sắc cá thể thực tế.
              </p>
            </div>
          </div>

          {/* RIGHT: CURATORIAL SPECIFICATIONS & CONTACT (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Top Identity Block */}
            <div className="border-b border-[#E6E6DE] pb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#888888]">
                  {fish.categoryName}
                </span>
                <span
                  className={`text-[9px] tracking-[0.15em] uppercase font-semibold px-2.5 py-0.5 rounded-full ${
                    fish.status === 'available'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-amber-100 text-amber-900'
                  }`}
                >
                  {fish.status === 'available'
                    ? 'Còn hàng — Sẵn sàng bàn giao'
                    : 'Độc bản — Liên hệ xác nhận'}
                </span>
              </div>

              <h1 className="font-display text-2xl sm:text-3xl font-medium text-[#171717] leading-snug">
                {fish.name}
              </h1>

              <div className="font-serif-body italic text-sm text-[#777777] mt-1 tracking-wider">
                {fish.scientificName}
              </div>

              {/* Price display */}
              <div className="mt-5 p-4 bg-[#F0F0EA] rounded-lg border border-[#E6E6DE] flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#777777] block">
                    Giá tham khảo
                  </span>
                  <span className="text-2xl font-bold text-[#171717] font-display">
                    {fish.priceDisplay}
                  </span>
                </div>
                <div className="text-right text-[11px] text-[#666666]">
                  <span>Bảo hành sức khỏe trọn đời</span>
                </div>
              </div>
            </div>

            {/* Specifications Grid */}
            <div className="bg-white rounded-lg p-5 border border-[#E6E6DE] space-y-3">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#171717] pb-2 border-b border-[#F0F0EA]">
                Thông Số Kỹ Thuật Cá Thể
              </h3>

              <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs">
                <div>
                  <span className="text-[#888888] block text-[11px]">Kích thước</span>
                  <span className="font-medium text-[#171717]">{fish.size}</span>
                </div>
                <div>
                  <span className="text-[#888888] block text-[11px]">Tuổi cá</span>
                  <span className="font-medium text-[#171717]">{fish.age}</span>
                </div>
                <div>
                  <span className="text-[#888888] block text-[11px]">Nguồn gốc / Trại</span>
                  <span className="font-medium text-[#171717]">{fish.origin}</span>
                </div>
                <div>
                  <span className="text-[#888888] block text-[11px]">Giới tính</span>
                  <span className="font-medium text-[#171717]">{fish.gender}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-[#888888] block text-[11px]">Chế độ dinh dưỡng</span>
                  <span className="font-medium text-[#171717]">{fish.diet}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-[#888888] block text-[11px]">Tập tính bơi</span>
                  <span className="font-medium text-[#171717]">{fish.temperament}</span>
                </div>
              </div>
            </div>

            {/* Water Parameters Box */}
            <div className="bg-[#F0F0EA] rounded-lg p-5 border border-[#E6E6DE] space-y-3">
              <div className="flex items-center space-x-2">
                <Droplets className="w-4 h-4 text-[#0E2A28]" />
                <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#171717]">
                  Thông Số Môi Trường Nước Chuẩn
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs pt-1">
                <div className="p-2.5 bg-white rounded border border-[#E6E6DE]">
                  <span className="text-[#888888] block text-[10px] uppercase">Độ pH</span>
                  <span className="font-semibold text-[#171717]">{fish.waterParams.ph}</span>
                </div>
                <div className="p-2.5 bg-white rounded border border-[#E6E6DE]">
                  <span className="text-[#888888] block text-[10px] uppercase">Nhiệt độ</span>
                  <span className="font-semibold text-[#171717]">{fish.waterParams.temp}</span>
                </div>
                <div className="p-2.5 bg-white rounded border border-[#E6E6DE]">
                  <span className="text-[#888888] block text-[10px] uppercase">Độ cứng nước</span>
                  <span className="font-semibold text-[#171717]">{fish.waterParams.hardness}</span>
                </div>
                <div className="p-2.5 bg-white rounded border border-[#E6E6DE]">
                  <span className="text-[#888888] block text-[10px] uppercase">Bể phù hợp</span>
                  <span className="font-semibold text-[#171717] line-clamp-1">{fish.waterParams.tankSize}</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Action Panel (NO CART, NO CHECKOUT!) */}
            <div className="p-6 bg-[#171717] text-[#F8F8F5] rounded-xl space-y-4 shadow-xl">
              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A880] block font-medium">
                  Direct Acquisition & Inquiries
                </span>
                <h4 className="font-display text-lg font-medium text-white mt-1">
                  Liên Hệ Sở Hữu Cá Thể
                </h4>
                <p className="text-xs text-[#AAAAAA] mt-1 font-light">
                  Không thanh toán tự động. Tư vấn thẩm mỹ và xác nhận tình trạng cá thể trực tiếp cùng giám tuyển.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                {/* 1. Main Inquiry Button */}
                <button
                  onClick={() => onOpenContactWithFish(fish)}
                  className="w-full py-3.5 bg-[#F8F8F5] text-[#171717] rounded-lg text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#C5A880] hover:text-white transition-all flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>LIÊN HỆ MUA CÁ & ĐẶT LỊCH</span>
                </button>

                {/* 2. Zalo Chat direct */}
                <a
                  href={directZaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#0068FF] text-white rounded-lg text-xs font-medium tracking-wider uppercase hover:bg-[#0052cc] transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>CHAT ZALO (GỬI ẢNH/VIDEO GÓC QUAY MỚI)</span>
                </a>

                {/* 3. Direct Phone Call */}
                <a
                  href={`tel:${SHOWROOM_INFO.phone.replace(/\s+/g, '')}`}
                  className="w-full py-3 border border-white/25 text-white rounded-lg text-xs font-medium tracking-wider uppercase hover:bg-white/10 transition-all flex items-center justify-center space-x-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>GỌI ĐIỆN: {SHOWROOM_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Description & Care Guide accordion */}
            <div className="space-y-4 pt-2">
              <div className="p-5 bg-white rounded-lg border border-[#E6E6DE] space-y-2">
                <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#171717]">
                  Đặc Điểm & Phẩm Chất Tuyển Chọn
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed font-light">
                  {fish.description}
                </p>
              </div>

              <div className="p-5 bg-white rounded-lg border border-[#E6E6DE] space-y-2">
                <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#171717]">
                  Hướng Dẫn Chăm Sóc Cơ Bản
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed font-light">
                  {fish.careGuide}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RELATED SPECIMENS SECTION */}
        {relatedFish.length > 0 && (
          <section className="mt-24 pt-16 border-t border-[#E6E6DE]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#888888] font-semibold block mb-1">
                  Đồng Dòng Tuyển Chọn
                </span>
                <h2 className="font-display text-2xl font-normal text-[#171717] uppercase">
                  Tác Phẩm Tương Tự
                </h2>
              </div>
              <Link
                to={`/collection?category=${fish.category}`}
                className="text-xs uppercase tracking-wider text-[#171717] hover:text-[#0E2A28] font-medium"
              >
                Xem thêm dòng {fish.categoryName} →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {relatedFish.map((item) => (
                <FishCard key={item.id} fish={item} aspect="aspect-[4/5]" />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

