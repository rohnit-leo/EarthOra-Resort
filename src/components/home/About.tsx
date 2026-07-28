import { motion } from "motion/react";

export function About() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-luxury-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Text Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-nature-green uppercase tracking-[0.2em] text-xs font-semibold mb-3">The EarthOra Story</h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-dark-surface leading-tight">
              A Peaceful Retreat <br />
              <span className="italic text-elegant-stone">Near Kaas Plateau</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 text-base text-elegant-stone font-light leading-relaxed"
          >
            <p>
              Nestled in the breathtaking landscapes of Satara, EarthOra Resort is a sanctuary of peace, elegance, and natural beauty. Designed to harmonize with its surroundings, our resort offers an unparalleled escape from the ordinary.
            </p>
            <p>
              Whether you seek a romantic getaway, a memorable family vacation, or peaceful walks through lush lawns, every moment here is crafted with care. Experience genuine warmth alongside our friendly resident pets.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-2"
          >
            <div className="border-l-2 border-subtle-gold pl-4 text-dark-surface font-serif italic text-lg">
              "Where Nature Meets Quiet Luxury"
              <span className="block text-xs uppercase tracking-widest font-sans font-medium text-nature-green mt-1 not-italic">
                Kaas Plateau, Satara
              </span>
            </div>
          </motion.div>
        </div>

        {/* Image Composition */}
        <div className="relative max-w-md mx-auto w-full lg:ml-auto pl-6 sm:pl-10 pb-6 sm:pb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden shadow-xl aspect-[4/5] border border-black/5"
          >
            <img 
              src="https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3053.PNG" 
              alt="Resort Architecture" 
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Overlapping smaller image shifted left without white frame */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-4 w-7/12 aspect-square overflow-hidden shadow-2xl border border-black/10"
          >
            <img 
              src="https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3054.PNG" 
              alt="Resort Ambiance" 
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
