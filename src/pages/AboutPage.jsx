import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Sparkles, CheckCircle, ArrowRight, Award } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/showroomInfo';

export default function AboutPage() {
  const steps = [
    {
      step: '01',
      title: 'Tuyển Chọn Nguồn Gen Thuần',
      desc: 'Trực tiếp liên hệ và đấu giá các cá thể có phả hệ rõ ràng từ các trang trại danh tiếng tại Niigata (Nhật Bản), Penang (Malaysia), Bangkok (Thái Lan) và các trạm nghiên cứu cá hoang dã Nam Mỹ.'
    },
    {
      step: '02',
      title: 'Kiểm Dịch & Thuần Dưỡng 21 Ngày',
      desc: 'Mỗi cá thể nhập về được đưa vào khu vực cách ly y sinh riêng biệt. Cân bằng đường ruột với thảo dược tự nhiên, làm quen thông số nước địa phương và phòng ngừa 100% mầm bệnh.'
    },
    {
      step: '03',
      title: 'Đánh Giá Thể Trạng & Dáng Bơi',
      desc: 'Chỉ những cá thể có dáng bơi kiêu hãnh, vây căng tròn, mắt sáng, phản xạ linh hoạt và tinh thần dạn dĩ mới được chuyển sang khu vực bể trưng bày nghệ thuật.'
    },
    {
      step: '04',
      title: 'Trưng Bày Bể Kính Optical Clear',
      desc: 'Hệ thống hồ kính siêu trong không vết ghép, sử dụng đèn LED quang phổ mặt trời tái hiện chính xác màu sắc nguyên bản của tự nhiên.'
    },
    {
      step: '05',
      title: 'Đóng Thùng Hàng Không & Bàn Giao',
      desc: 'Quy trình đóng gói y tế với túi oxy tinh khiết, hạt khử độc nước, túi giữ nhiệt mùa đông và thùng xốp dày dặn, bảo hành sống khỏe đến tận tay gia chủ trên toàn quốc.'
    }
  ];

  return (
    <div className="pt-28 pb-24 min-h-screen bg-[#F8F8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        {/* Editorial Hero */}
        <div className="text-center space-y-4">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#888888] font-semibold block">
            Về Chúng Tôi • Our Story
          </span>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-light text-[#171717] uppercase tracking-wide">
            Khai Mở Vẻ Đẹp
            <span className="block italic font-serif-body font-light text-2xl sm:text-4xl text-[#777777] normal-case mt-1">
              tĩnh tại beneath the water
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-[#555555] max-w-2xl mx-auto font-light leading-relaxed pt-2">
            AQUARIUM ra đời từ niềm say mê thuần khiết đối với sự uyển chuyển và linh hồn của các loài sinh vật thủy sinh. Chúng tôi định nghĩa cá cảnh không chỉ là một thú chơi, mà là một trải nghiệm nghệ thuật đương đại nuôi dưỡng sự an lạc trong tâm hồn.
          </p>
        </div>

        {/* Cinematic Showroom Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-[#181818] shadow-md border border-[#E6E6DE]">
            <img
              src="https://images.unsplash.com/photo-1520315342629-6ea920342047?auto=format&fit=crop&w=1000&q=80"
              alt="Hệ thống bể kính showroom"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-[#181818] shadow-md border border-[#E6E6DE]">
            <img
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1000&q=80"
              alt="Cá Koi thuần chủng tại showroom"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* The 5-Step Curation Process */}
        <div className="space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#888888] font-semibold block mb-2">
              Quy Trình Nghiêm Ngặt
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-normal text-[#171717] tracking-wider uppercase">
              5 Bước Tuyển Chọn & Thuần Dưỡng
            </h2>
          </div>

          <div className="space-y-6">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 bg-white rounded-lg border border-[#E6E6DE] flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 hover:border-[#171717] transition-all"
              >
                <span className="font-serif-body italic text-4xl text-[#C5A880] flex-shrink-0 font-light">
                  {item.step}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-base font-semibold text-[#171717] tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#666666] mt-1.5 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commitments & Values */}
        <div className="p-8 sm:p-12 bg-[#171717] text-[#F8F8F5] rounded-xl space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880] block font-medium mb-1">
              Tâm Niệm Cốt Lõi
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-light tracking-wide uppercase">
              Cam Kết Về Sức Khỏe & Thẩm Mỹ
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs text-[#CCCCCC] font-light">
            <div className="space-y-2">
              <h4 className="font-semibold text-white uppercase tracking-wider flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-[#C5A880]" />
                <span>Bảo Hành Cá Sống Khỏe Toàn Quốc</span>
              </h4>
              <p className="leading-relaxed text-[#AAAAAA]">
                Nếu xảy ra bất kỳ sự cố rủi ro nào trong quá trình vận chuyển, chúng tôi cam kết hoàn tiền 100% hoặc đổi mới cá thể tương đương ngay lập tức.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-white uppercase tracking-wider flex items-center space-x-2">
                <Award className="w-4 h-4 text-[#C5A880]" />
                <span>Hồ Sơ Nguồn Gốc Minh Bạch</span>
              </h4>
              <p className="leading-relaxed text-[#AAAAAA]">
                Cung cấp đầy đủ chip vi mô (Microchip) và chứng thư kiểm định đối với các dòng cá quý như Cá Rồng và Cá Koi Nhật Bản.
              </p>
            </div>
          </div>
        </div>

        {/* CTA to Collection */}
        <div className="text-center pt-8">
          <Link
            to="/collection"
            className="inline-flex items-center space-x-3 px-8 py-3.5 bg-[#171717] text-[#F8F8F5] rounded-full text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#0E2A28] transition-all"
          >
            <span>Khám Phá Toàn Bộ Bộ Sưu Tập</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

