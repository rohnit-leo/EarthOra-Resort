import { motion } from "motion/react";

export function About() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto bg-luxury-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Text Content */}
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-nature-green uppercase tracking-widest text-sm font-medium mb-4">The EarthOra Story</h4>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-dark-surface leading-tight mb-8">
              A Peaceful Retreat <br />
              <span className="italic text-elegant-stone">Near Kaas Plateau</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-lg text-elegant-stone font-light leading-relaxed text-balance"
          >
            <p>
              Nestled in the breathtaking landscapes of Satara, EarthOra Resort is a sanctuary of peace, elegance, and natural beauty. Designed to harmonize with its surroundings, our resort offers an unparalleled escape from the ordinary.
            </p>
            <p>
              Whether you seek a romantic getaway, a memorable family vacation, or a grand celebration in our open event hall, every moment here is crafted to perfection. Experience the warmth of our hospitality alongside our friendly resident pets.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-6"
          >
            <div className="border-l-2 border-subtle-gold pl-4 text-dark-surface font-serif italic text-xl">
              "Where Nature Meets Quiet Luxury"
              <span className="block text-xs uppercase tracking-widest font-sans font-medium text-nature-green mt-1 not-italic">
                Kaas Plateau, Satara
              </span>
            </div>
          </motion.div>
        </div>

        {/* Image Composition */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="aspect-[4/5] overflow-hidden"
          >
            <img 
              src="https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3053.PNG" 
              alt="Resort Architecture" 
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Overlapping smaller image */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 40 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute -bottom-12 -left-12 w-2/3 aspect-square overflow-hidden border-8 border-luxury-white hidden md:block"
          >
            <img 
              src="https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3054.PNG" 
              alt="Resort Pool" 
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
