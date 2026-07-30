import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, Coffee, Wifi, Tv, Bath, Wind, ChevronLeft, ChevronRight, X, Clock, Shield, Map } from "lucide-react";
import { redirectToWhatsApp } from "../../lib/utils";
import React, { useState } from "react";
import { useRooms } from "../../lib/useSiteData";

export function PremiumCottage() {
  const { rooms } = useRooms();
  const roomData = rooms.premium || {
    title: "Premium Valley View Cottage",
    price: 7499,
    subtitle: "Luxury Panoramic Sanctuary",
    description: "Our most luxurious offering, the Premium Cottage features expansive space, upgraded amenities, and unparalleled comfort.",
    images: ["https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/cottagest/IMG_2883.JPG.jpeg"]
  };

  const currentPrice = roomData.price || 7499;
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  
  const [bookingForm, setBookingForm] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    breakfast: "Yes"
  });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    redirectToWhatsApp({
      Intent: `Book ${roomData.title || "Premium Cottage"}`,
      Name: bookingForm.name,
      Phone: bookingForm.phone,
      "Check In": bookingForm.checkIn,
      "Check Out": bookingForm.checkOut,
      Guests: bookingForm.guests,
      "Include Breakfast": bookingForm.breakfast
    });
  };

  const images = (roomData.images && roomData.images.length > 0) ? roomData.images : [
    "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/cottagest/IMG_2883.JPG.jpeg",
    "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/cottagest/IMG_2888.JPG.jpeg",
    "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/cottagest/IMG_2907.JPG.jpeg",
    "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/cottagest/IMG_2911.JPG.jpeg",
    "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/cottagest/IMG_2914.JPG.jpeg",
    "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/cottagest/IMG_2917.JPG.jpeg",
    "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/cottagest/IMG_2918.JPG.jpeg",
    "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/cottagest/IMG_2921.JPG.jpeg",
    "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/cottagest/IMG_2922.JPG.jpeg",
    "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/cottagest/IMG_2928.JPG.jpeg",
    "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/cottagest/IMG_2967.JPG.jpeg",
    "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/cottagest/IMG_2970.JPG.jpeg"
  ];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
    }
  };

  const [mainImageIndex, setMainImageIndex] = useState(0);

  const handleNextMain = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMainImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevMain = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMainImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="pt-32 pb-20 bg-luxury-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Link to="/" className="inline-flex items-center gap-2 text-nature-green hover:text-subtle-gold transition-colors mb-12 uppercase tracking-widest text-xs font-medium">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/3] overflow-hidden relative cursor-pointer group rounded-xl"
              onClick={() => setSelectedImageIndex(mainImageIndex)}
            >
              <img src={images[mainImageIndex]} alt="Premium Cottage" className="w-full h-full object-cover transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-black/10 transition-colors" />
              <div className="absolute top-4 right-4 bg-subtle-gold text-white px-4 py-1 text-xs uppercase tracking-widest font-medium z-10">
                Signature Stay
              </div>
              
              <button 
                onClick={handlePrevMain}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white text-white hover:text-dark-surface p-2 md:p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 backdrop-blur-md"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={handleNextMain}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white text-white hover:text-dark-surface p-2 md:p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 backdrop-blur-md"
              >
                <ChevronRight size={24} />
              </button>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 text-white z-0 pointer-events-none">
                <span className="uppercase tracking-[0.2em] text-xs font-medium border border-white/50 px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm">View Fullscreen</span>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {images.map((img, i) => {
                const isBathroom = i >= images.length - 2;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 + (i * 0.03) }}
                    className={`aspect-square overflow-hidden cursor-pointer group relative rounded-lg border border-elegant-stone/15 ${mainImageIndex === i ? 'ring-2 ring-subtle-gold ring-offset-2' : ''}`}
                    onClick={() => setMainImageIndex(i)}
                  >
                    <img src={img} alt={isBathroom ? `En-suite Bathroom View ${i - (images.length - 3)}` : `Premium Cottage View ${i+1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors" />
                    {isBathroom && (
                      <span className="absolute bottom-1 left-1 right-1 bg-dark-surface/85 text-subtle-gold text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded text-center backdrop-blur-xs">
                        Bathroom
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </div>
            
            <div className="pt-12 space-y-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-serif text-dark-surface mb-6">About This Cottage</h3>
                <p className="text-elegant-stone leading-relaxed font-light text-lg">
                  Our most luxurious offering, the Premium Valley View Cottage features expansive space, upgraded handcrafted amenities, and unparalleled panoramic comfort. Complete with breathtaking, unobstructed views of the Kaas valley to soak in, it is the ultimate EarthOra experience. Crafted with natural sustainable timber and stone, it seamlessly blends high luxury with the untamed wilderness.
                </p>
              </motion.div>

              {/* Added Section: Suite Highlights & Architecture */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-soft-ivory/60 p-8 rounded-2xl border border-elegant-stone/15"
              >
                <h3 className="text-2xl font-serif text-dark-surface mb-6">Premium Suite Architecture & Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-subtle-gold/10 text-subtle-gold flex items-center justify-center shrink-0">
                      <Wind size={20} />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-dark-surface mb-1">Panoramic Sunset Sun Deck</h4>
                      <p className="text-sm font-light text-elegant-stone leading-relaxed">Expansive elevated deck overlooking the cascading hills of Kaas, featuring plush lounge seating for private sunsets.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-nature-green/10 text-nature-green flex items-center justify-center shrink-0">
                      <Check size={20} />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-dark-surface mb-1">King Luxury Bedding</h4>
                      <p className="text-sm font-light text-elegant-stone leading-relaxed">Deep orthopaedic king mattress dressed in 400-thread-count Egyptian cotton linens and hypoallergenic plush pillows.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-subtle-gold/10 text-subtle-gold flex items-center justify-center shrink-0">
                      <Bath size={20} />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-dark-surface mb-1">Spacious En-Suite Bathroom</h4>
                      <p className="text-sm font-light text-elegant-stone leading-relaxed">Spacious modern bathroom featuring rainwater head hot showers, designer vanity mirrors, and premium herbal bath products.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-nature-green/10 text-nature-green flex items-center justify-center shrink-0">
                      <Shield size={20} />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-dark-surface mb-1">Unmatched Seclusion</h4>
                      <p className="text-sm font-light text-elegant-stone leading-relaxed">Positioned at the highest elevation point of EarthOra Resort for maximum privacy and uninterrupted valley vistas.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-serif text-dark-surface mb-6 border-b border-elegant-stone/20 pb-4">Premium Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="flex flex-col gap-2 p-4 bg-soft-ivory rounded-lg items-center text-center hover:shadow-lg transition-shadow">
                    <Wind size={24} className="text-subtle-gold"/>
                    <span className="text-sm font-medium text-dark-surface">Private Sun Deck Balcony</span>
                  </div>
                  <div className="flex flex-col gap-2 p-4 bg-soft-ivory rounded-lg items-center text-center hover:shadow-lg transition-shadow">
                    <Bath size={24} className="text-subtle-gold"/>
                    <span className="text-sm font-medium text-dark-surface">Luxury Toiletries Kit</span>
                  </div>
                  <div className="flex flex-col gap-2 p-4 bg-soft-ivory rounded-lg items-center text-center hover:shadow-lg transition-shadow">
                    <Wifi size={24} className="text-subtle-gold"/>
                    <span className="text-sm font-medium text-dark-surface">Free High-Speed WiFi</span>
                  </div>
                  <div className="flex flex-col gap-2 p-4 bg-soft-ivory rounded-lg items-center text-center hover:shadow-lg transition-shadow">
                    <Coffee size={24} className="text-subtle-gold"/>
                    <span className="text-sm font-medium text-dark-surface">Gourmet Artisan Coffee</span>
                  </div>
                  <div className="flex flex-col gap-2 p-4 bg-soft-ivory rounded-lg items-center text-center hover:shadow-lg transition-shadow">
                    <Check size={24} className="text-subtle-gold"/>
                    <span className="text-sm font-medium text-dark-surface">King Size Comfort Bed</span>
                  </div>
                  <div className="flex flex-col gap-2 p-4 bg-soft-ivory rounded-lg items-center text-center hover:shadow-lg transition-shadow">
                    <Tv size={24} className="text-subtle-gold"/>
                    <span className="text-sm font-medium text-dark-surface">4K Smart TV & Streaming</span>
                  </div>
                </div>
              </motion.div>

              {/* Added Section: Exclusive Premium Guest Inclusions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border-t border-elegant-stone/20 pt-10"
              >
                <h3 className="text-2xl font-serif text-dark-surface mb-6">Exclusive Premium Inclusions</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-elegant-stone">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-subtle-gold" />
                    <span>Complimentary gourmet breakfast served at your private deck or live kitchen</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-subtle-gold" />
                    <span>Priority seating & complimentary tea at the evening campfire terrace</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-subtle-gold" />
                    <span>Personalized concierge assistance & local excursion planning</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-subtle-gold" />
                    <span>Welcome refreshment basket upon check-in</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-serif text-dark-surface mb-6 border-b border-elegant-stone/20 pb-4">House Rules & Info</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <Clock size={20} className="text-nature-green shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-dark-surface">Check-in / Check-out</h4>
                      <p className="text-elegant-stone text-sm font-light">Check-in after 2:00 PM. Check-out before 11:00 AM.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Shield size={20} className="text-nature-green shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-dark-surface">Cancellation Policy</h4>
                      <p className="text-elegant-stone text-sm font-light">Free cancellation up to 7 days before arrival. 50% refund within 7 days.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Map size={20} className="text-nature-green shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-dark-surface">Location & Accessibility</h4>
                      <p className="text-elegant-stone text-sm font-light">Ground floor access. Situated near the central dining pavilion with direct valley views.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-serif text-dark-surface mb-2">Premium Cottage</h1>
                <div className="flex items-end gap-3 mb-6">
                  <p className="text-4xl text-nature-green font-medium">₹{currentPrice.toLocaleString('en-IN')}</p>
                  <span className="text-sm text-elegant-stone font-light mb-1">/ night</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-6 md:p-8 border border-elegant-stone/20 shadow-2xl rounded-xl"
              >
                <h3 className="text-xl font-serif text-dark-surface mb-6">Reserve Your Stay</h3>
                
                <form onSubmit={handleBooking} className="space-y-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-elegant-stone mb-2 font-medium">Full Name</label>
                    <input required type="text" value={bookingForm.name} onChange={e => setBookingForm({...bookingForm, name: e.target.value})} className="w-full bg-soft-ivory border-none px-4 py-3 text-dark-surface focus:ring-1 focus:ring-subtle-gold outline-none text-sm transition-shadow" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-elegant-stone mb-2 font-medium">Phone Number</label>
                    <input required type="tel" value={bookingForm.phone} onChange={e => setBookingForm({...bookingForm, phone: e.target.value})} className="w-full bg-soft-ivory border-none px-4 py-3 text-dark-surface focus:ring-1 focus:ring-subtle-gold outline-none text-sm transition-shadow" placeholder="+91 98765 43210" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-elegant-stone mb-2 font-medium">Check In</label>
                      <input required type="date" value={bookingForm.checkIn} onChange={e => setBookingForm({...bookingForm, checkIn: e.target.value})} className="w-full bg-soft-ivory border-none px-4 py-3 text-dark-surface focus:ring-1 focus:ring-subtle-gold outline-none text-sm transition-shadow" />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-elegant-stone mb-2 font-medium">Check Out</label>
                      <input required type="date" value={bookingForm.checkOut} onChange={e => setBookingForm({...bookingForm, checkOut: e.target.value})} className="w-full bg-soft-ivory border-none px-4 py-3 text-dark-surface focus:ring-1 focus:ring-subtle-gold outline-none text-sm transition-shadow" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-elegant-stone mb-2 font-medium">Guests</label>
                      <select value={bookingForm.guests} onChange={e => setBookingForm({...bookingForm, guests: e.target.value})} className="w-full bg-soft-ivory border-none px-4 py-3 text-dark-surface focus:ring-1 focus:ring-subtle-gold outline-none text-sm cursor-pointer transition-shadow">
                        <option>1 Adult</option>
                        <option>2 Adults</option>
                        <option>3 Adults</option>
                        <option>4 Adults</option>
                        <option>Family</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-elegant-stone mb-2 font-medium">Add Breakfast (+₹500)</label>
                      <select value={bookingForm.breakfast} onChange={e => setBookingForm({...bookingForm, breakfast: e.target.value})} className="w-full bg-soft-ivory border-none px-4 py-3 text-dark-surface focus:ring-1 focus:ring-subtle-gold outline-none text-sm cursor-pointer transition-shadow">
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                  </div>
                  
                  <button type="submit" className="w-full bg-nature-green text-white py-4 uppercase tracking-[0.2em] text-xs font-medium hover:bg-premium-olive transition-all duration-300 shadow-xl hover:shadow-nature-green/30 mt-6">
                    Book via WhatsApp
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageIndex(null)}
            className="fixed inset-0 z-[100] bg-dark-surface/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedImageIndex(null); }} 
              className="absolute top-6 right-6 text-white hover:text-subtle-gold p-2 z-50 transition-colors"
            >
              <X size={32} />
            </button>
            
            <button 
              onClick={handlePrev}
              className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 text-white hover:text-subtle-gold p-4 z-50 transition-colors"
            >
              <ChevronLeft size={48} />
            </button>

            <img 
              src={images[selectedImageIndex]} 
              alt="Fullscreen View" 
              className="max-w-full max-h-full object-contain shadow-2xl rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />

            <button 
              onClick={handleNext}
              className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-white hover:text-subtle-gold p-4 z-50 transition-colors"
            >
              <ChevronRight size={48} />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 tracking-widest text-sm">
              {selectedImageIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
