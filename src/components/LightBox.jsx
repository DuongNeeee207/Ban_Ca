import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function LightBox({ images = [], currentIndex = 0, isOpen, onClose, onSelectIndex }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && currentIndex < images.length - 1) {
        onSelectIndex(currentIndex + 1);
      }
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onSelectIndex(currentIndex - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onSelectIndex]);

  if (!isOpen || images.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg animate-fadeIn">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-20"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Main Image View */}
      <div className="relative max-w-5xl max-h-[85vh] p-4 flex items-center justify-center">
        <img
          src={images[currentIndex]}
          alt={`Specimen gallery preview ${currentIndex + 1}`}
          className="max-h-[80vh] max-w-full object-contain rounded shadow-2xl select-none"
        />

        {/* Previous Button */}
        {images.length > 1 && currentIndex > 0 && (
          <button
            onClick={() => onSelectIndex(currentIndex - 1)}
            className="absolute left-2 sm:left-6 p-3 rounded-full bg-black/50 text-white hover:bg-black/80 transition-all z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {images.length > 1 && currentIndex < images.length - 1 && (
          <button
            onClick={() => onSelectIndex(currentIndex + 1)}
            className="absolute right-2 sm:right-6 p-3 rounded-full bg-black/50 text-white hover:bg-black/80 transition-all z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Filmstrip thumbnails at bottom */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 px-4 z-20">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => onSelectIndex(idx)}
              className={`w-14 h-14 rounded overflow-hidden border-2 transition-all ${
                idx === currentIndex ? 'border-[#C5A880] scale-110' : 'border-white/30 opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img} alt="thumb" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

