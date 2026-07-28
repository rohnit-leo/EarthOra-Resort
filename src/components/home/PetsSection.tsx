import { motion } from "motion/react";
import { Heart } from "lucide-react";

const BOTH_DOGS_IMAGE = "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/dogs/IMG_2997.JPG.jpeg";

const PETS = [
  {
    name: "Simba",
    breed: "Golden Retriever",
    desc: "Our friendly Golden Retriever loves to welcome guests with a wagging tail. He is great with kids and loves playing fetch in the resort lawns.",
    image: "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/dogs/IMG_2994.JPG.jpeg",
  },
  {
    name: "Bruno",
    breed: "Labrador",
    desc: "The gentle giant of EarthOra. Bruno is calm, observant, and always ready for a relaxing stroll around the property at sunset.",
    image: "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/dogs/IMG_2999.JPG.jpeg",
  }
];

export function PetsSection() {
  return (
    <section className="py-32 bg-soft-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-nature-green uppercase tracking-widest text-sm font-medium mb-4"
          >
            Our Resident Hosts
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-dark-surface mb-6"
          >
            Meet Simba & Bruno <span className="italic text-elegant-stone font-light">— Our Furry Friends</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-elegant-stone max-w-2xl mx-auto text-base font-light"
          >
            EarthOra is a pet-friendly sanctuary. Our resident dogs are always eager to offer warm welcomes, outdoor companionship, and gentle energy during your stay.
          </motion.p>
        </div>

        {/* Both Dogs Together Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden mb-20 shadow-2xl border border-elegant-stone/10 group"
        >
          <div className="aspect-[21/9] md:aspect-[24/9] w-full min-h-[320px] max-h-[500px]">
            <img 
              src={BOTH_DOGS_IMAGE} 
              alt="Simba and Bruno together at EarthOra Resort" 
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/80 via-dark-surface/20 to-transparent flex items-end p-8 md:p-12">
            <div className="text-white max-w-xl">
              <span className="inline-flex items-center gap-2 bg-subtle-gold/30 backdrop-blur-md px-4 py-1.5 rounded-full text-xs uppercase tracking-widest text-white border border-white/20 mb-3">
                <Heart size={14} className="fill-white" /> Always Together
              </span>
              <h3 className="text-2xl md:text-3xl font-serif mb-2">Double The Happiness</h3>
              <p className="text-white/80 text-sm font-light">Simba and Bruno roaming the lush green grounds of EarthOra together, creating unforgettable memories for our guests.</p>
            </div>
          </div>
        </motion.div>

        {/* Individual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {PETS.map((pet, i) => (
            <motion.div 
              key={pet.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-luxury-white p-8 rounded-3xl border border-elegant-stone/10 shadow-sm text-center group"
            >
              <div className="w-36 h-36 overflow-hidden rounded-full mb-6 mx-auto border-4 border-soft-ivory shadow-lg relative">
                <img 
                  src={pet.image} 
                  alt={pet.name} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-serif text-dark-surface mb-1">{pet.name}</h3>
              <span className="text-xs uppercase tracking-widest text-nature-green font-medium block mb-4">{pet.breed}</span>
              <p className="text-elegant-stone text-sm leading-relaxed font-light">
                {pet.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
