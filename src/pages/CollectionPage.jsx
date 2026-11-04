import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, SlidersHorizontal, X, RefreshCw } from 'lucide-react';
import FishCard from '../components/FishCard';
import { FISH_DATA } from '../data/fishData';
import { CATEGORIES } from '../data/categories';
import { filterAndSortFish } from '../utils/helpers';

export default function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  // Sync category state when URL changes
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: catId });
    }
  };

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setStatusFilter('all');
    setSortBy('default');
    setSearchParams({});
  };

  const filteredFish = filterAndSortFish(FISH_DATA, {
    category: selectedCategory,
    searchQuery,
    statusFilter,
    sortBy,
  });

  const activeCategoryMeta = CATEGORIES.find((c) => c.id === selectedCategory);

  return (
    <div className="pt-28 pb-24 min-h-screen bg-[#F8F8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title & Breadcrumb */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#888888] font-semibold block mb-2">
            Showroom Tuyển Tập
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-light tracking-wide text-[#171717] uppercase">
            {activeCategoryMeta?.name || 'Toàn Bộ Bộ Sưu Tập'}
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-[#666666] font-light leading-relaxed">
            {activeCategoryMeta?.description ||
              'Khám phá danh sách các loài cá cảnh quý hiếm và thuần chủng được dưỡng tại bể kính optical clear.'}
          </p>
        </div>

        {/* Category Horizontal Filter Bar */}
        <div className="mb-8 border-b border-[#E6E6DE] pb-4">
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`text-xs px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-[#171717] text-[#F8F8F5] font-semibold shadow-sm'
                    : 'bg-[#EFEFEA] text-[#555555] hover:bg-white hover:text-[#171717]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Controls: Search, Sort, Status */}
        <div className="mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white rounded-lg border border-[#E6E6DE]">
          {/* Search Field */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#888888] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm tên, nguồn gốc..."
              className="w-full bg-[#F8F8F5] text-xs text-[#171717] pl-9 pr-8 py-2.5 rounded-full border border-[#E6E6DE] focus:outline-none focus:border-[#171717]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#888888] hover:text-[#171717]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Right side Sort & Status Selectors */}
          <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-end">
            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="text-xs bg-[#F8F8F5] text-[#171717] px-3 py-2 rounded-md border border-[#E6E6DE] focus:outline-none cursor-pointer"
            >
              <option value="all">Tất cả tình trạng</option>
              <option value="available">Còn hàng sẵn sàng</option>
              <option value="contact">Hàng độc bản (Liên hệ)</option>
              <option value="sold">Đã có chủ nhân</option>
            </select>

            {/* Sort Selector */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs bg-[#F8F8F5] text-[#171717] px-3 py-2 rounded-md border border-[#E6E6DE] focus:outline-none cursor-pointer"
            >
              <option value="default">Sắp xếp: Mặc định</option>
              <option value="price-asc">Giá: Thấp đến Cao</option>
              <option value="price-desc">Giá: Cao đến Thấp</option>
              <option value="rarity">Độ quý hiếm ưu tiên</option>
              <option value="name-asc">Tên: A → Z</option>
            </select>

            {/* Reset Filters button if any filter active */}
            {(selectedCategory !== 'all' || searchQuery || statusFilter !== 'all' || sortBy !== 'default') && (
              <button
                onClick={handleResetFilters}
                title="Đặt lại bộ lọc"
                className="p-2 text-xs text-[#666666] hover:text-[#171717] hover:bg-[#F0F0EA] rounded-full transition-colors flex items-center space-x-1"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Đặt lại</span>
              </button>
            )}
          </div>
        </div>

        {/* Counter */}
        <div className="mb-6 flex items-center justify-between text-xs text-[#888888]">
          <span>Hiển thị {filteredFish.length} tác phẩm</span>
          {selectedCategory !== 'all' && (
            <span className="uppercase tracking-wider text-[10px]">
              Đang lọc theo: <strong className="text-[#171717]">{activeCategoryMeta?.name}</strong>
            </span>
          )}
        </div>

        {/* Fish Cards Grid */}
        {filteredFish.length === 0 ? (
          <div className="py-24 text-center bg-white rounded-lg border border-[#E6E6DE] p-8">
            <h3 className="font-display text-lg text-[#171717]">Không có cá thể phù hợp với tìm kiếm</h3>
            <p className="text-xs text-[#888888] mt-2 max-w-md mx-auto font-light">
              Quý khách vui lòng thử thay đổi từ khóa hoặc đặt lại bộ lọc danh mục.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-6 px-6 py-2.5 bg-[#171717] text-white text-xs uppercase tracking-widest rounded-full hover:bg-[#0E2A28] transition-colors"
            >
              Xem toàn bộ danh mục
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredFish.map((fish) => (
              <FishCard key={fish.id} fish={fish} aspect="aspect-[4/5]" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

