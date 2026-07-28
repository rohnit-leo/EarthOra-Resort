import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function InteractiveExplore() {
  const cards = [
    { title: "Premium Living", desc: "Experience our signature cottages.", img: "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3055.PNG" },
    { title: "Lush Valleys", desc: "Wake up to breathtaking natural beauty.", img: "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3056.PNG" },
    { title: "Authentic Dining", desc: "Taste the finest local cuisines.", img: "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3066.PNG" },
    { title: "Furry Friends", desc: "We are a proudly pet-friendly estate.", img: "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3063.PNG" }
  ];

  return (
    <section className="py-32 bg-dark-surface px-6 md:px-12 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-nature-green/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-subtle-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-subtle-gold uppercase tracking-widest text-sm font-medium mb-4"
          >
            Explore The Estate
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-luxury-white mb-6"
          >
            Discover EarthOra
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-elegant-stone font-light text-lg md:text-xl"
          >
            Every corner of our sanctuary is designed to harmonize with nature, offering you an unforgettable escape.
          </motion.p>
        </div>
        
        {/* Staggered Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-2xl ${
                i % 2 !== 0 ? 'md:mt-24' : ''
              } h-[50vh] md:h-[65vh]`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/90 via-dark-surface/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-70" />
              <img src={card.img} loading="lazy" alt={card.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <h3 className="text-3xl md:text-4xl font-serif text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{card.title}</h3>
                <div className="overflow-hidden">
                  <p className="text-white/80 font-light text-sm md:text-base transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">{card.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
