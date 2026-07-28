import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { redirectToWhatsApp } from "../../lib/utils";

const ROOMS = [
  {
    id: "standard",
    path: "/room/standard",
    name: "Standard Cottage",
    image: "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/IMG_2948.JPG%20%281%29.jpeg",
    desc: "Elegant and comfortable cottage designed for a peaceful retreat with beautiful nature views.",
    price: "₹2,000",
    features: ["2 Guests", "Queen Bed", "En-suite Bathroom", "Valley View"],
  },
  {
    id: "premium",
    path: "/room/premium",
    name: "Premium Cottage",
    image: "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/cottagest/IMG_2883.JPG.jpeg",
    desc: "Our most luxurious offering featuring expansive space, premium amenities, and unparalleled comfort.",
    price: "₹2,500",
    features: ["2-4 Guests", "King Bed", "Private Balcony", "Premium Toiletries"],
  },
];

export function RoomsPreview() {
  return (
    <section className="py-32 bg-luxury-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-nature-green uppercase tracking-widest text-sm font-medium mb-4"
            >
              Luxury Stays
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-dark-surface max-w-xl"
            >
              Accommodations Designed for Serenity
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <button className="magnetic pb-2 border-b border-subtle-gold text-sm tracking-widest uppercase hover:text-nature-green hover:border-nature-green transition-colors">
              View All Rooms
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {ROOMS.map((room, i) => (
            <motion.div 
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group cursor-none"
            >
              <div className="overflow-hidden aspect-[4/3] mb-8 relative">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-dark-surface/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-3xl font-serif text-dark-surface">{room.name}</h3>
                <div className="text-right">
                  <span className="text-sm text-elegant-stone block mb-1">Starting from</span>
                  <span className="text-xl text-subtle-gold font-medium">{room.price}</span>
                </div>
              </div>
              <p className="text-elegant-stone text-balance leading-relaxed mb-6 font-light">
                {room.desc}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {room.features.map((feat, j) => (
                  <span key={j} className="text-xs uppercase tracking-wider text-nature-green border border-nature-green/20 px-3 py-1">
                    {feat}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Link
                  to={room.path}
                  className="w-1/2 text-center py-4 border border-dark-surface text-dark-surface uppercase tracking-widest text-sm hover:bg-soft-ivory transition-colors duration-500 magnetic"
                >
                  View Details
                </Link>
                <button 
                  onClick={() => redirectToWhatsApp({ Intent: `Book ${room.name}` })}
                  className="w-1/2 py-4 bg-dark-surface text-white uppercase tracking-widest text-sm hover:bg-nature-green transition-colors duration-500 magnetic"
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
