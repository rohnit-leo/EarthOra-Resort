import { motion, AnimatePresence } from "motion/react";
import { Coffee, Trees, Sunset, Utensils, Music, MapPin, X, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { SEO } from "../components/common/SEO";

const GALLERY_IMAGES = [
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/exp/IMG_3012.JPG.jpeg",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/exp/IMG_3013.JPG.jpeg",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/exp/IMG_3014.JPG.jpeg",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/exp/IMG_3015.JPG.jpeg",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/exp/IMG_3016.JPG.jpeg",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/exp/IMG_3017.JPG.jpeg",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/exp/IMG_3018.JPG.jpeg",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/exp/IMG_3019.JPG.jpeg",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/exp/IMG_3020.JPG%20%281%29.jpeg",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/exp/IMG_3021.JPG.jpeg",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/exp/IMG_3022.JPG.jpeg",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/exp/IMG_3023.JPG.jpeg",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/exp/IMG_3024.JPG.jpeg",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/exp/IMG_3025.JPG.jpeg",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/exp/IMG_3026.JPG.jpeg",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/exp/IMG_3027.PNG",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/exp/IMG_3028.PNG",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/exp/IMG_3029.PNG",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/exp/IMG_3030.JPG.jpeg",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/exp/IMG_3031.JPG.jpeg",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/exp/IMG_3032.JPG.jpeg"
];

export function Experiences() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  const experiences = [
    {
      time: "07:00 AM",
      title: "Morning Nature Walk",
      desc: "Start your day with a guided nature walk around Kaas Plateau's scenic surroundings, accompanied by our friendly resident dogs.",
      icon: Trees
    },
    {
      time: "09:00 AM",
      title: "Premium Breakfast",
      desc: "Enjoy a sumptuous authentic Maharashtrian or Continental breakfast spread in our open-air dining area.",
      icon: Coffee
    },
    {
      time: "12:00 PM",
      title: "Local Sightseeing",
      desc: "Explore nearby attractions like Thoseghar Waterfalls or Sajjangad Fort, arranged upon request.",
      icon: MapPin
    },
    {
      time: "01:30 PM",
      title: "Culinary Delights",
      desc: "Indulge in a rich Thali or your choice of a la carte meals, prepared with fresh organic ingredients.",
      icon: Utensils
    },
    {
      time: "05:00 PM",
      title: "Sunset & High Tea",
      desc: "Relax in the garden with premium tea and snacks while watching a mesmerizing sunset over the valley.",
      icon: Sunset
    },
    {
      time: "08:00 PM",
      title: "Bonfire & Music",
      desc: "Gather around the bonfire on chilly evenings with soothing music, great company, and a starry sky.",
      icon: Music
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-luxury-white min-h-screen">
      <SEO 
        title="Resort Experiences & Activities | EarthOra Resort Satara"
        description="Discover guest experiences at EarthOra Resort: bonfire evenings, open-air events, nature walks near Kaas Plateau, and friendly resident dogs."
        canonicalUrl="https://www.earthoraresort.in/experiences"
      />
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-nature-green uppercase tracking-widest text-sm font-medium mb-4"
          >
            A Day At EarthOra
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-dark-surface"
          >
            Curated Experiences
          </motion.h1>
        </div>

        <div className="relative border-l border-elegant-stone/30 ml-6 md:ml-12 space-y-16 py-8">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative pl-10 md:pl-16"
            >
              <div className="absolute top-0 -left-6 md:-left-[26px] w-12 h-12 bg-white border border-elegant-stone/30 rounded-full flex items-center justify-center shadow-lg">
                <exp.icon size={20} className="text-subtle-gold" />
              </div>
              
              <div className="bg-soft-ivory p-8 rounded-tr-3xl rounded-br-3xl rounded-bl-3xl">
                <span className="text-nature-green font-medium tracking-widest uppercase text-xs mb-3 block">{exp.time}</span>
                <h3 className="text-2xl font-serif text-dark-surface mb-3">{exp.title}</h3>
                <p className="text-elegant-stone leading-relaxed font-light">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Masonry Gallery Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif text-dark-surface mb-4"
            >
              Moments at EarthOra
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-elegant-stone font-light text-sm md:text-base max-w-2xl mx-auto"
            >
              A visual journey through the untamed beauty and curated moments that make every stay special.
            </motion.p>
          </div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {GALLERY_IMAGES.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 5) * 0.1 }}
                className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl"
                onClick={() => setSelectedImageIndex(i)}
              >
                <img 
                  src={img} 
                  alt={`Experience moment ${i + 1}`} 
                  loading="lazy"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImageIndex !== null && (
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
              src={GALLERY_IMAGES[selectedImageIndex]} 
              alt="Fullscreen View" 
              className="max-w-full max-h-full object-contain shadow-2xl rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />

            <button 
              onClick={handleNext}
              className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-white hover:text-subtle-gold p-4 z-50 transition-colors"
            >
              <ChevronRight size={48} />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 tracking-widest text-sm">
              {selectedImageIndex + 1} / {GALLERY_IMAGES.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
