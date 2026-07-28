import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { RoomsPreview } from "../components/home/RoomsPreview";
import { ParallaxHero } from "../components/home/ParallaxHero";

export function Stay() {
  return (
    <div className="min-h-screen bg-luxury-white">
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-nature-green uppercase tracking-widest text-sm font-medium mb-4">Accommodations</h4>
          <h1 className="text-4xl md:text-6xl font-serif text-dark-surface mb-6">
            Your Luxury Sanctuary
          </h1>
          <p className="text-elegant-stone text-lg font-light leading-relaxed max-w-2xl mx-auto text-balance">
            Designed to harmonize with nature, our premium cottages offer an unparalleled blend of comfort, elegance, and breathtaking valley views.
          </p>
        </motion.div>
      </section>

      <RoomsPreview />
      
      <ParallaxHero />
    </div>
  );
}
