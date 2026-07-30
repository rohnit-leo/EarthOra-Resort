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
    name: "Tapola (Mini Kashmir)", 
    time: "45 Mins Away", 
    desc: "Tranquil Koyna backwaters, speed boating, water sports & emerald lakeside hills.", 
    img: "https://frevuykpcqueimke.public.blob.vercel-storage.com/Mini%20Kashmir%20of%20Maharashtra%2CTapola%E2%9B%B0%EF%B8%8F%F0%9F%A4%8D.jpg" 
  },
  { 
    name: "Vasota Fort Trek", 
    time: "40 Mins Away", 
    desc: "Thrilling jungle trek through Koyna Wildlife Sanctuary reached via backwater boat ride.", 
    img: "https://frevuykpcqueimke.public.blob.vercel-storage.com/Vasota%20jungle%20trek%2C%20Satara%20_%20Top%20of%20Vasota%20jungle.jpg" 
  },
  { 
    name: "Yavateshwar Temple", 
    time: "20 Mins Away", 
    desc: "Ancient Hemadpanthi Shiva temple on hill peak offering sweeping valley sunrise views.", 
    img: "https://frevuykpcqueimke.public.blob.vercel-storage.com/3-74.jpeg" 
  },
  { 
    name: "Ajinkyatara Fort", 
    time: "30 Mins Away", 
    desc: "Historic Maratha bastion at 3,300ft elevation commanding panoramic 360° Satara vistas.", 
    img: "https://frevuykpcqueimke.public.blob.vercel-storage.com/Ajinkya%20tara%20fort.jpg" 
  },
  { 
    name: "Vajrai & Thoseghar Falls", 
    time: "25 Mins Away", 
    desc: "Dramatic, high cascading waterfalls tumbling down lush green valley cliffs into pristine pools.", 
    img: "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/hchc/jvjv/jvjv/IMG_3098.JPG.jpeg" 
  },
];

export function NearbyAttractions() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ATTRACTIONS.map((place, i) => (
            <motion.div
              key={place.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-md h-[380px] flex flex-col justify-end p-8 border border-elegant-stone/10"
            >
              <img 
                src={place.img} 
                alt={place.name} 
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/95 via-dark-surface/40 to-transparent" />
              
              <div className="relative z-10 text-white">
                <div className="flex items-center gap-2 text-subtle-gold text-xs uppercase tracking-widest mb-2 font-semibold">
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
