import { motion } from "motion/react";
import { Instagram } from "lucide-react";

const IMAGES = [
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3059.PNG",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3060.PNG",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3061.PNG",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3062.PNG",
];

export function InstagramGrid() {
  return (
    <section className="py-20 bg-dark-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
           <a 
            href="https://www.instagram.com/earthora_resort" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white hover:text-subtle-gold transition-colors duration-300 group cursor-none"
          >
            <Instagram size={24} strokeWidth={1.5} />
            <span className="uppercase tracking-widest text-sm font-medium">@earthora_resort</span>
          </a>
        </motion.div>
      </div>

      <div className="flex w-[200vw] md:w-[120vw] -ml-[10vw]">
        {IMAGES.map((img, i) => (
          <motion.a
            key={i}
            href="https://www.instagram.com/earthora_resort"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="w-1/4 aspect-square group relative overflow-hidden block cursor-none"
          >
            <img 
              src={img} 
              alt={`Instagram post ${i+1}`} 
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-nature-green/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <Instagram size={32} className="text-white transform scale-50 group-hover:scale-100 transition-transform duration-500" strokeWidth={1.5} />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
