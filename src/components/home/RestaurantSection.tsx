import { motion } from "motion/react";
import { Utensils, Coffee, Flame } from "lucide-react";
import { Link } from "react-router-dom";

export function RestaurantSection() {
  return (
    <section className="py-32 bg-luxury-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-subtle-gold/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-nature-green uppercase tracking-widest text-sm font-medium mb-4">Culinary Heritage</h4>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-dark-surface leading-tight mb-8">
              Open Kitchen & <br />
              <span className="italic text-subtle-gold">Authentic Flavors</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-lg text-elegant-stone font-light leading-relaxed text-balance"
          >
            <p>
              Delight your senses in our pristine open kitchen restaurant. Watch as our chefs prepare fresh local delicacies, piping hot Maharashtrian dishes, and gourmet treats using farm-fresh organic ingredients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 pt-4"
          >
             <div className="flex flex-col items-center text-center space-y-3">
               <div className="w-12 h-12 rounded-full bg-soft-ivory flex items-center justify-center text-nature-green">
                 <Flame size={20} />
               </div>
               <span className="text-xs uppercase tracking-widest text-dark-surface font-medium">Open Kitchen</span>
             </div>
             <div className="flex flex-col items-center text-center space-y-3">
               <div className="w-12 h-12 rounded-full bg-soft-ivory flex items-center justify-center text-nature-green">
                 <Utensils size={20} />
               </div>
               <span className="text-xs uppercase tracking-widest text-dark-surface font-medium">Fresh Plating</span>
             </div>
             <div className="flex flex-col items-center text-center space-y-3">
               <div className="w-12 h-12 rounded-full bg-soft-ivory flex items-center justify-center text-nature-green">
                 <Coffee size={20} />
               </div>
               <span className="text-xs uppercase tracking-widest text-dark-surface font-medium">Farm To Table</span>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-6"
          >
            <Link 
              to="/restaurant"
              className="inline-block px-10 py-5 bg-dark-surface text-white uppercase tracking-widest text-sm hover:bg-nature-green transition-colors duration-500 magnetic rounded-xl shadow-md"
            >
              Explore Culinary Story
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative grid grid-cols-2 gap-4 aspect-[4/5] lg:aspect-[3/4]"
        >
          <div className="rounded-2xl overflow-hidden shadow-lg h-full">
            <img 
              src="https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/restaurant%20page%20/IMG_3033.JPG.jpeg" 
              alt="Kitchen Preparation" 
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg h-full mt-8">
            <img 
              src="https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/restaurant%20page%20/IMG_3068.JPG.jpeg" 
              alt="Delicious Plated Dish" 
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
