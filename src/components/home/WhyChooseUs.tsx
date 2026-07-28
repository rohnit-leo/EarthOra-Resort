import { motion } from "motion/react";
import { Coffee, Wifi, Map, Trees, Heart, ShieldCheck, Clock, Users, Home, PartyPopper } from "lucide-react";

const REASONS = [
  { icon: Home, title: "Luxury Cottages", desc: "Premium stays with scenic views" },
  { icon: Coffee, title: "Premium Dining", desc: "Exquisite culinary experiences" },
  { icon: Wifi, title: "Free WiFi", desc: "Stay connected in nature" },
  { icon: Trees, title: "Beautiful Gardens", desc: "Lush green landscapes" },
  { icon: Heart, title: "Pet Friendly", desc: "Welcoming your furry friends" },
  { icon: Map, title: "Near Kaas Plateau", desc: "Prime valley location" },
  { icon: PartyPopper, title: "Event Hall", desc: "Perfect for grand celebrations" },
  { icon: ShieldCheck, title: "Secure Parking", desc: "Safe & ample space" },
  { icon: Clock, title: "24x7 Assistance", desc: "Always here for you" },
  { icon: Users, title: "Family Friendly", desc: "Activities for all ages" },
];

export function WhyChooseUs() {
  return (
    <section className="py-32 bg-soft-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-nature-green uppercase tracking-widest text-sm font-medium mb-4"
          >
            The EarthOra Promise
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-dark-surface"
          >
            Why Choose Us
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {REASONS.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-luxury-white p-8 group hover:bg-nature-green transition-colors duration-500 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-soft-ivory flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors duration-500">
                <reason.icon size={24} className="text-nature-green group-hover:text-subtle-gold transition-colors duration-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-serif text-dark-surface group-hover:text-white transition-colors duration-500 mb-3">{reason.title}</h3>
              <p className="text-sm text-elegant-stone group-hover:text-white/70 transition-colors duration-500">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
