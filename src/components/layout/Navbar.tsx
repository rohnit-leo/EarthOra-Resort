import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";
import { BookingModal } from "../common/BookingModal";

const LINKS = [
  { name: "Home", path: "/" },
  { name: "Stay", path: "/stay" },
  { name: "Restaurant", path: "/restaurant" },
  { name: "Tourism", path: "/tourism" },
  { name: "Gallery", path: "/gallery" },
  { name: "Experiences", path: "/experiences" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const location = useLocation();
  const isDarkText = true; // Hero is now light, so text should always be dark

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500",
          isScrolled 
            ? "py-3 bg-luxury-white border-b border-black/10 shadow-md backdrop-blur-md" 
            : "py-5 bg-transparent border-b-0 shadow-none"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <img src="https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/IMG_2996.PNG" alt="EarthOra Resort Logo" className="w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 object-contain drop-shadow-sm origin-left" />
            <span className={cn(
              "text-2xl sm:text-3xl md:text-4xl font-serif tracking-wide transition-colors",
              isDarkText ? "text-dark-surface" : "text-white"
            )}>
              EarthOra<span className="text-subtle-gold">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-5 lg:space-x-7">
            {LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "font-serif text-[13px] tracking-[0.18em] uppercase font-medium transition-colors hover:text-subtle-gold py-1",
                  isDarkText ? "text-dark-surface" : "text-white/90 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => setIsBookingOpen(true)}
              className={cn(
                "px-8 py-3 text-xs tracking-widest uppercase font-semibold transition-all duration-300 shadow-md rounded-lg",
                isScrolled
                  ? "bg-nature-green text-white hover:bg-premium-olive"
                  : "bg-dark-surface text-white hover:bg-nature-green"
              )}
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn("md:hidden", isDarkText ? "text-dark-surface" : "text-white")}
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-luxury-white flex flex-col overflow-y-auto"
          >
            <div className="p-6 md:p-12 flex justify-between items-center shrink-0">
              <span className="text-2xl font-serif text-nature-green">EarthOra.</span>
              <button onClick={() => setIsOpen(false)} className="text-nature-green">
                <X size={32} strokeWidth={1.5} />
              </button>
            </div>
            
            <nav className="flex-1 flex flex-col justify-center px-12 space-y-8 min-h-[400px]">
              {LINKS.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={link.path}
                    className="text-4xl font-serif text-nature-green hover:text-subtle-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <div className="p-[10%] sm:p-12">
              <button
                onClick={() => { setIsOpen(false); setIsBookingOpen(true); }}
                className="w-full py-4 bg-nature-green text-white uppercase tracking-widest text-xs font-semibold rounded-xl"
              >
                Book Your Stay
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}
