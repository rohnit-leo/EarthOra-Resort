import { motion } from "motion/react";
import { Star, MessageSquare } from "lucide-react";

const REVIEWS = [
  {
    name: "Rahul Sharma",
    date: "2 weeks ago",
    text: "Absolutely stunning property! The cottages are incredibly luxurious and the view of the valley is breathtaking. The open kitchen food was excellent.",
  },
  {
    name: "Sneha Patil",
    date: "1 month ago",
    text: "Best resort near Kaas Plateau. We hosted our family gathering in their open hall and the arrangements were flawless. Highly recommend!",
  },
  {
    name: "Vikram Desai",
    date: "2 months ago",
    text: "Loved the hospitality. The staff is very polite and helpful. My kids loved playing with Simba and Bruno in the wide lawns. Will visit again!",
  },
  {
    name: "Dr. Ananya Kulkarni",
    date: "3 weeks ago",
    text: "A true eco-luxury sanctuary! Pristine air, total peaceful solitude, and delicious Maharashtrian dishes cooked fresh in front of us.",
  },
  {
    name: "Pritam & Neha",
    date: "1 month ago",
    text: "Came here for our anniversary staycation. Sunset over the valley from our cottage deck was unforgettable. Pure bliss and high hygiene standards.",
  },
  {
    name: "Siddharth Verma",
    date: "2 months ago",
    text: "Super close to Kaas Pathar and jungle safaris. Cozy rooms with premium linen, fast WiFi, and warm hospitality. 10/10 experience!",
  },
  {
    name: "Meenal Joshi",
    date: "3 months ago",
    text: "The live open kitchen concept is fantastic. Hot bhakri, local village chicken curry, and fresh salads made right in front of us. Super clean!",
  },
  {
    name: "Rohan Mehta",
    date: "3 weeks ago",
    text: "An oasis of calmness. The morning mist rolling over the lawn while sipping hot tea is something money can't buy. Top tier resort in Satara.",
  }
];

const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/place/EarthOra+Resort/@17.7127492,73.8634004,635m/data=!3m1!1e3!4m8!3m7!1s0x3bc23f235e6f79fd:0xc45283276d806216!8m2!3d17.7127441!4d73.8659753!9m1!1b1!16s%2Fg%2F11nth3x9zv?entry=ttu&g_ep=EgoyMDI2MDcyNy4wIKXMDSoASAFQAw%3D%3D";

export function Testimonials() {
  // Duplicate for seamless infinite carousel loop
  const doubleReviews = [...REVIEWS, ...REVIEWS];

  return (
    <section className="py-28 bg-luxury-white overflow-hidden relative border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-nature-green uppercase tracking-[0.2em] text-xs font-semibold mb-3 flex items-center gap-2">
              <MessageSquare size={16} /> Guest Experiences
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif text-dark-surface">
              Words From <span className="italic text-elegant-stone">Our Guests</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <a 
              href={GOOGLE_REVIEWS_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-dark-surface text-white hover:bg-nature-green text-xs tracking-widest uppercase font-semibold transition-all rounded-xl shadow-md inline-flex items-center gap-2"
            >
              Write a Review on Google Maps
            </a>
          </motion.div>
        </div>
      </div>

      {/* Infinite Continuous Sliding Marquee */}
      <div className="w-full overflow-hidden py-4">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
          className="flex gap-6 w-max hover:[animation-play-state:paused]"
        >
          {doubleReviews.map((review, i) => (
            <div
              key={i}
              className="w-[320px] sm:w-[380px] p-8 rounded-2xl border border-elegant-stone/15 hover:border-subtle-gold transition-all duration-300 bg-white shadow-sm shrink-0 flex flex-col justify-between"
            >
              <div>
                <div className="flex text-subtle-gold mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={15} fill="currentColor" stroke="none" />
                  ))}
                </div>
                <p className="text-elegant-stone leading-relaxed font-light text-sm mb-6 italic">
                  "{review.text}"
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-surface uppercase tracking-wider text-xs">{review.name}</h4>
                <span className="text-[11px] text-elegant-stone/70">{review.date} • Verified Stay</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
