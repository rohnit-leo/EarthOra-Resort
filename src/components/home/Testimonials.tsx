import { motion } from "motion/react";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Rahul Sharma",
    date: "2 weeks ago",
    text: "Absolutely stunning property! The cottages are incredibly luxurious and the view of the valley is breathtaking. The food was excellent.",
  },
  {
    name: "Sneha Patil",
    date: "1 month ago",
    text: "Best resort near Kaas Plateau. We hosted our anniversary party in their open hall and the arrangements were flawless. Highly recommend!",
  },
  {
    name: "Vikram Desai",
    date: "3 months ago",
    text: "Loved the hospitality. The staff is very polite and helpful. My kids loved playing with Simba and Bruno. Will definitely visit again.",
  }
];

export function Testimonials() {
  return (
    <section className="py-32 bg-luxury-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-nature-green uppercase tracking-widest text-sm font-medium mb-4">Guest Experiences</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-dark-surface max-w-xl">
              Words From <span className="italic text-elegant-stone">Our Guests</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <a 
              href="https://www.google.com/maps/place/EarthOra+Resort" 
              target="_blank" 
              rel="noopener noreferrer"
              className="magnetic pb-2 border-b border-subtle-gold text-sm tracking-widest uppercase hover:text-nature-green hover:border-nature-green transition-colors cursor-none inline-block"
            >
              Write a Review
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-10 border border-elegant-stone/20 hover:border-subtle-gold/50 transition-colors duration-500 bg-white"
            >
              <div className="flex text-subtle-gold mb-6">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" stroke="none" />
                ))}
              </div>
              <p className="text-elegant-stone leading-relaxed font-light mb-8 italic">
                "{review.text}"
              </p>
              <div>
                <h4 className="font-medium text-dark-surface uppercase tracking-wider text-sm">{review.name}</h4>
                <span className="text-xs text-elegant-stone/70">{review.date} • Verified Guest</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
