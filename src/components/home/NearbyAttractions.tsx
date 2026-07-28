import { motion } from "motion/react";
import { MapPin, ArrowRight, Compass } from "lucide-react";
import { Link } from "react-router-dom";

const ATTRACTIONS = [
  { 
    name: "UNESCO Kaas Plateau", 
    time: "15 Mins Away", 
    desc: "Famous 'Valley of Flowers', a UNESCO World Heritage site overflowing with seasonal wild flora.", 
    img: "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/hchc/IMG_3090.JPG%20%281%29.jpeg" 
  },
  { 
    name: "Jungle Safari Trails", 
    time: "5 Mins Away", 
    desc: "Exhibiting raw wilderness, ancient woods, and wildlife safaris located right next to the resort.", 
    img: "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/hchc/jvjv/jvjv/IMG_3101.JPG.jpeg" 
  },
  { 
    name: "Vajrai & Thoseghar Falls", 
    time: "20 Mins Away", 
    desc: "Dramatic, high cascading waterfalls tumbling down lush green valley cliffs into pristine pools.", 
    img: "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/hchc/jvjv/jvjv/IMG_3098.JPG.jpeg" 
  },
  { 
    name: "Cinematic Valleys & Drives", 
    time: "At Your Doorstep", 
    desc: "Breathtaking winding mountain roads and misty scenic valley overlooks perfect for drives.", 
    img: "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/hchc/jvjv/IMG_3083.JPG.jpeg" 
  },
];

export function NearbyAttractions() {
  return (
    <section className="py-32 bg-soft-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-nature-green uppercase tracking-widest text-xs font-medium mb-4 flex items-center gap-2"
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
              className="inline-flex items-center gap-3 bg-dark-surface text-white px-8 py-4 rounded-xl uppercase tracking-widest text-xs font-medium hover:bg-nature-green transition-all shadow-md group"
            >
              Explore Full Tourism Story
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ATTRACTIONS.map((place, i) => (
            <motion.div
              key={place.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg h-[420px] flex flex-col justify-end p-8 border border-elegant-stone/10"
            >
              <img 
                src={place.img} 
                alt={place.name} 
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/95 via-dark-surface/40 to-transparent" />
              
              <div className="relative z-10 text-white">
                <div className="flex items-center gap-2 text-subtle-gold text-xs uppercase tracking-widest mb-3 font-medium">
                  <MapPin size={14} />
                  <span>{place.time}</span>
                </div>
                <h3 className="text-2xl font-serif text-white mb-2">{place.name}</h3>
                <p className="text-white/80 text-xs font-light leading-relaxed">
                  {place.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
