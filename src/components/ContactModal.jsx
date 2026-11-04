import React from 'react';
import { X, Phone, MessageSquare, MapPin, Clock, ShieldCheck, Send, Check } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/showroomInfo';

export default function ContactModal({ isOpen, onClose, selectedFish }) {
  if (!isOpen) return null;

  const fishInquiry = selectedFish
    ? `Tôi muốn nhận tư vấn và đặt xem cá thể: ${selectedFish.name} (Mã: ${selectedFish.id})`
    : 'Tôi muốn tư vấn xem bộ sưu tập cá cảnh tại showroom.';

  const zaloLink = `${SHOWROOM_INFO.zaloUrl}?text=${encodeURIComponent(fishInquiry)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div
        className="w-full max-w-xl bg-[#F8F8F5] rounded-xl shadow-2xl overflow-hidden border border-[#E6E6DE]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative px-6 py-5 bg-[#171717] text-[#F8F8F5] flex items-center justify-between">
          <div>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A880] block font-medium">
              AQUARIUM PRIVATE CONSULTATION
            </span>
            <h3 className="font-display text-lg font-medium tracking-wide mt-1">
              {selectedFish ? 'Liên Hệ Mua & Tư Vấn Cá Thể' : 'Liên Hệ Showroom Trực Tiếp'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Selected Fish Summary if available */}
          {selectedFish && (
            <div className="flex items-center space-x-4 p-3.5 bg-[#F0F0EA] rounded-lg border border-[#E6E6DE]">
              <img
                src={selectedFish.primaryImage}
                alt={selectedFish.name}
                className="w-16 h-16 rounded object-cover"
              />
              <div className="flex-1 min-w-0">
                <span className="text-[10px] uppercase tracking-wider text-[#666666]">
                  {selectedFish.categoryName} • {selectedFish.origin}
                </span>
                <h4 className="font-display text-sm font-semibold text-[#171717] truncate">
                  {selectedFish.name}
                </h4>
                <p className="text-xs font-semibold text-[#0E2A28] mt-0.5">
                  Giá: {selectedFish.priceDisplay}
                </p>
              </div>
            </div>
          )}

          {/* Direct Action Channels */}
          <div className="space-y-3">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#666666] block">
              Kênh liên hệ trực tiếp 24/7
            </span>

            {/* Zalo Button */}
            <a
              href={zaloLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-[#0068FF] text-white rounded-lg hover:bg-[#0052cc] transition-all group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                  Zalo
                </div>
                <div>
                  <div className="font-medium text-sm">Chat Zalo Cùng Chuyên Viên Tuyển Chọn</div>
                  <div className="text-[11px] text-white/80">
                    Nhận video quay thực tế góc 360°, thông số nước & tư vấn chăm sóc
                  </div>
                </div>
              </div>
              <Send className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Hotline Call Button */}
            <a
              href={`tel:${SHOWROOM_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-between p-4 bg-[#0E2A28] text-white rounded-lg hover:bg-[#163832] transition-all group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#C5A880]" />
                </div>
                <div>
                  <div className="font-medium text-sm">Gọi Hotline Trực Tiếp</div>
                  <div className="text-xs text-[#C5A880] font-semibold">{SHOWROOM_INFO.phoneDisplay}</div>
                </div>
              </div>
              <span className="text-xs px-3 py-1 rounded bg-white/10 uppercase tracking-wider">
                Gọi ngay
              </span>
            </a>
          </div>

          {/* Showroom Visit Info */}
          <div className="p-4 bg-white rounded-lg border border-[#E6E6DE] space-y-3">
            <div className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 text-[#0E2A28] mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-xs font-semibold text-[#171717] block">Địa chỉ Showroom</span>
                <span className="text-xs text-[#666666] leading-relaxed block mt-0.5">
                  {SHOWROOM_INFO.address}
                </span>
              </div>
            </div>

            <div className="flex items-start space-x-3 pt-2 border-t border-[#F0F0EA]">
              <Clock className="w-4 h-4 text-[#0E2A28] mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-xs font-semibold text-[#171717] block">Thời gian mở cửa</span>
                <span className="text-xs text-[#666666] leading-relaxed block mt-0.5">
                  {SHOWROOM_INFO.openingHours}
                </span>
              </div>
            </div>
          </div>

          {/* Commitments snippet */}
          <div className="p-3 bg-[#F0F0EA] rounded-md text-[11px] text-[#666666] flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-[#0E2A28] flex-shrink-0" />
            <span>
              Cam kết cá thuần chủng 100%, bảo hành sức khỏe khi vận chuyển toàn quốc kèm giấy chứng nhận.
            </span>
          </div>
        </div>

        {/* Modal footer */}
        <div className="px-6 py-3 bg-[#EFEFEA] border-t border-[#E6E6DE] text-right">
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-wider text-[#666666] hover:text-[#171717] font-medium"
          >
            Đóng cửa sổ
          </button>
        </div>
      </div>
    </div>
  );
}

