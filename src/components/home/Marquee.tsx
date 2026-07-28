import { motion } from "motion/react";

const MARQUEE_TEXTS = [
  "Luxury Stay", "Nature", "Swimming Pool", "Family Vacation", 
  "Weekend Escape", "Kaas Plateau", "Premium Cottages", 
  "Pet Friendly", "Free WiFi", "Open Event Hall", 
  "Luxury Hospitality", "Beautiful Sunrise", "Bonfire Evenings", 
  "Nature Walks", "Premium Dining"
];

export function Marquee() {
  return (
    <div className="py-8 bg-nature-green text-subtle-gold overflow-hidden border-y border-subtle-gold/20 flex items-center">
      <motion.div
        className="flex whitespace-nowrap gap-12 items-center px-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 35, repeat: Infinity }}
      >
        {/* Duplicate the array to create seamless loop */}
        {[...MARQUEE_TEXTS, ...MARQUEE_TEXTS].map((text, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="text-xl md:text-2xl font-serif italic tracking-wide">{text}</span>
            <div className="w-2 h-2 rounded-full bg-subtle-gold/50" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
