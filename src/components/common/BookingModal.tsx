import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Users, Home, Phone, User, MessageSquare, Send } from "lucide-react";
import { redirectToWhatsApp } from "../../lib/utils";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRoom?: string;
}

export function BookingModal({ isOpen, onClose, defaultRoom = "General Inquiry / Any Cottage" }: BookingModalProps) {
  const [formData, setFormData] = useState({
    roomType: defaultRoom,
    checkIn: "",
    checkOut: "",
    guests: "2 Adults",
    name: "",
    phone: "",
    specialRequests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    redirectToWhatsApp({
      Intent: "Resort Stay Booking Request",
      "Room Category": formData.roomType,
      "Check-In Date": formData.checkIn || "Flexible / Not set",
      "Check-Out Date": formData.checkOut || "Flexible / Not set",
      "Guests Count": formData.guests,
      "Guest Name": formData.name || "Guest",
      "Contact Number": formData.phone || "Not provided",
      "Special Requests": formData.specialRequests || "None",
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-dark-surface/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-xl bg-luxury-white rounded-3xl shadow-2xl border border-black/10 overflow-hidden z-10 my-8"
          >
            {/* Modal Header */}
            <div className="bg-dark-surface text-luxury-white p-6 sm:p-8 relative">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <span className="text-subtle-gold uppercase tracking-[0.2em] text-[11px] font-semibold block mb-1">
                EarthOra Resort • Kaas Plateau
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-white">Book Your Stay</h2>
              <p className="text-white/70 text-xs sm:text-sm font-light mt-1">
                Fill in your details below to confirm rates & availability directly on WhatsApp.
              </p>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 text-dark-surface">
              {/* Room Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-elegant-stone mb-1 flex items-center gap-1.5">
                  <Home size={14} className="text-nature-green" /> Accommodation Type
                </label>
                <select
                  value={formData.roomType}
                  onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                  className="w-full bg-soft-ivory border border-black/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-nature-green transition-colors"
                >
                  <option value="Standard Cottage">Standard Eco Cottage (From ₹4,999/night)</option>
                  <option value="Premium Cottage">Premium Valley View Cottage (From ₹7,499/night)</option>
                  <option value="Luxury Villa">Luxury Family Suite / Villa</option>
                  <option value="General Inquiry / Any Cottage">General Inquiry / Open Availability</option>
                </select>
              </div>

              {/* Dates Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-elegant-stone mb-1 flex items-center gap-1.5">
                    <Calendar size={14} className="text-nature-green" /> Check-in Date
                  </label>
                  <input
                    type="date"
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    className="w-full bg-soft-ivory border border-black/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-nature-green transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-elegant-stone mb-1 flex items-center gap-1.5">
                    <Calendar size={14} className="text-nature-green" /> Check-out Date
                  </label>
                  <input
                    type="date"
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    className="w-full bg-soft-ivory border border-black/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-nature-green transition-colors"
                  />
                </div>
              </div>

              {/* Guests Count */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-elegant-stone mb-1 flex items-center gap-1.5">
                  <Users size={14} className="text-nature-green" /> Number of Guests
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full bg-soft-ivory border border-black/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-nature-green transition-colors"
                >
                  <option value="1 Adult">1 Adult</option>
                  <option value="2 Adults">2 Adults (Couple)</option>
                  <option value="2 Adults + 1 Child">2 Adults + 1 Child</option>
                  <option value="3 Adults">3 Adults</option>
                  <option value="4+ Adults / Family Group">4+ Adults / Family Group</option>
                </select>
              </div>

              {/* Guest Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-elegant-stone mb-1 flex items-center gap-1.5">
                    <User size={14} className="text-nature-green" /> Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aniket Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-soft-ivory border border-black/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-nature-green transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-elegant-stone mb-1 flex items-center gap-1.5">
                    <Phone size={14} className="text-nature-green" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-soft-ivory border border-black/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-nature-green transition-colors"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-elegant-stone mb-1 flex items-center gap-1.5">
                  <MessageSquare size={14} className="text-nature-green" /> Special Requests (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g., Candlelight dinner setup, late check-in, pet friendly room..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full bg-soft-ivory border border-black/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-nature-green transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full mt-2 py-4 bg-nature-green text-white font-semibold uppercase tracking-widest text-xs rounded-xl hover:bg-premium-olive transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Send size={16} /> Confirm & Book via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
