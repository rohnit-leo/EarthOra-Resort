import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Compass, Sparkles, X, Trees, Mountain, ShieldCheck, Sun, Camera } from "lucide-react";
import { useState } from "react";
import { redirectToWhatsApp } from "../lib/utils";

const SECTIONS = [
  {
    id: "kaas",
    title: "UNESCO Kaas Plateau",
    subtitle: "The Valley of Flowers",
    distance: "15 mins from EarthOra",
    tagline: "A World Heritage Biodiversity Hotspot",
    desc: [
      "Kaas Plateau, popularly known as the 'Kaas Pathar', is a geological wonder located in the Western Ghats of Maharashtra. Recognized as a UNESCO World Heritage site, this volcanic plateau comes alive following the monsoon season (August to October) when millions of wild flowers bloom simultaneously.",
      "Over 850 species of flowering plants thrive here, including insectivorous plants like Drosera, rare orchids, and endemic wild balsams that paint the plateau in vivid hues of purple, yellow, pink, and white. Walking along the designated ecological pathways surrounded by gentle mountain breezes is a magical experience for nature enthusiasts, photographers, and families alike."
    ],
    highlights: ["UNESCO Natural World Heritage Site", "850+ Species of Wild Blooming Plants", "Protected Ecological Sanctuary", "Guided Flora Trails Available"],
    images: [
      "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/hchc/IMG_3090.JPG%20%281%29.jpeg",
      "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/hchc/IMG_3093.JPG%20%281%29.jpeg",
      "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/hchc/IMG_3094.JPG%20%281%29.jpeg",
      "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/hchc/IMG_3095.JPG%20%281%29.jpeg",
    ]
  },
  {
    id: "safari",
    title: "Wilderness Jungle Safari",
    subtitle: "Untamed Nature Trails",
    distance: "Just 5 mins from EarthOra",
    tagline: "Thick Forests & Wildlife Spotting",
    desc: [
      "Situated virtually right next door to EarthOra Resort, the forest trails and protected jungle corridor offer guided safari rides and refreshing nature treks. Immerse yourself in oxygen-rich forest mist, towering teak and bamboo thickets, and melodic birdsong.",
      "Morning safaris provide a fantastic opportunity to spot local wildlife including barking deer, Indian bison (Gaur), giant squirrels, peacocks, and a rich variety of migratory birds. Our resort desk can seamlessly book your open-top vehicle safari slot."
    ],
    highlights: ["Open-Top Vehicle Safaris", "Dense Teak & Bamboo Canopy", "Bird Watching & Wildlife Spotting", "Safe Guided Forest Walks"],
    images: [
      "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/hchc/jvjv/jvjv/IMG_3101.JPG.jpeg",
      "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/hchc/jvjv/jvjv/IMG_3102.JPG.jpeg"
    ]
  },
  {
    id: "waterfalls",
    title: "Vajrai & Thoseghar Waterfalls",
    subtitle: "Roaring Natural Waterfalls",
    distance: "20-30 mins from EarthOra",
    tagline: "India's Highest Cascades & Emerald Valleys",
    desc: [
      "Feel the invigorating spray and thunderous roar of Vajrai Waterfall — one of India's tallest tiered waterfalls plunging down 560 meters along steep green cliffs. Nearby, Thoseghar Waterfalls features a breathtaking series of waterfalls ranging from gentle streams to massive 200-meter drops into deep forested gorges.",
      "Equipped with safe viewing platforms, paved walking paths, and cozy local tea stalls, these waterfalls offer an ideal half-day trip for resort guests looking to witness the raw power and beauty of monsoon waters."
    ],
    highlights: ["560m Plunge at Vajrai Falls", "Secured Viewing Platforms", "Mist-Covered Gorge Vistas", "Lush Monsoon Landscapes"],
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
    tagline: "Breathtaking Overlooks & Winding Passes",
    desc: [
      "The high-altitude plateau roads encircling EarthOra present unmatched panoramic vistas across the Sahyadri range. Winding ghat roads cut through misty mountain tops, passing emerald backwaters, quiet village settlements, and scenic edge points.",
      "Whether you take a slow sunset drive, pause for hot local chai at a mountain view point, or capture stunning landscape photography, the roads around EarthOra offer pure peace and breathtaking beauty."
    ],
    highlights: ["Panoramic Sahyadri Overlooks", "Smooth Scenic Mountain Drives", "Golden Hour Sunset Overlooks", "Ideal for Nature Photography"],
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
    <div className="pt-28 pb-24 bg-luxury-white min-h-screen">
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
            Nestled high in the Western Ghats, EarthOra Resort serves as your luxurious gateway to UNESCO World Heritage natural wonders, pristine jungle safaris, thunderous waterfalls, and serene mountain drives.
          </motion.p>
        </div>

        {/* Story Sections */}
        <div className="space-y-28">
          {SECTIONS.map((sec, idx) => (
            <motion.div
              key={sec.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="bg-soft-ivory/60 rounded-3xl p-8 md:p-12 border border-black/5 shadow-sm space-y-10"
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
                    {sec.desc.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {sec.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs font-medium text-dark-surface">
                        <Sparkles size={14} className="text-nature-green shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => redirectToWhatsApp({ Intent: `Guided tour information for ${sec.title}` })}
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-nature-green text-white text-xs font-semibold uppercase tracking-widest rounded-xl hover:bg-premium-olive transition-all shadow-md"
                    >
                      Arrange Guided Tour
                    </button>
                  </div>
                </div>

                {/* Gallery Grid Column - Balanced & No Holes */}
                <div className={`lg:col-span-6 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className={`grid gap-4 ${sec.images.length === 2 ? 'grid-cols-2' : 'grid-cols-2'}`}>
                    {sec.images.map((img, i) => (
                      <div 
                        key={i}
                        onClick={() => setModalImage(img)}
                        className="relative rounded-2xl overflow-hidden cursor-pointer group border border-black/10 shadow-md aspect-[4/3] bg-dark-surface/5"
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
              Our travel helpdesk can organize private vehicles, local nature guides, jungle safari bookings, and customized itineraries during your stay at EarthOra.
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
