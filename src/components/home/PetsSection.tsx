import { motion } from "motion/react";
import { Heart, Sparkles, ShieldCheck, Sun } from "lucide-react";

const BOTH_DOGS_IMAGE = "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/dogs/IMG_2997.JPG.jpeg";

const PETS = [
  {
    name: "Don",
    breed: "Golden Retriever",
    desc: "Our joyful Golden Retriever loves to welcome guests with a wagging tail. He is wonderful with families and loves playing fetch on the resort lawns.",
    image: "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/dogs/IMG_2994.JPG.jpeg",
  },
  {
    name: "Ora",
    breed: "Labrador Retriever",
    desc: "The gentle, observant host of EarthOra. Ora is calm, loving, and always ready for a peaceful stroll around the gardens at sunset.",
    image: "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/dogs/IMG_2999.JPG.jpeg",
  }
];

export function PetsSection() {
  return (
    <section className="py-24 bg-soft-ivory overflow-hidden border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-nature-green uppercase tracking-[0.2em] text-xs font-semibold mb-3"
          >
            <Heart size={14} className="fill-nature-green" /> Our Resident Hosts
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-dark-surface mb-4"
          >
            Meet Don & Ora
          </motion.h2>
          <p className="text-elegant-stone font-light text-base md:text-lg">
            EarthOra is a proudly pet-friendly sanctuary where nature and companions connect.
          </p>
        </div>

        {/* Side-by-side Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Full Uncropped Both Dogs Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="relative bg-luxury-white p-4 md:p-6 rounded-3xl border border-elegant-stone/15 shadow-xl">
              <div className="w-full rounded-2xl overflow-hidden bg-dark-surface/5 flex items-center justify-center min-h-[350px] md:min-h-[420px]">
                <img 
                  src={BOTH_DOGS_IMAGE} 
                  alt="Don and Ora together at EarthOra Resort" 
                  loading="lazy"
                  className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-inner"
                />
              </div>
              <div className="mt-4 flex items-center justify-between px-2">
                <div>
                  <h4 className="font-serif text-lg text-dark-surface">Don & Ora</h4>
                  <p className="text-xs text-elegant-stone">EarthOra Estate Greeting Team</p>
                </div>
                <span className="bg-nature-green/10 text-nature-green text-xs font-medium px-3 py-1 rounded-full border border-nature-green/20">
                  100% Pet Friendly
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Descriptions & Individual Dogs */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="bg-luxury-white p-8 rounded-3xl border border-elegant-stone/15 shadow-sm space-y-4">
              <h3 className="text-2xl font-serif text-dark-surface">Warm Hospitality For Pets & Guests</h3>
              <p className="text-elegant-stone text-sm md:text-base leading-relaxed font-light">
                Whether you are traveling with your own pets or looking forward to friendly dog tail-wags on morning walks, Don and Ora bring instant warmth and cozy energy to your holiday.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-soft-ivory">
                  <ShieldCheck size={20} className="text-nature-green shrink-0" />
                  <span className="text-xs font-medium text-dark-surface">Vaccinated & Friendly</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-soft-ivory">
                  <Sun size={20} className="text-subtle-gold shrink-0" />
                  <span className="text-xs font-medium text-dark-surface">Spacious Lawns to Play</span>
                </div>
              </div>
            </div>

            {/* Individual Profiles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PETS.map((pet) => (
                <div key={pet.name} className="bg-luxury-white p-6 rounded-2xl border border-elegant-stone/15 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border-2 border-subtle-gold/40 shadow-md">
                    <img src={pet.image} alt={pet.name} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-serif text-lg text-dark-surface">{pet.name}</h4>
                  <span className="text-[10px] uppercase tracking-widest text-nature-green font-semibold mb-2">{pet.breed}</span>
                  <p className="text-xs text-elegant-stone font-light leading-relaxed">{pet.desc}</p>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
