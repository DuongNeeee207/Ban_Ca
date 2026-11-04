import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Tag } from 'lucide-react';
import { FISH_DATA } from '../data/fishData';
import { CATEGORIES } from '../data/categories';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Filter fish
  const filtered = FISH_DATA.filter((item) => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    if (!matchesCat) return false;
    if (!query.trim()) return true;

    const q = query.toLowerCase().trim();
    return (
      item.name.toLowerCase().includes(q) ||
      item.scientificName.toLowerCase().includes(q) ||
      item.categoryName.toLowerCase().includes(q) ||
      item.origin.toLowerCase().includes(q) ||
      item.tags?.some((t) => t.toLowerCase().includes(q))
    );
  });

  const handleSelectFish = (id) => {
    onClose();
    navigate(`/fish/${id}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div
        className="w-full max-w-3xl bg-[#F8F8F5] rounded-xl shadow-2xl overflow-hidden border border-[#E6E6DE] transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Bar */}
        <div className="relative flex items-center px-6 py-4 border-b border-[#E6E6DE]">
          <Search className="w-5 h-5 text-[#888888] mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm kiếm theo tên cá, tên khoa học, nguồn gốc, dòng cá..."
            className="w-full bg-transparent text-base sm:text-lg text-[#171717] placeholder-[#888888] focus:outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 mr-2 text-xs text-[#888888] hover:text-[#171717]"
            >
              Xóa
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-black/5 text-[#666666] hover:text-[#171717] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Category Chips */}
        <div className="px-6 py-3 bg-[#F0F0EA] flex items-center space-x-2 overflow-x-auto no-scrollbar border-b border-[#E6E6DE]">
          <span className="text-[11px] uppercase tracking-wider text-[#777777] whitespace-nowrap flex items-center mr-1">
            <Tag className="w-3 h-3 mr-1" /> Danh mục:
          </span>
          {CATEGORIES.slice(0, 7).map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`text-xs px-3 py-1 rounded-full whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#171717] text-[#F8F8F5] font-medium'
                  : 'bg-white/80 text-[#555555] hover:bg-white hover:text-[#171717]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto divide-y divide-[#EFEFEA] p-2">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-[#888888]">
              <p className="text-sm">Không tìm thấy tác phẩm cá cảnh phù hợp.</p>
              <p className="text-xs mt-1 text-[#aaaaaa]">
                Thử tìm với từ khóa khác như "Huyết Long", "Dainichi", "Heckel", "Betta"...
              </p>
            </div>
          ) : (
            filtered.map((fish) => (
              <div
                key={fish.id}
                onClick={() => handleSelectFish(fish.id)}
                className="group flex items-center justify-between p-3 rounded-lg hover:bg-white transition-all cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={fish.primaryImage}
                    alt={fish.name}
                    className="w-14 h-14 rounded object-cover border border-[#E6E6DE] group-hover:scale-105 transition-transform"
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] tracking-wider uppercase px-2 py-0.5 rounded bg-[#F0F0EA] text-[#666666]">
                        {fish.categoryName}
                      </span>
                      <span className="text-[11px] font-serif-body italic text-[#888888]">
                        {fish.scientificName}
                      </span>
                    </div>
                    <h4 className="font-display text-sm font-semibold text-[#171717] mt-0.5 group-hover:text-[#0E2A28]">
                      {fish.name}
                    </h4>
                    <p className="text-xs text-[#777777] line-clamp-1 mt-0.5">
                      {fish.origin} • {fish.size}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <span className="text-[10px] text-[#888888] block uppercase tracking-wider">
                      Tham khảo
                    </span>
                    <span className="text-xs font-semibold text-[#171717]">
                      {fish.priceDisplay}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#888888] group-hover:text-[#0E2A28] group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info in modal */}
        <div className="px-6 py-2.5 bg-[#F0F0EA] text-center text-[11px] text-[#888888] border-t border-[#E6E6DE]">
          Nhấn <kbd className="px-1.5 py-0.5 bg-white border border-[#DDD] rounded text-[10px]">Esc</kbd> để đóng • Hiển thị {filtered.length} kết quả
        </div>
      </div>
    </div>
  );
}

