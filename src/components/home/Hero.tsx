import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { ArrowDownRight, Calendar, Users, MapPin, Compass } from "lucide-react";
import { BookingModal } from "../common/BookingModal";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100vh] w-full bg-[#fcfbf9] overflow-hidden flex items-center justify-center selection:bg-subtle-gold/30 pt-20"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{
            x: mousePosition.x * -50,
            y: mousePosition.y * -50,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-nature-green/10 rounded-full blur-[120px] mix-blend-multiply"
        />
        <motion.div 
          animate={{
            x: mousePosition.x * 50,
            y: mousePosition.y * 50,
          }}
          transition={{ type: "spring", stiffness: 40, damping: 20 }}
          className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-subtle-gold/10 rounded-full blur-[150px] mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]" />
      </div>

      {/* Grid Lines */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-6 md:left-12 lg:left-24 top-0 w-[1px] bg-dark-surface/5" 
        />
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          className="absolute right-6 md:right-12 lg:right-24 top-0 w-[1px] bg-dark-surface/5" 
        />
      </div>

      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col justify-center min-h-[80vh]">
        <motion.div style={{ opacity }} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left / Top Context */}
          <div className="lg:col-span-3 flex flex-col justify-end h-full py-8 lg:order-1 order-2 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <p className="text-elegant-stone font-light text-sm md:text-base leading-relaxed max-w-sm">
                Redefining the relationship between architecture and nature. An immersive sanctuary nestled in the raw beauty of Kaas Plateau.
              </p>
            </motion.div>
          </div>

          {/* Center Typography */}
          <div className="lg:col-span-6 flex flex-col items-center text-center lg:order-2 order-1 mt-10 lg:mt-0">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative inline-block flex flex-col items-center"
            >
              <motion.div 
                className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-8 z-20"
                style={{ y: y1 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-elegant-stone mb-2 flex items-center gap-2 justify-center">
                    <MapPin size={12} />
                    Coordinates
                  </div>
                  <div className="text-sm font-medium text-dark-surface/80">17° 43' N, 73° 49' E</div>
                </div>

                <div className="hidden md:block w-px h-8 bg-dark-surface/10"></div>

                <div className="flex flex-col items-center text-center">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-elegant-stone mb-2 flex items-center gap-2 justify-center">
                    <Compass size={12} />
                    Elevation
                  </div>
                  <div className="text-sm font-medium text-dark-surface/80">1,200 Meters</div>
                </div>
              </motion.div>

              <h1 className="text-[15vw] lg:text-[180px] leading-[0.8] font-serif text-dark-surface tracking-tighter z-20 relative">
                <motion.span style={{ y: y1 }} className="block">EARTH</motion.span>
                <motion.span style={{ y: y2 }} className="block italic font-light text-transparent bg-clip-text bg-gradient-to-r from-dark-surface to-dark-surface/60 -mt-2 lg:-mt-8">ORA</motion.span>
              </h1>
              
              {/* Decorative Circle behind text */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full border border-subtle-gold/30 -z-10"
              />
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full border border-dark-surface/5 -z-10 border-dashed"
              />
            </motion.div>
          </div>

          {/* Right / Bottom Action & Info */}
          <div className="lg:col-span-3 flex flex-col justify-between h-full py-8 lg:order-3 order-3 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="bg-white/50 backdrop-blur-sm border border-dark-surface/5 rounded-2xl p-6 shadow-lg shadow-dark-surface/5 flex flex-col gap-4"
            >
               <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-dark-surface/70">Plan Your Escape</h3>
               <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-nature-green/10 flex items-center justify-center text-nature-green">
                        <Calendar size={14} />
                     </div>
                     <div className="text-xs font-medium text-dark-surface">Flexible Dates</div>
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-subtle-gold/10 flex items-center justify-center text-subtle-gold">
                        <Users size={14} />
                     </div>
                     <div className="text-xs font-medium text-dark-surface">Couples & Family</div>
                  </div>
               </div>
               <button 
                onClick={() => setIsBookingOpen(true)}
                className="w-full mt-2 bg-dark-surface text-white py-3.5 rounded-xl text-xs uppercase tracking-[0.15em] font-semibold hover:bg-nature-green transition-colors shadow-md"
              >
                 Book Now
               </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col items-end"
            >
              <button className="group relative w-24 h-24 md:w-32 md:h-32 rounded-full border border-dark-surface/10 flex flex-col items-center justify-center overflow-hidden transition-colors hover:border-subtle-gold/50 bg-white shadow-sm">
                <div className="absolute inset-0 bg-dark-surface/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                <ArrowDownRight className="text-subtle-gold mb-1 transform group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" size={20} />
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-dark-surface group-hover:text-nature-green transition-colors z-10">Discover</span>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scrolling Text Marquee */}
      <div className="absolute bottom-10 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          <span className="text-4xl md:text-8xl font-serif text-dark-surface px-8">ECO-LUXURY SANCTUARY</span>
          <span className="text-4xl md:text-8xl font-serif text-dark-surface px-8">·</span>
          <span className="text-4xl md:text-8xl font-serif text-dark-surface px-8">KAAS PLATEAU</span>
          <span className="text-4xl md:text-8xl font-serif text-dark-surface px-8">·</span>
          <span className="text-4xl md:text-8xl font-serif text-dark-surface px-8">ECO-LUXURY SANCTUARY</span>
          <span className="text-4xl md:text-8xl font-serif text-dark-surface px-8">·</span>
          <span className="text-4xl md:text-8xl font-serif text-dark-surface px-8">KAAS PLATEAU</span>
          <span className="text-4xl md:text-8xl font-serif text-dark-surface px-8">·</span>
        </motion.div>
      </div>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </section>
  );
}
