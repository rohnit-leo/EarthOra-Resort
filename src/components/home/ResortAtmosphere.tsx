import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";

export function ResortAtmosphere() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  
  return (
    <section ref={ref} className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 z-0 w-full h-[120%]"
      >
        <img 
          src="https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3062.PNG" 
          alt="EarthOra Atmosphere" 
          loading="lazy"
          className="w-full h-full object-cover"
        />
        {/* Overlay with slight opacity */}
        <div className="absolute inset-0 bg-nature-green/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-dark-surface/40"></div>
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <h4 className="text-subtle-gold uppercase tracking-[0.3em] text-xs font-medium mb-6">
            Immerse Yourself
          </h4>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white leading-tight mb-8">
            Breathe In <br />
            <span className="italic text-white/80 font-light">The Tranquility</span>
          </h2>
          
          <Link 
            to="/stay"
            className="inline-block px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white uppercase tracking-widest text-sm hover:bg-white hover:text-dark-surface transition-all duration-500"
          >
            Explore Accommodations
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
