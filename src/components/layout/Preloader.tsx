import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const CRITICAL_IMAGES = [
  "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/IMG_2996.PNG",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3053.PNG",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3054.PNG",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3055.PNG",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3056.PNG",
  "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/dogs/IMG_2997.JPG.jpeg",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/restaurant%20page%20/IMG_3033.JPG.jpeg",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/restaurant%20page%20/IMG_3068.JPG.jpeg"
];

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Background image preloading
    CRITICAL_IMAGES.forEach((url) => {
      const img = new Image();
      img.src = url;
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center text-dark-surface"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <img src="https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/IMG_2996.PNG" alt="EarthOra Logo" className="w-32 h-32 mb-6 object-contain drop-shadow-[0_0_15px_rgba(0,0,0,0.1)]" />
            <h1 className="text-4xl md:text-5xl font-serif text-dark-surface tracking-wide mb-4">
              EarthOra<span className="text-subtle-gold">.</span>
            </h1>
            <div className="w-48 h-[1px] bg-dark-surface/10 relative overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
                className="absolute inset-y-0 left-0 w-1/2 bg-subtle-gold"
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-6 text-xs uppercase tracking-[0.3em] text-dark-surface/50"
            >
              Experience Nature's Luxury
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
