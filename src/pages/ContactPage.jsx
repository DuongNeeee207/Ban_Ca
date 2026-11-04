import React, { useState } from 'react';
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Mail,
  Send,
  Calendar,
  CheckCircle2,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { SHOWROOM_INFO } from '../data/showroomInfo';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    interest: 'all',
    note: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="pt-28 pb-24 min-h-screen bg-[#F8F8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#888888] font-semibold block">
            Kết Nối Trực Tiếp
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-light text-[#171717] uppercase tracking-wide">
            Liên Hệ Showroom
          </h1>
          <p className="text-xs sm:text-sm text-[#666666] max-w-xl mx-auto font-light leading-relaxed">
            Chúng tôi luôn sẵn sàng đón tiếp quý khách ghé thăm không gian triển lãm hoặc hỗ trợ tư vấn chuyên sâu qua các kênh trực tuyến.
          </p>
        </div>

        {/* Contact Methods Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Hotline Card */}
          <div className="p-8 bg-white rounded-lg border border-[#E6E6DE] flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#F0F0EA] flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#0E2A28]" />
              </div>
              <h3 className="font-display text-base font-semibold text-[#171717]">
                Hotline Trực Tiếp
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                Hỗ trợ tư vấn tình trạng cá, báo giá và giải đáp kỹ thuật nuôi 24/7.
              </p>
            </div>
            <a
              href={`tel:${SHOWROOM_INFO.phone.replace(/\s+/g, '')}`}
              className="text-sm font-bold text-[#0E2A28] hover:underline"
            >
              {SHOWROOM_INFO.phoneDisplay}
            </a>
          </div>

          {/* Zalo Consultation */}
          <div className="p-8 bg-white rounded-lg border border-[#E6E6DE] flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#0068FF]/10 flex items-center justify-center font-bold text-sm text-[#0068FF]">
                Zalo
              </div>
              <h3 className="font-display text-base font-semibold text-[#171717]">
                Chat Zalo Với Chuyên Viên
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                Nhận video clip quay thực tế 360 độ góc độ ánh sáng theo yêu cầu.
              </p>
            </div>
            <a
              href={SHOWROOM_INFO.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider text-[#0068FF] font-semibold hover:underline"
            >
              <span>Nhắn tin Zalo ngay</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Opening Hours & Address */}
          <div className="p-8 bg-white rounded-lg border border-[#E6E6DE] flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#F0F0EA] flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#0E2A28]" />
              </div>
              <h3 className="font-display text-base font-semibold text-[#171717]">
                Giờ Mở Cửa
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                {SHOWROOM_INFO.openingHours}
              </p>
            </div>
            <div className="text-xs text-[#888888]">
              Đón tiếp cả Thứ Bảy, Chủ Nhật & Ngày Lễ
            </div>
          </div>
        </div>

        {/* Address & Interactive Map Card */}
        <div className="p-8 bg-white rounded-lg border border-[#E6E6DE] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#F0F0EA]">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-[#0E2A28] mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-display text-lg font-medium text-[#171717]">
                  Địa Chỉ Showroom Nghệ Thuật
                </h3>
                <p className="text-xs text-[#666666] mt-1 leading-relaxed">
                  {SHOWROOM_INFO.address}
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-[#171717] text-xs uppercase tracking-wider rounded-full hover:bg-[#171717] hover:text-[#F8F8F5] transition-all flex items-center space-x-1.5 self-start sm:self-auto"
            >
              <span>Chỉ Đường Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Stylized Map View / Frame */}
          <div className="relative w-full h-72 sm:h-80 rounded-lg overflow-hidden bg-[#EAEAEA] border border-[#DDD]">
            <iframe
              title="Aquarium Showroom Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.243542289643!2d106.74102927584164!3d10.792652989357022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752613d5269785%3A0x6b8bc00a12e3e9d8!2sAn%20Phu%2C%20District%202%2C%20Ho%20Chi%20Minh%20City!5e0!3m2!1sen!2svn!4v1711200000000!5m2!1sen!2svn"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.6) contrast(1.1)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Private Viewing Appointment Form */}
        <div className="p-8 sm:p-10 bg-[#171717] text-[#F8F8F5] rounded-xl space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880] block font-medium">
              Trải Nghiệm Riêng Tư
            </span>
            <h3 className="font-display text-2xl font-light tracking-wide uppercase">
              Đặt Lịch Tham Quan Showroom & Thưởng Cá 1:1
            </h3>
            <p className="text-xs text-[#AAAAAA] font-light max-w-xl">
              Để chuẩn bị trà đạo và setup ánh sáng ngắm cá tốt nhất, quý khách có thể gửi yêu cầu đặt trước khung giờ mong muốn.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-6 bg-white/10 rounded-lg border border-[#C5A880]/40 text-center space-y-3">
              <CheckCircle2 className="w-8 h-8 text-[#C5A880] mx-auto" />
              <h4 className="font-display text-base font-semibold text-white">
                Đã Tiếp Nhận Thông Tin Đặt Lịch
              </h4>
              <p className="text-xs text-[#CCCCCC] max-w-md mx-auto">
                Chuyên viên của Aquarium Showroom sẽ liên hệ lại với quý khách qua số điện thoại để xác nhận lịch hẹn trong ít phút.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#AAAAAA] block mb-1">
                    Họ và tên của quý khách *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ví dụ: Nguyễn Văn A"
                    className="w-full bg-white/10 border border-white/20 rounded px-3.5 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#C5A880]"
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#AAAAAA] block mb-1">
                    Số điện thoại / Zalo *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0988 xxx xxx"
                    className="w-full bg-white/10 border border-white/20 rounded px-3.5 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#C5A880]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#AAAAAA] block mb-1">
                    Dòng cá quý khách muốn ngắm
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-[#222222] border border-white/20 rounded px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880]"
                  >
                    <option value="all">Tham quan toàn bộ showroom</option>
                    <option value="ca-rong">Cá Rồng (Arowana)</option>
                    <option value="ca-dia">Cá Đĩa (Discus)</option>
                    <option value="ca-koi">Cá Koi Nhật Bản</option>
                    <option value="ca-betta">Cá Betta Nghệ Thuật</option>
                    <option value="ca-ranchu">Cá Ranchu & Ba Đuôi</option>
                    <option value="ca-quy-hiem">Dòng Cá Quý Hiếm / Độc Bản</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#AAAAAA] block mb-1">
                    Ngày dự kiến ghé thăm
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#AAAAAA] block mb-1">
                  Ghi chú hoặc yêu cầu đặc biệt
                </label>
                <textarea
                  rows="3"
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  placeholder="Ví dụ: Cần tư vấn thông số bể cho cá rồng, mang theo mẫu nước hồ để đo chỉ số..."
                  className="w-full bg-white/10 border border-white/20 rounded px-3.5 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#C5A880]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-[#F8F8F5] text-[#171717] rounded-full text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#C5A880] hover:text-white transition-all flex items-center justify-center space-x-2"
              >
                <span>XÁC NHẬN GỬI YÊU CẦU ĐẶT LỊCH</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

