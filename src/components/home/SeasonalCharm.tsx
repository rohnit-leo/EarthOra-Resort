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
    <section className="py-32 bg-luxury-white px-6 md:px-12">
       <div className="max-w-7xl mx-auto">
         <div className="text-center mb-16">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-nature-green uppercase tracking-widest text-sm font-medium mb-4"
            >
              Unmatched Surroundings
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-serif text-dark-surface"
            >
              EarthOra & Beyond
            </motion.h2>
         </div>
         
         <div className="flex flex-col md:flex-row gap-4 h-[700px] md:h-[600px]">
           {HIGHLIGHTS.map((item) => (
             <motion.div
               key={item.id}
               onHoverStart={() => setHovered(item.id)}
               onClick={() => setHovered(item.id)}
               className="relative overflow-hidden rounded-2xl cursor-pointer group flex-1 md:flex-none"
               animate={{
                 flex: hovered === item.id ? (typeof window !== 'undefined' && window.innerWidth > 768 ? 3 : 2) : 1
               }}
               transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
             >
               <img src={item.img} loading="lazy" alt={item.name} className="absolute inset-0 w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/90 via-dark-surface/20 to-transparent" />
               
               <div className="absolute bottom-8 left-6 md:left-8 right-6 md:right-8 text-white flex flex-col justify-end h-full">
                  <h3 className="text-2xl md:text-3xl font-serif whitespace-nowrap mb-2 transform origin-left transition-transform duration-500">
                    {item.name}
                  </h3>
                  
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: hovered === item.id ? 1 : 0,
                      height: hovered === item.id ? 'auto' : 0
                    }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/80 font-light text-sm md:text-base leading-relaxed mt-2 text-wrap">
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
