import { motion } from "motion/react";
import { Instagram, ArrowUpRight } from "lucide-react";

// Keeping 3 resort images (removed the second image IMG_3060.PNG as requested)
const IMAGES = [
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3059.PNG",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3061.PNG",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3062.PNG",
];

export function InstagramGrid() {
  return (
    <section className="py-20 bg-dark-surface overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <span className="text-subtle-gold uppercase tracking-widest text-xs font-medium block mb-2">Social Feed</span>
            <h3 className="text-2xl md:text-3xl font-serif text-white">Moments At EarthOra</h3>
          </motion.div>

          <motion.a 
            href="https://www.instagram.com/earthora_resort" 
            target="_blank" 
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full border border-white/10 text-white hover:text-subtle-gold transition-all duration-300 group"
          >
            <Instagram size={20} strokeWidth={1.5} className="text-subtle-gold" />
            <span className="uppercase tracking-widest text-xs font-medium">Follow @earthora_resort</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        {/* 3 Images Grid Aligned attractively to the right */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl ml-auto">
          {IMAGES.map((img, i) => (
            <motion.a
              key={i}
              href="https://www.instagram.com/earthora_resort"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="aspect-[4/3] rounded-2xl group relative overflow-hidden block border border-white/10 shadow-xl"
            >
              <img 
                src={img} 
                alt={`EarthOra Instagram highlight ${i+1}`} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-subtle-gold/80 backdrop-blur-md flex items-center justify-center text-dark-surface transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                  <Instagram size={24} strokeWidth={2} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
