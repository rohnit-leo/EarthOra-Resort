import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, Menu, X, Calendar, Info, Phone } from "lucide-react";
import { useState } from "react";
import { redirectToWhatsApp } from "../../lib/utils";
import { BookingModal } from "../common/BookingModal";

export function FloatingMenuCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[90] flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 20 }}
            className="flex flex-col gap-3 mb-2"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => { setIsOpen(false); setIsBookingOpen(true); }}
              className="flex items-center justify-between gap-4 bg-dark-surface text-white px-5 py-3 rounded-full shadow-xl border border-subtle-gold/30 hover:border-subtle-gold transition-colors"
            >
              <span className="text-sm uppercase tracking-widest font-medium">Book Stay</span>
              <Calendar size={18} className="text-subtle-gold" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => redirectToWhatsApp({ Intent: "Inquire about Event Hall" })}
              className="flex items-center justify-between gap-4 bg-dark-surface text-white px-5 py-3 rounded-full shadow-xl border border-subtle-gold/30 hover:border-subtle-gold transition-colors"
            >
              <span className="text-sm uppercase tracking-widest font-medium">Event Hall</span>
              <Info size={18} className="text-subtle-gold" />
            </motion.button>

            <motion.a
              href="tel:8888888162"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-between gap-4 bg-dark-surface text-white px-5 py-3 rounded-full shadow-xl border border-subtle-gold/30 hover:border-subtle-gold transition-colors"
            >
              <span className="text-sm uppercase tracking-widest font-medium">Call Us</span>
              <Phone size={18} className="text-subtle-gold" />
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => redirectToWhatsApp({ Intent: "General Inquiry" })}
              className="flex items-center justify-between gap-4 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-xl"
            >
              <span className="text-sm uppercase tracking-widest font-medium">WhatsApp Us</span>
              <MessageCircle size={18} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 150 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-subtle-gold text-dark-surface rounded-full shadow-2xl flex items-center justify-center magnetic border-2 border-white/20"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
        </motion.div>
      </motion.button>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
