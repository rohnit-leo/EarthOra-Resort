import { motion } from "motion/react";
import { useState } from "react";

const HIGHLIGHTS = [
  { 
    id: 'pool', 
    name: "Tranquil Swimming Pool", 
    desc: "Dive into pure relaxation at our swimming pool, surrounded by peaceful landscapes and fresh mountain air.", 
    img: "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3054.PNG" 
  },
  { 
    id: 'kaas', 
    name: "UNESCO Kaas Plateau", 
    desc: "Situated just minutes from Kaas Plateau, experience world-famous blooming wild flora and misty valley vistas.", 
    img: "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/hchc/IMG_3090.JPG%20%281%29.jpeg" 
  },
  { 
    id: 'safari', 
    name: "Jungle Safari (5 Mins Away)", 
    desc: "Discover pristine wilderness and forest trails on exciting jungle safaris located right next to EarthOra.", 
    img: "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/hchc/jvjv/jvjv/IMG_3101.JPG.jpeg" 
  },
  { 
    id: 'waterfalls', 
    name: "Vajrai & Thoseghar Falls", 
    desc: "Witness magnificent cascading waterfalls nestled amidst dense green valleys and misty mountain drives.", 
    img: "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/hchc/jvjv/jvjv/IMG_3098.JPG.jpeg" 
  }
];

export function SeasonalCharm() {
  const [hovered, setHovered] = useState<string>('pool');

  return (
    <section className="py-16 md:py-20 bg-luxury-white px-6 md:px-12 border-t border-dark-surface/5">
       <div className="max-w-7xl mx-auto">
         <div className="text-center mb-8">
            <motion.h4 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-nature-green uppercase tracking-widest text-xs font-medium mb-2"
            >
              Unmatched Surroundings
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-serif text-dark-surface"
            >
              EarthOra & Beyond
            </motion.h2>
         </div>
         
         <div className="flex flex-col md:flex-row gap-3 h-[420px] md:h-[360px]">
           {HIGHLIGHTS.map((item) => (
             <motion.div
               key={item.id}
               onHoverStart={() => setHovered(item.id)}
               onClick={() => setHovered(item.id)}
               className="relative overflow-hidden rounded-xl cursor-pointer group flex-1 md:flex-none border border-black/5 shadow-md"
               animate={{
                 flex: hovered === item.id ? 2.5 : 1
               }}
               transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
             >
               <img src={item.img} loading="lazy" alt={item.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/90 via-dark-surface/20 to-transparent" />
               
               <div className="absolute bottom-6 left-5 md:left-6 right-5 md:right-6 text-white flex flex-col justify-end h-full">
                  <h3 className="text-xl md:text-2xl font-serif mb-1 truncate">
                    {item.name}
                  </h3>
                  
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: hovered === item.id ? 1 : 0,
                      height: hovered === item.id ? 'auto' : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/80 font-light text-xs md:text-sm leading-relaxed mt-1 line-clamp-3">
                      {item.desc}
                    </p>
                  </motion.div>
               </div>
             </motion.div>
           ))}
         </div>
       </div>
    </section>
  );
}
