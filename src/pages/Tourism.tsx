import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Compass, Sparkles, X, ChevronLeft, ChevronRight, Trees, Mountain } from "lucide-react";
import { useState } from "react";
import { redirectToWhatsApp } from "../lib/utils";

const SECTIONS = [
  {
    id: "kaas",
    title: "UNESCO Kaas Plateau",
    subtitle: "The Valley of Flowers",
    distance: "15 mins from EarthOra",
    tagline: "A World Heritage Biodiversity Hotspot",
    desc: "Kaas Plateau is a geological wonder that transforms into a tapestry of colorful wild blooms following the monsoon rains. Home to over 850 species of flowering plants, delicate orchids, and rare endemic flora, it offers an unforgettable walk through nature's carpet.",
    images: [
      "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/hchc/IMG_3090.JPG%20%281%29.jpeg",
      "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/hchc/IMG_3093.JPG%20%281%29.jpeg",
      "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/hchc/IMG_3094.JPG%20%281%29.jpeg",
      "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/hchc/IMG_3095.JPG%20%281%29.jpeg",
      "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/hchc/IMG_3096.JPG%20%281%29.jpeg"
    ]
  },
  {
    id: "safari",
    title: "Wilderness Jungle Safari",
    subtitle: "Untamed Nature Trails",
    distance: "Just 5 mins from Resort",
    tagline: "Thick Forests & Wildlife Spotting",
    desc: "Located virtually next door to EarthOra, the protected jungle trails offer guided safari rides and nature walks. Immerse yourself in dense foliage, fresh oxygen-rich air, bird calls, and early morning forest mist.",
    images: [
      "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/hchc/jvjv/jvjv/IMG_3101.JPG.jpeg",
      "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/hchc/jvjv/jvjv/IMG_3102.JPG.jpeg"
    ]
  },
  {
    id: "waterfalls",
    title: "Vajrai & Thoseghar Waterfalls",
    subtitle: "Roaring Natural Waterfalls",
    distance: "20-30 mins from Resort",
    tagline: "India's Highest Cascades & Emerald Valleys",
    desc: "Feel the invigorating spray of Vajrai Waterfall — one of India's tallest tiered falls — and Thoseghar's dramatic cliffside plunges. Surrounded by lush bamboo groves and viewing galleries, they offer scenic vistas ideal for nature lovers.",
    images: [
      "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/hchc/jvjv/jvjv/IMG_3098.JPG.jpeg",
      "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/hchc/jvjv/jvjv/IMG_3099.JPG.jpeg",
      "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/hchc/jvjv/jvjv/IMG_3100.JPG.jpeg"
    ]
  },
  {
    id: "valleys",
    title: "Cinematic Valleys & Mountain Drives",
    subtitle: "Scenic Ghat Roadways",
    distance: "At Your Doorstep",
    tagline: "Breathtaking Views & Winding Passes",
    desc: "The high-altitude plateau roads around EarthOra offer unmatched panoramic views over Western Ghat valleys. Perfect for early morning drives, photography sessions, or simply pausing at edge overlooks to admire the sunset.",
    images: [
      "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/hchc/jvjv/IMG_3083.JPG.jpeg",
      "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/hchc/jvjv/IMG_3084.JPG.jpeg",
      "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/hchc/jvjv/IMG_3085.JPG.jpeg",
      "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/hchc/jvjv/IMG_3086.JPG.jpeg"
    ]
  }
];

export function Tourism() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-24 bg-luxury-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Link to="/" className="inline-flex items-center gap-2 text-nature-green hover:text-subtle-gold transition-colors mb-12 uppercase tracking-widest text-xs font-medium">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-nature-green uppercase tracking-widest text-sm font-medium mb-4 flex items-center justify-center gap-2"
          >
            <Compass size={18} /> Regional Exploration Guide
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-dark-surface mb-6"
          >
            Wonders of Satara & Kaas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-elegant-stone text-lg font-light leading-relaxed"
          >
            EarthOra Resort sits at the heart of one of Maharashtra's most ecologically rich landscapes. Discover UNESCO World Heritage sites, jungle safaris, towering waterfalls, and scenic mountain roads right on our doorstep.
          </motion.p>
        </div>

        {/* Story Sections */}
        <div className="space-y-32">
          {SECTIONS.map((sec, idx) => (
            <motion.div
              key={sec.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="border-b border-elegant-stone/15 pb-20 last:border-b-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
                <div className="lg:col-span-5 space-y-6">
                  <div className="inline-flex items-center gap-2 bg-soft-ivory px-4 py-2 rounded-full text-xs font-medium text-nature-green border border-elegant-stone/10">
                    <MapPin size={14} /> {sec.distance}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-serif text-dark-surface">
                    {sec.title}
                  </h2>
                  <h4 className="text-sm uppercase tracking-widest text-subtle-gold font-medium">
                    {sec.tagline}
                  </h4>
                  <p className="text-elegant-stone leading-relaxed font-light text-base">
                    {sec.desc}
                  </p>
                  <button
                    onClick={() => redirectToWhatsApp({ Intent: `Guided tour information for ${sec.title}` })}
                    className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-nature-green text-white text-xs uppercase tracking-widest rounded-xl hover:bg-premium-olive transition-colors shadow-sm"
                  >
                    Arrange Guided Tour
                  </button>
                </div>

                {/* Photo Grid */}
                <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-4">
                  {sec.images.map((img, i) => (
                    <div 
                      key={i}
                      onClick={() => setModalImage(img)}
                      className={`relative rounded-2xl overflow-hidden cursor-pointer group border border-elegant-stone/10 shadow-sm ${i === 0 ? 'col-span-2 row-span-2 aspect-[4/3]' : 'aspect-square'}`}
                    >
                      <img 
                        src={img} 
                        alt={`${sec.title} photo ${i+1}`} 
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Sparkles size={20} className="text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tour Concierge Banner */}
        <div className="mt-20 bg-dark-surface text-white rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-subtle-gold uppercase tracking-[0.2em] text-xs font-medium block">Resort Concierge Service</span>
            <h3 className="text-3xl md:text-4xl font-serif">Plan Your Sightseeing Excursion</h3>
            <p className="text-white/80 font-light text-sm md:text-base leading-relaxed">
              Our travel helpdesk can arrange private vehicles, local nature guides, safari bookings, and customized itineraries during your stay at EarthOra.
            </p>
            <button
              onClick={() => redirectToWhatsApp({ Intent: "Sightseeing and Excursion Assistance" })}
              className="px-10 py-5 bg-subtle-gold text-dark-surface uppercase tracking-widest text-xs font-semibold hover:bg-white transition-colors duration-300 rounded-xl"
            >
              Contact Travel Desk
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImage(null)}
            className="fixed inset-0 z-[100] bg-dark-surface/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={() => setModalImage(null)} 
              className="absolute top-6 right-6 text-white hover:text-subtle-gold p-2 z-50 transition-colors"
            >
              <X size={32} />
            </button>

            <img 
              src={modalImage} 
              alt="Attraction Full View" 
              className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
