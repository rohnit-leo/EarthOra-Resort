import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { redirectToWhatsApp } from "../../lib/utils";
import { useRooms } from "../../lib/useSiteData";

export function RoomsPreview() {
  const { rooms } = useRooms();

  const roomList = [
    {
      id: "standard",
      path: "/room/standard",
      name: rooms.standard?.title || "Standard Eco Cottage",
      image: rooms.standard?.images?.[0] || "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/IMG_2948.JPG%20%281%29.jpeg",
      desc: rooms.standard?.description || "Elegant and comfortable cottage designed for a peaceful retreat with beautiful nature views.",
      price: `₹${(rooms.standard?.price || 4999).toLocaleString("en-IN")}`,
      features: rooms.standard?.highlights || ["2 Guests", "Queen Bed", "En-suite Bathroom", "Valley View"],
    },
    {
      id: "premium",
      path: "/room/premium",
      name: rooms.premium?.title || "Premium Valley View Cottage",
      image: rooms.premium?.images?.[0] || "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/cottagest/IMG_2883.JPG.jpeg",
      desc: rooms.premium?.description || "Our most luxurious offering featuring expansive space, premium amenities, and unparalleled comfort.",
      price: `₹${(rooms.premium?.price || 7499).toLocaleString("en-IN")}`,
      features: rooms.premium?.highlights || ["2-4 Guests", "King Bed", "Private Balcony", "Premium Toiletries"],
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-luxury-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-nature-green uppercase tracking-[0.2em] text-xs font-semibold mb-3"
            >
              Luxury Stays
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-serif text-dark-surface max-w-xl"
            >
              Accommodations Designed for Serenity
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/stay" className="magnetic pb-1 border-b border-subtle-gold text-xs tracking-widest uppercase hover:text-nature-green hover:border-nature-green transition-colors inline-block">
              View All Rooms
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {roomList.map((room, i) => (
            <motion.div 
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group flex flex-col bg-soft-ivory/50 p-6 border border-black/10 shadow-sm transition-all duration-300 hover:shadow-md hover:border-black/20"
            >
              <div className="overflow-hidden aspect-[16/10] max-h-[280px] mb-5 relative border border-black/5">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-dark-surface/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-serif text-dark-surface">{room.name}</h3>
                <div className="text-right">
                  <span className="text-xs text-elegant-stone block">Starting from</span>
                  <span className="text-lg text-subtle-gold font-semibold">{room.price}</span>
                </div>
              </div>
              <p className="text-elegant-stone text-sm leading-relaxed mb-4 font-light">
                {room.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {room.features.map((feat, j) => (
                  <span key={j} className="text-[11px] uppercase tracking-wider text-nature-green border border-nature-green/20 px-2.5 py-1">
                    {feat}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                <Link
                  to={room.path}
                  className="w-1/2 text-center py-3 border border-dark-surface text-dark-surface uppercase tracking-widest text-xs font-semibold hover:bg-dark-surface hover:text-white transition-colors duration-300"
                >
                  View Details
                </Link>
                <button 
                  onClick={() => redirectToWhatsApp({ Intent: `Book ${room.name}` })}
                  className="w-1/2 py-3 bg-dark-surface text-white uppercase tracking-widest text-xs font-semibold hover:bg-nature-green transition-colors duration-300"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
