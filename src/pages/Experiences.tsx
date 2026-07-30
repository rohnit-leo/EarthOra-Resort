import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import React, { useState } from "react";
import { SEO } from "../components/common/SEO";
import { useExperiences } from "../lib/useSiteData";

export function Experiences() {
  const { experiences: expList } = useExperiences();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const galleryImages = expList.map((e: any) => e.image || e.url || e).filter(Boolean);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null && galleryImages.length > 0) {
      setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null && galleryImages.length > 0) {
      setSelectedImageIndex((selectedImageIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-luxury-white min-h-screen">
      <SEO 
        title="Resort Experiences & Photo Gallery | EarthOra Resort Satara"
        description="Discover guest experiences and photo moments at EarthOra Resort near Kaas Plateau, Satara."
        canonicalUrl="https://www.earthoraresort.in/experiences"
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h4 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-nature-green uppercase tracking-[0.2em] text-xs font-semibold"
          >
            EarthOra Experience Gallery
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-dark-surface"
          >
            Captured Moments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-elegant-stone text-base md:text-lg font-light leading-relaxed"
          >
            Immerse yourself in peaceful landscapes, cozy bonfires, live open kitchen dining, and pristine nature moments at EarthOra Resort.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        {galleryImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {galleryImages.map((img: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 6) * 0.08 }}
                className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-2xl border border-black/10 aspect-[4/3] bg-soft-ivory shadow-xs"
                onClick={() => setSelectedImageIndex(i)}
              >
                <img 
                  src={img} 
                  alt={`Experience moment ${i + 1}`} 
                  loading="lazy"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white border border-white/40 px-4 py-2 rounded-full text-xs uppercase tracking-widest font-semibold">
                    <Camera size={14} /> View Photo
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-400 font-light text-sm">
            No experience photos added yet. Add photos from the Admin Panel.
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && galleryImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageIndex(null)}
            className="fixed inset-0 z-[100] bg-dark-surface/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedImageIndex(null); }} 
              className="absolute top-6 right-6 text-white hover:text-subtle-gold p-2 z-50 transition-colors"
            >
              <X size={32} />
            </button>
            
            <button 
              onClick={handlePrev}
              className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 text-white hover:text-subtle-gold p-4 z-50 transition-colors"
            >
              <ChevronLeft size={48} />
            </button>

            <img 
              src={galleryImages[selectedImageIndex]} 
              alt="Fullscreen View" 
              className="max-w-full max-h-full object-contain shadow-2xl rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button 
              onClick={handleNext}
              className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-white hover:text-subtle-gold p-4 z-50 transition-colors"
            >
              <ChevronRight size={48} />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 tracking-widest text-sm">
              {selectedImageIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
