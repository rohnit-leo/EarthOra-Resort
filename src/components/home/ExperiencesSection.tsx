import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const IMAGES = [
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/exp/IMG_3012.JPG.jpeg",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/exp/IMG_3013.JPG.jpeg",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/exp/IMG_3015.JPG.jpeg",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/exp/IMG_3016.JPG.jpeg",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/exp/IMG_3017.JPG.jpeg",
];

export function ExperiencesSection() {
  return (
    <section className="pt-24 pb-28 md:pb-36 bg-luxury-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h4 className="text-nature-green uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Curated Moments
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif text-dark-surface mb-6">
              Experiences That Stay With You
            </h2>
            <p className="text-elegant-stone font-light leading-relaxed">
              From misty morning walks through the valley to vibrant evenings under the stars. Discover a collection of moments designed to connect you deeply with nature and yourself.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <Link 
              to="/experiences"
              className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-dark-surface font-medium group hover:text-nature-green transition-colors"
            >
              View All Experiences
              <span className="w-10 h-10 rounded-full border border-dark-surface/10 flex items-center justify-center group-hover:border-nature-green transition-colors">
                <ArrowRight size={16} />
              </span>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[600px]">
          {/* Main Large Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-6 lg:col-span-5 h-full rounded-2xl overflow-hidden group relative"
          >
            <img src={IMAGES[0]} alt="Experience 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </motion.div>

          {/* Right Side Grid */}
          <div className="md:col-span-6 lg:col-span-7 grid grid-cols-2 gap-4 h-full">
            {IMAGES.slice(1, 5).map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`rounded-2xl overflow-hidden group relative ${i === 1 || i === 2 ? 'row-span-2' : ''}`}
              >
                <img src={img} alt={`Experience ${i + 2}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
