import { motion } from "motion/react";
import { Sparkles, Trees, Wind } from "lucide-react";

export function BentoFeatures() {
  return (
    <section className="py-32 bg-soft-ivory px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-nature-green uppercase tracking-widest text-sm font-medium mb-4"
          >
            The Experience
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-dark-surface"
          >
            Curated For You
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden relative group"
          >
            <img src="https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3061.PNG" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Serene Hillside Haven" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/90 via-dark-surface/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="bg-subtle-gold/20 backdrop-blur-md w-12 h-12 flex items-center justify-center rounded-full mb-4 border border-white/20">
                <Sparkles className="text-subtle-gold" size={20} />
              </div>
              <h3 className="text-3xl font-serif mb-2">Serene Hillside Haven</h3>
              <p className="text-white/80 font-light max-w-md">Experience peaceful cottage living and breathtaking mountain vistas surrounded by untouched nature.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-8 border border-elegant-stone/10 hover:shadow-xl transition-shadow flex flex-col justify-between group"
          >
            <div className="bg-nature-green/5 w-12 h-12 flex items-center justify-center rounded-full">
              <Trees className="text-nature-green" size={20} />
            </div>
            <div>
              <h3 className="text-xl font-serif text-dark-surface mb-2">Nature Trails</h3>
              <p className="text-elegant-stone font-light text-sm">Guided walks through the pristine flora of Kaas Plateau.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-nature-green rounded-3xl p-8 text-white hover:bg-premium-olive transition-colors flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Wind size={100} />
            </div>
            <div className="bg-white/10 w-12 h-12 flex items-center justify-center rounded-full relative z-10">
              <Wind className="text-white" size={20} />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-serif mb-2">Valley Breeze</h3>
              <p className="text-white/80 font-light text-sm">Experience the rejuvenating mountain air from your private deck.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
