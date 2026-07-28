import { motion } from "motion/react";
import { redirectToWhatsApp } from "../../lib/utils";

export function EventHallPreview() {
  return (
    <section className="py-32 bg-nature-green text-luxury-white relative overflow-hidden">
      {/* Decorative leaf/shape abstract background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-premium-olive rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="aspect-[3/4] lg:aspect-auto lg:h-[700px] overflow-hidden"
        >
          <img 
            src="https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3064.PNG" 
            alt="Event Hall Setup" 
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="space-y-10 py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-subtle-gold uppercase tracking-widest text-sm font-medium mb-4">Celebrations & Gatherings</h4>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
              Open Event Hall <br />
              <span className="italic text-white/70">For Grand Memories</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-lg text-white/80 font-light leading-relaxed text-balance"
          >
            <p>
              Host your dream events in our expansive open hall. Surrounded by nature, it provides the perfect picturesque setting for weddings, receptions, corporate retreats, and family functions.
            </p>
            <ul className="grid grid-cols-2 gap-4 text-sm tracking-wider uppercase pt-4">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-subtle-gold rounded-full" /> Weddings
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-subtle-gold rounded-full" /> Birthdays
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-subtle-gold rounded-full" /> Corporate Events
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-subtle-gold rounded-full" /> Anniversaries
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-8"
          >
            <button 
              onClick={() => redirectToWhatsApp({ Intent: "Inquire about Event Hall" })}
              className="px-10 py-5 border border-subtle-gold text-subtle-gold uppercase tracking-widest text-sm hover:bg-subtle-gold hover:text-dark-surface transition-colors duration-500"
            >
              Enquire Now
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
