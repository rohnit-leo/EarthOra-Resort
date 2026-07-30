import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

export function InteractiveExplore() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const cards = [
    { title: "Premium Living", desc: "Experience our signature eco-luxury cottages.", img: "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3055.PNG" },
    { title: "Single Luxury Cottage", desc: "A cozy private sanctuary nestled amid serene mountain greenery.", img: "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3056.PNG" },
    { title: "Cottages Sideview & Lawns", desc: "Picturesque side views of our cottage row bordering open lawns.", img: "https://frevuykpcqueimke.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-30%20at%2011.21.42%20AM.jpeg" },
    { title: "Eco Cottage Sanctuary", desc: "Private cottages nestled amidst lush green lawns and fresh mountain breeze.", img: "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3063.PNG" }
  ];

  return (
    <section ref={containerRef} className="py-28 md:py-36 bg-dark-surface px-6 md:px-12 relative overflow-hidden border-t-2 border-subtle-gold/20 shadow-2xl">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-nature-green/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-subtle-gold/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-subtle-gold uppercase tracking-[0.2em] text-xs font-medium mb-3 flex items-center justify-center gap-2"
          >
            <Sparkles size={16} /> Explore The Estate
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-luxury-white mb-6"
          >
            Discover EarthOra
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-elegant-stone font-light text-base md:text-lg leading-relaxed"
          >
            Every corner of our mountain sanctuary is designed to harmonize with nature, offering you a secluded, peaceful escape.
          </motion.p>
        </div>
        
        {/* Interactive Grid Container with Parallax & Hover reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-3xl cursor-pointer shadow-2xl h-[380px] md:h-[460px] border border-white/10"
            >
              {/* Image with overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/90 via-dark-surface/30 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-60" />
              <img 
                src={card.img} 
                loading="lazy" 
                alt={card.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <span className="text-subtle-gold text-xs uppercase tracking-widest block mb-2 font-medium">0{i+1} / Retreat View</span>
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-2 transform group-hover:-translate-y-1 transition-transform duration-300">{card.title}</h3>
                <p className="text-white/80 font-light text-sm md:text-base leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
