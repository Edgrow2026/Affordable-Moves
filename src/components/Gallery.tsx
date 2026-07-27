import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_DATA } from '../data/content';
import { GalleryItem } from '../types';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = filter === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === filter);

  const openLightbox = (id: string) => {
    const idx = GALLERY_DATA.findIndex((item) => item.id === id);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_DATA.length);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_DATA.length) % GALLERY_DATA.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-[#FAF8F4] border-b border-[#E6DAC4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#B29A70] uppercase tracking-widest block mb-2">
            Real Removals In Action
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-[#475841]">
            Our Fleet, Crew & Work Gallery
          </h2>
          <p className="text-[#666666] text-sm mt-3">
            Take a look inside our operations — clean modern tail-lift vehicles, careful furniture wrapping, double-walled packing, and climate-controlled storage.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'fleet', label: 'Fleet & Trucks' },
            { id: 'removals', label: 'House Removals' },
            { id: 'packing', label: 'Packing & Materials' },
            { id: 'storage', label: 'Storage Facilities' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold font-poppins transition-all border ${
                filter === cat.id
                  ? 'bg-[#5F7355] text-white border-[#5F7355] shadow-md'
                  : 'bg-white text-[#2F2F2F] border-[#E6DAC4] hover:border-[#8C9B80]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              onClick={() => openLightbox(item.id)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border border-[#E6DAC4] shadow-sm bg-white h-64"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#475841]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between text-white">
                <div className="flex justify-end">
                  <div className="p-2 bg-[#FAF8F4]/20 rounded-full text-[#CDBA96] backdrop-blur-xs">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold text-[#CDBA96] tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold font-poppins">{item.title}</h3>
                  <p className="text-xs text-[#E6DAC4] mt-1 line-clamp-2">{item.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 bg-[#475841]/95 backdrop-blur-md flex items-center justify-center p-4">
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-[#5F7355] text-[#CDBA96] hover:text-white transition-colors z-50"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={prevLightbox}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#5F7355] text-[#CDBA96] hover:text-white transition-colors z-50 hidden sm:block"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextLightbox}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#5F7355] text-[#CDBA96] hover:text-white transition-colors z-50 hidden sm:block"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="max-w-4xl w-full text-center space-y-4">
              <div className="relative max-h-[70vh] overflow-hidden rounded-2xl border-2 border-[#CDBA96] shadow-2xl">
                <img
                  src={GALLERY_DATA[lightboxIndex].imageUrl}
                  alt={GALLERY_DATA[lightboxIndex].title}
                  className="w-full max-h-[70vh] object-contain mx-auto bg-black/40"
                />
              </div>

              <div className="text-white space-y-1">
                <h3 className="text-xl font-bold font-poppins text-[#CDBA96]">
                  {GALLERY_DATA[lightboxIndex].title}
                </h3>
                <p className="text-sm text-[#E6DAC4]">
                  {GALLERY_DATA[lightboxIndex].caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
