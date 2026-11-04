import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2, Clock } from 'lucide-react';

export default function FishCard({ fish, aspect = 'aspect-[4/5]', priority = false }) {
  const [isHovered, setIsHovered] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && !videoFailed) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay failed or aborted
          setVideoFailed(true);
        });
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const getRarityBadge = (rarity) => {
    switch (rarity) {
      case 'Masterpiece':
        return {
          bg: 'bg-[#171717]/80 text-[#F8F8F5]',
          border: 'border-[#C5A880]/50',
          label: 'Masterpiece'
        };
      case 'Hiếm có':
        return {
          bg: 'bg-[#0E2A28]/85 text-[#F8F8F5]',
          border: 'border-white/20',
          label: 'Tuyển Chọn Hiếm'
        };
      default:
        return {
          bg: 'bg-white/80 text-[#171717]',
          border: 'border-black/10',
          label: 'Thuần Chủng'
        };
    }
  };

  const rarityMeta = getRarityBadge(fish.rarity);

  return (
    <Link
      to={`/fish/${fish.id}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative block overflow-hidden rounded-sm bg-[#EFEFEA] transition-all duration-500 focus:outline-none"
    >
      {/* Visual Container */}
      <div className={`relative w-full ${aspect} overflow-hidden bg-[#181818]`}>
        {/* Primary High-Res Photo */}
        <img
          src={fish.primaryImage}
          alt={fish.name}
          loading={priority ? 'eager' : 'lazy'}
          className={`h-full w-full object-cover object-center transition-all duration-700 ease-out ${
            isHovered ? 'scale-105 filter brightness-95' : 'scale-100'
          } ${isHovered && videoLoaded && !videoFailed ? 'opacity-0' : 'opacity-100'}`}
        />

        {/* Video Preview on Hover (Smooth crossfade) */}
        {fish.video && !videoFailed && (
          <video
            ref={videoRef}
            src={fish.video}
            loop
            muted
            playsInline
            preload="metadata"
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoFailed(true)}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 pointer-events-none ${
              isHovered && videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Gradient Overlay for Typography Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10 pointer-events-none transition-opacity duration-300" />

        {/* Top Badges (Category & Status / Rarity) */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
          <span className="text-[10px] tracking-[0.2em] uppercase font-medium px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-[#F8F8F5] border border-white/10">
            {fish.categoryName}
          </span>

          <div className="flex items-center space-x-1.5">
            <span
              className={`text-[9px] tracking-[0.15em] uppercase font-semibold px-2 py-0.5 rounded-full backdrop-blur-md border ${rarityMeta.bg} ${rarityMeta.border}`}
            >
              {rarityMeta.label}
            </span>
          </div>
        </div>

        {/* Live Motion Indicator pill when hovering video */}
        {isHovered && videoLoaded && !videoFailed && (
          <div className="absolute top-12 right-4 flex items-center space-x-1 px-2 py-0.5 rounded-full bg-emerald-950/80 backdrop-blur-md border border-emerald-400/30 text-[9px] text-emerald-200 z-10 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Mô phỏng bơi</span>
          </div>
        )}

        {/* Bottom Information Details */}
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white z-10 flex flex-col justify-end">
          {/* Scientific Latin Name */}
          <span className="text-[11px] font-serif-body italic text-white/70 tracking-wider line-clamp-1 mb-1">
            {fish.scientificName}
          </span>

          {/* Fish Name */}
          <h3 className="font-display text-base sm:text-lg font-medium text-[#F8F8F5] leading-snug tracking-wide line-clamp-1 group-hover:text-emerald-100 transition-colors">
            {fish.name}
          </h3>

          {/* Reference Price & Meta */}
          <div className="mt-2 flex items-baseline justify-between pt-2 border-t border-white/15">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-white/60 block">
                Giá tham khảo
              </span>
              <span className="text-sm font-semibold text-white tracking-wide">
                {fish.priceDisplay}
              </span>
            </div>

            {/* View Details Subtle Reveal */}
            <div className="flex items-center space-x-1.5 text-xs text-[#C5A880] group-hover:text-white transition-all transform group-hover:translate-x-1">
              <span className="text-[10px] tracking-[0.2em] uppercase font-medium">
                XEM CHI TIẾT
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

