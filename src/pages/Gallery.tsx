import { motion } from "motion/react";
import { useState } from "react";
import { X } from "lucide-react";
import { SEO } from "../components/common/SEO";

export function Gallery() {
  const images = [
    "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/cottagest/IMG_2883.JPG.jpeg",
    "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/cottagest/IMG_2888.JPG.jpeg",
    "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/cottagest/IMG_2907.JPG.jpeg",
    "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/cottagest/IMG_2911.JPG.jpeg",
    "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/cottagest/IMG_2914.JPG.jpeg",
    "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/cottagest/IMG_2917.JPG.jpeg",
    "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/cottagestt/IMG_2935.JPG.jpeg",
    "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/cottagestt/IMG_2948.JPG.jpeg",
    "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/dogs/IMG_2997.JPG.jpeg",
    "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3053.PNG",
    "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3054.PNG",
    "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3057.PNG",
    "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3058.PNG",
    "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3062.PNG",
    "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3066.PNG"
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-20 bg-luxury-white min-h-screen">
      <SEO 
        title="Resort Photo Gallery | EarthOra Resort Kaas Plateau"
        description="View photo gallery of EarthOra Resort near Kaas Plateau, Satara. High-resolution images of cottages, open-kitchen dining, lawns, and natural surroundings."
        canonicalUrl="https://www.earthoraresort.in/gallery"
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-nature-green uppercase tracking-widest text-sm font-medium mb-4"
          >
            Visual Journey
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-dark-surface"
          >
            Resort Gallery
          </motion.h1>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="break-inside-avoid overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img} 
                alt={`EarthOra Gallery ${i}`} 
                loading="lazy" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-dark-surface/95 backdrop-blur-md flex items-center justify-center p-4"
        >
          <button onClick={() => setSelectedImage(null)} className="absolute top-6 right-6 text-white hover:text-subtle-gold p-2">
            <X size={32} />
          </button>
          <img src={selectedImage} alt="Fullscreen View" className="max-w-full max-h-[90vh] object-contain shadow-2xl" />
        </motion.div>
      )}
    </div>
  );
}
