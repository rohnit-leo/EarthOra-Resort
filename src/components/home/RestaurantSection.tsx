import { motion } from "motion/react";
import { Utensils, Coffee, Flame, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function RestaurantSection() {
  return (
    <section className="py-28 md:py-32 bg-dark-surface text-luxury-white overflow-hidden relative border-t-2 border-subtle-gold/20 shadow-2xl">
      {/* Glow effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-subtle-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-nature-green/10 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Column: Text & Features */}
        <div className="lg:col-span-6 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-subtle-gold uppercase tracking-[0.2em] text-xs font-semibold flex items-center gap-2 mb-3">
              <Sparkles size={14} /> Culinary Excellence
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
              Open Kitchen & <br />
              <span className="italic text-subtle-gold">Authentic Flavors</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 text-base md:text-lg text-elegant-stone font-light leading-relaxed"
          >
            <p>
              Step into our live open-kitchen restaurant where culinary craftsmanship meets home-style warmth. From traditional Maharashtrian thalis cooked with pure organic spices to freshly prepared multi-cuisine delicacies, every meal is prepared transparently right before your eyes.
            </p>
          </motion.div>

          {/* Key Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-3 gap-4 pt-2"
          >
             <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-2">
               <div className="w-10 h-10 rounded-full bg-subtle-gold/20 flex items-center justify-center text-subtle-gold mx-auto">
                 <Flame size={18} />
               </div>
               <span className="text-xs uppercase tracking-wider text-white font-medium block">Live Open Cooking</span>
             </div>
             <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-2">
               <div className="w-10 h-10 rounded-full bg-subtle-gold/20 flex items-center justify-center text-subtle-gold mx-auto">
                 <Utensils size={18} />
               </div>
               <span className="text-xs uppercase tracking-wider text-white font-medium block">Local Organic Spices</span>
             </div>
             <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-2">
               <div className="w-10 h-10 rounded-full bg-subtle-gold/20 flex items-center justify-center text-subtle-gold mx-auto">
                 <Coffee size={18} />
               </div>
               <span className="text-xs uppercase tracking-wider text-white font-medium block">Fresh Farm Meals</span>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-4"
          >
            <Link 
              to="/restaurant"
              className="inline-flex items-center gap-3 px-8 py-4 bg-subtle-gold text-dark-surface font-semibold uppercase tracking-widest text-xs hover:bg-white transition-all duration-300 rounded-xl shadow-xl"
            >
              Explore Full Restaurant Page & Menu
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Overlapping Images with Opacity Overlays */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-6 relative h-[480px] md:h-[540px] w-full"
        >
          {/* Base Image 1 - Large Backing */}
          <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-3xl overflow-hidden border border-white/15 shadow-2xl group">
            <img 
              src="https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/restaurant%20page%20/IMG_3033.JPG.jpeg" 
              alt="Live Open Kitchen" 
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-dark-surface/40 to-transparent" />
            <span className="absolute bottom-4 left-6 text-xs text-subtle-gold uppercase tracking-widest font-medium">Live Kitchen View</span>
          </div>

          {/* Overlapping Image 2 - Bottom Right */}
          <div className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-3xl overflow-hidden border border-white/20 shadow-2xl group z-20">
            <img 
              src="https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/restaurant%20page%20/IMG_3068.JPG.jpeg" 
              alt="Authentic Plated Dish" 
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-65"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-dark-surface/50 to-transparent" />
            <span className="absolute bottom-4 left-6 text-xs text-subtle-gold uppercase tracking-widest font-medium">Local Flavors</span>
          </div>

          {/* Small Floating Accent Image 3 - Top Right */}
          <div className="absolute top-6 right-4 w-1/3 h-1/3 rounded-2xl overflow-hidden border border-subtle-gold/30 shadow-2xl z-30 hidden sm:block">
            <img 
              src="https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/hchc/jvjv/jvjv/IMG_3082.JPG%20%281%29.jpeg" 
              alt="Restaurant Dining Ambiance" 
              loading="lazy"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-dark-surface/30" />
          </div>

        </motion.div>
      </div>
    </section>
  );
}
