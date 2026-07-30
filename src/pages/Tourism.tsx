import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Compass, Sparkles, X, Camera } from "lucide-react";
import { useState } from "react";
import { redirectToWhatsApp } from "../lib/utils";
import { SEO } from "../components/common/SEO";
import { useTourism } from "../lib/useSiteData";

export function Tourism() {
  const { tourismList } = useTourism();
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <div className="pt-28 pb-24 bg-luxury-white min-h-screen">
      <SEO 
        title="Regional Tourism Guide | Places to Visit Near Kaas Plateau, Satara"
        description="Explore top tourist attractions near EarthOra Resort: UNESCO Kaas Plateau, Tapola Mini Kashmir, Vasota Fort jungle trek, Yavateshwar Temple, Ajinkyatara Fort, and Vajrai Waterfalls."
        canonicalUrl="https://www.earthoraresort.in/tourism"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Link to="/" className="inline-flex items-center gap-2 text-nature-green hover:text-subtle-gold transition-colors mb-10 uppercase tracking-widest text-xs font-semibold">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-nature-green uppercase tracking-[0.2em] text-xs font-semibold"
          >
            <Compass size={16} /> Regional Tourism & Sightseeing Guide
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-dark-surface"
          >
            Discover Satara & Kaas Region
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-elegant-stone text-base md:text-lg font-light leading-relaxed"
          >
            Nestled high in the Western Ghats, EarthOra Resort serves as your luxurious gateway to UNESCO World Heritage natural wonders, Tapola backwaters, historic Maratha forts, sacred temples, and thunderous waterfalls.
          </motion.p>
        </div>

        {/* Story Sections */}
        <div className="space-y-20">
          {tourismList.map((sec: any, idx: number) => (
            <motion.div
              key={sec.id || idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="bg-soft-ivory/80 rounded-3xl p-8 md:p-12 border border-black/5 shadow-sm space-y-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Text Content Column */}
                <div className={`lg:col-span-6 space-y-6 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex items-center gap-2 bg-luxury-white px-4 py-2 rounded-full text-xs font-semibold text-nature-green border border-black/5 shadow-xs">
                    <MapPin size={14} /> {sec.distance}
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-subtle-gold block mb-1">
                      {sec.subtitle}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif text-dark-surface">
                      {sec.title}
                    </h2>
                  </div>

                  <div className="space-y-3 text-elegant-stone leading-relaxed font-light text-sm md:text-base">
                    {Array.isArray(sec.desc) ? (
                      sec.desc.map((p: string, pIdx: number) => <p key={pIdx}>{p}</p>)
                    ) : (
                      <p>{sec.desc}</p>
                    )}
                  </div>

                  {/* Highlights Grid */}
                  {sec.highlights && sec.highlights.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                      {sec.highlights.map((item: string, hIdx: number) => (
                        <div key={hIdx} className="flex items-center gap-2 text-xs font-medium text-dark-surface">
                          <Sparkles size={14} className="text-nature-green shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      onClick={() => redirectToWhatsApp({ Intent: `Guided tour information for ${sec.title}` })}
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-nature-green text-white text-xs font-semibold uppercase tracking-widest rounded-xl hover:bg-premium-olive transition-all shadow-md"
                    >
                      Arrange Guided Tour
                    </button>
                  </div>
                </div>

                {/* Gallery Grid Column */}
                <div className={`lg:col-span-6 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  {sec.images && sec.images.length > 0 && (
                    <div className={sec.images.length === 1 ? "grid grid-cols-1 gap-4" : "grid grid-cols-2 gap-4"}>
                      {sec.images.map((img: string, i: number) => (
                        <div 
                          key={i}
                          onClick={() => setModalImage(img)}
                          className={`relative rounded-2xl overflow-hidden cursor-pointer group border border-black/10 shadow-md bg-dark-surface/5 ${
                            sec.images.length === 1 ? "aspect-[16/10]" : "aspect-[4/3]"
                          }`}
                        >
                          <img 
                            src={img} 
                            alt={`${sec.title} photo ${i+1}`} 
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                          />
                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Camera size={22} className="text-white" />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Travel Desk Concierge Banner */}
        <div className="mt-24 bg-dark-surface text-white rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl border border-subtle-gold/20">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-subtle-gold uppercase tracking-[0.2em] text-xs font-semibold block">Resort Concierge Service</span>
            <h3 className="text-3xl md:text-4xl font-serif">Plan Your Sightseeing Excursion</h3>
            <p className="text-white/80 font-light text-sm md:text-base leading-relaxed">
              Our travel helpdesk can organize private vehicles, local nature guides, sightseeing tours, and customized itineraries during your stay at EarthOra.
            </p>
            <button
              onClick={() => redirectToWhatsApp({ Intent: "Sightseeing and Excursion Assistance" })}
              className="px-8 py-4 bg-subtle-gold text-dark-surface uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors duration-300 rounded-xl shadow-lg"
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
              className="max-w-full max-h-full object-contain shadow-2xl rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
