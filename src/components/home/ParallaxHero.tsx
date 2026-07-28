import { motion } from "motion/react";

export function ParallaxHero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden flex items-center justify-center">
      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: -50 }}
        transition={{ ease: "linear", duration: 1 }}
        className="absolute inset-0 z-0"
        style={{ scale: 1.15 }}
      >
        <img 
          src="https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3057.PNG" 
          alt="Resort Nature" 
          loading="lazy"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-dark-surface/40"></div>
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6">
            Where Luxury Meets <br />
            <span className="italic text-subtle-gold">Untamed Nature</span>
          </h2>
          <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            EarthOra Resort offers a seamless blend of world-class amenities and the breathtaking beauty of Satara's landscapes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
