import { motion } from "motion/react";
import { EventHallPreview } from "../components/home/EventHallPreview";

export function Events() {
  return (
    <div className="min-h-screen bg-luxury-white">
      <section className="pt-32 pb-10 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-nature-green uppercase tracking-widest text-sm font-medium mb-4">Celebrations</h4>
          <h1 className="text-4xl md:text-6xl font-serif text-dark-surface mb-6">
            Events & Gatherings
          </h1>
          <p className="text-elegant-stone text-lg font-light leading-relaxed max-w-2xl mx-auto text-balance">
            Make your special moments unforgettable. From grand weddings to intimate family gatherings, EarthOra provides the perfect scenic backdrop.
          </p>
        </motion.div>
      </section>

      <EventHallPreview />
    </div>
  );
}
