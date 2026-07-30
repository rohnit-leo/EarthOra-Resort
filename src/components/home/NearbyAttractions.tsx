import { motion } from "motion/react";
import { MapPin, ArrowRight, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import { useTourism } from "../../lib/useSiteData";

export function NearbyAttractions() {
  const { tourismList } = useTourism();

  return (
    <section className="py-28 bg-soft-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-nature-green uppercase tracking-widest text-xs font-medium mb-3 flex items-center gap-2"
            >
              <Compass size={16} /> Regional Wonders
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-dark-surface"
            >
              Nearby Tourism & Nature
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/tourism"
              className="inline-flex items-center gap-3 bg-dark-surface text-white px-8 py-4 rounded-xl uppercase tracking-widest text-xs font-semibold hover:bg-nature-green transition-all shadow-md group"
            >
              Explore Full Tourism Story
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tourismList.map((place, i) => (
            <motion.div
              key={place.id || place.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden shadow-md h-[360px] flex flex-col justify-end p-6 border border-elegant-stone/10"
            >
              <img 
                src={place.images?.[0] || "https://images.unsplash.com/photo-1506744038136-46273834b3fb"} 
                alt={place.title} 
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/95 via-dark-surface/40 to-transparent" />
              
              <div className="relative z-10 text-white">
                <div className="flex items-center gap-1.5 text-subtle-gold text-xs uppercase tracking-widest mb-1.5 font-semibold">
                  <MapPin size={13} />
                  <span>{place.distance}</span>
                </div>
                <h3 className="text-xl font-serif text-white mb-1.5 leading-tight">{place.title}</h3>
                <p className="text-white/80 text-xs font-light leading-relaxed line-clamp-2">
                  {Array.isArray(place.desc) ? place.desc[0] : place.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
